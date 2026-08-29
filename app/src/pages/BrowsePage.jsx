/**
 * BrowsePage — all kshetrams with search, combined filters, result count,
 * empty state and reset (FR-20..25).
 */
import { useKshetrams } from '../hooks/useKshetrams.js';
import { useKshetramFilters } from '../hooks/useKshetramFilters.js';
import { getFilterOptions } from '../data/api.js';
import KshetramCard from '../components/KshetramCard.jsx';
import SearchFilterBar from '../components/SearchFilterBar.jsx';
import EmptyState from '../components/EmptyState.jsx';

export default function BrowsePage() {
  const { kshetrams, azhwars } = useKshetrams();
  const { filters, setFilter, clearFilters, results, hasActiveFilters } =
    useKshetramFilters(kshetrams, azhwars);
  const options = getFilterOptions();

  const toOptions = (values) => values.map((v) => ({ value: v, label: v }));
  const azhwarOptions = azhwars.map((a) => ({ value: a.id, label: a.name }));

  return (
    <div className="page">
      <h1>Explore the Divya Kshetrams</h1>
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
      <p className="result-count" aria-live="polite">
        Showing {results.length} of {kshetrams.length} kshetrams
      </p>
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
          {results.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      )}
    </div>
  );
}
