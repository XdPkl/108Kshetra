/**
 * useKshetramFilters — owns search/filter state for the Browse page (FR-21/22/25),
 * seeds the Azhwar filter from the ?azhwar= query param (FR-41), and applies the
 * visit-status dimension (FR-74) against the local visited store.
 */
import { useMemo, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterKshetrams, isFiltersEmpty } from '../utils/filter.js';
import { useVisited } from './useVisited.js';

/** Canonical empty filter state — extend here to add a filter dimension. */
export const EMPTY_FILTERS = {
  search: '',
  state: '',
  deityForm: '',
  region: '',
  azhwar: '',
  visited: '',
};

/**
 * @param {Kshetram[]} kshetrams - full dataset
 * @param {Azhwar[]} azhwars - azhwar dataset
 * @returns {{filters: object, setFilter: (name: string, value: string) => void,
 *            clearFilters: () => void, results: Kshetram[], hasActiveFilters: boolean}}
 */
export function useKshetramFilters(kshetrams, azhwars) {
  const [searchParams] = useSearchParams();
  const azhwarParam = searchParams.get('azhwar') ?? '';
  const regionParam = searchParams.get('region') ?? '';
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS, azhwar: azhwarParam, region: regionParam });
  const [prevParams, setPrevParams] = useState({ azhwar: azhwarParam, region: regionParam });
  const { visitedIds } = useVisited();

  // ?azhwar=<id> / ?region=<name> seed their filters on navigation (FR-41;
  // region deep-links from the header mega-dropdown, UXD v3.0) — derived
  // during render (no effect) so no extra render pass is needed
  if (prevParams.azhwar !== azhwarParam || prevParams.region !== regionParam) {
    setPrevParams({ azhwar: azhwarParam, region: regionParam });
    setFilters((prev) => ({ ...prev, azhwar: azhwarParam, region: regionParam }));
  }

  const setFilter = useCallback((name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({ ...EMPTY_FILTERS });
  }, []);

  const results = useMemo(
    () => filterKshetrams(kshetrams, azhwars, filters, visitedIds),
    [kshetrams, azhwars, filters, visitedIds],
  );

  return {
    filters,
    setFilter,
    clearFilters,
    results,
    hasActiveFilters: !isFiltersEmpty(filters),
  };
}
