/**
 * Data Access Layer — the only module the UI may use to reach the datasets.
 * Swapping this layer for a backend API requires no UI change (US-DATA-04).
 */

import { kshetrams } from './kshetrams.js';
import { azhwars } from './azhwars.js';
import { AZHWAR_DETAILS } from './azhwar-details.js';
import { acharyas } from './acharyas.js';
import { FEATURED_KSHETRAM_IDS } from './config.js';
import { uniqueSorted } from '../utils/group.js';
import { getEnrichment } from './enrichment/index.js';

/** Azhwars merged with their saint-template details (US-AZW-03). */
const enrichedAzhwars = azhwars.map((a) => ({ ...a, ...(AZHWAR_DETAILS[a.id] ?? {}) }));

/** @returns {Kshetram[]} all 108 kshetrams in traditional order. */
export function getAllKshetrams() {
  return kshetrams;
}

/** @returns {(Kshetram & object)[]} all kshetrams merged with enrichment data. */
export function getAllKshetramsEnriched() {
  return kshetrams.map((k) => ({ ...k, ...getEnrichment(k.id) }));
}

/**
 * @param {string} id - kshetram slug
 * @returns {Kshetram|undefined} the matching record, or undefined
 */
export function getKshetramById(id) {
  return kshetrams.find((k) => k.id === id);
}

/**
 * Kshetram record merged with its V2 enrichment (deities, timings,
 * coordinates, puranam, pasuram, wiki source) — detail-page view.
 * @param {string} id - kshetram slug
 * @returns {(Kshetram & object)|undefined}
 */
export function getEnrichedKshetramById(id) {
  const kshetram = getKshetramById(id);
  if (!kshetram) return undefined;
  return { ...kshetram, ...getEnrichment(id) };
}

/** @returns {Kshetram[]} the curated featured kshetrams (config-driven). */
export function getFeaturedKshetrams() {
  return FEATURED_KSHETRAM_IDS
    .map((id) => getKshetramById(id))
    .filter(Boolean);
}

/** @returns {Azhwar[]} all 12 Azhwars (enriched) in traditional chronological order. */
export function getAllAzhwars() {
  return enrichedAzhwars;
}

/**
 * @param {string} id - azhwar slug
 * @returns {Azhwar|undefined} the matching enriched record, or undefined
 */
export function getAzhwarById(id) {
  return enrichedAzhwars.find((a) => a.id === id);
}

/** @returns {Azhwar[]} the Azhwars preceding and following `id` in chronological order. */
export function getAzhwarNeighbours(id) {
  const idx = enrichedAzhwars.findIndex((a) => a.id === id);
  return {
    prev: idx > 0 ? enrichedAzhwars[idx - 1] : null,
    next: idx >= 0 && idx < enrichedAzhwars.length - 1 ? enrichedAzhwars[idx + 1] : null,
  };
}

/** @returns {object[]} all Acharyas in parampara order (FR-92). */
export function getAllAcharyas() {
  return acharyas;
}

/**
 * @param {string} id - acharya slug
 * @returns {object|undefined} the matching record, or undefined
 */
export function getAcharyaById(id) {
  return acharyas.find((a) => a.id === id);
}

/**
 * Derives filter options from the data itself, so adding a kshetram
 * or a region automatically extends the filters (NFR-05).
 * @returns {{states: string[], deityForms: string[], regions: string[]}}
 */
export function getFilterOptions() {
  return {
    states: uniqueSorted(kshetrams.map((k) => k.state)),
    deityForms: uniqueSorted(kshetrams.map((k) => k.deityForm)),
    regions: uniqueSorted(kshetrams.map((k) => k.region)),
  };
}

/**
 * @param {string} azhwarId
 * @returns {Kshetram[]} kshetrams glorified by the given Azhwar
 */
export function getKshetramsByAzhwar(azhwarId) {
  return kshetrams.filter((k) => k.azhwars.includes(azhwarId));
}
