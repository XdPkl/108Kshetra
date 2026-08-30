/**
 * WikiThumb — shows a photo for a deity/temple: either a supplied local
 * image (`src`) or the Wikipedia lead thumbnail for a given article title
 * (FR-60/61). Renders a decorative placeholder while loading, on error, or
 * when neither source exists. Wiki results are cached at module level
 * (utils/wikiImage.js) so repeated titles share one fetch.
 * @param {object} props
 * @param {string|null} [props.title] - Wikipedia article title
 * @param {string|null} [props.src]   - direct image URL/path (takes precedence)
 * @param {string} props.alt        - alt text for the image
 */
import { useEffect, useState } from 'react';
import { fetchWikiImage, getCachedWikiImage } from '../utils/wikiImage.js';

export default function WikiThumb({ title, src, alt }) {
  const [entry, setEntry] = useState(() => getCachedWikiImage(title) || { src: null, credit: null });

  useEffect(() => {
    if (!title || src || getCachedWikiImage(title)) return undefined;
    let cancelled = false;
    fetchWikiImage(title).then((value) => {
      if (!cancelled) setEntry(value);
    });
    return () => { cancelled = true; };
  }, [title, src]);

  if (src) {
    return (
      <figure className="deity-photo">
        <img src={src} alt={alt} loading="lazy" />
      </figure>
    );
  }
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
