/**
 * BrowsePage — 2026-09-30 restyle (PO mockup "Explore the 108 Divya Desams"):
 * display header with the PO gopuram illustration + quote, a white panel holding the
 * search input and region chips, a scope-pill row (All temples / Visited /
 * In my trip) beside a collapsed "More filters" disclosure (state / deity
 * form / azhwar selects), a serif result count with the sort control, and
 * the 3-column card grid (FR-20..25). Filter state stays in
 * useKshetramFilters (?azhwar= / ?region= deep links, FR-41).
 */
import { useMemo, useState } from 'react';
import { useKshetrams } from '../hooks/useKshetrams.js';
import { useKshetramFilters } from '../hooks/useKshetramFilters.js';
import { getFilterOptions } from '../data/api.js';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import KshetramCard from '../components/KshetramCard.jsx';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';
import { SITE_COPY } from '../data/siteCopy.js';
import { Search } from 'lucide-react';

const SORTERS = {
  traditional: null,
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
};

const selectClass = 'px-2.5 py-1.5 rounded-xl bg-[#FAF2E3] border border-[#E3D2AE] text-xs font-medium text-[#7A2E00] focus:outline-hidden';

const scopeBase = 'flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] transition-all';
const scopeActive = `${scopeBase} border border-[#C99A2E]/60 bg-[#F6EBD6] font-semibold text-[#7A2E00] shadow-xs`;
const scopeIdle = `${scopeBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#332417] hover:border-[#C99A2E]`;

export default function BrowsePage() {
  const { kshetrams, azhwars } = useKshetrams();
  const { filters, setFilter, clearFilters, results } =
    useKshetramFilters(kshetrams, azhwars);
  const { visitedIds } = useVisited();
  const { tripIds } = useTrip();
  const [sort, setSort] = useState('traditional');
  const [visitedOnly, setVisitedOnly] = useState(false);
  const [tripOnly, setTripOnly] = useState(false);
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);
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
    label: r === 'Celestial' ? 'Vinnulagam' : r,
  }))];

  const countLabel = `${visible.length} kshetram${visible.length === 1 ? '' : 's'}`;

  return (
    <div>
      {/* Display header — PO gopuram illustration as a right-half watermark
          over the top of the page, fading into the ivory before the search
          panel; quote floats over the watermark's quiet sky area */}
      <div className="relative min-h-[290px] pb-6 pt-10">
        <img
          src={gopuramIllustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-contain object-[right_bottom] opacity-80 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)] lg:block"
        />
        <div className="relative max-w-[52%]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {SITE_COPY.browse.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[48px]!">
            {SITE_COPY.browse.title}
          </h1>
          <p className="mt-2 text-[17px] text-[#66523D]">
            {SITE_COPY.browse.lead}
          </p>
        </div>
        <figure className="absolute right-0 top-10 z-10 hidden max-w-[240px] text-right lg:block">
          <blockquote className="font-display text-[17px] italic leading-snug text-[#7A2E00]">
            &ldquo;{SITE_COPY.browse.quote}&rdquo;
          </blockquote>
          <div className="mt-2 flex items-center justify-end gap-2" aria-hidden="true">
            <span className="h-px w-10 bg-[#C99A2E]/60" />
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#C99A2E]" fill="currentColor">
              <path d="M6 0l1.5 4.5L12 6 7.5 7.5 6 12 4.5 7.5 0 6l4.5-1.5L6 0z" />
            </svg>
          </div>
        </figure>
      </div>

      {/* Search + region chips panel */}
      <div className="rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-4 shadow-xs sm:p-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#96731F]" aria-hidden="true" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilter('search', e.target.value)}
            aria-label="Search kshetrams"
            placeholder="Search temples, places, deities or Azhwars"
            className="w-full rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] py-3 pl-11 pr-4 text-[15px] text-[#332417] placeholder-[#66523D]/60 focus:border-[#C99A2E] focus:outline-hidden"
          />
        </div>
        <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-0.5 text-[13px]" role="group" aria-label="Quick filter by region">
          {regionPills.map(({ value, label }) => (
            <button
              key={value || 'all'}
              type="button"
              aria-pressed={filters.region === value}
              onClick={() => setFilter('region', filters.region === value && value !== '' ? '' : value)}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-medium transition-all ${
                filters.region === value
                  ? 'bg-[#B34700] text-[#FFFDF7] shadow-xs'
                  : 'border border-[#E3D2AE] bg-[#FFFDF7] text-[#7A2E00] hover:border-[#C99A2E]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Scope pills + more-filters disclosure */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Showing">
          <button
            type="button"
            aria-pressed={!visitedOnly && !tripOnly}
            onClick={() => { setVisitedOnly(false); setTripOnly(false); }}
            className={visitedOnly || tripOnly ? scopeIdle : scopeActive}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 21V9l4-3V3h8v3l4 3v12M9 21v-4h6v4M4 21h16" />
            </svg>
            All temples
          </button>
          <button
            type="button"
            aria-pressed={visitedOnly}
            onClick={() => { setVisitedOnly(!visitedOnly); setTripOnly(false); }}
            className={visitedOnly ? scopeActive : scopeIdle}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5" />
            </svg>
            Visited ({visitedIds.length})
          </button>
          <button
            type="button"
            aria-pressed={tripOnly}
            onClick={() => { setTripOnly(!tripOnly); setVisitedOnly(false); }}
            className={tripOnly ? scopeActive : scopeIdle}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            In my trip ({tripIds.length})
          </button>
        </div>

        <span className="h-8 w-px bg-[#E3D2AE]" aria-hidden="true" />

        <div>
          <button
            type="button"
            aria-expanded={moreFiltersOpen}
            onClick={() => setMoreFiltersOpen(!moreFiltersOpen)}
            className="flex items-center gap-3 rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] px-4 py-2 text-left transition-colors hover:border-[#C99A2E]"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" />
            </svg>
            <span>
              <span className="flex items-center gap-1.5 text-[14px] font-semibold text-[#332417]">
                More filters
                <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 text-[#66523D] transition-transform ${moreFiltersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
              <span className="block text-[12px] text-[#66523D]">State · Deity form · Azhwar</span>
            </span>
          </button>
          {moreFiltersOpen && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] p-3 text-xs text-[#66523D] shadow-xs">
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
            </div>
          )}
        </div>
      </div>

      {/* Results header: serif count + sort */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E3D2AE]/70 pb-4 pt-8">
        <p className="result-count font-display text-[30px] font-semibold leading-none text-[#5C1F00]" aria-live="polite">
          {countLabel}
        </p>
        <label htmlFor="browse-sort" className="flex items-center gap-2.5 text-[13px] font-medium text-[#66523D]">
          Sort by
          <select
            id="browse-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-[#E3D2AE] bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#7A2E00] focus:outline-hidden"
          >
            <option value="traditional">Traditional order</option>
            <option value="az">Name A–Z</option>
            <option value="za">Name Z–A</option>
          </select>
        </label>
      </div>

      {/* Card grid / empty state */}
      {visible.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-12 text-center" role="status">
          <p className="font-display text-xl font-semibold text-[#7A2E00]">No kshetrams found</p>
          <p className="mt-1 text-sm text-[#66523D]">No kshetram matches your search or filters. Adjust them or start afresh.</p>
          <button
            type="button"
            onClick={resetAll}
            className="mt-4 rounded-full border border-[#E3D2AE] bg-[#FAF2E3] px-4 py-2 text-xs font-semibold text-[#7A2E00] transition-colors hover:bg-[#FAF2E3]/80"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      )}
    </div>
  );
}
