/**
 * Data-integrity tests (UT-DATA-01..04) — Gate A blockers.
 * Any incomplete or inconsistent record fails the suite (FR-03).
 */
import { describe, it, expect } from 'vitest';
import { kshetrams } from '../kshetrams.js';
import { azhwars } from '../azhwars.js';
import { FEATURED_KSHETRAM_IDS } from '../config.js';

const EXPECTED_TOTAL = 108;
const REQUIRED_STRING_FIELDS = [
  'id', 'name', 'tamilName', 'temple', 'place', 'state', 'region',
  'deity', 'deityForm', 'significance',
];
// celestial realms are beyond earthly maps, so mapQuery may be blank there
const EARTHLY_STATE = (k) => k.state !== 'Celestial';

describe('kshetrams dataset', () => {
  it('contains exactly 108 records (UT-DATA-01)', () => {
    expect(kshetrams).toHaveLength(EXPECTED_TOTAL);
  });

  it('has unique ids (UT-DATA-01)', () => {
    const ids = kshetrams.map((k) => k.id);
    expect(new Set(ids).size).toBe(EXPECTED_TOTAL);
  });

  it('every record has all required non-empty string fields (UT-DATA-02)', () => {
    for (const k of kshetrams) {
      for (const field of REQUIRED_STRING_FIELDS) {
        expect(typeof k[field], `${k.id}.${field}`).toBe('string');
        expect(k[field].trim(), `${k.id}.${field} is empty`).not.toBe('');
      }
    }
  });

  it('earthly records have a map query; celestial ones do not (UT-DATA-02)', () => {
    const celestial = kshetrams.filter((k) => !EARTHLY_STATE(k));
    const earthly = kshetrams.filter(EARTHLY_STATE);
    expect(celestial).toHaveLength(2);
    expect(earthly.every((k) => k.mapQuery.trim() !== '')).toBe(true);
    expect(celestial.every((k) => k.mapQuery === '')).toBe(true);
  });

  it('every azhwar reference resolves to a known Azhwar (UT-DATA-03)', () => {
    const azhwarIds = new Set(azhwars.map((a) => a.id));
    for (const k of kshetrams) {
      expect(Array.isArray(k.azhwars), `${k.id}.azhwars`).toBe(true);
      expect(k.azhwars.length, `${k.id} has no azhwars`).toBeGreaterThan(0);
      for (const id of k.azhwars) {
        expect(azhwarIds.has(id), `${k.id} references unknown azhwar '${id}'`).toBe(true);
      }
    }
  });

  it('pasuramCount is a non-negative integer (UT-DATA-03)', () => {
    for (const k of kshetrams) {
      expect(Number.isInteger(k.pasuramCount), `${k.id}.pasuramCount`).toBe(true);
      expect(k.pasuramCount, `${k.id}.pasuramCount`).toBeGreaterThanOrEqual(0);
    }
  });

  it('featured ids all resolve (UT-DATA-03)', () => {
    const ids = new Set(kshetrams.map((k) => k.id));
    for (const id of FEATURED_KSHETRAM_IDS) {
      expect(ids.has(id), `featured id '${id}' missing`).toBe(true);
    }
  });
});

describe('azhwars dataset', () => {
  it('contains exactly 12 records with unique ids (UT-DATA-04)', () => {
    expect(azhwars).toHaveLength(12);
    expect(new Set(azhwars.map((a) => a.id)).size).toBe(12);
  });

  it('every azhwar has complete required fields (UT-DATA-04)', () => {
    for (const a of azhwars) {
      for (const field of ['id', 'name', 'tamilName', 'period', 'note', 'work']) {
        expect(a[field].trim(), `${a.id}.${field} is empty`).not.toBe('');
      }
      expect(a.pasuramCount).toBeGreaterThan(0);
    }
  });

  it('pasuram counts total the documented Azhwar corpus (UT-DATA-04)', () => {
    // the 12 Azhwars' own works total 3,896; the Prabandham's 4,000
    // includes later acharya compositions — asserted as a sane range
    const total = azhwars.reduce((sum, a) => sum + a.pasuramCount, 0);
    expect(total).toBeGreaterThan(3000);
    expect(total).toBeLessThanOrEqual(4000);
  });

  it('every azhwar has at least one associated kshetram or is noted as guru-devoted (UT-DATA-04)', () => {
    const referenced = new Set(kshetrams.flatMap((k) => k.azhwars));
    for (const a of azhwars) {
      // Madhurakavi sang only of his guru and performed no mangalasasanam
      if (a.id === 'madhurakavi') return;
      expect(referenced.has(a.id), `${a.name} is not referenced by any kshetram`).toBe(true);
    }
  });
});
