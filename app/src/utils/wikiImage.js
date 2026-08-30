/**
 * Wikipedia summary-image fetch with module-level cache — shared by
 * WikiThumb and the gallery lightbox so one fetch serves both (FR-60/85).
 */
const SUMMARY_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

/** @type {Record<string, {src: string|null, credit: string|null}>} */
const cache = {};

/**
 * Fetches (or recalls) the lead thumbnail for a Wikipedia article.
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
      const value = data.thumbnail?.source
        ? {
            src: data.thumbnail.source,
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
