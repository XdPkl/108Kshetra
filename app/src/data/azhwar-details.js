/**
 * Azhwar details — saint-template enrichment (US-AZW-03, FR-91) merged onto
 * the base records by the data layer. Every field is optional: pages render
 * what exists and show the documented fallback where absent.
 *
 * Content lives in content/azhwar-details.json (editable via the Sanity CMS).
 *
 * Shape (all optional):
 *  wiki? (Wikipedia article title — drives the featured-strip thumbnail via WikiThumb),
 *  photos? [{src, alt, credit?}] (up to 2 — the Identification portrait; src is a
 *          site-relative path resolved by assetUrl(), e.g. 'photos/…', or an
 *          absolute CDN URL),
 *  order, epithets[], birthMonth, birthStar, tithi?,
 *  …(see content/azhwar-details.json for the full populated shape)
 */

import AZHWAR_DETAILS from './content/azhwar-details.json';

export { AZHWAR_DETAILS };
