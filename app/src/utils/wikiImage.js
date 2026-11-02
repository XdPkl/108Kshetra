/** Legacy compatibility helpers: remote photo discovery is disabled. */
export function fetchWikiImage() {
  return Promise.resolve({ src: null, credit: null });
}

/** No remote image cache is used. */
export function getCachedWikiImage() {
  return null;
}
