/**
 * Shared object schemas — each mirrors a fragment of the app's JSON shapes
 * (app/src/data/content/*.json). The import/sync transforms
 * (studio/scripts/lib/) map between these and the app storage format, so
 * field names deliberately match the JSON keys.
 */
import {S, T, N, SA, R, RA, O} from './_helpers.js';

/* ---------- shared: photos ---------- */

/** Photo entry: uploaded image OR absolute URL (or wiki-title fallback). */
export const photo = O('photo', 'Photo', [
  {name: 'image', type: 'image', title: 'Uploaded photo', options: {hotspot: true}},
  {name: 'srcUrl', type: 'url', title: 'Photo URL (absolute https link)', description: 'Only when the photo lives on another site. An uploaded image wins if both are set.'},
  S('wiki', 'Wikipedia article title (fallback)', {description: 'Used only when neither an upload nor a URL is given — the site shows that article\u2019s lead photo.'}),
  S('alt', 'Alt text (describe the photo)', {validation: (r) => r.required()}),
  S('credit', 'Credit line'),
]);

/* ---------- saints: timeline / life history / verse ---------- */

export const timelineEntry = O('timelineEntry', 'Timeline entry', [
  S('when', 'When'),
  T('event', 'Event'),
]);

/** {heading, paragraphs[]} — serializes to the app's structured lifeHistory item. */
export const lifeEntry = O('lifeEntry', 'Life-history section', [
  S('heading', 'Heading'),
  {name: 'paragraphs', type: 'array', title: 'Paragraphs', of: [{type: 'string'}]},
]);

/** {text} — serializes to a plain string lifeHistory item. */
export const lifeNote = O('lifeNote', 'Life-history note (plain)', [
  T('text', 'Text'),
]);

export const commentaryEntry = O('commentaryEntry', 'Commentary entry', [
  S('heading', 'Heading'),
  T('text', 'Text'),
]);

export const wordMeaning = O('wordMeaning', 'Word meaning', [
  S('word', 'Word'),
  T('meaning', 'Meaning'),
]);

/** Saint verse: Tamil, transliteration, word-by-word meanings, commentary. */
export const verse = O('verse', 'Verse', [
  S('work', 'Work / reference'),
  T('tamil', 'Tamil original'),
  T('transliteration', 'Transliteration (IAST)'),
  T('translit', 'Transliteration (plain)'),
  T('meaning', 'Meaning (prose)'),
  T('significance', 'Significance'),
  {name: 'wordMeanings', type: 'array', title: 'Word meanings', of: [{type: 'wordMeaning'}]},
  {name: 'commentary', type: 'array', title: 'Commentary', of: [{type: 'commentaryEntry'}]},
  S('audio', 'Audio link (archive.org URL)'),
]);

export const legend = O('legend', 'Legend', [
  S('title', 'Title'),
  T('text', 'Text'),
]);

export const saintWork = O('saintWork', 'Work', [
  S('name', 'Name'),
  N('pasurams', 'Pasuram count'),
  S('language', 'Language'),
]);

export const iconography = O('iconography', 'Iconography', [
  S('posture', 'Posture'),
  S('mudras', 'Mudras'),
  S('garments', 'Garments'),
  S('idol', 'Idol'),
]);

export const saintVisuals = O('saintVisuals', 'Visuals & sources', [
  T('iconographyText', 'Iconography (plain text)', {description: 'If set, this replaces the structured iconography fields.'}),
  {name: 'iconography', type: 'iconography', title: 'Iconography (structured)'},
  SA('videoSearches', 'Video search phrases'),
  SA('digitalTexts', 'Digital-text links'),
]);

/* ---------- kshetram V2 enrichment ---------- */

export const deityBrief = O('deityBrief', 'Deity (V2 brief)', [
  S('name', 'Name'),
  S('tamilName', 'Tamil name'),
  S('form', 'Form / posture'),
]);

export const timings = O('timings', 'Temple timings (V2)', [
  {name: 'morning', type: 'array', title: 'Morning (open, close)', of: [{type: 'string'}], validation: (r) => r.length(2)},
  {name: 'evening', type: 'array', title: 'Evening (open, close)', of: [{type: 'string'}], validation: (r) => r.length(2)},
  T('notes', 'Notes (festivals etc.)'),
]);

export const pasuramRef = O('pasuramRef', 'Signature pasuram (V2)', [
  R('azhwar', 'azhwar', 'Azhwar'),
  S('reference', 'Reference (e.g. Periya Thirumozhi 2-8)'),
  S('work', 'Work'),
  T('meaning', 'Meaning'),
  T('tamil', 'Tamil original'),
  T('transliteration', 'Transliteration'),
]);

/* ---------- dossier deep content ---------- */

export const namesTri = O('namesTri', 'Names (Tamil / Sanskrit / transliteration)', [
  S('tamil', 'Tamil'),
  S('sanskrit', 'Sanskrit'),
  S('translit', 'Transliteration'),
]);

export const thaayarDossier = O('thaayarDossier', 'Thaayar', [
  S('name', 'Name'),
  T('legend', 'Legend'),
]);

export const deityDossier = O('deityDossier', 'Deity (dossier)', [
  {name: 'names', type: 'namesTri', title: 'Names'},
  T('etymology', 'Etymology'),
  {name: 'thaayar', type: 'thaayarDossier', title: 'Consort'},
  {name: 'photos', type: 'array', title: 'Photos', of: [{type: 'photo'}]},
]);

export const dossierProfile = O('dossierProfile', 'Shrine profile', [
  S('regionNote', 'Region note'),
  T('location', 'Location (incl. GPS text)'),
  S('gps', 'GPS coordinates'),
  S('vimanam', 'Vimanam'),
  S('theertham', 'Theertham'),
  S('sthalaVriksham', 'Sthala vriksham'),
  T('posture', 'Posture note'),
  S('orientation', 'Orientation'),
]);

export const dossierPuranam = O('dossierPuranam', 'Sthala puranam', [
  T('prathyaksham', 'Prathyaksham'),
  T('timeline', 'Timeline note'),
  {name: 'legend', type: 'array', title: 'Legend sections', of: [{type: 'string'}]},
  SA('invasions', 'Invasions / restorations'),
  SA('milestones', 'Milestones'),
  SA('literature', 'Literature references'),
]);

export const excerpt = O('excerpt', 'Mangalasasanam excerpt', [
  R('azhwar', 'azhwar', 'Azhwar'),
  S('work', 'Work (e.g. Periya Thirumozhi 5.6.2)'),
  T('tamil', 'Tamil original'),
  T('transliteration', 'Transliteration'),
  {name: 'wordMeanings', type: 'array', title: 'Word meanings', of: [{type: 'wordMeaning'}]},
  T('significance', 'Significance'),
  T('verse', 'Verse details'),
  S('audio', 'Audio link'),
]);

export const perAzhwarEntry = O('perAzhwarEntry', 'Azhwar & pasuram count', [
  R('azhwar', 'azhwar', 'Azhwar'),
  N('count', 'Pasurams here'),
]);

export const mangalasasanam = O('mangalasasanam', 'Mangalasasanam', [
  {name: 'perAzhwar', type: 'array', title: 'Azhwars who sanctified this desam', of: [{type: 'perAzhwarEntry'}]},
  {name: 'excerpts', type: 'array', title: 'Excerpts', of: [{type: 'excerpt'}]},
]);

export const dossierVisuals = O('dossierVisuals', 'Visual descriptions', [
  {name: 'descriptions', type: 'array', title: 'Descriptions', of: [{type: 'string'}]},
  SA('videoSearches', 'Video search phrases'),
  SA('literature', 'Literature references'),
]);
