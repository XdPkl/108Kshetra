/**
 * Data integrity tests for the saint datasets (US-AZW-03, US-ACH-01,
 * FR-91..94): unique ids, valid internal links (kshetrams, guru/sishya),
 * complete base fields and template shapes.
 */
import { describe, it, expect } from 'vitest';
import { getAllAzhwars, getAllAcharyas, getKshetramById, getAcharyaById } from '../../data/api.js';

describe('Azhwar enrichment integrity (UT-AZW-04, FR-91)', () => {
  const azhwars = getAllAzhwars();

  it('keeps 12 records in chronological order with unique sequential order fields', () => {
    expect(azhwars).toHaveLength(12);
    expect(new Set(azhwars.map((a) => a.id)).size).toBe(12);
    azhwars.forEach((a, i) => expect(a.order).toBe(i + 1));
  });

  it('resolves every birthplace and associated-desam kshetram link', () => {
    for (const a of azhwars) {
      if (a.birthplace?.kshetramId) {
        expect(getKshetramById(a.birthplace.kshetramId), `${a.id} birthplace`).toBeDefined();
      }
      for (const kid of a.associatedDesams ?? []) {
        expect(getKshetramById(kid), `${a.id} associated desam`).toBeDefined();
      }
    }
  });

  it('carries works lists that sum within the documented pasuram count', () => {
    for (const a of azhwars) {
      for (const w of a.works ?? []) {
        expect(typeof w.name).toBe('string');
        if (w.pasurams != null) expect(w.pasurams).toBeGreaterThan(0);
      }
      const withCounts = (a.works ?? []).filter((w) => w.pasurams != null);
      if (withCounts.length === (a.works ?? []).length && withCounts.length > 0) {
        expect(withCounts.reduce((s, w) => s + w.pasurams, 0)).toBeLessThanOrEqual(a.pasuramCount);
      }
    }
  });

  it('renders the Poigai PO sample verbatim in structure (verse + word meanings)', () => {
    const poigai = azhwars.find((a) => a.id === 'poigai');
    expect(poigai.epithets).toContain('Sarovara Yogi');
    expect(poigai.birthplace.kshetramId).toBe('thiruvekka');
    expect(poigai.verse.wordMeanings.length).toBeGreaterThanOrEqual(5);
    expect(JSON.stringify(poigai.lifeHistory)).toContain('Thirukkovilur');
  });

  it('validates the dossier-era template extensions (saint template v3.1)', () => {
    for (const a of azhwars) {
      for (const item of a.timeline ?? []) {
        expect(typeof item.event).toBe('string');
        expect(item.event.length).toBeGreaterThan(0);
      }
      for (const item of a.lifeHistory ?? []) {
        if (typeof item !== 'string') {
          expect(item.heading, `${a.id} narrative heading`).toBeTruthy();
          expect(Array.isArray(item.paragraphs), `${a.id} narrative paragraphs`).toBe(true);
        }
      }
      if (a.legend) expect(a.legend.text, `${a.id} legend`).toBeTruthy();
      for (const c of a.verse?.commentary ?? []) {
        expect(c.heading).toBeTruthy();
        expect(c.text).toBeTruthy();
      }
    }
    const poigai = azhwars.find((a) => a.id === 'poigai');
    expect(poigai.timeline.length).toBeGreaterThanOrEqual(5);
    expect(poigai.birthplace.district).toBeTruthy();
    expect(poigai.verse.commentary).toHaveLength(3);
    expect(poigai.visuals.iconography.posture).toBeTruthy();
    expect(poigai.sources.length).toBeGreaterThan(0);
  });
});

describe('Acharya dataset integrity (UT-ACH-01, FR-92)', () => {
  const acharyas = getAllAcharyas();

  it('has unique ids and required index fields', () => {
    expect(acharyas.length).toBeGreaterThanOrEqual(8);
    expect(new Set(acharyas.map((a) => a.id)).size).toBe(acharyas.length);
    for (const a of acharyas) {
      expect(a.name).toBeTruthy();
      expect(a.tamilName).toBeTruthy();
      expect(a.eraGroup).toBeTruthy();
      expect(a.era).toBeTruthy();
      expect(a.role).toBeTruthy();
    }
  });

  it('resolves guru, sishya and associated-desam links', () => {
    const ids = new Set(acharyas.map((a) => a.id));
    for (const a of acharyas) {
      if (a.guru) expect(ids.has(a.guru), `${a.id} guru`).toBe(true);
      for (const s of a.sishyas ?? []) expect(ids.has(s), `${a.id} sishya`).toBe(true);
      for (const kid of a.associatedDesams ?? []) {
        expect(getKshetramById(kid), `${a.id} desam ${kid}`).toBeDefined();
      }
      if (a.birthplace?.kshetramId) {
        expect(getKshetramById(a.birthplace.kshetramId), `${a.id} birthplace`).toBeDefined();
      }
      if (a.amsamAcharyaId) expect(ids.has(a.amsamAcharyaId), `${a.id} amsam link`).toBe(true);
    }
  });

  it('marks pending biography content explicitly (FR-94 policy)', () => {
    const pending = acharyas.filter((a) => !Array.isArray(a.lifeHistory) || a.lifeHistory.length === 0);
    expect(pending.length).toBeGreaterThan(0); // scaffold entries await PO content
  });

  it('encodes the Nathamuni dossier (saint template v3.1 proof)', () => {
    const n = getAcharyaById('nathamuni');
    expect(n.timeline.length).toBeGreaterThanOrEqual(5);
    expect(n.birthplace.district).toContain('Cuddalore');
    expect(n.verse.transliteration).toContain('Namo');
    expect(n.verse.tamil).toBeUndefined(); // original script pending — renders the marker
    expect(n.verse.commentary).toHaveLength(3);
    expect(n.visuals.iconography.posture).toBeTruthy();
    for (const kid of n.associatedDesams) {
      expect(getKshetramById(kid), `nathamuni desam ${kid}`).toBeDefined();
    }
  });

  it('fully encodes the Manavala Mamunigal PO sample', () => {
    const mm = getAcharyaById('manavala-mamunigal');
    expect(mm.birthStar).toBe('Thirumoolam');
    expect(mm.birthplace.kshetramId).toBe('alwar-thirunagari');
    expect(mm.amsamAcharyaId).toBe('ramanuja');
    expect(mm.worksSummary).toBe('19 works');
    expect(mm.verse.transliteration).toContain('Sreesailesa');
    expect(mm.visuals.iconography).toContain('Anjali Mudra');
  });
});
