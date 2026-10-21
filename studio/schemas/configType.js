/**
 * Config singleton (_id = "config") — mirrors content/config.json: site
 * stats, the curated featured lists (as document pickers), the Maps URL
 * templates and the unavailable-source-domain list (link-audit L2).
 */
import {defineType} from 'sanity';
import {S, N, RA, SA} from './_helpers.js';

const configType = defineType({
  name: 'config',
  title: 'Featured & Settings',
  type: 'document',
  fields: [
    {name: 'stats', type: 'object', title: 'Site statistics', fields: [
      N('kshetramCount', 'Kshetram count', {validation: (r) => r.required()}),
      N('azhwarCount', 'Azhwar count', {validation: (r) => r.required()}),
      N('pasuramCount', 'Pasuram count', {validation: (r) => r.required()}),
    ]},
    RA('featuredKshetrams', 'kshetram', 'Featured kshetrams (Home)', {description: 'Four cards on the Home page.'}),
    RA('featuredAcharyas', 'acharya', 'Featured acharyas (Home strip)'),
    S('mapsUrlTemplate', 'Maps URL template', {description: 'Google Maps search prefix — rarely changed.'}),
    S('mapsDirectionsUrlTemplate', 'Maps directions URL template', {description: 'Google Maps directions API prefix (link-audit L3) — rarely changed.'}),
    SA('unavailableSourceDomains', 'Unavailable source domains', {description: 'Repository domains that could not be reached — their citations render "temporarily unavailable" until the content owner verifies them (link-audit L2).'}),
  ],
  preview: {prepare: () => ({title: 'Featured & Settings', subtitle: 'Home featured lists, site stats'})},
});

export default configType;
