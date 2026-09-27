/**
 * make-hero-image — one-off: convert the PO-supplied hero artwork (temple
 * corridor with oil lamps, 2026-09 refresh) from the design mockup's PNG into
 * an optimized JPEG for the app banner.
 * Usage: node scripts/make-hero-image.mjs <input.png> [output.jpg]
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const inPath = process.argv[2];
const outPath =
  process.argv[3] ??
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'hero-sunset-lamps.jpg');

if (!inPath) {
  console.error('usage: node scripts/make-hero-image.mjs <input.png> [output.jpg]');
  process.exit(1);
}

const info = await sharp(inPath).jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(outPath);
console.log(`written ${outPath} — ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
