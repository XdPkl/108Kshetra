/**
 * Visited store — localStorage-backed pub/sub state for darshan progress
 * (FR-71/72/75). UI state only: never leaves the browser. Snapshots are
 * stable references between changes so useSyncExternalStore can subscribe.
 */
const STORAGE_KEY = 'kshetra.visited.v1';
export const VISITED_STORAGE_KEY = STORAGE_KEY;

function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return []; // storage unavailable — degrade to session-only (UXD §20)
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

/** @returns {string[]} visited kshetram ids (stable snapshot reference). */
export function getVisitedSnapshot() {
  return ids;
}

/** @returns {boolean} true when the kshetram is marked visited. */
export function isVisited(id) {
  return ids.includes(id);
}

/**
 * Sets the visited flag for one kshetram.
 * @param {string} id - kshetram slug
 * @param {boolean} value
 */
export function markVisited(id, value) {
  const has = ids.includes(id);
  if (value && !has) {
    ids = [...ids, id];
    persistAndNotify();
  } else if (!value && has) {
    ids = ids.filter((x) => x !== id);
    persistAndNotify();
  }
}

/** Toggles the visited flag for one kshetram. */
export function toggleVisited(id) {
  markVisited(id, !ids.includes(id));
}

/** Clears every visited mark (caller confirms first — FR-75). */
export function resetVisited() {
  if (ids.length > 0) {
    ids = [];
    persistAndNotify();
  }
}

/**
 * @param {() => void} fn - listener invoked after every change
 * @returns {() => void} unsubscribe
 */
export function subscribeVisited(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
