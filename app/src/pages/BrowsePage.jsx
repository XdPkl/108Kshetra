/**
 * BrowsePage — all kshetrams with search, combined filters, result count,
 * empty state and reset (FR-20..25), plus quick region chips and sorting
 * (UXD v2 mocks).
 */
import { useMemo, useState } from 'react';
import { useKshetrams } from '../hooks/useKshetrams.js';
import { useKshetramFilters } from '../hooks/useKshetramFilters.js';
import { getFilterOptions } from '../data/api.js';
import { SITE_STATS } from '../data/config.js';
import KshetramCard from '../components/KshetramCard.jsx';
import SearchFilterBar from '../components/SearchFilterBar.jsx';
import EmptyState from '../components/EmptyState.jsx';
import ProgressBanner from '../components/ProgressBanner.jsx';

const SORTERS = {
  traditional: null,
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
};

export default function BrowsePage() {
  const { kshetrams, azhwars } = useKshetrams();
  const { filters, setFilter, clearFilters, results, hasActiveFilters } =
    useKshetramFilters(kshetrams, azhwars);
  const [sort, setSort] = useState('traditional');
  const options = getFilterOptions();
  const toOptions = (values) => values.map((v) => ({ value: v, label: v }));
  const azhwarOptions = azhwars.map((a) => ({ value: a.id, label: a.name }));
  const sorted = useMemo(
    () => (SORTERS[sort] ? [...results].sort(SORTERS[sort]) : results),
    [results, sort],
  );

  return (
    <div className="page">
      <header className="browse-head">
        <div>
          <span className="eyebrow">Nalayira Divya Prabandham Series</span>
          <h1>Explore the Divya Kshetrams</h1>
        </div>
        <ProgressBanner total={SITE_STATS.kshetramCount} compact />
      </header>
      <SearchFilterBar
        filters={filters}
        onFilterChange={setFilter}
        onReset={clearFilters}
        showReset={hasActiveFilters}
        stateOptions={toOptions(options.states)}
        regionOptions={toOptions(options.regions)}
        deityFormOptions={toOptions(options.deityForms)}
        azhwarOptions={azhwarOptions}
      />
      <div className="browse-filter-row">
        <div className="browse-chips" role="group" aria-label="Quick filter by region">
          <button
            type="button"
            className={`region-chip${filters.region === '' ? ' is-active' : ''}`}
            aria-pressed={filters.region === ''}
            onClick={() => setFilter('region', '')}
          >
            All regions
          </button>
          {options.regions.map((r) => (
            <button
              key={r}
              type="button"
              className={`region-chip${filters.region === r ? ' is-active' : ''}`}
              aria-pressed={filters.region === r}
              onClick={() => setFilter('region', filters.region === r ? '' : r)}
            >
              {r}
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">
          Showing {sorted.length} of {kshetrams.length} kshetrams
        </p>
        <div className="browse-sort">
          <label htmlFor="browse-sort">Sort by</label>
          <select id="browse-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="traditional">Traditional order</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </div>
      </div>
      {results.length === 0 ? (
        <EmptyState
          title="No kshetrams found"
          message="No kshetram matches your search or filters. Adjust them or start afresh."
          action={(
            <button type="button" className="btn btn--primary" onClick={clearFilters}>
              Clear all filters
            </button>
          )}
        />
      ) : (
        <div className="card-grid">
          {sorted.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      )}
    </div>
  );
}
