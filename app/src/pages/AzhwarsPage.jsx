/**
 * AzhwarsPage — the twelve Azhwars in traditional order (FR-40/41) as the
 * zip-parity portrait card grid (UXD v3.0 Gate 5): gold-bordered square
 * portrait with the Thiruman watermark fallback, Tamil/name/epithet block,
 * Avatharam & Star rows, summary, amsam/period footer and the desam chips
 * linking into Browse pre-filtered.
 */
import { Link } from 'react-router-dom';
import { getAllAzhwars, getKshetramsByAzhwar } from '../data/api.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { ThirumanIcon } from '../components/SacredIcons.jsx';
import { SITE_COPY } from '../data/siteCopy.js';

/** Number of desam chips shown before the "+N more" link. */
const CHIP_LIMIT = 4;

function AzhwarCard({ azhwar }) {
  const desams = getKshetramsByAzhwar(azhwar.id);
  const chips = desams.slice(0, CHIP_LIMIT);
  const more = desams.length - chips.length;
  const image = useWikiImage(azhwar.wiki ?? null, azhwar.photos?.[0]?.src ?? null);

  return (
    <article className="azhwar-card group relative bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/45 p-5 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#C99A2E] transition-all flex flex-col justify-between">
      {/* Whole-card navigation overlay (below the desam chips) */}
      <Link
        to={`/azhwar/${azhwar.id}`}
        aria-label={`${azhwar.name} — view the saint dossier`}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 pointer-events-none">
        {/* Portrait + identity block */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-2 border-[#C99A2E]/70 overflow-hidden shrink-0 bg-[#FAF2E3] shadow-xs group-hover:border-[#B34700] transition-colors relative flex items-center justify-center">
            {image.src ? (
              <img
                src={image.src}
                alt={`${azhwar.name} portrait`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 relative z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            ) : null}
            {/* Sacred Thiruman watermark fallback */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAF2E3] text-[#7A2E00]">
              <ThirumanIcon className="w-8 h-10 opacity-70" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-xs text-[#96731F] font-bold block" lang="ta">
              {azhwar.tamilName}
            </span>
            <h2 className="font-display text-xl font-bold text-[#7A2E00] leading-snug group-hover:text-[#B34700] transition-colors">
              {azhwar.name}
            </h2>
            {azhwar.epithets?.[0] ? (
              <p className="text-[11px] text-[#66523D] line-clamp-1">{azhwar.epithets[0]}</p>
            ) : null}

            <div className="mt-2 text-[11px] text-[#66523D] space-y-0.5">
              <p className="truncate">
                <strong>Avatharam:</strong> {azhwar.birthplace?.district ?? azhwar.birthplace?.name ?? azhwar.note.split(';')[0]}
              </p>
              {azhwar.birthStar ? (
                <p className="truncate">
                  <strong>Star:</strong> {azhwar.birthStar}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <p className="text-xs text-[#332417] line-clamp-3 leading-relaxed">
          {azhwar.note}
        </p>
      </div>

      {/* Footer: amsam/period + desam chips */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-[#F0E3C6] space-y-2 text-[11px] text-[#66523D]">
        <p><strong>Divine Amsam:</strong> {azhwar.amsam ?? '—'}</p>
        <p>
          <strong>Period:</strong> {azhwar.period} · {azhwar.pasuramCount.toLocaleString('en-IN')} pasurams · <em>{azhwar.work}</em>
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2 py-0.5 text-[11px] font-bold bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] rounded-md border border-[#96731F]">
            {desams.length} desams
          </span>
          {chips.map((k) => (
            <Link
              key={k.id}
              to={`/kshetram/${k.id}`}
              className="px-2 py-0.5 text-[11px] font-medium bg-[#FAF2E3] text-[#7A2E00] border border-[#C99A2E]/50 rounded-md hover:border-[#B34700] hover:text-[#B34700] transition-colors"
            >
              {k.name}
            </Link>
          ))}
          {more > 0 ? (
            <Link
              className="chip chip--more px-2 py-0.5 text-[11px] font-medium bg-[#FAF2E3] text-[#66523D] border border-[#C99A2E]/50 rounded-md hover:border-[#B34700] hover:text-[#B34700] transition-colors"
              to={`/kshetrams?azhwar=${azhwar.id}`}
            >
              +{more} more
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function AzhwarsPage() {
  const azhwars = getAllAzhwars();
  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="border-b border-[#E3D2AE] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
          {SITE_COPY.azhwarsPage.eyebrow}
        </span>
        <h1 className="font-display text-3xl font-semibold text-[#7A2E00] mt-0.5">
          {SITE_COPY.azhwarsPage.title} <span lang="ta" className="text-2xl">{SITE_COPY.azhwarsPage.titleTamil}</span>
        </h1>
        <p className="text-sm text-[#66523D] mt-1 max-w-2xl">
          {SITE_COPY.azhwarsPage.lead}
        </p>
      </div>

      {/* Grid of all 12 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {azhwars.map((azhwar) => <AzhwarCard key={azhwar.id} azhwar={azhwar} />)}
      </div>
    </div>
  );
}
