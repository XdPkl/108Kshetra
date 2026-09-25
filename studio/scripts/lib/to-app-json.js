/**
 * Transform: Sanity documents (the GROQ result below) → app content JSON
 * (the files under app/src/data/content/). Pure — used by both the CI sync
 * script (app/scripts/sync-content.mjs) and the round-trip verifier
 * (studio/scripts/verify-roundtrip.mjs).
 *
 * Output objects are built in the same key order as the original files to
 * keep git diffs minimal; verify-roundtrip compares canonically (sorted keys)
 * so order is a nicety, not an invariant.
 */

/** Strip Sanity's injected _key/_type markers from arrays/objects deeply. */
const denormalize = (value) => {
  if (Array.isArray(value)) return value.map(denormalize);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === '_key' || k === '_type' || k === '_ref' || k === '_weak') continue;
      out[k] = denormalize(v);
    }
    return out;
  }
  return value;
};

const stripPrefix = (prefix, refId) => (refId ? refId.slice(prefix.length + 1) : undefined);
const kshetramId = (refId) => stripPrefix('kshetram', refId);
const azhwarId = (refId) => stripPrefix('azhwar', refId);
const acharyaId = (refId) => stripPrefix('acharya', refId);

/** Sanity CDN URL with a width + auto-format for the given consumer size. */
const sized = (url, w) => (url ? `${url}?w=${w}&auto=format` : undefined);

const clean = (obj) => {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    out[k] = v;
  }
  return out;
};

const photoSrc = (photo, width) => {
  if (!photo) return undefined;
  if (photo.imageUrl) return sized(photo.imageUrl, width);
  if (photo.srcUrl) return photo.srcUrl;
  return undefined;
};

const photoEntries = (photos, width) =>
  photos?.map((p) => {
    const src = photoSrc(p, width);
    if (src) return clean({src, alt: p.alt, credit: p.credit});
    return clean({wiki: p.wiki, alt: p.alt, credit: p.credit});
  });

const wordMeaningPairs = (objs) => objs?.map(({word, meaning}) => [word, meaning]);

const fromVerseDoc = (verse) => {
  if (!verse) return undefined;
  const out = {};
  for (const key of ['work', 'tamil', 'transliteration', 'translit', 'meaning', 'significance', 'audio']) {
    if (verse[key] != null) out[key] = verse[key];
  }
  if (verse.wordMeanings?.length) out.wordMeanings = wordMeaningPairs(verse.wordMeanings);
  if (verse.commentary?.length) out.commentary = verse.commentary;
  return Object.keys(out).length ? out : undefined;
};

const fromLifeHistory = (items) =>
  items?.length
    ? items.map((item) => ('text' in item && !('heading' in item) ? item.text : {heading: item.heading, paragraphs: item.paragraphs}))
    : undefined;

const fromVisuals = (visuals) => {
  if (!visuals) return undefined;
  const out = {};
  if (visuals.iconographyText != null) out.iconography = visuals.iconographyText;
  else if (visuals.iconography != null) out.iconography = visuals.iconography;
  if (visuals.videoSearches?.length) out.videoSearches = visuals.videoSearches;
  if (visuals.digitalTexts?.length) out.digitalTexts = visuals.digitalTexts;
  return Object.keys(out).length ? out : undefined;
};

/**
 * GROQ — fetches every published content document with references
 * dereferenced to app ids and image assets resolved to CDN URLs.
 */
export const GROQ = `{
  "kshetrams": *[_type == "kshetram" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, order, name, tamilName, temple, place, state, region, deity, deityForm,
    "azhwars": azhwars[]->._id, pasuramCount, significance, mapQuery,
    timings, wiki, moolavar, thaayar, urchavar, puranam,
    "pasuram": pasuram{reference, work, meaning, tamil, transliteration, "azhwarId": azhwar->._id},
    serial, isApprovedSample, profile,
    "deities": deities{
      moolavar{names, etymology, thaayar, photos{alt, credit, wiki, srcUrl, "imageUrl": image.asset->url}},
      urchavar{names, etymology, thaayar, photos{alt, credit, wiki, srcUrl, "imageUrl": image.asset->url}},
      sanctumNote
    },
    puranamDetail,
    "mangalasasanam": mangalasasanam{
      "perAzhwar": perAzhwar[]{count, "azhwarId": azhwar->._id},
      "excerpts": excerpts[]{work, tamil, transliteration, significance, verse, audio,
        "wordMeanings": wordMeanings[]{word, meaning}, "azhwarId": azhwar->._id}
    },
    visuals,
    "photoUrl": photo.asset->url,
    coords
  },
  "azhwars": *[_type == "azhwar" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, order, name, tamilName, period, pasuramCount, note, work, wiki,
    "photos": photos{alt, credit, wiki, srcUrl, "imageUrl": image.asset->url},
    epithets, birthMonth, birthStar, tithi, amsam, era, timeline, legend, works,
    preservation, sources,
    "birthplace": birthplace{name, district, "kshetramId": birthKshetram->._id},
    "associatedDesams": associatedDesams[]->._id,
    "verse": verse{work, tamil, transliteration, meaning, audio,
      "wordMeanings": wordMeanings[]{word, meaning}, commentary{heading, text}},
    "visuals": visuals{iconographyText, iconography, videoSearches, digitalTexts}
  },
  "acharyas": *[_type == "acharya" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, name, tamilName, wiki, eraGroup, era, role, titles, worksSummary,
    works, preservation, philosophicalTheme, sources,
    birthMonth, birthStar, tithi, amsam, timeline, legend,
    "guru": guru->._id, "sishyas": sishyas[]->._id, "amsamAcharyaId": amsamAcharya->._id,
    "associatedDesams": associatedDesams[]->._id,
    "birthplace": birthplace{name, district, "kshetramId": birthKshetram->._id},
    "lifeHistory": lifeHistory{heading, paragraphs, text},
    "verse": verse{work, tamil, transliteration, meaning, audio,
      "wordMeanings": wordMeanings[]{word, meaning}, commentary{heading, text}},
    "visuals": visuals{iconographyText, iconography, videoSearches, digitalTexts},
    "photos": photos{alt, credit, wiki, srcUrl, "imageUrl": image.asset->url}
  },
  "about": *[_id == "about"][0]{
    site, tours, contact,
    "ceo": ceo{name, role, org, title, base, email, trustee, quote, bio, pillars,
      "imageUrl": image.asset->url, photoUrl},
    circuits, etiquette
  },
  "siteCopy": *[_id == "siteCopy"][0],
  "config": *[_id == "config"][0]{
    stats,
    "featuredKshetrams": featuredKshetrams[]->._id,
    "featuredAcharyas": featuredAcharyas[]->._id,
    mapsUrlTemplate
  }
}`;

/** GROQ result → the app content object {filename: json} (values, not text). */
export function groqToContent(rawResult) {
  // Strip Sanity's injected array _key markers (and any _type noise) up front.
  const result = denormalize(rawResult);
  const content = {};

  /* ---------- kshetrams ---------- */
  const kshetrams = [];
  const enrichment = {};
  const coords = {};
  const templates = {};
  const dossierTemplates = {};
  for (const doc of result.kshetrams) {
    const id = kshetramId(doc._id);
    const base = {
      id,
      name: doc.name,
      tamilName: doc.tamilName,
      temple: doc.temple,
      place: doc.place,
      state: doc.state,
      region: doc.region,
      deity: doc.deity,
      deityForm: doc.deityForm,
      azhwars: doc.azhwars.map(azhwarId),
      pasuramCount: doc.pasuramCount,
      significance: doc.significance,
      mapQuery: doc.mapQuery,
    };
    if (doc.photoUrl) base.photo = sized(doc.photoUrl, 640);
    kshetrams.push(base);

    enrichment[id] = clean({
      timings: 'timings' in doc ? doc.timings : undefined,
      wiki: 'wiki' in doc ? doc.wiki : undefined,
      moolavar: doc.moolavar,
      thaayar: doc.thaayar,
      urchavar: doc.urchavar,
      puranam: doc.puranam,
      pasuram: doc.pasuram
        ? clean({
            azhwarId: azhwarId(doc.pasuram.azhwarId),
            reference: doc.pasuram.reference,
            work: doc.pasuram.work,
            meaning: doc.pasuram.meaning,
            tamil: doc.pasuram.tamil,
            transliteration: doc.pasuram.transliteration,
          })
        : undefined,
    });
    if (Object.keys(enrichment[id]).length === 0) delete enrichment[id];

    if (doc.coords) coords[id] = [doc.coords.lat, doc.coords.lng];

    if (doc.serial) {
      const dossier = {
        serial: doc.serial,
        profile: doc.profile,
        deities: {
          moolavar: clean({
            names: doc.deities?.moolavar?.names,
            etymology: doc.deities?.moolavar?.etymology,
            thaayar: doc.deities?.moolavar?.thaayar,
            photos: photoEntries(doc.deities?.moolavar?.photos, 1280),
          }),
          urchavar: clean({
            names: doc.deities?.urchavar?.names,
            etymology: doc.deities?.urchavar?.etymology,
            thaayar: doc.deities?.urchavar?.thaayar,
            photos: photoEntries(doc.deities?.urchavar?.photos, 1280),
          }),
          sanctumNote: doc.deities?.sanctumNote,
        },
        puranam: doc.puranamDetail,
        mangalasasanam: {
          perAzhwar: doc.mangalasasanam?.perAzhwar?.map((p) => [azhwarId(p.azhwarId), p.count]),
          excerpts: doc.mangalasasanam?.excerpts?.map((e) =>
            clean({
              azhwarId: azhwarId(e.azhwarId),
              work: e.work,
              tamil: e.tamil,
              transliteration: e.transliteration,
              wordMeanings: wordMeaningPairs(e.wordMeanings),
              significance: e.significance,
              verse: e.verse,
              audio: e.audio,
            }),
          ),
        },
        visuals: doc.visuals,
      };
      if (doc.isApprovedSample) templates[id] = dossier;
      else dossierTemplates[id] = dossier;
    }
  }
  content['kshetrams.json'] = kshetrams;
  content['enrichment.json'] = enrichment;
  content['coords.json'] = coords;
  content['templates.json'] = templates;
  content['dossier-templates.json'] = dossierTemplates;

  /* ---------- azhwars ---------- */
  const azhwars = [];
  const azhwarDetails = {};
  for (const doc of result.azhwars) {
    const id = azhwarId(doc._id);
    azhwars.push({
      id,
      name: doc.name,
      tamilName: doc.tamilName,
      period: doc.period,
      pasuramCount: doc.pasuramCount,
      note: doc.note,
      work: doc.work,
    });
    const detail = clean({
      wiki: doc.wiki,
      order: doc.order,
      epithets: doc.epithets,
      birthMonth: doc.birthMonth,
      birthStar: doc.birthStar,
      tithi: doc.tithi,
      birthplace: doc.birthplace
        ? clean({name: doc.birthplace.name, district: doc.birthplace.district, kshetramId: kshetramId(doc.birthplace.kshetramId)})
        : undefined,
      amsam: doc.amsam,
      bhaktiBhava: doc.bhaktiBhava,
      era: doc.era,
      timeline: doc.timeline,
      lifeHistory: fromLifeHistory(doc.lifeHistory),
      legend: doc.legend,
      works: doc.works,
      preservation: doc.preservation,
      associatedDesams: doc.associatedDesams?.map(kshetramId),
      verse: fromVerseDoc(doc.verse),
      visuals: fromVisuals(doc.visuals),
      sources: doc.sources,
      photos: photoEntries(doc.photos, 800),
    });
    if (Object.keys(detail).length) azhwarDetails[id] = detail;
  }
  content['azhwars.json'] = azhwars;
  content['azhwar-details.json'] = azhwarDetails;

  /* ---------- acharyas ---------- */
  content['acharyas.json'] = result.acharyas.map((doc) =>
    clean({
      id: acharyaId(doc._id),
      name: doc.name,
      tamilName: doc.tamilName,
      wiki: doc.wiki,
      eraGroup: doc.eraGroup,
      era: doc.era,
      role: doc.role,
      titles: doc.titles,
      birthMonth: doc.birthMonth,
      birthStar: doc.birthStar,
      tithi: doc.tithi,
      birthplace: doc.birthplace
        ? clean({name: doc.birthplace.name, district: doc.birthplace.district, kshetramId: kshetramId(doc.birthplace.kshetramId)})
        : undefined,
      amsam: doc.amsam,
      amsamAcharyaId: acharyaId(doc.amsamAcharyaId),
      guru: acharyaId(doc.guru),
      sishyas: doc.sishyas?.map(acharyaId),
      timeline: doc.timeline,
      lifeHistory: fromLifeHistory(doc.lifeHistory),
      legend: doc.legend,
      worksSummary: doc.worksSummary,
      works: doc.works,
      preservation: doc.preservation,
      philosophicalTheme: doc.philosophicalTheme,
      associatedDesams: doc.associatedDesams?.map(kshetramId),
      verse: fromVerseDoc(doc.verse),
      visuals: fromVisuals(doc.visuals),
      sources: doc.sources,
      photos: photoEntries(doc.photos, 800),
    }),
  );

  /* ---------- about ---------- */
  const about = result.about ?? {};
  const {imageUrl: ceoImageUrl, photoUrl: ceoPhotoUrlDoc, ...ceoRest} = about.ceo ?? {};
  const ceoPhotoUrl = ceoImageUrl ? sized(ceoImageUrl, 800) : ceoPhotoUrlDoc ?? '';
  content['about.json'] = {
    site: about.site,
    tours: about.tours,
    contact: about.contact,
    ceo: {...ceoRest, photoUrl: ceoPhotoUrl},
    circuits: about.circuits,
    etiquette: about.etiquette?.map((card) => ({
      ...card,
      points: card.points.map(({lead, text}) => [lead, text]),
    })),
  };

  /* ---------- site copy & config ---------- */
  const stripSystem = (doc) =>
    Object.fromEntries(Object.entries(doc ?? {}).filter(([k]) => !k.startsWith('_') && k !== 'createdAt' && k !== 'updatedAt' && k !== 'rev'));
  content['site-copy.json'] = stripSystem(result.siteCopy);
  content['config.json'] = {
    SITE_STATS: result.config?.stats,
    FEATURED_KSHETRAM_IDS: result.config?.featuredKshetrams?.map(kshetramId),
    FEATURED_ACHARYA_IDS: result.config?.featuredAcharyas?.map(acharyaId),
    MAPS_URL_TEMPLATE: result.config?.mapsUrlTemplate,
  };

  return content;
}
