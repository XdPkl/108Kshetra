/**
 * make-hero-watermark — PO fix list round 2, item 8 (2026-09-27).
 *
 * Converts the PO-supplied wooden-plaque photo (white line-art motifs:
 * Garuda, Sudarshana Chakra, Namam, Shankha, Hanuman on dark wood) into a
 * transparent watermark strip for the Home hero banner:
 *   1. locate the artwork rows inside the plaque (bright pixel count on dark
 *      rows — the white page bands above/below are bright too, so the row
 *      mean excludes them),
 *   2. connected components on a hard bright mask within those rows drop the
 *      plaque's screw-head dots and wood-grain speckle,
 *   3. luminance ramp 185→225 → alpha (white art keeps, wood vanishes),
 *   4. recolour to the watermark ink #7A2E00, trim, save.
 *
 * One-off asset generator — sharp is NOT a project dependency; run:
 *   cd app && npm i --no-save sharp
 *   node scripts/make-hero-watermark.mjs <path-to-plaque-photo.png>
 * Output: src/assets/hero-plaque-watermark.png (imported by home/Hero.jsx).
 */
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const input = process.argv[2];
if (!input) {
  console.error('usage: node scripts/make-hero-watermark.mjs <plaque-photo.png>');
  process.exit(1);
}

const img = sharp(input);
const { width: W, height: H } = await img.metadata();
const raw = await img.ensureAlpha().raw().toBuffer();
const CH = 4; // ensureAlpha() guarantees RGBA regardless of the source's channels
const lum = (i) => 0.299 * raw[i] + 0.587 * raw[i + 1] + 0.114 * raw[i + 2];

// --- 1. artwork rows: bright pixels on rows that are still dark on average --
const rows = [];
for (let y = 0; y < H; y++) {
  let bright = 0, sum = 0;
  for (let x = 0; x < W; x++) {
    const l = lum((y * W + x) * CH);
    sum += l;
    if (l > 190) bright++;
  }
  rows.push({ bright, mean: sum / W });
}
const isArtRow = (y) => rows[y].bright > 30 && rows[y].mean < 180;
let art = null, run = null;
for (let y = 0; y <= H; y++) {
  if (y < H && isArtRow(y)) { run = run ?? { y0: y, y1: y }; run.y1 = y; }
  else if (run && y - run.y1 > 12) { if (!art || run.y1 - run.y0 > art.y1 - art.y0) art = run; run = null; }
}
if (run && (!art || run.y1 - run.y0 > art.y1 - art.y0)) art = run;
if (!art) { console.error('no artwork rows found'); process.exit(1); }
console.log(`artwork rows ${art.y0}..${art.y1} of ${H}`);

// --- 2. components within the artwork band; drop dots + speckle ------------
const y0 = Math.max(0, art.y0 - 14), y1 = Math.min(H - 1, art.y1 + 14);
const hard = new Uint8Array(W * H);
for (let y = y0; y <= y1; y++) {
  for (let x = 0; x < W; x++) if (lum((y * W + x) * CH) > 200) hard[y * W + x] = 1;
}
const seen = new Uint8Array(W * H);
const stack = new Int32Array(W * H);
const kept = [];
let removed = 0;
const dotSamples = [];
for (let start = y0 * W; start < (y1 + 1) * W; start++) {
  if (!hard[start] || seen[start]) continue;
  let sp = 0, count = 0;
  stack[sp++] = start; seen[start] = 1;
  let minX = W, maxX = 0, minY = H, maxY = 0;
  const pix = [];
  while (sp > 0) {
    const p = stack[--sp];
    pix.push(p);
    count++;
    const x = p % W, y = (p / W) | 0;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (x > 0 && hard[p - 1] && !seen[p - 1]) { seen[p - 1] = 1; stack[sp++] = p - 1; }
    if (x < W - 1 && hard[p + 1] && !seen[p + 1]) { seen[p + 1] = 1; stack[sp++] = p + 1; }
    if (y > y0 && hard[p - W] && !seen[p - W]) { seen[p - W] = 1; stack[sp++] = p - W; }
    if (y < y1 && hard[p + W] && !seen[p + W]) { seen[p + W] = 1; stack[sp++] = p + W; }
  }
  const bw = maxX - minX + 1, bh = maxY - minY + 1;
  if (bw <= 26 && bh <= 26) {
    removed++;
    if (dotSamples.length < 6) dotSamples.push(`@(${minX},${minY}) ${bw}x${bh}`);
    for (const p of pix) hard[p] = 0;
  } else {
    kept.push({ minX, maxX, minY, maxY });
  }
}
console.log(`kept ${kept.length} motif components; dropped ${removed} dots/speckle${dotSamples.length ? ' (samples: ' + dotSamples.join(', ') + ')' : ''}`);
kept.sort((a, b) => a.minX - b.minX);
for (const k of kept) console.log(`  motif @(${k.minX},${k.minY})..(${k.maxX},${k.maxY})`);
if (kept.length === 0) { console.error('nothing kept'); process.exit(1); }

// --- 3. alpha ramp inside the band, restricted to kept components ----------
const cx0 = Math.max(0, Math.min(...kept.map((k) => k.minX)) - 12);
const cx1 = Math.min(W - 1, Math.max(...kept.map((k) => k.maxX)) + 12);
const cy0 = Math.max(y0, Math.min(...kept.map((k) => k.minY)) - 12);
const cy1 = Math.min(y1, Math.max(...kept.map((k) => k.maxY)) + 12);
const tw = cx1 - cx0 + 1, th = cy1 - cy0 + 1;
const out = Buffer.alloc(tw * th * 4);
let opaque = 0;
for (let y = 0; y < th; y++) {
  for (let x = 0; x < tw; x++) {
    const gx = cx0 + x, gy = cy0 + y;
    const inKept = kept.some((k) => gx >= k.minX - 2 && gx <= k.maxX + 2 && gy >= k.minY - 2 && gy <= k.maxY + 2);
    const a = inKept
      ? Math.max(0, Math.min(255, Math.round(((lum((gy * W + gx) * CH) - 185) / 40) * 255)))
      : 0;
    const o = (y * tw + x) * 4;
    out[o] = 0x7a; out[o + 1] = 0x2e; out[o + 2] = 0x00; out[o + 3] = a;
    if (a > 0) opaque++;
  }
}

const dest = fileURLToPath(new URL('../src/assets/hero-plaque-watermark.png', import.meta.url));
await sharp(out, { raw: { width: tw, height: th, channels: 4 } }).png().toFile(dest);
console.log(`saved src/assets/hero-plaque-watermark.png: ${tw}x${th}, opaque ${(100 * opaque / (tw * th)).toFixed(1)}% of canvas`);
