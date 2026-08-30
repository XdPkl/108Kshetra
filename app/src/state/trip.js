/**
 * Trip store — ordered list of kshetram ids the visitor is planning to visit
 * (FR-79/80/81). localStorage-backed like the visited store; duplicates are
 * prevented; order is the user's route order (see utils/route.js).
 */
const STORAGE_KEY = 'kshetra.trip.v1';
export const TRIP_STORAGE_KEY = STORAGE_KEY;

function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

let ids = load();
const listeners = new Set();

function persistAndNotify() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* storage unavailable — in-memory only */
  }
  listeners.forEach((fn) => fn());
}

/** @returns {string[]} trip kshetram ids in route order (stable snapshot). */
export function getTripSnapshot() {
  return ids;
}

/** @returns {boolean} true when the kshetram is in the trip. */
export function isInTrip(id) {
  return ids.includes(id);
}

/** Adds a kshetram to the trip (no duplicates). */
export function addToTrip(id) {
  if (ids.includes(id)) return;
  ids = [...ids, id];
  persistAndNotify();
}

/** Removes a kshetram from the trip. */
export function removeFromTrip(id) {
  if (!ids.includes(id)) return;
  ids = ids.filter((x) => x !== id);
  persistAndNotify();
}

/** Toggles trip membership. @returns {boolean} true when now in the trip. */
export function toggleTrip(id) {
  if (ids.includes(id)) {
    removeFromTrip(id);
    return false;
  }
  addToTrip(id);
  return true;
}

/**
 * Replaces the whole trip (order preserved) — used by "Order my route"
 * and by shared-link restore (FR-81). Ids already in the trip keep their
 * relative position at the end; unknown ids are kept as-is (validated by
 * the caller against the dataset).
 * @param {string[]} nextIds
 */
export function setTrip(nextIds) {
  const unique = [...new Set(nextIds.filter((x) => typeof x === 'string'))];
  ids = unique;
  persistAndNotify();
}

/** Clears the trip (caller confirms first). */
export function clearTrip() {
  if (ids.length > 0) {
    ids = [];
    persistAndNotify();
  }
}

/**
 * @param {() => void} fn - listener invoked after every change
 * @returns {() => void} unsubscribe
 */
export function subscribeTrip(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Encodes trip ids for a share URL (ids contain no commas). */
export function encodeTrip(tripIds) {
  return tripIds.join(',');
}

/** Decodes a share-URL param into id list (empty strings dropped). */
export function decodeTrip(param) {
  return (param ?? '')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
}
