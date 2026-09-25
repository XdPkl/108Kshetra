/**
 * Transform: app content JSON (app/src/data/content/*.json) → Sanity documents.
 *
 * Pure except for `resolvePhoto`, which decides how photo entries with a
 * site-relative src ('photos/x.jpg') become Sanity data:
 *  - local mode: keep the path in `srcUrl` (no upload)
 *  - live import: upload the file from app/public/photos/ and return an image ref
 *
 * Deterministic _ids ("kshetram.<slug>" etc.) make re-imports idempotent via
 * createOrReplace.
 */

export const kshetramRef = (id) => ({_type: 'reference', _ref: `kshetram.${id}`});
export const azhwarRef = (id) => ({_type: 'reference', _ref: `azhwar.${id}`});
export const acharyaRef = (id) => ({_type: 'reference', _ref: `acharya.${id}`});

const toPhotoDoc = async (photo, resolvePhoto) => {
  if (!photo) return undefined;
  const out = {};
  if (photo.src) Object.assign(out, await resolvePhoto(photo.src));
  if (photo.wiki) out.wiki = photo.wiki;
  out.alt = photo.alt ?? '';
  if (photo.credit) out.credit = photo.credit;
  return out;
};

const toPhotos = async (photos, resolvePhoto) =>
  photos?.length ? Promise.all(photos.map((p) => toPhotoDoc(p, resolvePhoto))) : undefined;

const toWordMeaningObjs = (pairs) =>
  pairs?.length ? pairs.map(([word, meaning]) => ({word, meaning})) : undefined;

const toVerseDoc = (verse) => {
  if (!verse) return undefined;
  const out = {};
  for (const key of ['work', 'tamil', 'transliteration', 'translit', 'meaning', 'significance', 'audio']) {
    if (verse[key] != null) out[key] = verse[key];
  }
  if (verse.wordMeanings?.length) out.wordMeanings = toWordMeaningObjs(verse.wordMeanings);
  if (verse.commentary?.length) out.commentary = verse.commentary;
  return out;
};

const toLifeHistory = (items) =>
  items?.length
    ? items.map((item) =>
        typeof item === 'string' ? {_type: 'lifeNote', text: item} : {_type: 'lifeEntry', ...item},
      )
    : undefined;

const toVisualsDoc = async (visuals, resolvePhoto) => {
  if (!visuals) return undefined;
  const out = {};
  if (visuals.iconography != null) {
    if (typeof visuals.iconography === 'string') out.iconographyText = visuals.iconography;
    else out.iconography = visuals.iconography;
  }
  if (visuals.videoSearches?.length) out.videoSearches = visuals.videoSearches;
  if (visuals.digitalTexts?.length) out.digitalTexts = visuals.digitalTexts;
  return Object.keys(out).length ? out : undefined;
};

export async function toSanityDocs(content, resolvePhoto) {
  const {kshetrams, azhwars, AZHWAR_DETAILS, acharyas, ABOUT, SITE_COPY, config, ENRICHMENT, COORDS, TEMPLATES, DOSSIER_TEMPLATES} = content;

  /* ---------- azhwars ---------- */
  const azhwarDocs = [];
  for (const base of azhwars) {
    const d = AZHWAR_DETAILS[base.id] ?? {};
    const doc = {
      _id: `azhwar.${base.id}`,
      _type: 'azhwar',
      order: d.order,
      name: base.name,
      tamilName: base.tamilName,
      period: base.period,
      pasuramCount: base.pasuramCount,
      note: base.note,
      work: base.work,
    };
    for (const key of ['wiki', 'epithets', 'birthMonth', 'birthStar', 'tithi', 'amsam', 'bhaktiBhava', 'era', 'timeline', 'legend', 'works', 'preservation', 'sources']) {
      if (d[key] != null) doc[key] = d[key];
    }
    if (d.birthplace) {
      doc.birthplace = {...d.birthplace};
      if (d.birthplace.kshetramId) {
        doc.birthplace.birthKshetram = kshetramRef(d.birthplace.kshetramId);
        delete doc.birthplace.kshetramId;
      }
    }
    if (d.associatedDesams?.length) doc.associatedDesams = d.associatedDesams.map(kshetramRef);
    const lifeHistory = toLifeHistory(d.lifeHistory);
    if (lifeHistory) doc.lifeHistory = lifeHistory;
    const verse = toVerseDoc(d.verse);
    if (verse) doc.verse = verse;
    const visuals = await toVisualsDoc(d.visuals, resolvePhoto);
    if (visuals) doc.visuals = visuals;
    const photos = await toPhotos(d.photos, resolvePhoto);
    if (photos) doc.photos = photos;
    azhwarDocs.push(doc);
  }

  /* ---------- acharyas ---------- */
  const acharyaDocs = [];
  for (let i = 0; i < acharyas.length; i += 1) {
    const a = acharyas[i];
    const doc = {_id: `acharya.${a.id}`, _type: 'acharya', order: i + 1};
    for (const key of ['name', 'tamilName', 'wiki', 'eraGroup', 'era', 'role', 'titles', 'birthMonth', 'birthStar', 'tithi', 'amsam', 'timeline', 'legend', 'worksSummary', 'works', 'preservation', 'philosophicalTheme', 'sources']) {
      if (a[key] != null) doc[key] = a[key];
    }
    if (a.birthplace) {
      doc.birthplace = {...a.birthplace};
      if (a.birthplace.kshetramId) {
        doc.birthplace.birthKshetram = kshetramRef(a.birthplace.kshetramId);
        delete doc.birthplace.kshetramId;
      }
    }
    if (a.guru) doc.guru = acharyaRef(a.guru);
    if (a.amsamAcharyaId) doc.amsamAcharya = acharyaRef(a.amsamAcharyaId);
    if (a.sishyas?.length) doc.sishyas = a.sishyas.map(acharyaRef);
    if (a.associatedDesams?.length) doc.associatedDesams = a.associatedDesams.map(kshetramRef);
    const lifeHistory = toLifeHistory(a.lifeHistory);
    if (lifeHistory) doc.lifeHistory = lifeHistory;
    const verse = toVerseDoc(a.verse);
    if (verse) doc.verse = verse;
    const visuals = await toVisualsDoc(a.visuals, resolvePhoto);
    if (visuals) doc.visuals = visuals;
    const photos = await toPhotos(a.photos, resolvePhoto);
    if (photos) doc.photos = photos;
    acharyaDocs.push(doc);
  }

  /* ---------- kshetrams ---------- */
  const toDossierDeity = async (deity) => {
    if (!deity) return undefined;
    const out = {names: deity.names, etymology: deity.etymology, thaayar: deity.thaayar};
    const photos = await toPhotos(deity.photos, resolvePhoto);
    if (photos) out.photos = photos;
    return out;
  };

  const kshetramDocs = [];
  for (let i = 0; i < kshetrams.length; i += 1) {
    const k = kshetrams[i];
    const v2 = ENRICHMENT[k.id] ?? {};
    const dossier = TEMPLATES[k.id] ?? DOSSIER_TEMPLATES[k.id];
    const doc = {
      _id: `kshetram.${k.id}`,
      _type: 'kshetram',
      order: i + 1,
      name: k.name,
      tamilName: k.tamilName,
      temple: k.temple,
      place: k.place,
      state: k.state,
      region: k.region,
      deity: k.deity,
      deityForm: k.deityForm,
      azhwars: k.azhwars.map(azhwarRef),
      pasuramCount: k.pasuramCount,
      significance: k.significance,
      mapQuery: k.mapQuery,
    };
    // V2 group — nulls preserved verbatim (celestial desams render them).
    for (const key of ['timings', 'wiki', 'moolavar', 'thaayar', 'urchavar', 'puranam']) {
      if (key in v2) doc[key] = v2[key];
    }
    if (v2.pasuram) {
      doc.pasuram = {...v2.pasuram, azhwar: azhwarRef(v2.pasuram.azhwarId)};
      delete doc.pasuram.azhwarId;
    }
    // Dossier group.
    if (dossier) {
      doc.serial = dossier.serial;
      doc.isApprovedSample = Boolean(TEMPLATES[k.id]);
      doc.profile = dossier.profile;
      doc.deities = {
        moolavar: await toDossierDeity(dossier.deities?.moolavar),
        urchavar: await toDossierDeity(dossier.deities?.urchavar),
        sanctumNote: dossier.deities?.sanctumNote,
      };
      doc.puranamDetail = dossier.puranam;
      if (dossier.mangalasasanam) {
        doc.mangalasasanam = {
          perAzhwar: dossier.mangalasasanam.perAzhwar?.map(([azhwarId, count]) => ({
            azhwar: azhwarRef(azhwarId),
            count,
          })),
          excerpts: dossier.mangalasasanam.excerpts?.map((e) => ({
            azhwar: azhwarRef(e.azhwarId),
            work: e.work,
            tamil: e.tamil,
            transliteration: e.transliteration,
            wordMeanings: toWordMeaningObjs(e.wordMeanings),
            significance: e.significance,
            verse: e.verse,
            audio: e.audio,
          })),
        };
      }
      doc.visuals = dossier.visuals;
    }
    const [lat, lng] = COORDS[k.id] ?? [];
    if (lat != null) doc.coords = {lat, lng};
    kshetramDocs.push(doc);
  }

  /* ---------- singletons ---------- */
  const ceoDoc = {...ABOUT.ceo};
  const ceoPhoto = ceoDoc.photoUrl ? await resolvePhoto(ceoDoc.photoUrl) : null;
  delete ceoDoc.photoUrl;
  if (ceoPhoto?.image) ceoDoc.image = ceoPhoto.image;
  else if (ceoPhoto?.srcUrl) ceoDoc.photoUrl = ceoPhoto.srcUrl;
  const aboutDoc = {
    _id: 'about',
    _type: 'about',
    site: ABOUT.site,
    tours: ABOUT.tours,
    contact: ABOUT.contact,
    ceo: ceoDoc,
    circuits: ABOUT.circuits,
    etiquette: ABOUT.etiquette.map((card) => ({
      ...card,
      points: card.points.map(([lead, text]) => ({lead, text})),
    })),
  };

  const siteCopyDoc = {_id: 'siteCopy', _type: 'siteCopy', ...SITE_COPY};

  const configDoc = {
    _id: 'config',
    _type: 'config',
    stats: config.SITE_STATS,
    featuredKshetrams: config.FEATURED_KSHETRAM_IDS.map(kshetramRef),
    featuredAcharyas: config.FEATURED_ACHARYA_IDS.map(acharyaRef),
    mapsUrlTemplate: config.MAPS_URL_TEMPLATE,
  };

  return {kshetramDocs, azhwarDocs, acharyaDocs, aboutDoc, siteCopyDoc, configDoc};
}
