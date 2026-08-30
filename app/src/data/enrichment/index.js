/**
 * Enrichment index — merges region detail sets, coordinates and the full
 * shrine templates (US-DTL-15) into a single lookup keyed by kshetram id.
 * Template fields override/extend the region-level records.
 */
import { COORDS } from './coords.js';
import { THONDAI_DETAILS } from './thondai.js';
import { CHOLA_DETAILS } from './chola.js';
import { TIRUNANGUR_DETAILS } from './tirunangur.js';
import { NADU_NADU_DETAILS, PANDYA_DETAILS } from './pandya.js';
import { MALAI_DETAILS, VADA_DETAILS, CELESTIAL_DETAILS } from './malai-vada.js';
import { TEMPLATES } from './templates.js';

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

/** Attaches coordinates and any shrine template to each enriched record. */
export function getEnrichment(id) {
  const details = ENRICHMENT[id];
  const template = TEMPLATES[id];
  if (!details && !template) return undefined;
  return { ...details, ...template, coords: COORDS[id] ?? null };
}
