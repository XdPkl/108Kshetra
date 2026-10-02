/**
 * Wikipedia summary-image fetch with module-level cache — shared by
 * the kshetram hero and the gallery lightbox so one fetch
 * serves all (FR-60/85). The PO round-17 audit found the ~330px lead
 * thumbnail visibly soft when enlarged to the hero's 540px+ frame, so the
 * thumb URL is rewritten to a fixed 1280px width (upload.wikimedia.org
 * hotlinks stay fixed-width per the NFR); non-thumb URLs fall back to the
 * original image when reasonably sized, else the summary thumbnail.
 */
const SUMMARY_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const HERO_WIDTH = 1280;

/** @type {Record<string, {src: string|null, credit: string|null}>} */
const cache = {};

/** Rewrites a Wikimedia thumbnail URL to a larger fixed width. */
function upscaleThumb(url, width) {
  if (!url) return null;
  if (/\/thumb\//.test(url) && /\/\d+px-[^/]*$/.test(url)) {
    return url.replace(/\/\d+px-([^/]*)$/, `/${width}px-$1`);
  }
  return null;
}

/**
 * Fetches (or recalls) the lead image for a Wikipedia article.
 * @param {string|null} title - article title; null resolves to a placeholder
 * @returns {Promise<{src: string|null, credit: string|null}>}
 */
export function fetchWikiImage(title) {
  const placeholder = { src: null, credit: null };
  if (!title) return Promise.resolve(placeholder);
  if (cache[title]) return Promise.resolve(cache[title]);
  return fetch(`${SUMMARY_API}${encodeURIComponent(title.replace(/ /g, '_'))}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error('no article'))))
    .then((data) => {
      const thumb = data.thumbnail?.source;
      const original = data.originalimage;
      const upscaled = upscaleThumb(thumb, HERO_WIDTH);
      const src = upscaled
        ?? (original?.source && original.width <= 4000 ? original.source : null)
        ?? thumb
        ?? null;
      const value = src
        ? {
            src,
            credit: `Photo: ${data.description || data.titles?.normalized || title} — Wikipedia (CC BY-SA)`,
          }
        : placeholder;
      cache[title] = value;
      return value;
    })
    .catch(() => {
      cache[title] = placeholder;
      return placeholder;
    });
}

/** Synchronous cache peek used to render instantly when available. */
export function getCachedWikiImage(title) {
  return (title && cache[title]) || null;
}
