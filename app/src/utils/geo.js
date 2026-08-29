/**
 * Geographic helpers for the nearby-desams and distance features (FR-63/67).
 */
const EARTH_RADIUS_KM = 6371;
const toRad = (deg) => (deg * Math.PI) / 180;

/**
 * Great-circle distance between two coordinates in km (Haversine).
 * @param {[number, number]} a - [lat, lng]
 * @param {[number, number]} b - [lat, lng]
 * @returns {number} distance in km (rounded to nearest whole km)
 */
export function distanceKm(a, b) {
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h)));
}

/**
 * Kshetrams within a radius of the given coordinates, nearest first.
 * @param {[number, number]} coords - origin [lat, lng]
 * @param {Kshetram[]} kshetrams - candidates with `coords`
 * @param {number} [radiusKm] - search radius (default 50, FR-63)
 * @returns {{kshetram: Kshetram, distanceKm: number}[]} sorted nearest first
 */
export function nearbyKshetrams(coords, kshetrams, radiusKm = 50) {
  return kshetrams
    .filter((k) => k.coords && (k.coords[0] !== coords[0] || k.coords[1] !== coords[1]))
    .map((k) => ({ kshetram: k, distanceKm: distanceKm(coords, k.coords) }))
    .filter((entry) => entry.distanceKm <= radiusKm)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}
