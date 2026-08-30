/**
 * Unit tests for the visit-status filter dimension (US-TRK-04, FR-74).
 */
import { describe, it, expect } from 'vitest';
import { filterKshetrams, isFiltersEmpty } from '../filter.js';
import { EMPTY_FILTERS } from '../../hooks/useKshetramFilters.js';
import { getAllKshetrams, getAllAzhwars } from '../../data/api.js';

const kshetrams = getAllKshetrams();
const azhwars = getAllAzhwars();

describe('visited-status filter (UT-FLT-05)', () => {
  it('is inactive by default and in isFiltersEmpty', () => {
    expect(isFiltersEmpty(EMPTY_FILTERS)).toBe(true);
    expect(filterKshetrams(kshetrams, azhwars, { ...EMPTY_FILTERS }, ['srirangam']))
      .toHaveLength(108);
  });

  it('"visited" keeps only visited ids; "unvisited" the complement', () => {
    const base = { ...EMPTY_FILTERS };
    expect(filterKshetrams(kshetrams, azhwars, { ...base, visited: 'visited' }, ['srirangam']).map((k) => k.id))
      .toEqual(['srirangam']);
    const unvisited = filterKshetrams(kshetrams, azhwars, { ...base, visited: 'unvisited' }, ['srirangam']);
    expect(unvisited).toHaveLength(107);
    expect(unvisited.some((k) => k.id === 'srirangam')).toBe(false);
  });

  it('combines with other filters (AND semantics)', () => {
    const filters = { ...EMPTY_FILTERS, visited: 'unvisited', region: 'Chola Nadu' };
    const results = filterKshetrams(kshetrams, azhwars, filters, ['srirangam']);
    expect(results.every((k) => k.region === 'Chola Nadu' && k.id !== 'srirangam')).toBe(true);
  });
});
