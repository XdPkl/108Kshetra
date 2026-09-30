/**
 * KshetramCard — 2026-09-30 restyle (PO mockup): photo with the trip chip
 * and DD-serial tag (the "Photo coming soon" state shows the gold gopuram
 * line-art), Tamil + display name block, hairline, temple/location lines,
 * region pill, and an action row of the solid gold "View temple" action
 * beside "Mark visited". Whole-card navigation overlay so interactive
 * elements never nest (FR-30/72/79).
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record (enriched; wiki drives the photo)
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { getDDSerial } from '../data/api.js';
import GopuramArt from './GopuramArt.jsx';

export default function KshetramCard({ kshetram }) {
  const { isVisited, toggleVisited } = useVisited();
  const { isInTrip, toggleTrip } = useTrip();
  const visited = isVisited(kshetram.id);
  const inTrip = isInTrip(kshetram.id);
  const image = useWikiImage(kshetram.wiki ?? null, kshetram.photo ?? null);
  const serial = getDDSerial(kshetram.id);

  return (
    <article
      className={`kshetram-card group relative bg-[#FFFDF7] rounded-2xl border overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        visited
          ? 'kshetram-card--visited border-[#C99A2E] ring-1 ring-[#C99A2E]/40'
          : 'border-[#C99A2E]/45 hover:border-[#C99A2E]'
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

      {/* Card image with trip chip + DD tag */}
      <div className="relative h-52 shrink-0 overflow-hidden border-b border-[#E3D2AE] bg-[#F6EBD6]">
        {image.src ? (
          <img
            src={image.src}
            alt={`${kshetram.name} Temple`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <>
            <GopuramArt className="absolute inset-0 m-auto h-[75%] w-[70%] text-[#C99A2E] opacity-55" />
            <p className="absolute inset-x-0 bottom-4 text-center text-[13px] font-medium text-[#66523D]/80">
              Photo coming soon
            </p>
          </>
        )}

        {/* Trip action button */}
        <button
          type="button"
          onClick={() => toggleTrip(kshetram.id)}
          title={inTrip ? 'Remove from pilgrimage trip' : 'Add to pilgrimage trip'}
          aria-pressed={inTrip}
          className={`absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] shadow-xs transition-all ${
            inTrip
              ? 'border border-[#C99A2E]/70 bg-[#FFFDF7] font-bold text-[#7A2E00]'
              : 'bg-[#FFFDF7]/95 font-semibold text-[#332417] ring-1 ring-[#E3D2AE] hover:bg-[#FFFDF7]'
          }`}
        >
          {inTrip ? (
            <>
              <Check className="h-3.5 w-3.5 text-[#96731F]" strokeWidth={3} aria-hidden="true" />
              <span>In trip</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M12 5v14m-7-7h14" />
              </svg>
              <span>Add to trip</span>
            </>
          )}
        </button>

        {/* Divya Desam number tag */}
        {serial ? (
          <span className="absolute bottom-3 left-3 rounded bg-[#571F00]/85 px-2 py-0.5 text-[11px] font-bold tracking-wide text-[#F5E3BC] backdrop-blur-xs">
            DD #{serial}
          </span>
        ) : null}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[14px] font-medium text-[#96731F]" lang="ta">
          {kshetram.tamilName}
        </span>
        <h3 className="mt-0.5 font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
          {kshetram.name}
        </h3>
        <div className="mt-3 border-t border-[#E3D2AE]" aria-hidden="true" />
        <p className="mt-3 text-[15px] font-semibold leading-snug text-[#332417] line-clamp-1">
          {kshetram.temple}
        </p>
        <p className="mt-1 text-[13px] text-[#66523D]">
          {kshetram.place} · {kshetram.state}
        </p>
        <span className="mt-3 inline-flex self-start rounded-md border border-[#C99A2E]/50 bg-[#FAF2E3] px-2.5 py-1 text-[12px] font-medium text-[#7A2E00]">
          {kshetram.region}
        </span>

        {/* Action row (z-10: must sit above the whole-card overlay link) */}
        <div className="relative z-10 mt-auto flex items-center gap-3 pt-5">
          {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#96731F] px-5 py-2.5 text-[14px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors group-hover:bg-[#7A2E00]">
            <span>View temple</span>
            <ArrowRight className="h-4 w-4 opacity-85 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </span>
          <span className="h-7 w-px bg-[#E3D2AE]" aria-hidden="true" />
          {!visited && (
            <button
              type="button"
              onClick={() => toggleVisited(kshetram.id)}
              aria-pressed="false"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 text-[14px] font-medium text-[#332417]! transition-colors hover:text-[#7A2E00]!"
            >
              <svg viewBox="0 0 22 22" className="h-[18px] w-[18px] text-[#66523D]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="11" cy="11" r="8.2" />
              </svg>
              Mark visited
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
