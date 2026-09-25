/**
 * simulateGroq — reshapes the output of toSanityDocs() into the same shape
 * the GROQ query in to-app-json.js returns from a live project (references
 * dereferenced to id strings, photo assets unresolvable locally). Used by
 * verify-roundtrip --local so the full app→CMS→app pipeline can be proven
 * without a Sanity account.
 */

const refId = (r) => r?._ref;
const refIds = (list) => list?.map(refId);

export function simulateGroq(docs) {
  return {
    kshetrams: docs.kshetramDocs.map((doc) => ({
      ...doc,
      azhwars: refIds(doc.azhwars),
      pasuram: doc.pasuram
        ? {...doc.pasuram, azhwarId: refId(doc.pasuram?.azhwar), azhwar: undefined}
        : undefined,
      mangalasasanam: doc.mangalasasanam
        ? {
            perAzhwar: doc.mangalasasanam.perAzhwar?.map((p) => ({count: p.count, azhwarId: refId(p.azhwar), azhwar: undefined})),
            excerpts: doc.mangalasasanam.excerpts?.map((e) => ({...e, azhwarId: refId(e.azhwar), azhwar: undefined})),
          }
        : undefined,
      photoUrl: undefined,
    })),
    azhwars: docs.azhwarDocs.map((doc) => ({
      ...doc,
      associatedDesams: refIds(doc.associatedDesams),
      birthplace: doc.birthplace
        ? {...doc.birthplace, kshetramId: refId(doc.birthplace?.birthKshetram), birthKshetram: undefined}
        : undefined,
    })),
    acharyas: docs.acharyaDocs.map((doc) => ({
      ...doc,
      guru: refId(doc.guru),
      sishyas: refIds(doc.sishyas),
      amsamAcharyaId: refId(doc.amsamAcharya),
      associatedDesams: refIds(doc.associatedDesams),
      birthplace: doc.birthplace
        ? {...doc.birthplace, kshetramId: refId(doc.birthplace?.birthKshetram), birthKshetram: undefined}
        : undefined,
    })),
    about: docs.aboutDoc,
    siteCopy: docs.siteCopyDoc,
    config: {
      stats: docs.configDoc.stats,
      featuredKshetrams: refIds(docs.configDoc.featuredKshetrams),
      featuredAcharyas: refIds(docs.configDoc.featuredAcharyas),
      mapsUrlTemplate: docs.configDoc.mapsUrlTemplate,
    },
  };
}
