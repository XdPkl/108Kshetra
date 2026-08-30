// @vitest-environment jsdom
/**
 * Unit tests for the localStorage-backed visited and trip stores
 * (US-TRK-01/05, US-TRP-01, FR-71/75/79).
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  getVisitedSnapshot,
  isVisited,
  markVisited,
  toggleVisited,
  resetVisited,
  subscribeVisited,
} from '../../state/visited.js';
import {
  getTripSnapshot,
  isInTrip,
  addToTrip,
  removeFromTrip,
  toggleTrip,
  setTrip,
  clearTrip,
  subscribeTrip,
  encodeTrip,
  decodeTrip,
} from '../../state/trip.js';

beforeEach(() => {
  window.localStorage.clear();
  resetVisited();
  clearTrip();
});

describe('visited store (UT-TRK-01..02)', () => {
  it('starts empty and toggles ids with persistence', () => {
    expect(getVisitedSnapshot()).toEqual([]);
    toggleVisited('srirangam');
    expect(isVisited('srirangam')).toBe(true);
    expect(JSON.parse(window.localStorage.getItem('kshetra.visited.v1'))).toContain('srirangam');
    toggleVisited('srirangam');
    expect(isVisited('srirangam')).toBe(false);
  });

  it('notifies subscribers on change and stops after unsubscribe', () => {
    let calls = 0;
    const unsubscribe = subscribeVisited(() => { calls += 1; });
    markVisited('uraiyur', true);
    markVisited('uraiyur', true); // no change — no extra notification
    expect(calls).toBe(1);
    unsubscribe();
    markVisited('uraiyur', false);
    expect(calls).toBe(1);
  });

  it('reset clears every mark (FR-75)', () => {
    markVisited('srirangam', true);
    markVisited('tirupati', true);
    resetVisited();
    expect(getVisitedSnapshot()).toEqual([]);
  });

  it('keeps a stable snapshot reference between changes', () => {
    const before = getVisitedSnapshot();
    markVisited('srirangam', true);
    expect(getVisitedSnapshot()).not.toBe(before);
    expect(getVisitedSnapshot()).toBe(getVisitedSnapshot());
  });
});

describe('trip store (UT-TRP-01)', () => {
  it('adds without duplicates, preserves order, persists', () => {
    addToTrip('srirangam');
    addToTrip('tirupati');
    addToTrip('srirangam');
    expect(getTripSnapshot()).toEqual(['srirangam', 'tirupati']);
    expect(JSON.parse(window.localStorage.getItem('kshetra.trip.v1'))).toEqual(['srirangam', 'tirupati']);
  });

  it('removes and toggles membership', () => {
    addToTrip('srirangam');
    expect(toggleTrip('srirangam')).toBe(false);
    expect(isInTrip('srirangam')).toBe(false);
    expect(toggleTrip('srirangam')).toBe(true);
    removeFromTrip('srirangam');
    expect(getTripSnapshot()).toEqual([]);
  });

  it('setTrip replaces order and dedupes (FR-80/81)', () => {
    setTrip(['b', 'a', 'b', 'a']);
    expect(getTripSnapshot()).toEqual(['b', 'a']);
  });

  it('share encoding round-trips (FR-81)', () => {
    expect(encodeTrip(['a', 'b-c'])).toBe('a,b-c');
    expect(decodeTrip('a,b-c')).toEqual(['a', 'b-c']);
    expect(decodeTrip(' , x ,, ')).toEqual(['x']);
    expect(decodeTrip('')).toEqual([]);
  });

  it('notifies subscribers', () => {
    let calls = 0;
    const unsubscribe = subscribeTrip(() => { calls += 1; });
    addToTrip('srirangam');
    expect(calls).toBe(1);
    unsubscribe();
  });
});
