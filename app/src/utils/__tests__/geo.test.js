/**
 * Unit tests for geo utilities (FR-63/67).
 */
import { describe, it, expect } from 'vitest';
import { distanceKm, nearbyKshetrams } from '../geo.js';

describe('distanceKm', () => {
  it('computes a plausible Srirangam→Kanchipuram distance (~245 km)', () => {
    expect(distanceKm([10.863, 78.69], [12.834, 79.704])).toBeGreaterThan(220);
    expect(distanceKm([10.863, 78.69], [12.834, 79.704])).toBeLessThan(270);
  });

  it('returns 0 for identical points', () => {
    expect(distanceKm([10, 78], [10, 78])).toBe(0);
  });
});

describe('nearbyKshetrams', () => {
  const kshetrams = [
    { id: 'a', coords: [10.863, 78.69] },          // same as origin → excluded
    { id: 'b', coords: [10.9, 78.75] },            // ~10 km
    { id: 'c', coords: [11.399, 79.691] },         // ~110 km → excluded
    { id: 'd', coords: null },                     // no coords → excluded
  ];

  it('lists desams within 50 km nearest first, excluding self and coordless', () => {
    const nearby = nearbyKshetrams([10.863, 78.69], kshetrams);
    expect(nearby.map((n) => n.kshetram.id)).toEqual(['b']);
    expect(nearby[0].distanceKm).toBeGreaterThan(5);
  });

  it('honours the radius parameter', () => {
    const nearby = nearbyKshetrams([10.863, 78.69], kshetrams, 200);
    expect(nearby.map((n) => n.kshetram.id)).toEqual(['b', 'c']);
  });
});
