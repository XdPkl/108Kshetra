/**
 * Pure grouping/dedup utilities shared across pages.
 */

/**
 * Unique values of a string list, sorted alphabetically (locale-aware).
 * @param {string[]} values
 * @returns {string[]}
 */
export function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

/**
 * Groups items by a string key, preserving first-seen key order.
 * @template T
 * @param {T[]} items
 * @param {(item: T) => string} keyFn
 * @returns {Map<string, T[]>}
 */
export function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    const bucket = map.get(key);
    if (bucket) bucket.push(item);
    else map.set(key, [item]);
  }
  return map;
}
