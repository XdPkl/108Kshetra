/**
 * Resolves only explicitly supplied local images. The legacy hook name is
 * retained for existing callers; Wikipedia titles never trigger requests.
 * @param {string|null} _title - retained metadata, not an image source
 * @param {string|null} src - bundled path or local browser image
 * @returns {{src: string|null, credit: null}}
 */
import { assetUrl } from '../utils/assetUrl.js';

export function useWikiImage(_title, src = null) {
  return { src: assetUrl(src) || null, credit: null };
}
