/**
 * Shrine templates — full-detail records per the PO sample documents
 * (US-DTL-15, FR-83). Every field is optional: pages render whatever depth
 * exists and fall back to legacy V2 enrichment, then to the documented
 * "not yet documented" note.
 *
 * Content lives in content/templates.json (editable via the Sanity CMS).
 *
 * Shape (all optional):
 *  serial, profile {regionNote, location, gps, vimanam, theertham,
 *    sthalaVriksham, posture, orientation},
 *  deities {moolavar|urchavar: {names {tamil, sanskrit, translit}, etymology,
 *    thaayar {name, legend}, photos [{src|wiki, alt, credit?}]}},
 *  puranam {legend[], prathyaksham?, timeline?, invasions?, milestones?, literature?},
 *  …(see content/templates.json for the full populated shape)
 */

import TEMPLATES from '../content/templates.json';

export { TEMPLATES };
