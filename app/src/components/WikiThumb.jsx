/**
 * WikiThumb — shows a Wikipedia lead thumbnail for a given article title
 * (sourced deity/temple photos, FR-60/61). Renders a decorative placeholder
 * while loading, on error, or when no article exists. Results are cached at
 * module level (utils/wikiImage.js) so repeated titles share one fetch.
 * @param {object} props
 * @param {string|null} props.title - Wikipedia article title
 * @param {string} props.alt        - alt text for the image
 */
import { useEffect, useState } from 'react';
import { fetchWikiImage, getCachedWikiImage } from '../utils/wikiImage.js';

export default function WikiThumb({ title, alt }) {
  const [entry, setEntry] = useState(() => getCachedWikiImage(title) || { src: null, credit: null });

  useEffect(() => {
    if (!title || getCachedWikiImage(title)) return undefined;
    let cancelled = false;
    fetchWikiImage(title).then((value) => {
      if (!cancelled) setEntry(value);
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
