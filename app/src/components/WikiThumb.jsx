/**
 * WikiThumb — fetches a thumbnail from the Wikipedia REST summary API for a
 * given article title (sourced deity/temple photos, FR-60/61). Renders a
 * decorative placeholder while loading, on error, or when no article exists.
 * Results are cached at module level so the three deity cards share one fetch.
 * @param {object} props
 * @param {string|null} props.title - Wikipedia article title
 * @param {string} props.alt        - alt text for the image
 */
import { useEffect, useState } from 'react';

const SUMMARY_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
/** @type {Record<string, {src: string|null, credit: string|null}>} */
const wikiImageCache = {};
const PLACEHOLDER = { src: null, credit: null };

export default function WikiThumb({ title, alt }) {
  const [entry, setEntry] = useState(() => (title && wikiImageCache[title]) || PLACEHOLDER);

  useEffect(() => {
    if (!title || wikiImageCache[title]) return undefined;
    let cancelled = false;
    fetch(`${SUMMARY_API}${encodeURIComponent(title.replace(/ /g, '_'))}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('no article'))))
      .then((data) => {
        const value = data.thumbnail?.source
          ? { src: data.thumbnail.source, credit: `Photo: ${data.description || data.titles?.normalized || title} — Wikipedia (CC BY-SA)` }
          : PLACEHOLDER;
        wikiImageCache[title] = value;
        if (!cancelled) setEntry(value);
      })
      .catch(() => {
        wikiImageCache[title] = PLACEHOLDER;
        if (!cancelled) setEntry(PLACEHOLDER);
      });
    return () => { cancelled = true; };
  }, [title]);

  if (!entry.src) {
    return <span className="deity-photo deity-photo--placeholder" aria-label={alt}>◆</span>;
  }
  return (
    <figure className="deity-photo">
      <img src={entry.src} alt={alt} loading="lazy" />
      {entry.credit ? <figcaption className="deity-photo__credit">{entry.credit}</figcaption> : null}
    </figure>
  );
}
