/**
 * Approximate geographic coordinates for the 106 earthly Divya Desams.
 * Precision ~0.01° — sufficient for the 50 km "nearby" feature (FR-63) and
 * straight-line distance (FR-67); distances shown are indicative only.
 * The 2 celestial desams have no coordinates.
 *
 * Content lives in content/coords.json (editable via the Sanity CMS).
 */

import COORDS from '../content/coords.json';

export { COORDS };
