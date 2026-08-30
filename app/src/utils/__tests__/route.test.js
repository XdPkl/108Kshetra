/**
 * Unit tests for trip route helpers (US-TRP-02, FR-80).
 */
import { describe, it, expect } from 'vitest';
import { orderNearestFirst, legsFor, sumLegs } from '../route.js';

const A = { id: 'a', coords: [10.0, 78.0] };
const B = { id: 'b', coords: [10.5, 78.5] }; // ~74 km from A
const C = { id: 'c', coords: [10.1, 78.05] }; // ~13 km from A, ~68 km from B
const NOCOORD = { id: 'z', coords: null };

describe('orderNearestFirst (UT-RTE-01)', () => {
  it('walks the nearest-neighbour chain from the first stop', () => {
    const { ordered } = orderNearestFirst([A, B, C]);
    expect(ordered.map((s) => s.id)).toEqual(['a', 'c', 'b']);
  });

  it('keeps stops without coordinates at the end', () => {
    const { ordered, legs } = orderNearestFirst([NOCOORD, A, B]);
    expect(ordered.map((s) => s.id)).toEqual(['a', 'b', 'z']);
    expect(legs[2]).toBeNull();
  });

  it('reports legs and total distance', () => {
    const { legs, totalKm } = orderNearestFirst([A, B, C]);
    expect(legs[0]).toBeNull();
    expect(legs[1]).toBeGreaterThan(0);
    expect(legs[2]).toBeGreaterThan(legs[1]); // C→B is farther than A→C
    expect(totalKm).toBe(legs[1] + legs[2]);
  });

  it('handles a single stop and an empty list', () => {
    expect(orderNearestFirst([A]).ordered).toEqual([A]);
    expect(orderNearestFirst([]).ordered).toEqual([]);
  });
});

describe('legsFor / sumLegs', () => {
  it('returns null legs without a previous or coordinate-bearing stop', () => {
    const legs = legsFor([A, NOCOORD, B]);
    expect(legs).toEqual([null, null, null]);
  });

  it('sums legs ignoring nulls', () => {
    expect(sumLegs([null, 10, 15])).toBe(25);
    expect(sumLegs([])).toBe(0);
  });
});
