/**
 * useKshetrams — data adapter hook for the kshetram dataset (hooks layer).
 */
import { useMemo } from 'react';
import { getAllKshetramsEnriched, getAllAzhwars } from '../data/api.js';

/**
 * Provides the full kshetram and azhwar datasets, ENRICHED (the shrine
 * templates carry the Wikipedia slugs the photo pipeline resolves — round
 * 32: the raw records have no image fields, so the browse grid's cards
 * rendered "Photo coming soon" for all 108 despite 61 available slugs).
 * Memoized so consumers share one stable reference across renders.
 * @returns {{kshetrams: (Kshetram & object)[], azhwars: Azhwar[]}}
 */
export function useKshetrams() {
  const kshetrams = useMemo(() => getAllKshetramsEnriched(), []);
  const azhwars = useMemo(() => getAllAzhwars(), []);
  return { kshetrams, azhwars };
}
