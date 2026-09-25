/**
 * One-time Phase A converter (CMS rollout): exports the JS data modules to
 * canonical JSON files under src/data/content/, which become the editable
 * source of truth consumed via thin JS shims.
 *
 * Why a temp-copy import instead of hand-editing: the modules embed
 * `import.meta.env.BASE_URL` template literals (invalid outside Vite). We copy
 * the data tree to a temp dir with that expression textually replaced by an
 * empty string literal, so photo srcs come out as relative paths
 * ("photos/desam-86.jpg") — the storage format the assetUrl() helper expects.
 *
 * Run from app/:  node scripts/convert-js-to-json.mjs
 */
import { cp, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

const SRC = path.resolve('src/data');
const OUT = path.resolve('src/data/content');

const TMP = await mkdtemp(path.join(os.tmpdir(), 'kshetra-data-'));

await cp(SRC, TMP, {
  recursive: true,
  filter: (f) => !f.includes(`${path.sep}__tests__`) && !f.includes(`${path.sep}content`),
});

async function neutralizeViteExpressions(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await neutralizeViteExpressions(full);
    else if (entry.name.endsWith('.js')) {
      const text = await readFile(full, 'utf8');
      if (text.includes('import.meta.env.BASE_URL')) {
        await writeFile(full, text.replaceAll('import.meta.env.BASE_URL', "''"));
      }
    }
  }
}
await neutralizeViteExpressions(TMP);

const mod = (p) => import(pathToFileURL(path.join(TMP, p)).href);

const { kshetrams } = await mod('kshetrams.js');
const { azhwars } = await mod('azhwars.js');
const { AZHWAR_DETAILS } = await mod('azhwar-details.js');
const { acharyas } = await mod('acharyas.js');
const { ABOUT } = await mod('about.js');
const { SITE_STATS, FEATURED_KSHETRAM_IDS, FEATURED_ACHARYA_IDS, MAPS_URL_TEMPLATE } = await mod('config.js');
const { ENRICHMENT } = await mod('enrichment/index.js');
const { COORDS } = await mod('enrichment/coords.js');
const { TEMPLATES } = await mod('enrichment/templates.js');
const { DOSSIER_TEMPLATES } = await mod('enrichment/dossiers.js');

await mkdir(OUT, { recursive: true });
const files = {
  'kshetrams.json': kshetrams,
  'azhwars.json': azhwars,
  'azhwar-details.json': AZHWAR_DETAILS,
  'acharyas.json': acharyas,
  'about.json': ABOUT,
  'config.json': { SITE_STATS, FEATURED_KSHETRAM_IDS, FEATURED_ACHARYA_IDS, MAPS_URL_TEMPLATE },
  'enrichment.json': ENRICHMENT,
  'coords.json': COORDS,
  'templates.json': TEMPLATES,
  'dossier-templates.json': DOSSIER_TEMPLATES,
};

let photoSrcCount = 0;
const relativizePhotos = (value) => {
  if (typeof value === 'string') {
    if (value.startsWith('photos/')) photoSrcCount += 1;
    return value;
  }
  if (Array.isArray(value)) return value.map(relativizePhotos);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = relativizePhotos(v);
    return out;
  }
  return value;
};

for (const [name, data] of Object.entries(files)) {
  const json = JSON.stringify(relativizePhotos(data), null, 2) + '\n';
  await writeFile(path.join(OUT, name), json, 'utf8');
  console.log(`wrote content/${name} (${(json.length / 1024).toFixed(1)} kB)`);
}

const assert = (cond, msg) => { if (!cond) { console.error(`FAIL: ${msg}`); process.exitCode = 1; } };
assert(kshetrams.length === 108, `kshetrams length ${kshetrams.length}`);
assert(new Set(kshetrams.map((k) => k.id)).size === 108, 'kshetram id uniqueness');
assert(Object.keys(ENRICHMENT).length === 108, `enrichment keys ${Object.keys(ENRICHMENT).length}`);
assert(Object.keys(DOSSIER_TEMPLATES).length === 93, `dossier keys ${Object.keys(DOSSIER_TEMPLATES).length}`);
assert(azhwars.length === 12, `azhwar count ${azhwars.length}`);
assert(Object.keys(AZHWAR_DETAILS).length === 12, 'azhwar detail count');
assert(acharyas.length >= 26, `acharya count ${acharyas.length}`);
assert(Object.keys(COORDS).length === 106, `coords keys ${Object.keys(COORDS).length}`);
assert(photoSrcCount >= 4, `relative photo srcs found (${photoSrcCount})`);
assert(
  JSON.stringify(kshetrams[0]).includes('tamilName'),
  'first kshetram record shape',
);

await rm(TMP, { recursive: true, force: true });
console.log(`done — ${photoSrcCount} photo srcs stored as relative paths`);
