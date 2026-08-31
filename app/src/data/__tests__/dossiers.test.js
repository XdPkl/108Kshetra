/**
 * Data integrity tests for the Divya Desam dossier templates (FR-83):
 * bijection with the site ids, unique dossier serials, valid azhwar
 * references and complete excerpt shapes.
 */
import { describe, it, expect } from 'vitest';
import { DOSSIER_TEMPLATES } from '../../data/enrichment/dossiers.js';
import { ENRICHMENT, getEnrichment } from '../../data/enrichment/index.js';
import { TEMPLATES } from '../../data/enrichment/templates.js';
import { getAllKshetrams, getAllAzhwars } from '../../data/api.js';

describe('Divya Desam dossier templates (dossier population)', () => {
  const siteIds = new Set(getAllKshetrams().map((k) => k.id));
  const azhwarIds = new Set(getAllAzhwars().map((a) => a.id));

  it('covers 93 kshetrams with ids that all exist in the site dataset', () => {
    expect(Object.keys(DOSSIER_TEMPLATES).length).toBe(93);
    for (const id of Object.keys(DOSSIER_TEMPLATES)) {
      expect(siteIds.has(id), `unknown kshetram id ${id}`).toBe(true);
    }
  });

  it('assigns each dossier serial at most once', () => {
    const serials = Object.values(DOSSIER_TEMPLATES).map((t) => t.serial);
    expect(new Set(serials).size).toBe(serials.length);
    for (const s of serials) {
      expect(s, 'serial range').toBeGreaterThanOrEqual(1);
      expect(s, 'serial range').toBeLessThanOrEqual(108);
    }
  });

  it('carries the dossier five-section content per template', () => {
    for (const [id, t] of Object.entries(DOSSIER_TEMPLATES)) {
      expect(t.profile?.vimanam ?? t.profile?.location, `${id} profile`).toBeTruthy();
      expect(t.deities?.moolavar, `${id} moolavar`).toBeTruthy();
      expect(t.puranam?.legend?.length, `${id} legend`).toBeGreaterThan(0);
      expect(t.mangalasasanam?.excerpts?.length, `${id} excerpts`).toBeGreaterThan(0);
      expect(t.visuals?.descriptions?.length, `${id} visual markers`).toBeGreaterThan(0);
    }
  });

  it('resolves every mangalasasanam azhwar reference', () => {
    for (const [id, t] of Object.entries(DOSSIER_TEMPLATES)) {
      for (const [aid] of t.mangalasasanam?.perAzhwar ?? []) {
        expect(azhwarIds.has(aid), `${id} per-azhwar ${aid}`).toBe(true);
      }
      for (const ex of t.mangalasasanam?.excerpts ?? []) {
        expect(azhwarIds.has(ex.azhwarId), `${id} excerpt ${ex.azhwarId}`).toBe(true);
        expect(ex.tamil, `${id} excerpt tamil`).toBeTruthy();
      }
    }
  });

  it('leaves the V2 enrichment of unpopulated kshetrams intact', () => {
    for (const id of ['thiruvekka', 'uppiliappan', 'thirumogur', 'kandiyur']) {
      expect(ENRICHMENT[id], `${id} V2 fallback`).toBeTruthy();
      expect(DOSSIER_TEMPLATES[id], `${id} has no dossier`).toBeUndefined();
    }
  });

  it('serves Srirangam full-depth shrine content via the approved sample template', () => {
    expect(TEMPLATES.srirangam?.serial).toBe(1);
    const enriched = getEnrichment('srirangam');
    expect(enriched?.deities?.moolavar, 'srirangam moolavar').toBeTruthy();
    expect(enriched?.puranam?.legend?.length, 'srirangam legend').toBeGreaterThan(0);
    expect(enriched?.mangalasasanam?.perAzhwar, 'srirangam 11 azhwars').toHaveLength(11);
    expect(enriched?.visuals?.descriptions?.length, 'srirangam visuals').toBeGreaterThan(0);
  });

  it('resolves every template photo src under the site base URL', () => {
    const base = import.meta.env.BASE_URL;
    for (const [id, t] of Object.entries({ ...TEMPLATES, ...DOSSIER_TEMPLATES })) {
      for (const deity of [t.deities?.moolavar, t.deities?.urchavar]) {
        for (const photo of deity?.photos ?? []) {
          if (!photo.src) continue; // wiki-backed photos resolve by title instead
          expect(photo.src, `${id} placeholder marker`).not.toContain('__BASE_URL__');
          expect(photo.src, `${id} src under base`).toMatch(
            new RegExp(`^${base}photos/[\\w.-]+\\.jpg$`)
          );
        }
      }
    }
  });
});
