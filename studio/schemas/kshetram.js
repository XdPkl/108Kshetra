/**
 * Kshetram document — one per Divya Desam (_id = "kshetram.<slug>", created
 * by the import script). Holds the base record, the V2 enrichment group, the
 * full PO dossier group, coordinates and photos. The sync transform splits
 * this back into kshetrams.json / enrichment.json / templates.json /
 * dossier-templates.json / coords.json.
 */
import {defineType} from 'sanity';
import {S, T, N, RA} from './_helpers.js';

const kshetram = defineType({
  name: 'kshetram',
  title: 'Kshetram',
  type: 'document',
  groups: [
    {name: 'base', title: 'Base Record'},
    {name: 'v2', title: 'Shrine Profile (V2)'},
    {name: 'dossier', title: 'Full Dossier'},
    {name: 'media', title: 'Photo & Location'},
  ],
  fields: [
    // --- base ---
    {name: 'order', type: 'number', title: 'Traditional order (1–108)', group: 'base', validation: (r) => r.required().min(1).max(108), readOnly: true, description: 'Defines the Divya Desam serial — managed by the sync tooling.'},
    S('name', 'English name', {group: 'base', validation: (r) => r.required()}),
    S('tamilName', 'Tamil name', {group: 'base', validation: (r) => r.required()}),
    S('temple', 'Temple', {group: 'base', validation: (r) => r.required()}),
    S('place', 'Place', {group: 'base', validation: (r) => r.required()}),
    S('state', 'State', {group: 'base', validation: (r) => r.required()}),
    S('region', 'Region', {group: 'base', validation: (r) => r.required()}),
    S('deity', 'Presiding deity', {group: 'base', validation: (r) => r.required()}),
    S('deityForm', 'Deity form / posture', {group: 'base', validation: (r) => r.required()}),
    RA('azhwars', 'azhwar', 'Mangalasasanam by', {group: 'base'}),
    N('pasuramCount', 'Pasuram count', {group: 'base', validation: (r) => r.required().min(0)}),
    T('significance', 'Significance', {group: 'base', validation: (r) => r.required()}),
    S('mapQuery', 'Google Maps search', {group: 'base', description: 'Empty for the celestial realms.'}),

    // --- V2 ---
    {name: 'timings', type: 'timings', title: 'Timings', group: 'v2'},
    S('wiki', 'Wikipedia article title (photo fallback)', {group: 'v2'}),
    {name: 'moolavar', type: 'deityBrief', title: 'Moolavar (V2)', group: 'v2'},
    {name: 'thaayar', type: 'deityBrief', title: 'Thaayar (V2)', group: 'v2'},
    {name: 'urchavar', type: 'deityBrief', title: 'Urchavar (V2)', group: 'v2'},
    T('puranam', 'Puranam (V2, one paragraph)', {group: 'v2'}),
    {name: 'pasuram', type: 'pasuramRef', title: 'Signature pasuram (V2)', group: 'v2'},

    // --- dossier ---
    N('serial', 'Dossier serial', {group: 'dossier', description: 'The dossier number this content came from.'}),
    {name: 'isApprovedSample', type: 'boolean', title: 'Approved sample (Srirangam)', group: 'dossier', readOnly: true, description: 'Routes this record to templates.json instead of dossier-templates.json. Managed by tooling.'},
    {name: 'profile', type: 'dossierProfile', title: 'Shrine profile', group: 'dossier'},
    {name: 'deities', type: 'object', title: 'Deities', group: 'dossier', fields: [
      {name: 'moolavar', type: 'deityDossier', title: 'Moolavar'},
      {name: 'urchavar', type: 'deityDossier', title: 'Urchavar'},
      T('sanctumNote', 'Sanctum note'),
    ]},
    {name: 'puranamDetail', type: 'dossierPuranam', title: 'Sthala puranam (dossier)', group: 'dossier'},
    {name: 'mangalasasanam', type: 'mangalasasanam', title: 'Mangalasasanam', group: 'dossier'},
    {name: 'visuals', type: 'dossierVisuals', title: 'Visual descriptions', group: 'dossier'},

    // --- media & location ---
    {name: 'photo', type: 'image', title: 'Card / hero photo', group: 'media', options: {hotspot: true}, description: 'Shown on browse cards and the featured strip. Falls back to the Wikipedia photo if empty.'},
    {name: 'coords', type: 'geopoint', title: 'Coordinates', group: 'media', description: 'Leave empty only for the two celestial realms.'},
  ],
  preview: {
    select: {title: 'name', tamil: 'tamilName', region: 'region', media: 'photo'},
    prepare({title, tamil, region, media}) {
      return {title: title ?? 'Untitled', subtitle: [tamil, region].filter(Boolean).join(' · '), media};
    },
  },
});

export default kshetram;
