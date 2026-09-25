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
