/**
 * TripPage — the personal yatra planner (FR-80/81) in the zip-parity
 * chrome (UXD v3.0 Gate 10): action rail, live meta line, notice strip,
 * view-toggle chips with the gradient "Order my route" button, the route
 * map in a gold frame, region/route lists with gold trip-index medallions,
 * Darshan Done toggles and remove pills. Share restores via /trip?t=…;
 * Download/Drive actions from the zip are omitted (layout-only scope).
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Plus, Printer, RotateCcw, Share2, Trash2 } from 'lucide-react';
import { getAllKshetramsEnriched } from '../data/api.js';
import { useTrip } from '../hooks/useTrip.js';
import { useVisited } from '../hooks/useVisited.js';
import { orderNearestFirst, legsFor, sumLegs } from '../utils/route.js';
import { decodeTrip, encodeTrip } from '../state/trip.js';
import EmptyState from '../components/EmptyState.jsx';
import TripMap from '../components/TripMap.jsx';

/** @returns {Map<string, Kshetram>} id → enriched record (coords included). */
function useKshetramIndex() {
  return useMemo(() => {
    const map = new Map();
    for (const k of getAllKshetramsEnriched()) map.set(k.id, k);
    return map;
  }, []);
}

export default function TripPage() {
  const { tripIds, removeFromTrip, setTrip, clearTrip } = useTrip();
  const { isVisited, toggleVisited } = useVisited();
  const index = useKshetramIndex();
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState('region');
  const [notice, setNotice] = useState('');
  const appliedShare = useRef('');

  const stops = tripIds.map((id) => index.get(id)).filter(Boolean);
  const route = useMemo(() => orderNearestFirst(stops), [stops]); // eslint-disable-line react-hooks/exhaustive-deps
  const legs = useMemo(() => legsFor(stops), [stops]);

  // Restore a shared trip once per distinct ?t= value (FR-81)
  const shareParam = searchParams.get('t') ?? '';
  useEffect(() => {
    if (!shareParam || appliedShare.current === shareParam) return;
    appliedShare.current = shareParam;
    const ids = decodeTrip(shareParam);
    if (ids.length > 0) {
      setTrip(ids);
      setView('route');
      setNotice('Trip loaded from a shared link — now saved in your browser.');
    }
    setSearchParams({}, { replace: true });
  }, [shareParam, setTrip, setSearchParams]);

  const orderedStops = route.ordered;
  const orderedLegs = route.legs;

  // The map mirrors the selected ordering: route order on the route view,
  // current trip order on the region view.
  const mapStops = view === 'route' ? orderedStops : stops;
  const mapLegs = view === 'route' ? orderedLegs : legs;
  const hasMapStops = mapStops.some((k) => Array.isArray(k.coords));

  const onOrder = () => {
    setTrip(orderedStops.map((k) => k.id));
    setView('route');
    setNotice(`Route ordered nearest-first — about ${sumLegs(orderedLegs)} km in a straight line.`);
  };

  const onShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?t=${encodeTrip(tripIds)}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Divya Desam yatra plan', url });
        return;
      } catch {
        return; // user dismissed the share sheet
      }
    }
    await navigator.clipboard.writeText(url);
    setNotice('Trip link copied to the clipboard.');
  };

  const onClear = () => {
    if (window.confirm(`Remove all ${tripIds.length} stops from your trip?`)) {
      clearTrip();
      setNotice('');
    }
  };

  const railBtn = 'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 transition-colors bg-[#FFFDF7] no-print';

  if (stops.length === 0) {
    return (
      <div className="max-w-xl mx-auto pt-8">
        <h1 className="font-display text-3xl font-semibold text-[#7A2E00] mb-4">My Yatra — Trip Planner</h1>
        <EmptyState
          title="Your trip is empty"
          message="Add desams from any kshetram page, card or map popup to start planning your yatra."
          action={(
            <div className="flex flex-wrap justify-center gap-3 mt-1">
              <Link className="btn btn--primary" to="/kshetrams">Browse desams</Link>
              <Link className="btn btn--outline" to="/map">Open map</Link>
            </div>
          )}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Head with action rail */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#E3D2AE]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
            Pilgrim Route Planner
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#7A2E00] tracking-tight leading-tight mt-1">
            My Yatra — Trip Planner
          </h1>
          <p className="trip-page__meta mt-2 text-sm text-[#66523D]" aria-live="polite">
            {stops.length} {stops.length === 1 ? 'stop' : 'stops'} · about {sumLegs(legs)} km in
            current order (straight-line) · Distances are straight-line — road distance varies.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 no-print self-start lg:self-auto shrink-0">
          <button type="button" className={railBtn} onClick={onShare}>
            <Share2 className="w-3.5 h-3.5" aria-hidden="true" /> Share
          </button>
          <button type="button" className={railBtn} onClick={() => window.print()}>
            <Printer className="w-3.5 h-3.5" aria-hidden="true" /> Print
          </button>
          <Link to="/kshetrams" className={railBtn}>
            <Plus className="w-3.5 h-3.5" aria-hidden="true" /> Add temples
          </Link>
          <button type="button" className={railBtn} onClick={onClear}>
            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" /> Clear
          </button>
        </div>
      </header>

      {/* Notice strip */}
      {notice ? (
        <p className="role-status flex flex-wrap items-center gap-3 rounded-2xl border border-[#C99A2E]/50 bg-[#F6EBD6] px-4 py-3 text-sm text-[#332417]" role="status">
          <RotateCcw className="w-4 h-4 text-[#B34700] shrink-0" aria-hidden="true" />
          <span className="flex-1">{notice}</span>
          <button
            type="button"
            className="text-xs font-bold uppercase tracking-wider text-[#96731F] hover:text-[#7A2E00] px-2 py-1 rounded transition-colors no-print"
            onClick={() => setNotice('')}
          >
            Dismiss
          </button>
        </p>
      ) : null}

      {/* View toggle + order button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print" role="group" aria-label="Trip view">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className={view === 'region' ? 'region-chip is-active' : 'region-chip'}
            aria-pressed={view === 'region'}
            onClick={() => setView('region')}
          >
            By region
          </button>
          <button
            type="button"
            className={view === 'route' ? 'region-chip is-active' : 'region-chip'}
            aria-pressed={view === 'route'}
            onClick={() => setView('route')}
          >
            Route order
          </button>
        </div>
        <button
          type="button"
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D95F0E] to-[#B34700] text-[#FFFDF7] text-sm font-semibold shadow-xs hover:opacity-95 transition-opacity"
          onClick={onOrder}
        >
          <span aria-hidden="true">⤓</span>
          <span>Order my route — nearest first</span>
        </button>
      </div>

      {/* Route map */}
      {hasMapStops ? (
        <section aria-label="Your trip plan on a map" className="rounded-2xl overflow-hidden border border-[#C99A2E]/55 shadow-xs h-80 bg-[#F6EBD6]">
          <TripMap stops={mapStops} legs={mapLegs} />
        </section>
      ) : null}

      {view === 'region' ? (
        <RegionGroups stops={stops} onRemove={removeFromTrip} isVisited={isVisited} toggleVisited={toggleVisited} />
      ) : (
        <div className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-6 shadow-xs">
          <ol>
            {orderedStops.map((k, i) => (
              <TripStop
                key={k.id}
                kshetram={k}
                index={i + 1}
                legKm={orderedLegs[i]}
                onRemove={removeFromTrip}
                isVisited={isVisited}
                toggleVisited={toggleVisited}
              />
            ))}
          </ol>
        </div>
      )}

      <p className="text-xs text-[#66523D] italic no-print">
        🖨 This itinerary is print-ready — the print stylesheet hides buttons and maps.
      </p>
    </div>
  );
}

/** Region-grouped view: groups keep first-seen region order (FR-80). */
function RegionGroups({ stops, onRemove, isVisited, toggleVisited }) {
  const groups = new Map();
  for (const stop of stops) {
    const bucket = groups.get(stop.region);
    if (bucket) bucket.push(stop);
    else groups.set(stop.region, [stop]);
  }
  let globalIndex = 0;
  return (
    <div className="space-y-6">
      {[...groups.entries()].map(([region, group]) => (
        <section className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-6 shadow-xs" key={region}>
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-[#F0E3C6]">
            <span className="region-dot" style={{ background: '#C99A2E' }} aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-[#7A2E00]">{region}</h2>
            <span className="text-[10px] font-bold bg-[#FAF2E3] text-[#96731F] px-2 py-0.5 rounded-full border border-[#C99A2E]/30">
              {group.length} {group.length === 1 ? 'stop' : 'stops'}
            </span>
          </div>
          <ol>
            {group.map((k) => {
              globalIndex += 1;
              return (
                <TripStop
                  key={k.id}
                  kshetram={k}
                  index={globalIndex}
                  legKm={null}
                  onRemove={onRemove}
                  isVisited={isVisited}
                  toggleVisited={toggleVisited}
                />
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

/** One stop row: gold trip-index medallion, name block, Darshan Done toggle, remove pill. */
function TripStop({ kshetram, index, legKm, onRemove, isVisited, toggleVisited }) {
  const visited = isVisited(kshetram.id);
  return (
    <>
      {legKm != null ? (
        <li className="flex justify-center items-center gap-2 py-1 text-[11px] text-[#96731F]" aria-hidden="true">
          <span className="h-4 w-px bg-[#E3D2AE]" />
          <span>↓ {legKm} km</span>
          <span className="h-4 w-px bg-[#E3D2AE]" />
        </li>
      ) : null}
      <li className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-b border-[#F0E3C6] last:border-b-0">
        <span className="trip-index" aria-hidden="true">{index}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-[#96731F] font-medium" lang="ta">{kshetram.tamilName}</span>
          <Link to={`/kshetram/${kshetram.id}`} className="font-display text-lg font-semibold text-[#7A2E00] hover:text-[#B34700] transition-colors">
            {kshetram.name}
          </Link>
          <span className="block text-xs text-[#66523D]">{kshetram.place} · {kshetram.state}</span>
        </span>
        <span className="flex items-center gap-2 no-print">
          <button
            type="button"
            aria-pressed={visited}
            onClick={() => toggleVisited(kshetram.id)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors ${
              visited
                ? 'bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] border-[#96731F]'
                : 'border-[#B34700]/50 text-[#7A2E00] hover:bg-[#B34700]/10 bg-[#FFFDF7]'
            }`}
          >
            {visited ? 'Darshan Done' : 'Mark Visited'}
          </button>
          <button
            type="button"
            className="text-sm font-bold text-[#A32020] hover:bg-[#A32020]/10 rounded-full px-3 py-1.5 transition-colors shrink-0"
            title={`Remove ${kshetram.name} from trip`}
            aria-label={`Remove ${kshetram.name} from trip`}
            onClick={() => onRemove(kshetram.id)}
          >
            Remove ✕
          </button>
        </span>
      </li>
    </>
  );
}
