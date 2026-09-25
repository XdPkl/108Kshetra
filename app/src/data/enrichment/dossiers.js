/**
 * Dossier templates — full-depth shrine content for the Divya Desam dossier
 * population (PO documents #1-#108, Reference Content/). One entry per
 * kshetram whose dossier entry resolves to it; serial is the dossier number.
 * Fields not present fall back to the approved samples (templates.js) and
 * then to the V2 region enrichment (timings, legacy puranam, pasuram).
 *
 * Dossier serials that duplicate a temple already covered, or that do not
 * correspond to one of the site's 108 kshetram ids (e.g. Thirukachoor), are
 * intentionally omitted — see Reference Content/README.md.
 *
 * Content lives in content/dossier-templates.json (editable via the Sanity CMS).
 */

import DOSSIER_TEMPLATES from '../content/dossier-templates.json';

export { DOSSIER_TEMPLATES };
