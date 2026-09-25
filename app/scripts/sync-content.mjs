/**
 * Content sync: Sanity → app/src/data/content/*.json.
 *
 * Modes:
 *   node scripts/sync-content.mjs                      live (needs SANITY_PROJECT_ID,
 *                                                      SANITY_READ_TOKEN|SANITY_TOKEN, [SANITY_DATASET])
 *   node scripts/sync-content.mjs --fixture <file>     replay a recorded GROQ response
 *   node scripts/sync-content.mjs --check              compare only — exit 1 on diff,
 *                                                      never writes (combine with --fixture
 *                                                      for the CI self-test)
 *
 * Keyed files (enrichment/coords/templates/…) are written in traditional
 * kshetram/azhwar order so a no-change sync produces an empty git diff.
 */
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {groqToContent, GROQ} from '../../studio/scripts/lib/to-app-json.js';

const CONTENT_DIR = path.resolve('src/data/content');
const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const fixtureIdx = args.indexOf('--fixture');
const fixturePath = fixtureIdx > -1 ? args[fixtureIdx + 1] : null;

const KEY_ORDER_FILES = {
  'enrichment.json': null,
  'coords.json': null,
  'templates.json': null,
  'dossier-templates.json': null,
  'azhwar-details.json': null,
};

async function fetchResult() {
  if (fixturePath) {
    return JSON.parse(await readFile(fixturePath, 'utf8'));
  }
  const projectId = process.env.SANITY_PROJECT_ID;
  const token = process.env.SANITY_READ_TOKEN ?? process.env.SANITY_TOKEN;
  if (!projectId || !token) {
    console.error('Live sync needs SANITY_PROJECT_ID and SANITY_READ_TOKEN env vars.');
    process.exit(1);
  }
  const require = createRequire(import.meta.url);
  const {createClient} = require('@sanity/client');
  const client = createClient({
    projectId,
    dataset: process.env.SANITY_DATASET ?? 'production',
    token,
    apiVersion: '2024-10-01',
  });
  return client.fetch(GROQ);
}

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
const sameJson = (a, b) => JSON.stringify(canon(a)) === JSON.stringify(canon(b));

const result = await fetchResult();
const content = groqToContent(result);

// Traditional-order keying for keyed files.
const kshetramOrder = content['kshetrams.json'].map((k) => k.id);
const azhwarOrder = content['azhwars.json'].map((a) => a.id);
const orderKeyed = (file, obj, order) => {
  const ordered = {};
  for (const id of order) if (obj[id] != null) ordered[id] = obj[id];
  for (const id of Object.keys(obj).sort()) if (!(id in ordered)) ordered[id] = obj[id];
  return ordered;
};
for (const file of Object.keys(KEY_ORDER_FILES)) {
  content[file] = orderKeyed(file, content[file] ?? {}, file === 'azhwar-details.json' ? azhwarOrder : kshetramOrder);
}

let diffs = 0;
for (const [file, data] of Object.entries(content)) {
  const outPath = path.join(CONTENT_DIR, file);
  const text = JSON.stringify(data, null, 2) + '\n';
  let existing = null;
  try {
    existing = await readFile(outPath, 'utf8');
  } catch {
    existing = null; // new file
  }
  if (existing === text) {
    console.log(`  unchanged ${file}`);
    continue;
  }
  if (checkOnly) {
    const unchangedDeep = existing != null && sameJson(JSON.parse(existing), data);
    if (unchangedDeep) {
      console.log(`  unchanged ${file} (key order only)`);
    } else {
      diffs += 1;
      console.log(`  DIFF     ${file}`);
    }
    continue;
  }
  await writeFile(outPath, text, 'utf8');
  console.log(`  wrote    ${file}`);
}

if (checkOnly && diffs > 0) {
  console.error(`${diffs} content file(s) would change.`);
  process.exit(1);
}
console.log(checkOnly ? 'check complete — content in sync.' : 'sync complete.');
