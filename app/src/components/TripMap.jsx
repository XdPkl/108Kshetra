/**
 * TripMap — lazy wrapper for the trip planner route map (US-TRP-04).
 * Split from TripMapInner so Leaflet stays out of the initial bundle
 * (NFR-11), same pattern as MiniMap.
 * @param {object} props
 * @param {Kshetram[]} props.stops - stops in display order (route or current)
 * @param {(number|null)[]} props.legs - inbound leg km per stop (legsFor)
 */
import { Suspense, lazy } from 'react';

const TripMapInner = lazy(() => import('./TripMapInner.jsx'));

export default function TripMap({ stops, legs }) {
  return (
    <Suspense fallback={<div className="trip-map trip-map--loading" role="status">Loading map…</div>}>
      <TripMapInner stops={stops} legs={legs} />
    </Suspense>
  );
}
