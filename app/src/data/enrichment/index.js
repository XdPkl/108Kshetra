/**
 * Enrichment index — merges region details, coordinates and the full shrine
 * templates (US-DTL-15) into a single lookup keyed by kshetram id.
 * Template fields override/extend the region-level records.
 *
 * Content lives in content/enrichment.json (V2 region details, keyed by
 * kshetram id), content/templates.json (approved sample shrine templates) and
 * content/dossier-templates.json (PO dossier content) — all editable via the
 * Sanity CMS and synced by .github/workflows/content-sync.yml.
 */
import ENRICHMENT_DATA from '../content/enrichment.json';
import { COORDS } from './coords.js';
import { TEMPLATES } from './templates.js';
import { DOSSIER_TEMPLATES } from './dossiers.js';

/** @type {Record<string, {coords?: [number, number]} & object>} */
export const ENRICHMENT = ENRICHMENT_DATA;

/** Attaches coordinates and any shrine template to each enriched record. */
export function getEnrichment(id) {
  const details = ENRICHMENT[id];
  const template = TEMPLATES[id] ?? DOSSIER_TEMPLATES[id];
  if (!details && !template) return undefined;
  return { ...details, ...template, coords: COORDS[id] ?? null };
}
