/**
 * Unit tests for the CMS image-reference resolver (US-CMS-01).
 */
import { describe, it, expect } from 'vitest';
import { assetUrl } from '../assetUrl.js';

describe('assetUrl (US-CMS-01)', () => {
  it('prefixes site-relative paths with the deployment base', () => {
    const base = import.meta.env.BASE_URL;
    expect(assetUrl('photos/desam-86.jpg')).toBe(`${base}photos/desam-86.jpg`);
    expect(assetUrl('/photos/x.jpg')).toBe(`${base}photos/x.jpg`);
  });

  it('passes absolute and inline URLs through unchanged', () => {
    const urls = [
      'https://cdn.sanity.io/images/abc/123/xyz-640x480.jpg?w=640&auto=format',
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Srirangam.jpg',
      'data:image/png;base64,AAAA',
      'blob:https://example.org/1234',
    ];
    for (const url of urls) expect(assetUrl(url)).toBe(url);
  });

  it('returns nullish input untouched', () => {
    expect(assetUrl(null)).toBeNull();
    expect(assetUrl(undefined)).toBeUndefined();
    expect(assetUrl('')).toBe('');
  });
});
