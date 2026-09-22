/**
 * useWikiImage — resolves an image the way WikiThumb does (local src first,
 * else the cached Wikipedia lead thumbnail) but returns the raw entry so
 * zip-parity layouts can render the <img> with their own markup (UXD v3.0).
 * @param {string|null} title - Wikipedia article title
 * @param {string|null} [src] - direct image URL/path (takes precedence)
 * @returns {{src: string|null, credit: string|null}}
 */
import { useEffect, useState } from 'react';
import { fetchWikiImage, getCachedWikiImage } from '../utils/wikiImage.js';

export function useWikiImage(title, src = null) {
  const [entry, setEntry] = useState(() => {
    if (src) return { src, credit: null };
    return getCachedWikiImage(title) || { src: null, credit: null };
  });

  useEffect(() => {
    if (src) {
      setEntry({ src, credit: null });
      return undefined;
    }
    if (!title || getCachedWikiImage(title)) return undefined;
    let cancelled = false;
    fetchWikiImage(title).then((value) => {
      if (!cancelled) setEntry(value);
    });
    return () => { cancelled = true; };
  }, [title, src]);

  return entry;
}
