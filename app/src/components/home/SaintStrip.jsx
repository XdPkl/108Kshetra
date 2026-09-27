/**
 * SaintStrip — zip-parity darshan strip (UXD v3.0 Gate 2): gold-top-hairline
 * cream card with a centered row of photo tiles (dark gradient overlay, gold
 * top line, Tamil + English name overlay) and a footer CTA link. Shared by the
 * Azhwar and Acharya strips on Home.
 *
 * Round 2 (PO 2026-09-27): tiles ~60% smaller so the full twelve Azhwars /
 * five featured Acharyas fit. Round 3 (PO 2026-09-27): the two strips sit
 * side by side at 50% each, and each strip's two headline lines render on one
 * row at the same font size, with the remaining line as a small subline.
 * @param {object} props
 * @param {string} props.headlineA - first headline line (left)
 * @param {string} props.headlineB - second headline line (right, same size)
 * @param {string} props.subline - the remaining copy line, rendered small
 * @param {Array} props.saints - azhwar/acharya records (wiki / photos / names)
 * @param {string} props.base - detail route base ('/azhwar' | '/acharya')
 * @param {string} props.ctaLabel - footer CTA text
 * @param {string} props.ctaTo - footer CTA destination
 */
import { Link } from 'react-router-dom';
import { useWikiImage } from '../../hooks/useWikiImage.js';

/** One photo tile; the whole tile links to the saint's dossier. */
function SaintTile({ saint, base }) {
  const image = useWikiImage(saint.wiki ?? null, saint.photos?.[0]?.src ?? null);
  return (
    <Link
      to={`${base}/${saint.id}`}
      className="group relative aspect-[9/16] w-[calc(50%-6px)] min-[480px]:w-[calc(25%-9px)] rounded-xl border border-[#C99A2E]/50 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:border-[#C99A2E] transition-all text-left"
    >
      {/* Photo fills the tile */}
      {image.src ? (
        <img
          src={image.src}
          alt={`${saint.name} portrait`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : (
        <div className="absolute inset-0 bg-[#F6EBD6] flex items-center justify-center" aria-hidden="true">
          <span className="text-3xl text-[#96731F]/70">◆</span>
        </div>
      )}

      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Top gold accent line */}
      <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F] origin-left scale-x-40 group-hover:scale-x-100 transition-transform duration-300 pointer-events-none" />

      {/* Overlaid Tamil and English names */}
      <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2 pointer-events-none">
        <p className="text-[9px] sm:text-[10px] text-[#FFDF78] font-medium leading-none line-clamp-1" lang="ta">
          {saint.tamilName}
        </p>
        <p className="font-display text-[13px] sm:text-sm font-bold text-[#FFFDF7] leading-tight group-hover:text-[#FFDF78] transition-colors line-clamp-1 mt-0.5">
          {saint.name}
        </p>
      </div>
    </Link>
  );
}

export default function SaintStrip({ headlineA, headlineB, subline, saints, base, ctaLabel, ctaTo }) {
  return (
    <section className="flex flex-col rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] py-3.5 sm:py-4 px-4 sm:px-6 text-center relative overflow-hidden shadow-xs">
      {/* Golden top hairline gradient */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent" aria-hidden="true" />

      {/* PO round 3: the strip's two headline lines share one row, one size */}
      <h2 className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
        <span className="font-display text-[15px] font-bold text-[#7A2E00]">{headlineA}</span>
        <span className="w-1 h-1 rounded-full bg-[#C99A2E] shrink-0 self-center text-[15px] leading-none" aria-hidden="true" />
        <span className="font-display text-[15px] font-bold text-[#7A2E00]">{headlineB}</span>
      </h2>
      <p className="text-[11px] text-[#66523D] mt-0.5">{subline}</p>

      {/* Photo tiles — centered flex row so any saint count sits evenly */}
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {saints.map((saint) => (
          <SaintTile key={saint.id} saint={saint} base={base} />
        ))}
      </div>

      <div className="mt-auto pt-3 flex justify-center">
        <Link
          to={ctaTo}
          className="inline-block px-4 py-1.5 rounded-full border border-[#B34700]/60 text-[#7A2E00] text-xs font-semibold hover:bg-[#B34700]/10 hover:text-[#B34700] active:scale-95 transition-all shadow-2xs"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
