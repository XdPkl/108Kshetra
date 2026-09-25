/**
 * Acharya document — the guru parampara (_id = "acharya.<slug>"). One merged
 * record; the sync transform writes it straight back to acharyas.json.
 */
import {defineType} from 'sanity';
import {S, T, SA, R, RA} from './_helpers.js';

const acharya = defineType({
  name: 'acharya',
  title: 'Acharya',
  type: 'document',
  groups: [
    {name: 'base', title: 'Base Record'},
    {name: 'life', title: 'Life & Legend'},
    {name: 'verse', title: 'Verse & Works'},
    {name: 'media', title: 'Photo'},
  ],
  fields: [
    // --- base ---
    {name: 'order', type: 'number', title: 'Listing order', group: 'base', readOnly: true, description: 'Preserves the traditional listing — managed by the sync tooling.'},
    S('name', 'English name', {group: 'base', validation: (r) => r.required()}),
    S('tamilName', 'Tamil name', {group: 'base', validation: (r) => r.required()}),
    S('eraGroup', 'Era group', {group: 'base', description: 'e.g. "Preceptors before Sri Ramanuja" — drives the index grouping.'}),
    S('era', 'Era', {group: 'base'}),
    S('role', 'Index role (one line)', {group: 'base', validation: (r) => r.required()}),
    SA('titles', 'Titles', {group: 'base'}),
    {name: 'guru', type: 'reference', title: 'Guru (acharya)', group: 'base', to: [{type: 'acharya'}]},
    RA('sishyas', 'acharya', 'Prominent sishyas', {group: 'base'}),

    // --- life ---
    S('birthMonth', 'Birth month', {group: 'life'}),
    S('birthStar', 'Birth star', {group: 'life'}),
    S('tithi', 'Tithi', {group: 'life'}),
    {name: 'birthplace', type: 'object', title: 'Birthplace', group: 'life', fields: [
      S('name', 'Name'),
      S('district', 'District'),
      R('birthKshetram', 'kshetram', 'Divya Desam (if birthplace is one)'),
    ]},
    S('amsam', 'Amsam (divine aspect)', {group: 'life'}),
    R('amsamAcharya', 'acharya', 'Amsam acharya'),
    {name: 'timeline', type: 'array', title: 'Timeline', group: 'life', of: [{type: 'timelineEntry'}]},
    {name: 'lifeHistory', type: 'array', title: 'Life history', group: 'life', of: [{type: 'lifeEntry'}, {type: 'lifeNote'}], description: 'Leave empty for "content pending" records — the site shows the pending marker.'},
    {name: 'legend', type: 'legend', title: 'Legend', group: 'life'},
    RA('associatedDesams', 'kshetram', 'Associated Divya Desams', {group: 'life'}),

    // --- verse & works ---
    S('worksSummary', 'Works summary (one line)', {group: 'verse'}),
    {name: 'works', type: 'array', title: 'Works', group: 'verse', of: [{type: 'saintWork'}]},
    T('preservation', 'Preservation note', {group: 'verse'}),
    T('philosophicalTheme', 'Philosophical theme', {group: 'verse'}),
    {name: 'verse', type: 'verse', title: 'Featured verse', group: 'verse'},
    {name: 'visuals', type: 'saintVisuals', title: 'Visuals & digital texts', group: 'verse'},
    SA('sources', 'Sources', {group: 'verse'}),

    // --- media ---
    S('wiki', 'Wikipedia article title (photo fallback)', {group: 'media'}),
    {name: 'photos', type: 'array', title: 'Photos', group: 'media', of: [{type: 'photo'}], description: 'The first photo is the Identification portrait.'},
  ],
  orderings: [
    {
      name: 'eraGroupOrder',
      title: 'By era group',
      by: ['eraGroup', 'name'],
    },
  ],
  preview: {
    select: {title: 'name', tamil: 'tamilName', era: 'eraGroup', media: 'photos.0.image'},
    prepare({title, tamil, era, media}) {
      return {title: title ?? 'Untitled', subtitle: [tamil, era].filter(Boolean).join(' · '), media};
    },
  },
});

export default acharya;
