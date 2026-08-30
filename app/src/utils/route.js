/**
 * Trip route helpers (FR-80) — straight-line distances come from geo.js.
 */
import { distanceKm } from './geo.js';

/**
 * Re-orders stops nearest-first starting from the first stop with
 * coordinates (nearest-neighbour heuristic). Stops without coordinates
 * (celestial desams) keep their relative order at the end.
 * @param {Kshetram[]} stops - trip stops in current order
 * @returns {{ordered: Kshetram[], legs: (number|null)[], totalKm: number}}
 *   legs[i] is the km from ordered[i-1] to ordered[i]; null when either
 *   endpoint lacks coordinates.
 */
export function orderNearestFirst(stops) {
  const pool = stops.filter((s) => Array.isArray(s.coords));
  const groundless = stops.filter((s) => !Array.isArray(s.coords));
  const ordered = [];

  if (pool.length > 0) {
    let current = pool.shift();
    ordered.push(current);
    while (pool.length > 0) {
      let best = 0;
      for (let i = 1; i < pool.length; i += 1) {
        if (distanceKm(current.coords, pool[i].coords) < distanceKm(current.coords, pool[best].coords)) {
          best = i;
        }
      }
      current = pool.splice(best, 1)[0];
      ordered.push(current);
    }
  }

  const all = [...ordered, ...groundless];
  const legs = legsFor(all);
  return { ordered: all, legs, totalKm: sumLegs(legs) };
}

/**
 * Straight-line legs between already-ordered stops.
 * @param {Kshetram[]} stops
 * @returns {(number|null)[]} legs[i] km from stops[i-1] (null for i=0 or missing coords)
 */
export function legsFor(stops) {
  return stops.map((stop, i) => {
    if (i === 0 || !Array.isArray(stop.coords) || !Array.isArray(stops[i - 1].coords)) return null;
    return distanceKm(stops[i - 1].coords, stop.coords);
  });
}

/**
 * Sums legs into a route total (null legs count 0).
 * @param {(number|null)[]} legs
 * @returns {number} total km
 */
export function sumLegs(legs) {
  return legs.reduce((sum, leg) => sum + (leg ?? 0), 0);
}
