/**
 * useKshetramFilters — owns search/filter state for the Browse page (FR-21/22/25)
 * and seeds the Azhwar filter from the ?azhwar= query param (FR-41).
 */
import { useMemo, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterKshetrams, isFiltersEmpty } from '../utils/filter.js';

/** Canonical empty filter state — extend here to add a filter dimension. */
export const EMPTY_FILTERS = {
  search: '',
  state: '',
  deityForm: '',
  region: '',
  azhwar: '',
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
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS, azhwar: azhwarParam });
  const [prevParam, setPrevParam] = useState(azhwarParam);

  // ?azhwar=<id> seeds the azhwar filter on navigation (FR-41) —
  // derived during render (no effect) so no extra render pass is needed
  if (prevParam !== azhwarParam) {
    setPrevParam(azhwarParam);
    setFilters((prev) => ({ ...prev, azhwar: azhwarParam }));
  }

  const setFilter = useCallback((name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({ ...EMPTY_FILTERS });
  }, []);

  const results = useMemo(
    () => filterKshetrams(kshetrams, azhwars, filters),
    [kshetrams, azhwars, filters],
  );

  return {
    filters,
    setFilter,
    clearFilters,
    results,
    hasActiveFilters: !isFiltersEmpty(filters),
  };
}
