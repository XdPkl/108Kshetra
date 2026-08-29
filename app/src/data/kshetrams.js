/**
 * Kshetram dataset — aggregates all 108 Divya Desams by region.
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

import { thondaiKshetrams } from './kshetrams/thondai.js';
import { thondaiKanchiKshetrams } from './kshetrams/thondai-kanchi.js';
import { cholaKaveriKshetrams } from './kshetrams/chola-kaveri.js';
import { cholaThanjavurKshetrams } from './kshetrams/chola-thanjavur.js';
import { cholaTirunangurKshetrams } from './kshetrams/chola-tirunangur.js';
import { tirunangurElevenKshetrams } from './kshetrams/tirunangur-eleven.js';
import { naduNaduKshetrams } from './kshetrams/nadu-nadu.js';
import { pandyaKshetrams } from './kshetrams/pandya.js';
import { pandyaMaduraiKshetrams } from './kshetrams/pandya-madurai.js';
import { malaiKshetrams } from './kshetrams/malai.js';
import { vadaKshetrams } from './kshetrams/vada.js';

/** All 108 Divya Desams, grouped in traditional order. */
export const kshetrams = [
  ...thondaiKshetrams,
  ...thondaiKanchiKshetrams,
  ...cholaKaveriKshetrams,
  ...cholaThanjavurKshetrams,
  ...cholaTirunangurKshetrams,
  ...tirunangurElevenKshetrams,
  ...naduNaduKshetrams,
  ...pandyaKshetrams,
  ...pandyaMaduraiKshetrams,
  ...malaiKshetrams,
  ...vadaKshetrams,
];
