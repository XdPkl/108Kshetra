/**
 * Unit tests for pure filtering utilities (UT-FLT-01..04).
 */
import { describe, it, expect } from 'vitest';
import { matchesSearch, filterKshetrams, isFiltersEmpty } from '../filter.js';
import { kshetrams } from '../../data/kshetrams.js';
import { azhwars } from '../../data/azhwars.js';

const emptyFilters = { search: '', state: '', deityForm: '', region: '', azhwar: '' };
const srirangam = kshetrams.find((k) => k.id === 'srirangam');

describe('matchesSearch (UT-FLT-01)', () => {
  it('matches name case-insensitively', () => {
    expect(matchesSearch(srirangam, 'srirangam', azhwars)).toBe(true);
    expect(matchesSearch(srirangam, '  SRIRANGAM ', azhwars)).toBe(true);
  });

  it('matches place, deity, temple and azhwar name fields', () => {
    expect(matchesSearch(srirangam, 'trichy', azhwars)).toBe(true);
    expect(matchesSearch(srirangam, 'ranganatha', azhwars)).toBe(true);
    expect(matchesSearch(srirangam, 'thirumangai', azhwars)).toBe(true);
  });

  it('matches the Tamil name', () => {
    expect(matchesSearch(srirangam, 'திருவரங்கம்', azhwars)).toBe(true);
  });

  it('rejects non-matching terms and treats empty as match-all', () => {
    expect(matchesSearch(srirangam, 'dwaraka', azhwars)).toBe(false);
    expect(matchesSearch(srirangam, '   ', azhwars)).toBe(true);
  });
});

describe('filterKshetrams (UT-FLT-02..04)', () => {
  it('returns all 108 when no filter is active', () => {
    expect(filterKshetrams(kshetrams, azhwars, emptyFilters)).toHaveLength(108);
  });

  it('filters by state', () => {
    const results = filterKshetrams(kshetrams, azhwars, { ...emptyFilters, state: 'Kerala' });
    expect(results).toHaveLength(11);
    expect(results.every((k) => k.state === 'Kerala')).toBe(true);
  });

  it('filters by region', () => {
    const results = filterKshetrams(kshetrams, azhwars, { ...emptyFilters, region: 'Nadu Nadu' });
    expect(results).toHaveLength(2);
  });

  it('filters by azhwar id', () => {
    const results = filterKshetrams(kshetrams, azhwars, { ...emptyFilters, azhwar: 'andal' });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((k) => k.azhwars.includes('andal'))).toBe(true);
  });

  it('combines filters with AND semantics (UT-FLT-04)', () => {
    const both = filterKshetrams(kshetrams, azhwars, {
      ...emptyFilters, state: 'Tamil Nadu', region: 'Pandiya Nadu',
    });
    expect(both.every((k) => k.state === 'Tamil Nadu' && k.region === 'Pandiya Nadu')).toBe(true);
  });

  it('combines search with filters', () => {
    const results = filterKshetrams(kshetrams, azhwars, {
      ...emptyFilters, search: 'kanchipuram', state: 'Tamil Nadu',
    });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((k) => k.place.includes('Kanchipuram'))).toBe(true);
  });

  it('returns an empty array when nothing matches', () => {
    expect(filterKshetrams(kshetrams, azhwars, { ...emptyFilters, search: 'atlantis' })).toEqual([]);
  });

  it('does not mutate the input array', () => {
    const before = kshetrams.length;
    filterKshetrams(kshetrams, azhwars, { ...emptyFilters, state: 'Kerala' });
    expect(kshetrams).toHaveLength(before);
  });
});

describe('isFiltersEmpty', () => {
  it('is true for all-empty filters and false when any is set', () => {
    expect(isFiltersEmpty(emptyFilters)).toBe(true);
    expect(isFiltersEmpty({ ...emptyFilters, search: 'x' })).toBe(false);
    expect(isFiltersEmpty({ ...emptyFilters, azhwar: 'andal' })).toBe(false);
  });
});
