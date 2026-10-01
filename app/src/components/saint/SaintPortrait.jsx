/**
 * SaintPortrait — the framed portrait with the Thiruman watermark fallback,
 * shared by the saint templates (FR-90/94). Extracted from Identification
 * for the 2026-09-30 azhwar hero restyle; Identification now composes it.
 * @param {object} props
 * @param {{src?: string|null, wiki?: string|null, alt: string}} props.portrait
 * @param {string} [props.className] - extra classes for the figure (grid span)
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import { ThirumanIcon } from '../SacredIcons.jsx';

export default function SaintPortrait({ portrait, className = '' }) {
  const image = useWikiImage(portrait?.wiki ?? null, portrait?.src ?? null);
  return (
    <figure className={`relative rounded-2xl overflow-hidden border-2 border-[#C99A2E]/70 shadow-md aspect-[3/4] bg-[#FAF2E3] m-0 group ${className}`}>
      {image.src ? (
        <img
          src={image.src}
          alt={portrait.alt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 relative z-10"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center bg-[#FAF2E3] text-[#7A2E00]" role="img" aria-label={portrait.alt}>
        <ThirumanIcon className="w-14 h-20 opacity-60" />
      </div>
    </figure>
  );
}
