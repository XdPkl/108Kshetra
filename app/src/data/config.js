/**
 * Application configuration — the single place to extend curated content
 * without touching UI code (NFR-05).
 */

/** Site-wide statistics shown on the Home page. */
export const SITE_STATS = {
  kshetramCount: 108,
  azhwarCount: 12,
  pasuramCount: 4000,
};

/** Curated featured kshetram ids for the Home page. */
export const FEATURED_KSHETRAM_IDS = [
  'srirangam',
  'tirupati',
  'kanchi-varadaraja',
  'srivilliputhur',
];

/** Google Maps search URL template (FR-32). */
export const MAPS_URL_TEMPLATE = 'https://www.google.com/maps/search/';
