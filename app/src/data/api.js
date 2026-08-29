/**
 * Data Access Layer — the only module the UI may use to reach the datasets.
 * Swapping this layer for a backend API requires no UI change (US-DATA-04).
 */

import { kshetrams } from './kshetrams.js';
import { azhwars } from './azhwars.js';
import { FEATURED_KSHETRAM_IDS } from './config.js';
import { uniqueSorted } from '../utils/group.js';
import { getEnrichment } from './enrichment/index.js';

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

/** @returns {Azhwar[]} all 12 Azhwars in traditional chronological order. */
export function getAllAzhwars() {
  return azhwars;
}

/**
 * @param {string} id - azhwar slug
 * @returns {Azhwar|undefined} the matching record, or undefined
 */
export function getAzhwarById(id) {
  return azhwars.find((a) => a.id === id);
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
