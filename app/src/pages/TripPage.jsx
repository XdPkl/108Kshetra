/**
 * TripPage — the personal yatra planner (FR-80/81). Stops are listed
 * grouped by region (default) or in nearest-first route order, with
 * straight-line leg distances. Supports "Order my route" (FR-80), stop
 * removal, clearing, share via URL with clipboard fallback, print, and
 * restoring a trip from a shared /trip?t=… link.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getAllKshetramsEnriched } from '../data/api.js';
import { useTrip } from '../hooks/useTrip.js';
import { orderNearestFirst, legsFor, sumLegs } from '../utils/route.js';
import { decodeTrip, encodeTrip } from '../state/trip.js';
import EmptyState from '../components/EmptyState.jsx';

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

  const onPrint = () => window.print();

  if (stops.length === 0) {
    return (
      <div className="page">
        <h1>My Yatra — Trip Planner</h1>
        <EmptyState
          title="Your trip is empty"
          message="Add desams from any kshetram page, card or map popup to start planning your yatra."
          action={(
            <div className="empty-state__actions">
              <Link className="btn btn--primary" to="/kshetrams">Browse desams</Link>
              <Link className="btn btn--outline" to="/map">Open map</Link>
            </div>
          )}
        />
      </div>
    );
  }

  return (
    <div className="page trip-page">
      <div className="trip-page__head">
        <h1>My Yatra — Trip Planner</h1>
        <div className="trip-page__actions">
          <button type="button" className="btn btn--outline btn--small" onClick={onShare}>🔗 Share</button>
          <button type="button" className="btn btn--outline btn--small" onClick={onPrint}>🖨 Print</button>
          <button type="button" className="btn btn--outline btn--small" onClick={onClear}>Clear</button>
        </div>
      </div>
      <p className="trip-page__meta" aria-live="polite">
        {stops.length} {stops.length === 1 ? 'stop' : 'stops'} · about {sumLegs(legs)} km in
        current order (straight-line) · Distances are straight-line — road distance varies.
      </p>
      {notice ? (
        <p className="trip-page__notice" role="status">
          {notice}{' '}
          <button type="button" className="trip-page__notice-dismiss" onClick={() => setNotice('')}>
            Dismiss
          </button>
        </p>
      ) : null}

      <div className="trip-page__viewtoggle" role="group" aria-label="Trip view">
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
        <button type="button" className="btn btn--primary btn--small trip-page__order" onClick={onOrder}>
          ⤓ Order my route — nearest first
        </button>
      </div>

      {view === 'region' ? (
        <RegionGroups stops={stops} onRemove={removeFromTrip} />
      ) : (
        <ol className="trip-list">
          {orderedStops.map((k, i) => (
            <TripStop
              key={k.id}
              kshetram={k}
              index={i + 1}
              legKm={orderedLegs[i]}
              onRemove={removeFromTrip}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

/** Region-grouped view: groups keep first-seen region order (FR-80). */
function RegionGroups({ stops, onRemove }) {
  const groups = new Map();
  for (const stop of stops) {
    const bucket = groups.get(stop.region);
    if (bucket) bucket.push(stop);
    else groups.set(stop.region, [stop]);
  }
  return (
    <div className="trip-groups">
      {[...groups.entries()].map(([region, group]) => (
        <section className="trip-group" key={region}>
          <h2 className="trip-group__region">{region}</h2>
          <ol className="trip-list">
            {group.map((k, i) => (
              <TripStop
                key={k.id}
                kshetram={k}
                index={i + 1}
                legKm={i === 0 ? null : legsFor(group)[i]}
                onRemove={onRemove}
              />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

/** One stop row with its inbound leg distance and remove action. */
function TripStop({ kshetram, index, legKm, onRemove }) {
  return (
    <>
      {legKm != null ? <li className="trip-leg" aria-hidden="true">↓ {legKm} km</li> : null}
      <li className="trip-stop">
        <span className="trip-stop__index">{index}.</span>
        <span className="trip-stop__name">
          <span className="trip-stop__tamil" lang="ta">{kshetram.tamilName}</span>{' '}
          <Link to={`/kshetram/${kshetram.id}`}>{kshetram.name}</Link>
          <span className="trip-stop__place"> — {kshetram.place}</span>
        </span>
        <button type="button" className="trip-stop__remove" onClick={() => onRemove(kshetram.id)}>
          Remove ✕
        </button>
      </li>
    </>
  );
}
