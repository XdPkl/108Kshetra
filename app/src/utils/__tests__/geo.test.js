/**
 * Unit tests for geo utilities (FR-63/67 + the round-28 cluster slider).
 */
import { describe, it, expect } from 'vitest';
import { clusterByDistanceKm, distanceKm, nearbyKshetrams } from '../geo.js';

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

describe('clusterByDistanceKm (round-28 cluster slider)', () => {
  // Real-ish coordinates: three Chennai-area temples (a few km apart),
  // Madurai (~410 km away), Trichy (~280 km away).
  const points = [
    [13.0827, 80.2707], // 0 Chennai
    [13.0130, 80.2206], // 1 Pallavaram (~9 km from Chennai)
    [13.1173, 80.2109], // 2 Ambattur (~13 km from Chennai)
    [9.9252, 78.1198],  // 3 Madurai
    [10.7905, 78.7047], // 4 Trichy
  ];

  it('groups points within the radius and splits distant ones', () => {
    const groups = clusterByDistanceKm(points, 15);
    // Chennai + Pallavaram + Ambattur group; Madurai and Trichy stay alone
    expect(groups).toEqual([[0, 1, 2], [3], [4]]);
  });

  it('keeps every point singleton below the smallest pair distance', () => {
    expect(clusterByDistanceKm(points, 1)).toEqual([[0], [1], [2], [3], [4]]);
  });

  it('merges broadly at a large radius', () => {
    const groups = clusterByDistanceKm(points, 430);
    // everything joins Chennai's group at 430 km (Chennai→Madurai ≈ 422 km)
    expect(groups).toEqual([[0, 1, 2, 3, 4]]);
  });

  it('joins a point to the FIRST seed within the radius (order stability)', () => {
    // Trichy is within 15 km of nothing, but at 300 km it is closer to
    // Madurai's seed than Chennai's — greedy first-match keeps [3] seeded
    const groups = clusterByDistanceKm(points, 300);
    expect(groups[0]).toEqual([0, 1, 2]);
    expect(groups).toContainEqual([3, 4]);
  });

  it('handles empty input', () => {
    expect(clusterByDistanceKm([], 10)).toEqual([]);
  });
});
