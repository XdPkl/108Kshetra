/**
 * Pure filtering utilities for the kshetram dataset (FR-21/22).
 * No React dependency — fully unit-testable.
 */

/**
 * Case-insensitive free-text match across name, Tamil name, place,
 * temple, deity, and glorifying Azhwar names.
 * @param {Kshetram} k - candidate kshetram
 * @param {string} searchTerm - raw user input (trimmed here)
 * @param {Azhwar[]} azhwars - azhwar dataset for name resolution
 * @returns {boolean} true when the record matches
 */
export function matchesSearch(k, searchTerm, azhwars) {
  const term = searchTerm.trim().toLowerCase();
  if (!term) return true;
  const azhwarNames = k.azhwars
    .map((id) => azhwars.find((a) => a.id === id)?.name?.toLowerCase() ?? '')
    .join(' ');
  const haystack = [
    k.name, k.tamilName, k.place, k.temple, k.state, k.deity, k.region,
    azhwarNames,
  ].join(' ').toLowerCase();
  return haystack.includes(term);
}

/**
 * Returns kshetrams matching every active filter (AND semantics).
 * @param {Kshetram[]} kshetrams - full dataset
 * @param {Azhwar[]} azhwars - azhwar dataset for search resolution
 * @param {{search: string, state: string, deityForm: string, region: string, azhwar: string}} filters
 *        active filters; empty string means "not active"
 * @returns {Kshetram[]} filtered subset (new array; input untouched)
 */
export function filterKshetrams(kshetrams, azhwars, filters) {
  return kshetrams.filter((k) => {
    if (!matchesSearch(k, filters.search, azhwars)) return false;
    if (filters.state && k.state !== filters.state) return false;
    if (filters.deityForm && k.deityForm !== filters.deityForm) return false;
    if (filters.region && k.region !== filters.region) return false;
    // AND-composition is intentional: multiple filters narrow together (FR-22)
    if (filters.azhwar && !k.azhwars.includes(filters.azhwar)) return false;
    return true;
  });
}

/** @returns {boolean} true when no filter is active. */
export function isFiltersEmpty(filters) {
  return Object.values(filters).every((v) => !v || !v.trim());
}
