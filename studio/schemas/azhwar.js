/**
 * Azhwar document — the twelve saint-poets (_id = "azhwar.<slug>"). Merges
 * the base record (azhwars.json) and the saint dossier (azhwar-details.json);
 * the sync transform splits them back apart.
 */
import {defineType} from 'sanity';
import {S, T, N, SA, R, RA} from './_helpers.js';

const azhwar = defineType({
  name: 'azhwar',
  title: 'Azhwar',
  type: 'document',
  groups: [
    {name: 'base', title: 'Base Record'},
    {name: 'life', title: 'Life & Legend'},
    {name: 'verse', title: 'Verse & Works'},
    {name: 'media', title: 'Photo'},
  ],
  fields: [
    // --- base ---
    N('order', 'Traditional order (1–12)', {group: 'base', validation: (r) => r.required().min(1).max(12)}),
    S('name', 'English name', {group: 'base', validation: (r) => r.required()}),
    S('tamilName', 'Tamil name', {group: 'base', validation: (r) => r.required()}),
    S('period', 'Traditional period', {group: 'base', validation: (r) => r.required()}),
    N('pasuramCount', 'Pasuram count', {group: 'base', validation: (r) => r.required().min(1)}),
    T('note', 'Biographical note', {group: 'base', validation: (r) => r.required()}),
    S('work', 'Principal contribution', {group: 'base', validation: (r) => r.required()}),

    // --- life ---
    SA('epithets', 'Epithets', {group: 'life'}),
    S('birthMonth', 'Birth month', {group: 'life'}),
    S('birthStar', 'Birth star', {group: 'life'}),
    S('tithi', 'Tithi', {group: 'life'}),
    {name: 'birthplace', type: 'object', title: 'Birthplace', group: 'life', fields: [
      S('name', 'Name'),
      S('district', 'District'),
      R('birthKshetram', 'kshetram', 'Divya Desam (if birthplace is one)'),
    ]},
    S('amsam', 'Amsam (divine aspect)', {group: 'life'}),
    S('bhaktiBhava', 'Bhakti bhava (devotional stance)', {group: 'life'}),
    {name: 'era', type: 'object', title: 'Era', group: 'life', fields: [S('academic', 'Academic dating')]},
    {name: 'timeline', type: 'array', title: 'Timeline', group: 'life', of: [{type: 'timelineEntry'}]},
    {name: 'lifeHistory', type: 'array', title: 'Life history', group: 'life', of: [{type: 'lifeEntry'}, {type: 'lifeNote'}]},
    {name: 'legend', type: 'legend', title: 'Legend', group: 'life'},
    T('preservation', 'Preservation note', {group: 'life'}),
    RA('associatedDesams', 'kshetram', 'Associated Divya Desams', {group: 'life'}),

    // --- verse & works ---
    {name: 'works', type: 'array', title: 'Works', group: 'verse', of: [{type: 'saintWork'}]},
    {name: 'verse', type: 'verse', title: 'Featured verse', group: 'verse'},
    {name: 'visuals', type: 'saintVisuals', title: 'Visuals & digital texts', group: 'verse'},
    SA('sources', 'Sources', {group: 'verse'}),

    // --- media ---
    S('wiki', 'Wikipedia article title (photo fallback)', {group: 'media'}),
    {name: 'photos', type: 'array', title: 'Photos', group: 'media', of: [{type: 'photo'}], description: 'The first photo is the Identification portrait.'},
  ],
  preview: {
    select: {title: 'name', tamil: 'tamilName', order: 'order', media: 'photos.0.image'},
    prepare({title, tamil, order, media}) {
      return {title: `${order ? `${order}. ` : ''}${title ?? 'Untitled'}`, subtitle: tamil, media};
    },
  },
});

export default azhwar;
