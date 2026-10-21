/**
 * Application configuration — the single place to extend curated content
 * without touching UI code (NFR-05).
 *
 * Content lives in content/config.json (editable via the Sanity CMS).
 */

import config from './content/config.json';

/** Site-wide statistics shown on the Home page. */
export const SITE_STATS = config.SITE_STATS;

/** Curated featured kshetram ids for the Home page. */
export const FEATURED_KSHETRAM_IDS = config.FEATURED_KSHETRAM_IDS;

/** Curated featured acharya ids for the Home page darshan strip. */
export const FEATURED_ACHARYA_IDS = config.FEATURED_ACHARYA_IDS;

/** Google Maps search URL template (FR-32). */
export const MAPS_URL_TEMPLATE = config.MAPS_URL_TEMPLATE;

/**
 * Google Maps URL builders (link-audit L3): search and directions are
 * SEPARATE actions — "Get directions" must open directions mode with an
 * explicit destination (verified dataset coordinates preferred, place name
 * as fallback), never a search with "directions to" embedded in the query.
 * See https://developers.google.com/maps/documentation/urls/get-started.
 */
export const MAPS_DIRECTIONS_URL_TEMPLATE = config.MAPS_DIRECTIONS_URL_TEMPLATE;

/** A Maps search/pin URL for a place query (the "View on map" action). */
export const mapsSearchUrl = (query) => `${MAPS_URL_TEMPLATE}${encodeURIComponent(query)}`;

/** A Maps directions URL — destination is coordinates ("lat,lng") or a place name. */
export const mapsDirectionsUrl = (destination) => `${MAPS_DIRECTIONS_URL_TEMPLATE}${encodeURIComponent(destination)}`;

/**
 * Link-audit L2: source repository domains that could NOT be reached and are
 * pending review by the content owner. Rows citing these render their title
 * and domain with an honest "temporarily unavailable" note instead of an
 * active link — no substitute URL is invented. Remove a domain here once the
 * owner verifies it (or supplies the canonical URL).
 */
export const UNAVAILABLE_SOURCE_DOMAINS = config.UNAVAILABLE_SOURCE_DOMAINS;
