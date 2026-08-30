/**
 * Region → marker color mapping for the map page and legend (FR-76/77).
 * Colors derive from the dataset's region list (NFR-05): adding a region
 * automatically extends the legend with the next palette entry.
 */
const PALETTE = [
  '#B34700', // deep saffron
  '#1F6E43', // forest green
  '#1F4E79', // indigo blue
  '#7A2E00', // dark sienna
  '#5B3A8E', // plum
  '#8A6D1F', // olive gold
  '#A32020', // temple red
  '#2F6B6B', // teal
];

/**
 * Builds a stable region→color map. Visited markers override the stroke
 * with temple gold, so fills stay the region color.
 * @param {string[]} regions - unique region names (any order; sorted for stability)
 * @returns {Record<string, string>}
 */
export function buildRegionColors(regions) {
  const sorted = [...regions].sort((a, b) => a.localeCompare(b));
  return Object.fromEntries(sorted.map((region, i) => [region, PALETTE[i % PALETTE.length]]));
}
