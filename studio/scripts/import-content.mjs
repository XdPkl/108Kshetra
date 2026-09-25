/**
 * One-time (and re-runnable) import: app content JSON → Sanity documents.
 *
 * Prerequisites (see studio/README.md):
 *   - .env with SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET / SANITY_TOKEN
 *   - the about/siteCopy/config singletons and all documents are created via
 *     createOrReplace, so re-running is safe and idempotent.
 *
 * Run from studio/:  npm run import
 */
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {toSanityDocs} from './lib/to-sanity-docs.js';

// Plain-node JSON imports (no Vite here).
const readJson = async (p) => JSON.parse(await readFile(p, 'utf8'));

const CONTENT_DIR = path.resolve('../app/src/data/content');
const PUBLIC_PHOTOS_DIR = path.resolve('../app/public/photos');

const content = {
  kshetrams: await readJson(path.join(CONTENT_DIR, 'kshetrams.json')),
  azhwars: await readJson(path.join(CONTENT_DIR, 'azhwars.json')),
  AZHWAR_DETAILS: await readJson(path.join(CONTENT_DIR, 'azhwar-details.json')),
  acharyas: await readJson(path.join(CONTENT_DIR, 'acharyas.json')),
  ABOUT: await readJson(path.join(CONTENT_DIR, 'about.json')),
  SITE_COPY: await readJson(path.join(CONTENT_DIR, 'site-copy.json')),
  config: await readJson(path.join(CONTENT_DIR, 'config.json')),
  ENRICHMENT: await readJson(path.join(CONTENT_DIR, 'enrichment.json')),
  COORDS: await readJson(path.join(CONTENT_DIR, 'coords.json')),
  TEMPLATES: await readJson(path.join(CONTENT_DIR, 'templates.json')),
  DOSSIER_TEMPLATES: await readJson(path.join(CONTENT_DIR, 'dossier-templates.json')),
};

const env = (name) => process.env[name] ?? process.env[name.replace('SANITY_', 'SANITY_STUDIO_')];
const projectId = env('SANITY_PROJECT_ID');
const dataset = env('SANITY_DATASET') ?? 'production';
const token = env('SANITY_TOKEN');

if (!projectId || !token) {
  console.error('Set SANITY_STUDIO_PROJECT_ID and SANITY_TOKEN (see studio/.env.example).');
  process.exit(1);
}

const require = createRequire(import.meta.url);
const {createClient} = require('@sanity/client');
const client = createClient({projectId, dataset, token, apiVersion: '2024-10-01'});

/** Upload a site-relative photo ('photos/x.jpg') once, reuse across docs. */
const assetCache = new Map();
const resolvePhoto = async (src) => {
  if (/^https?:\/\//i.test(src)) return {srcUrl: src};
  const cached = assetCache.get(src);
  if (cached) return {image: cached};
  const filePath = path.join(path.resolve('../app/public'), src);
  const asset = await client.assets.upload('image', await readFile(filePath), {
    filename: path.basename(src),
  });
  const image = {_type: 'image', asset: {_type: 'reference', _ref: asset._id}};
  assetCache.set(src, image);
  console.log(`uploaded ${src} → ${asset._id}`);
  return {image};
};

console.log('transforming content…');
const docs = await toSanityDocs(content, resolvePhoto);
const all = [...docs.kshetramDocs, ...docs.azhwarDocs, ...docs.acharyaDocs, docs.aboutDoc, docs.siteCopyDoc, docs.configDoc];
console.log(`creating/replacing ${all.length} documents (${docs.kshetramDocs.length} kshetrams, ${docs.azhwarDocs.length} azhwars, ${docs.acharyaDocs.length} acharyas, 3 singletons)…`);

// Chunked transactions to stay well under mutation size limits.
const CHUNK = 50;
for (let i = 0; i < all.length; i += CHUNK) {
  const chunk = all.slice(i, i + CHUNK);
  const tx = client.transaction();
  for (const doc of chunk) tx.createOrReplace(doc);
  await tx.commit();
  console.log(`  committed ${Math.min(i + CHUNK, all.length)}/${all.length}`);
}
console.log('import complete.');
