/**
 * FeaturedKshetramCard — 2026-09-30 restyle (PO mockup): large horizontal
 * card — photo left with the trip toggle, content right with the Tamil +
 * display name block, gold hairline, temple/location lines, deity pill and
 * a "View temple" solid action beside "Mark visited". Whole-card navigation
 * overlay so interactive elements never nest (FR-30/72/79). Home-only —
 * Browse keeps the compact KshetramCard.
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record (enriched; wiki drives the photo)
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useVisited } from '../../hooks/useVisited.js';
import { useTrip } from '../../hooks/useTrip.js';
import { useWikiImage } from '../../hooks/useWikiImage.js';

export default function FeaturedKshetramCard({ kshetram }) {
  const { isVisited, toggleVisited } = useVisited();
  const { isInTrip, toggleTrip } = useTrip();
  const visited = isVisited(kshetram.id);
  const inTrip = isInTrip(kshetram.id);
  const image = useWikiImage(kshetram.wiki ?? null, kshetram.photo ?? null);

  return (
    <article
      className={`featured-card group relative flex flex-col overflow-hidden rounded-xl border bg-[#FFFDF7] shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:flex-row ${
        visited
          ? 'border-[#C99A2E] ring-1 ring-[#C99A2E]/40'
          : 'border-[#E3D2AE] hover:border-[#C99A2E]'
      }`}
    >
      {/* Whole-card navigation overlay (below the action buttons) */}
      <Link
        to={`/kshetram/${kshetram.id}`}
        aria-label={`${kshetram.name} — view temple details`}
        className="absolute inset-0 z-0"
      />

      {/* Visited badge / toggle */}
      {visited && (
        <button
          type="button"
          onClick={() => toggleVisited(kshetram.id)}
          title="Click to toggle visited status"
          aria-pressed="true"
          className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-[#4A3005]! shadow-xs"
        >
          <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
          <span>Visited</span>
        </button>
      )}

      {/* Photo column with the trip action chip */}
      <div className="relative h-56 shrink-0 overflow-hidden bg-[#F6EBD6] sm:h-auto sm:w-[44%]">
        {image.src ? (
          <img
            src={image.src}
            alt={`${kshetram.name} Temple`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#96731F]/70" aria-hidden="true">
            ◆
          </div>
        )}

        <button
          type="button"
          onClick={() => toggleTrip(kshetram.id)}
          title={inTrip ? 'Remove from pilgrimage trip' : 'Add to pilgrimage trip'}
          aria-pressed={inTrip}
          className={`absolute top-3 right-3 z-10 rounded-full px-3.5 py-1.5 text-[13px] font-semibold shadow-md transition-all ${
            inTrip
              ? 'bg-[#FFFDF7] text-[#7A2E00]! ring-1 ring-[#C99A2E]/70'
              : 'bg-[#FFFDF7]/95 text-[#332417] ring-1 ring-[#E3D2AE] hover:bg-[#FFFDF7]'
          }`}
        >
          {inTrip ? '✓ In trip' : '+ Trip'}
        </button>
      </div>

      {/* Content column */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[15px] font-medium text-[#96731F]" lang="ta">
          {kshetram.tamilName}
        </p>
        {/* ! marks beat the legacy h2/h3 color + line-height rules in base.css */}
        <h3 className="mt-0.5 font-display text-[28px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
          {kshetram.name}
        </h3>
        <div className="mt-3 border-t border-[#E3D2AE]" aria-hidden="true" />
        <p className="mt-3 text-[15px] font-semibold leading-snug text-[#332417]">
          {kshetram.temple}
        </p>
        <p className="mt-1 text-sm text-[#66523D]">
          {kshetram.place} · {kshetram.state}
        </p>
        <span className="mt-3 inline-flex self-start rounded-full border border-[#C99A2E]/50 bg-[#FAF2E3] px-3 py-1 text-[13px] font-medium text-[#5C1F00]">
          {kshetram.deity}
        </span>

        {/* Action row (z-10: must sit above the whole-card overlay link) */}
        <div className="relative z-10 mt-auto flex items-center gap-2.5 pt-5">
          {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#7A2E00] px-3.5 py-2 text-sm font-semibold text-[#FFFDF7]! shadow-xs group-hover:bg-[#5C1F00] transition-colors">
            <span>View temple</span>
            <ArrowRight className="h-4 w-4 opacity-85 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </span>
          {!visited && (
            <button
              type="button"
              onClick={() => toggleVisited(kshetram.id)}
              aria-pressed="false"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#C99A2E] px-3.5 py-2 text-sm font-semibold text-[#7A2E00]! transition-colors hover:bg-[#FAF2E3]"
            >
              <svg viewBox="0 0 18 18" className="h-[16px] w-[16px] text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="9" r="7.2" />
                <path d="M5.8 9.2l2.2 2.2 4.2-4.6" />
              </svg>
              Mark visited
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
