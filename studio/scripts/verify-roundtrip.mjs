/**
 * Round-trip verifier — proves the CMS pipeline is lossless.
 *
 *   node scripts/verify-roundtrip.mjs --local
 *     App JSON → Sanity doc shapes → (simulated GROQ) → app JSON, then a
 *     canonical deep-compare against the repo files. No Sanity account
 *     needed; photo uploads are simulated as URL passthrough.
 *
 *   node scripts/verify-roundtrip.mjs
 *     Same compare against the LIVE project (needs .env credentials). Run
 *     right after `npm run import` during the one-time setup.
 *
 *   node scripts/verify-roundtrip.mjs --dump-fixture <path>
 *     (live mode) saves the raw GROQ response for app/scripts CI self-test.
 */
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {toSanityDocs} from './lib/to-sanity-docs.js';
import {groqToContent, GROQ} from './lib/to-app-json.js';
import {simulateGroq} from './lib/simulate-groq.js';

const CONTENT_DIR = path.resolve('../app/src/data/content');
const FILES = [
  'kshetrams.json', 'azhwars.json', 'azhwar-details.json', 'acharyas.json',
  'about.json', 'site-copy.json', 'config.json', 'enrichment.json',
  'coords.json', 'templates.json', 'dossier-templates.json',
];

const readJson = async (p) => JSON.parse(await readFile(p, 'utf8'));
const local = process.argv.includes('--local');
const dumpIdx = process.argv.indexOf('--dump-fixture');
const dumpPath = dumpIdx > -1 ? process.argv[dumpIdx + 1] : null;

/** Order-insensitive deep equality with JSON-safe compare. */
const canon = (value) => {
  if (Array.isArray(value)) return value.map(canon);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0))
        .map(([k, v]) => [k, canon(v)])
        .sort(([a], [b]) => a.localeCompare(b)),
    );
  }
  return value;
};
const deepEqual = (a, b) => JSON.stringify(canon(a)) === JSON.stringify(canon(b));

async function main() {
  let result;
  if (local) {
    const content = Object.fromEntries(
      await Promise.all(FILES.map(async (f) => [f.replace('.json', ''), await readJson(path.join(CONTENT_DIR, f))])),
    );
    const normalized = {
      kshetrams: content.kshetrams,
      azhwars: content.azhwars,
      AZHWAR_DETAILS: content['azhwar-details'],
      acharyas: content.acharyas,
      ABOUT: content.about,
      SITE_COPY: content['site-copy'],
      config: content.config,
      ENRICHMENT: content.enrichment,
      COORDS: content.coords,
      TEMPLATES: content.templates,
      DOSSIER_TEMPLATES: content['dossier-templates'],
    };
    const docs = await toSanityDocs(normalized, async (src) => ({srcUrl: src}));
    result = simulateGroq(docs);
  } else {
    const env = (name) => process.env[name] ?? process.env[name.replace('SANITY_', 'SANITY_STUDIO_')];
    const projectId = env('SANITY_PROJECT_ID');
    const token = env('SANITY_TOKEN');
    if (!projectId || !token) {
      console.error('Live mode needs SANITY_STUDIO_PROJECT_ID and SANITY_TOKEN (or use --local).');
      process.exit(1);
    }
    const require = createRequire(import.meta.url);
    const {createClient} = require('@sanity/client');
    const client = createClient({
      projectId,
      dataset: env('SANITY_DATASET') ?? 'production',
      token,
      apiVersion: '2024-10-01',
    });
    result = await client.fetch(GROQ);
  }
  if (dumpPath) {
    await writeFile(dumpPath, JSON.stringify(result, null, 2));
    console.log(`fixture written to ${dumpPath}`);
  }

  const regenerated = groqToContent(result);
  let failures = 0;
  for (const file of FILES) {
    const original = await readJson(path.join(CONTENT_DIR, file));
    const key = file.replace('.json', '');
    const produced = regenerated[file];
    if (deepEqual(original, produced)) {
      console.log(`  ok   ${file}`);
    } else {
      failures += 1;
      console.log(`  FAIL ${file}`);
      // Show the first divergence to speed up debugging.
      const origStr = JSON.stringify(canon(original));
      const prodStr = JSON.stringify(canon(produced));
      let start = 0;
      while (start < Math.max(origStr.length, prodStr.length) && origStr[start] === prodStr[start]) start += 1;
      console.log(`       original: …${origStr.slice(Math.max(0, start - 60), start + 120)}…`);
      console.log(`       produced: …${prodStr.slice(Math.max(0, start - 60), start + 120)}…`);
    }
  }
  if (failures > 0) {
    console.error(`${failures} file(s) diverge — the pipeline is NOT lossless.`);
    process.exit(1);
  }
  console.log('round-trip verified: all 11 content files lossless.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
