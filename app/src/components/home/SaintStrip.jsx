/**
 * SaintStrip — zip-parity darshan strip (UXD v3.0 Gate 2): gold-top-hairline
 * cream card with a 2×4 grid of photo tiles (dark gradient overlay, gold top
 * line, Tamil + English name overlay) and a footer CTA link. Shared by the
 * Azhwar and Acharya strips on Home.
 * @param {object} props
 * @param {string} props.eyebrow - small-caps label above the title
 * @param {string} props.title - strip heading
 * @param {string} props.lead - one-line description
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
      className="group relative h-28 sm:h-32 w-full rounded-xl border border-[#C99A2E]/50 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:border-[#C99A2E] transition-all text-left"
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
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 pointer-events-none">
        <p className="text-[10px] sm:text-[11px] text-[#FFDF78] font-medium leading-none line-clamp-1" lang="ta">
          {saint.tamilName}
        </p>
        <p className="font-display text-sm sm:text-base font-bold text-[#FFFDF7] leading-tight group-hover:text-[#FFDF78] transition-colors line-clamp-1 mt-0.5">
          {saint.name}
        </p>
      </div>
    </Link>
  );
}

export default function SaintStrip({ eyebrow, title, lead, saints, base, ctaLabel, ctaTo }) {
  return (
    <section className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] py-3.5 sm:py-4 px-4 sm:px-6 text-center relative overflow-hidden shadow-xs">
      {/* Golden top hairline gradient */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent" aria-hidden="true" />

      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#B34700]">
        {eyebrow}
      </span>
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#7A2E00] mt-0.5">
        {title}
      </h2>
      <p className="text-xs text-[#66523D] mt-0.5 max-w-lg mx-auto">
        {lead}
      </p>

      {/* Photo tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mt-3">
        {saints.map((saint) => <SaintTile key={saint.id} saint={saint} base={base} />)}
      </div>

      <div className="mt-3 flex justify-center">
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
