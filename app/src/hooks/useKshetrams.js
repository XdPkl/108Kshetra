/**
 * useKshetrams — data adapter hook for the kshetram dataset (hooks layer).
 */
import { useMemo } from 'react';
import { getAllKshetrams, getAllAzhwars } from '../data/api.js';

/**
 * Provides the full kshetram and azhwar datasets. Memoized so consumers
 * share one stable reference across renders.
 * @returns {{kshetrams: Kshetram[], azhwars: Azhwar[]}}
 */
export function useKshetrams() {
  const kshetrams = useMemo(() => getAllKshetrams(), []);
  const azhwars = useMemo(() => getAllAzhwars(), []);
  return { kshetrams, azhwars };
}
