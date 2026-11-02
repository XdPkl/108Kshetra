/** Regression coverage for the separately listed Irattai Thirupathi shrines. */
import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  getAllKshetrams, getEnrichedKshetramById, getDDSerial,
  getVisitedDivyaDesamCount,
  getDivyaDesamCount, getDivyaDesamCountsByRegion,
} from '../api.js';

const ARAVINDALOCHANAR = 'tholaivillimangalam';
const DEVAPIRAN = 'tholaivillimangalam-devapiran';
const twins = [ARAVINDALOCHANAR, DEVAPIRAN].map(getEnrichedKshetramById);

describe('Irattai Thirupathi shrine entries', () => {
  it('counts 106 terrestrial and 18 Pandiya Nadu Divya Desams without removing either temple', () => {
    const shrines = getAllKshetrams();
    expect(getDivyaDesamCount()).toBe(108);
    expect(getDivyaDesamCount(shrines.filter((k) => k.state !== 'Celestial'))).toBe(106);
    expect(getDivyaDesamCountsByRegion()['Pandiya Nadu']).toBe(18);
    expect(getDivyaDesamCount(twins)).toBe(1);
    expect(getDivyaDesamCount([twins[1]])).toBe(1);
    expect(getDivyaDesamCount([])).toBe(0);
    expect(shrines.filter((k) => k.region === 'Pandiya Nadu')).toHaveLength(19);
  });
  it('preserves the existing route and gives the standing and seated shrines their own details', () => {
    const [seated, standing] = twins;
    expect(seated.name).toContain('Aravindalochanar');
    expect(standing.name).toContain('Devapiran');
    expect(seated.deityForm).toContain('Seated');
    expect(seated.moolavar.form).toContain('Seated');
    expect(seated.profile.posture).toContain('Seated');
    expect(standing.deityForm).toContain('Standing');
    expect(standing.moolavar.form).toContain('Standing');
    expect(standing.profile.posture).toContain('Standing');
    expect(seated.deities.moolavar.names.translit).not.toContain('Devapiran');
    expect(standing.deities.moolavar.names.translit).not.toContain('Aravindalochanan');
    expect(seated.mapQuery).not.toBe(standing.mapQuery);
  });

  it('keeps every bundled twin photo with its own shrine and correct deity label', () => {
    const sources = [];
    for (const shrine of twins) {
      const photos = [
        ...shrine.photos,
        ...shrine.deities.moolavar.photos,
        ...shrine.deities.urchavar.photos,
      ];
      expect(photos.length).toBeGreaterThan(0);
      for (const photo of photos) {
        expect(photo.src.includes('devapiran')).toBe(shrine.id === DEVAPIRAN);
        expect(existsSync(resolve('public', photo.src)), photo.src).toBe(true);
        expect(photo.alt).toContain(shrine.id === DEVAPIRAN ? 'Devapiran' : 'Aravindalochanan');
        sources.push(photo.src);
      }
    }
    expect(sources).toHaveLength(9);
    expect(new Set(sources).size).toBe(9);
  });

  it('retains traditional numbering after the split and counts twin darshans once', () => {
    expect(getDDSerial(ARAVINDALOCHANAR)).toBe(74);
    expect(getDDSerial(DEVAPIRAN)).toBe(74);
    expect(getDDSerial('thiruthangal')).toBe(75);
    expect(getDDSerial('paramapadam')).toBe(108);
    expect(getVisitedDivyaDesamCount([ARAVINDALOCHANAR, DEVAPIRAN])).toBe(1);
    expect(getVisitedDivyaDesamCount([ARAVINDALOCHANAR, DEVAPIRAN, 'srirangam'])).toBe(2);
    expect(getVisitedDivyaDesamCount(['unknown-id'])).toBe(0);
    expect(getAllKshetrams()).toHaveLength(109);
  });
});
