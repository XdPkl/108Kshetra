/**
 * Enrichment index — merges region detail sets and coordinates into a
 * single lookup keyed by kshetram id.
 */
import { COORDS } from './coords.js';
import { THONDAI_DETAILS } from './thondai.js';
import { CHOLA_DETAILS } from './chola.js';
import { TIRUNANGUR_DETAILS } from './tirunangur.js';
import { NADU_NADU_DETAILS, PANDYA_DETAILS } from './pandya.js';
import { MALAI_DETAILS, VADA_DETAILS, CELESTIAL_DETAILS } from './malai-vada.js';

/** @type {Record<string, {coords?: [number, number]} & object>} */
export const ENRICHMENT = {
  ...THONDAI_DETAILS,
  ...CHOLA_DETAILS,
  ...TIRUNANGUR_DETAILS,
  ...NADU_NADU_DETAILS,
  ...PANDYA_DETAILS,
  ...MALAI_DETAILS,
  ...VADA_DETAILS,
  ...CELESTIAL_DETAILS,
};

/** Attaches coordinates to each enriched record. */
export function getEnrichment(id) {
  const details = ENRICHMENT[id];
  if (!details) return undefined;
  return { ...details, coords: COORDS[id] ?? null };
}
