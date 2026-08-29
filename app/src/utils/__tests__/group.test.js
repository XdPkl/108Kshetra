/**
 * Unit tests for grouping utilities.
 */
import { describe, it, expect } from 'vitest';
import { uniqueSorted, groupBy } from '../group.js';

describe('uniqueSorted', () => {
  it('removes duplicates and sorts alphabetically', () => {
    expect(uniqueSorted(['Kerala', 'Tamil Nadu', 'Kerala', 'Nepal']))
      .toEqual(['Kerala', 'Nepal', 'Tamil Nadu']);
  });

  it('returns an empty array for empty input', () => {
    expect(uniqueSorted([])).toEqual([]);
  });
});

describe('groupBy', () => {
  it('groups items by key preserving first-seen order', () => {
    const items = [
      { r: 'Chola', n: 1 }, { r: 'Pandya', n: 2 }, { r: 'Chola', n: 3 },
    ];
    const grouped = groupBy(items, (i) => i.r);
    expect([...grouped.keys()]).toEqual(['Chola', 'Pandya']);
    expect(grouped.get('Chola')).toEqual([{ r: 'Chola', n: 1 }, { r: 'Chola', n: 3 }]);
  });

  it('returns an empty Map for empty input', () => {
    expect(groupBy([], () => 'x').size).toBe(0);
  });
});
