/**
 * Resolves bundled image paths; remote URLs are deliberately rejected.
 * Browser-local uploads (data/blob) do not fetch third-party photos.
 * @param {string|null} src - stored image reference
 * @returns {string|null|undefined} local image URL, or null for a remote source
 */
export function assetUrl(src) {
  if (!src) return src;
  const value = src.trim();
  if (/^(data:image\/|blob:)/i.test(value)) return value;
  if (/^[a-z][a-z0-9+.-]*:|^[/\\]{2}/i.test(value)) return null;
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${value.startsWith('/') ? value.slice(1) : value}`;
}
