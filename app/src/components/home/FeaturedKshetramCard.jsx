/**
 * FeaturedKshetramCard — 2026-09 refresh large card for the Home featured
 * grid (PO-approved mockup): tall photo with the trip toggle and the
 * DD-serial / pasuram tags, Tamil + display name block, and a footer row of
 * "View temple details" + "Mark visited". Whole-card navigation overlay so
 * interactive elements never nest (FR-30/72/79). Home-only — Browse keeps
 * the compact KshetramCard.
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record (enriched; wiki drives the photo)
 */
import { Link } from 'react-router-dom';
import { Check, ExternalLink } from 'lucide-react';
import { useVisited } from '../../hooks/useVisited.js';
import { useTrip } from '../../hooks/useTrip.js';
import { useWikiImage } from '../../hooks/useWikiImage.js';
import { getDDSerial } from '../../data/api.js';

export default function FeaturedKshetramCard({ kshetram }) {
  const { isVisited, toggleVisited } = useVisited();
  const { isInTrip, toggleTrip } = useTrip();
  const visited = isVisited(kshetram.id);
  const inTrip = isInTrip(kshetram.id);
  const image = useWikiImage(kshetram.wiki ?? null, kshetram.photo ?? null);
  const serial = getDDSerial(kshetram.id);

  return (
    <article
      className={`featured-card group relative flex flex-col overflow-hidden rounded-xl border bg-[#FFFDF7] shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
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

      {/* Trip action button */}
      <button
        type="button"
        onClick={() => toggleTrip(kshetram.id)}
        title={inTrip ? 'Remove from pilgrimage trip' : 'Add to pilgrimage trip'}
        aria-pressed={inTrip}
        className={`absolute top-3 right-3 z-10 rounded-full px-3.5 py-1.5 text-[13px] font-semibold shadow-md transition-all ${
          inTrip
            ? 'bg-[#FFFDF7] text-[#7A2E00]! ring-1 ring-[#C99A2E]/70'
            : 'bg-white/95 text-[#332417] hover:bg-white'
        }`}
      >
        {inTrip ? '✓ In trip' : '+ Trip'}
      </button>

      {/* Tall photo with serial / pasuram tags */}
      <div className="relative h-60 shrink-0 overflow-hidden bg-[#F6EBD6]">
        {image.src ? (
          <img
            src={image.src}
            alt={`${kshetram.name} Temple`}
            loading="lazy"
            className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#96731F]/70" aria-hidden="true">
            ◆
          </div>
        )}

        {serial ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-[#571F00]/85 px-2.5 py-1 text-xs font-bold tracking-wide text-[#F5E3BC]">
            DD #{serial}
          </span>
        ) : null}

        {kshetram.pasuramCount > 0 && (
          <span className="absolute bottom-3 right-3 rounded-md bg-[#571F00]/85 px-2.5 py-1 text-xs font-bold tracking-wide text-[#F5E3BC]">
            {kshetram.pasuramCount} Pasurams
          </span>
        )}
      </div>

      {/* Name block */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[15px] font-medium text-[#96731F]" lang="ta">
          {kshetram.tamilName}
        </p>
        {/* ! marks beat the legacy h2/h3 color + line-height rules in base.css */}
        <h3 className="mt-0.5 font-display text-[28px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
          {kshetram.name}
        </h3>
        <p className="mt-2.5 text-[15px] font-medium leading-snug text-[#332417]">
          {kshetram.temple}
        </p>
        <p className="mt-1 text-sm text-[#66523D]">
          {kshetram.place} · {kshetram.state}
        </p>
      </div>

      {/* Footer row */}
      <div className="mt-auto flex items-center justify-between border-t border-[#E3D2AE] px-5 py-4">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-[#B34700]!">
          <span>View temple details</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-75 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </span>
        {!visited && (
          <button
            type="button"
            onClick={() => toggleVisited(kshetram.id)}
            aria-pressed="false"
            className="flex items-center gap-1.5 text-sm font-medium text-[#332417] hover:text-[#7A2E00] transition-colors"
          >
            <svg viewBox="0 0 18 18" className="h-[18px] w-[18px] text-[#66523D]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="9" r="7.2" />
              <path d="M5.8 9.2l2.2 2.2 4.2-4.6" />
            </svg>
            Mark visited
          </button>
        )}
      </div>
    </article>
  );
}
