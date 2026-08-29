/**
 * Enrichment dataset integrity tests (US-DTL-11 / FR-68) — Gate A blockers.
 */
import { describe, it, expect } from 'vitest';
import { ENRICHMENT, getEnrichment } from '../enrichment/index.js';
import { kshetrams } from '../kshetrams.js';
import { azhwars } from '../azhwars.js';
import { COORDS } from '../enrichment/coords.js';

const nonCelestial = kshetrams.filter((k) => k.state !== 'Celestial');
const celestial = kshetrams.filter((k) => k.state === 'Celestial');

describe('enrichment coverage', () => {
  it('every kshetram has an enrichment record (no gaps)', () => {
    const missing = kshetrams.filter((k) => !ENRICHMENT[k.id]).map((k) => k.id);
    expect(missing).toEqual([]);
  });

  it('no orphan enrichment ids', () => {
    const ids = new Set(kshetrams.map((k) => k.id));
    const orphans = Object.keys(ENRICHMENT).filter((id) => !ids.has(id));
    expect(orphans).toEqual([]);
  });

  it('every earthly kshetram has valid coordinates', () => {
    for (const k of nonCelestial) {
      const coords = COORDS[k.id];
      expect(coords, `${k.id} missing coords`).toBeDefined();
      expect(coords[0], `${k.id} latitude range`).toBeGreaterThan(-5);
      expect(coords[0], `${k.id} latitude range`).toBeLessThan(36);
      expect(coords[1], `${k.id} longitude range`).toBeGreaterThan(60);
      expect(coords[1], `${k.id} longitude range`).toBeLessThan(97);
    }
    expect(nonCelestial).toHaveLength(106);
  });

  it('celestial desams have no coordinates', () => {
    expect(COORDS[celestial[0].id]).toBeUndefined();
    expect(COORDS[celestial[1].id]).toBeUndefined();
  });

  it('every enriched record has deities, puranam and a valid pasuram', () => {
    for (const k of kshetrams) {
      const e = ENRICHMENT[k.id];
      expect(e.moolavar?.name, `${k.id}.moolavar`).toBeTruthy();
      expect(typeof e.puranam === 'string' && e.puranam.length > 40, `${k.id}.puranam`).toBe(true);
      expect(e.pasuram, `${k.id}.pasuram`).toBeTruthy();
      const validAzhwar = azhwars.some((a) => a.id === e.pasuram.azhwarId);
      expect(validAzhwar, `${k.id}.pasuram.azhwarId`).toBe(true);
      expect(e.pasuram.reference?.trim(), `${k.id}.pasuram.reference`).not.toBe('');
      expect(e.pasuram.meaning?.trim(), `${k.id}.pasuram.meaning`).not.toBe('');
    }
  });

  it('every earthly kshetram has timings with a morning session', () => {
    for (const k of nonCelestial) {
      const t = ENRICHMENT[k.id].timings;
      expect(t, `${k.id}.timings`).toBeTruthy();
      expect(t.morning, `${k.id}.timings.morning`).toHaveLength(2);
      expect(t.morning[0], `${k.id} opens before it closes`).toHaveLength(5);
    }
    expect(ENRICHMENT[celestial[0].id].timings).toBeNull();
  });
});

describe('getEnrichment', () => {
  it('merges coordinates into the details', () => {
    const e = getEnrichment('srirangam');
    expect(e.coords[0]).toBeCloseTo(10.863, 2);
    expect(e.moolavar.name).toContain('Ranganathan');
  });

  it('returns null coords when absent', () => {
    expect(getEnrichment('paramapadam').coords).toBeNull();
  });
});
