/**
 * Kshetram dataset — the 108 Divya Desams in traditional order.
 *
 * Content lives in content/kshetrams.json (editable via the Sanity CMS;
 * synced by .github/workflows/content-sync.yml). Array order defines the
 * DD serial numbers (getDDSerial) — do not reorder.
 *
 * @typedef {Object} Kshetram
 * @property {string}  id            Stable lowercase-kebab slug (public URL segment)
 * @property {string}  name          English display name
 * @property {string}  tamilName     Tamil script name
 * @property {string}  temple        Temple name
 * @property {string}  place         City/village and district
 * @property {string}  state         Indian state / Nepal / Celestial
 * @property {string}  region        Traditional grouping (Chola Nadu, Thondai Nadu, …)
 * @property {string}  deity         Presiding deity name
 * @property {string}  deityForm     Posture (Nindran/Kidandan/Irundhan)
 * @property {string[]} azhwars      Azhwar ids whose Mangalasasanam applies
 * @property {number}  pasuramCount  Documented pasuram count (0 = not documented yet)
 * @property {string}  significance  One-paragraph significance note
 * @property {string}  mapQuery      Google Maps search string ('' for celestial realms)
 */

import kshetrams from './content/kshetrams.json';

/** All 108 Divya Desams, in traditional order. */
export { kshetrams };
