/**
 * SaintPortrait — the framed portrait with the Thiruman watermark fallback,
 * shared by the saint templates (FR-90/94). Extracted from Identification
 * for the 2026-09-30 azhwar hero restyle; Identification now composes it.
 * Restyled to the kxd theme (round 18): tint frame, hairline border, the
 * labelled fallback div kept for assistive tech (UT-AZW-03 placeholder).
 * @param {object} props
 * @param {{src?: string|null, wiki?: string|null, alt: string}} props.portrait
 * @param {string} [props.className] - extra classes for the figure (grid span)
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import { ThirumanIcon } from '../SacredIcons.jsx';

export default function SaintPortrait({ portrait, className = '' }) {
  const image = useWikiImage(portrait?.wiki ?? null, portrait?.src ?? null);
  return (
    <figure className={`azd-portrait ${className}`}>
      {image.src ? (
        <img
          src={image.src}
          alt={portrait.alt}
          className="azd-portrait__img"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : null}
      <div className="azd-portrait__fallback" role="img" aria-label={portrait.alt}>
        <ThirumanIcon className="h-14 w-20 opacity-60" />
      </div>
    </figure>
  );
}
