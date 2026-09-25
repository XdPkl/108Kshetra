/**
 * The twelve Azhwars — saints of the Nalayira Divya Prabandham.
 *
 * Content lives in content/azhwars.json (editable via the Sanity CMS).
 *
 * @typedef {Object} Azhwar
 * @property {string}  id            Stable slug (referenced by Kshetram.azhwars)
 * @property {string}  name          English display name
 * @property {string}  tamilName     Tamil script name
 * @property {string}  period        Traditional period
 * @property {number}  pasuramCount  Pasurams contributed to the Prabandham
 * @property {string}  note          Brief biographical note
 * @property {string}  work          Principal contribution
 */

import azhwars from './content/azhwars.json';

export { azhwars };
