// Scratch patch for e2e/yatra.spec.js TC-18 (LF file): the lamp-of-knowledge
// band renders only on the Life tab (round 20) — jump before the places tab.
import { readFileSync, writeFileSync } from 'node:fs';

const p = 'e2e/yatra.spec.js';
let t = readFileSync(p, 'utf8');
const oldBlock = [
  "    // The verse band jumps to the Hymns & meaning tab",
  "    // Round 19: the featured desam card lives on the Sacred places tab",
  "    await page.getByRole('tab', { name: /sacred places \\(12\\)/i }).click();",
  "    await expect(page.getByRole('link', { name: /view kshetram/i })).toBeVisible();",
  "    // The lamp-of-knowledge band jumps to the Hymns & meaning tab",
  "    await page.getByRole('button', { name: /explore hymn & meaning/i }).click();",
  "    await expect(page.getByText(/word-by-word meaning/i)).toBeVisible();",
].join('\n');
if (!t.includes(oldBlock)) throw new Error('TC-18 block not found');
const newBlock = [
  "    // Round 20: the lamp-of-knowledge band renders on the Life tab only —",
  "    // jump to Hymns & meaning from there",
  "    await page.getByRole('button', { name: /explore hymn & meaning/i }).click();",
  "    await expect(page.getByText(/word-by-word meaning/i)).toBeVisible();",
  "    // The featured desam card lives on the Sacred places tab",
  "    await page.getByRole('tab', { name: /sacred places \\(12\\)/i }).click();",
  "    await expect(page.getByRole('link', { name: /view kshetram/i })).toBeVisible();",
].join('\n');
t = t.replace(oldBlock, newBlock);
writeFileSync(p, t);
console.log('TC-18 reordered');
