/**
 * BrowsePage — zip-parity directory (UXD v3.0 Gate 4): ruled header banner,
 * the cream filter card (search + sort row, region pills, visited/trip
 * checkboxes + directory selects + live result count) and the 3-column card
 * grid (FR-20..25). Filter state stays in useKshetramFilters (?azhwar= /
 * ?region= deep links, FR-41); visited/trip narrowing is view-level like
 * the zip's checkboxes.
 */
import { useMemo, useState } from 'react';
import { useKshetrams } from '../hooks/useKshetrams.js';
import { useKshetramFilters } from '../hooks/useKshetramFilters.js';
import { getFilterOptions } from '../data/api.js';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import KshetramCard from '../components/KshetramCard.jsx';
import { SITE_COPY } from '../data/siteCopy.js';
import { Search } from 'lucide-react';

const SORTERS = {
  traditional: null,
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
};

const selectClass = 'px-2.5 py-1.5 rounded-xl bg-[#FAF2E3] border border-[#E3D2AE] text-xs font-medium text-[#7A2E00] focus:outline-hidden';

export default function BrowsePage() {
  const { kshetrams, azhwars } = useKshetrams();
  const { filters, setFilter, clearFilters, results } =
    useKshetramFilters(kshetrams, azhwars);
  const { visitedIds } = useVisited();
  const { tripIds } = useTrip();
  const [sort, setSort] = useState('traditional');
  const [visitedOnly, setVisitedOnly] = useState(false);
  const [tripOnly, setTripOnly] = useState(false);
  const options = getFilterOptions();

  const visible = useMemo(() => {
    let list = results;
    if (visitedOnly) list = list.filter((k) => visitedIds.includes(k.id));
    if (tripOnly) list = list.filter((k) => tripIds.includes(k.id));
    return SORTERS[sort] ? [...list].sort(SORTERS[sort]) : list;
  }, [results, sort, visitedOnly, tripOnly, visitedIds, tripIds]);

  const resetAll = () => {
    clearFilters();
    setVisitedOnly(false);
    setTripOnly(false);
  };

  const regionPills = [{ value: '', label: 'All regions' }, ...options.regions.map((r) => ({
    value: r,
    label: r === 'Celestial' ? 'Vinnulagam (2)' : r,
  }))];

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="border-b border-[#E3D2AE] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
          {SITE_COPY.browse.eyebrow}
        </span>
        <h1 className="font-display text-3xl font-semibold text-[#7A2E00] mt-0.5">
          {SITE_COPY.browse.title}
        </h1>
        <p className="text-sm text-[#66523D] mt-1">
          {SITE_COPY.browse.lead}
        </p>
      </div>

      {/* Search and filters card */}
      <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#C99A2E]/45 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#96731F]" aria-hidden="true" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilter('search', e.target.value)}
              aria-label="Search kshetrams"
              placeholder="Search by temple, deity (e.g. Ranganatha), place, or Azhwar..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF2E3] border border-[#E3D2AE] focus:outline-hidden focus:border-[#C99A2E] text-sm text-[#332417] placeholder-[#66523D]/60"
            />
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="browse-sort" className="text-xs text-[#66523D] font-medium whitespace-nowrap">Sort by</label>
            <select
              id="browse-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#FAF2E3] border border-[#E3D2AE] text-xs font-medium text-[#7A2E00] focus:outline-hidden"
            >
              <option value="traditional">Traditional order</option>
              <option value="az">Name A–Z</option>
              <option value="za">Name Z–A</option>
            </select>
          </div>
        </div>

        {/* Region pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs" role="group" aria-label="Quick filter by region">
          {regionPills.map(({ value, label }) => (
            <button
              key={value || 'all'}
              type="button"
              aria-pressed={filters.region === value}
              onClick={() => setFilter('region', filters.region === value && value !== '' ? '' : value)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all ${
                filters.region === value
                  ? 'bg-[#B34700] text-[#FFFDF7] shadow-xs'
                  : 'bg-[#FAF2E3] text-[#7A2E00] hover:bg-[#FAF2E3]/80 border border-[#E3D2AE]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Status checkboxes + directory selects + live count */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#66523D] pt-2.5 border-t border-[#E3D2AE]/60">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={visitedOnly}
              onChange={(e) => setVisitedOnly(e.target.checked)}
              aria-label="Visit status"
              className="rounded accent-[#B34700]"
            />
            <span>Show visited only ({visitedIds.length})</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={tripOnly}
              onChange={(e) => setTripOnly(e.target.checked)}
              className="rounded accent-[#B34700]"
            />
            <span>Show in trip only ({tripIds.length})</span>
          </label>

          <label className="flex items-center gap-1.5">
            <span className="font-medium">State</span>
            <select
              aria-label="State"
              value={filters.state}
              onChange={(e) => setFilter('state', e.target.value)}
              className={selectClass}
            >
              <option value="">All states</option>
              {options.states.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>

          <label className="flex items-center gap-1.5">
            <span className="font-medium">Deity form</span>
            <select
              aria-label="Deity form"
              value={filters.deityForm}
              onChange={(e) => setFilter('deityForm', e.target.value)}
              className={selectClass}
            >
              <option value="">All postures</option>
              {options.deityForms.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </label>

          <label className="flex items-center gap-1.5">
            <span className="font-medium">Azhwar</span>
            <select
              aria-label="Azhwar"
              value={filters.azhwar}
              onChange={(e) => setFilter('azhwar', e.target.value)}
              className={selectClass}
            >
              <option value="">All azhwars</option>
              {azhwars.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
          </label>

          <span className="result-count ml-auto text-[11px] font-medium text-[#96731F]" aria-live="polite">
            Showing {visible.length} of {kshetrams.length} kshetrams
          </span>
        </div>
      </div>

      {/* Card grid / empty state */}
      {visible.length === 0 ? (
        <div className="p-12 text-center bg-[#FFFDF7] rounded-2xl border border-[#E3D2AE]" role="status">
          <p className="font-display text-xl font-semibold text-[#7A2E00]">No kshetrams found</p>
          <p className="text-sm text-[#66523D] mt-1">No kshetram matches your search or filters. Adjust them or start afresh.</p>
          <button
            type="button"
            onClick={resetAll}
            className="mt-4 px-4 py-2 rounded-full bg-[#FAF2E3] text-[#7A2E00] text-xs font-semibold border border-[#E3D2AE] hover:bg-[#FAF2E3]/80 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      )}
    </div>
  );
}
