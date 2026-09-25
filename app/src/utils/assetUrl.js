/**
 * assetUrl — resolves a stored image reference to a displayable URL.
 *
 * Storage formats (CMS rollout, US-CMS-01):
 *  - site-relative path, e.g. 'photos/desam-86.jpg' → prefixed with the
 *    deployment BASE_URL (GitHub Pages sub-path);
 *  - absolute URL (Sanity CDN, Wikimedia, data:/blob: previews) → unchanged.
 * @param {string|null} [src]
 * @returns {string|null}
 */
export function assetUrl(src) {
  if (!src) return src;
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${src.startsWith('/') ? src.slice(1) : src}`;
}
