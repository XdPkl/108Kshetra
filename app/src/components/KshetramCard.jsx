/**
 * KshetramCard — zip-parity card (UXD v3.0 Gate 2): vignetted photo with
 * DD-serial and pasuram tags, corner visited/trip toggles, name block and
 * deity/region chip footer. The photo and name area link to the detail page
 * via an overlay link so interactive elements never nest (FR-30/72/79).
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record (enriched; wiki drives the photo)
 */
import { Link } from 'react-router-dom';
import { Check, ExternalLink } from 'lucide-react';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { getDDSerial } from '../data/api.js';

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
          className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold uppercase tracking-wider bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] shadow-xs hover:scale-105 active:scale-95 transition-transform"
        >
          <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
          <span>Visited</span>
        </button>
      )}

      {/* Trip action button */}
      <button
        type="button"
        onClick={() => toggleTrip(kshetram.id)}
        title={inTrip ? 'Remove from pilgrimage trip' : 'Add to pilgrimage trip'}
        aria-pressed={inTrip}
        className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg text-[11px] font-bold border shadow-xs transition-all ${
          inTrip
            ? 'bg-[#FFFDF7]/95 text-[#7A2E00] border-[#C99A2E]/70 hover:bg-[#C99A2E]/20'
            : 'bg-[#FFFDF7]/90 text-[#66523D] border-[#E3D2AE] hover:border-[#C99A2E] hover:text-[#7A2E00]'
        }`}
      >
        {inTrip ? '✓ In trip' : '+ Trip'}
      </button>

      {/* Card image */}
      <div className="relative h-44 overflow-hidden border-b border-[#E3D2AE] bg-[#F6EBD6]">
        {image.src ? (
          <img
            src={image.src}
            alt={`${kshetram.name} Temple`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-[#96731F]/70" aria-hidden="true">
            ◆
          </div>
        )}

        {/* Subtle image vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

        {/* Divya Desam number tag */}
        {serial ? (
          <span className="absolute bottom-2 left-3 text-[11px] font-semibold text-[#FFFDF7] bg-[#571F00]/80 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs">
            DD #{serial}
          </span>
        ) : null}

        {/* Pasurams count tag */}
        {kshetram.pasuramCount > 0 && (
          <span className="absolute bottom-2 right-3 text-[10px] font-medium text-[#FFFDF7] bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded">
            {kshetram.pasuramCount} Pasurams
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-sm text-[#96731F] font-medium block" lang="ta">
            {kshetram.tamilName}
          </span>
          <h3 className="font-display text-[1.4rem] font-semibold text-[#7A2E00] leading-snug group-hover:text-[#B34700] transition-colors mt-0.5">
            {kshetram.name}
          </h3>
          <div className="mt-2.5 pt-2 border-t border-[#F0E3C6]">
            <p className="text-xs font-semibold text-[#332417] line-clamp-1">
              {kshetram.temple}
            </p>
            <p className="text-[11px] text-[#66523D] mt-0.5">
              {kshetram.place} · {kshetram.state}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-[#96731F] font-medium">
          <span className="group-hover:text-[#B34700] flex items-center gap-1 transition-colors">
            <span>View temple details</span>
            <ExternalLink className="w-3 h-3 opacity-75 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </span>
          {!visited && (
            <button
              type="button"
              onClick={() => toggleVisited(kshetram.id)}
              aria-pressed="false"
              className="text-[10px] text-[#66523D] hover:text-[#B34700] underline"
            >
              Mark visited
            </button>
          )}
        </div>
      </div>

      {/* Card badges */}
      <div className="px-5 pb-5 flex flex-wrap gap-1.5 pt-0">
        <span className="px-2 py-0.5 text-[11px] font-medium bg-[#FAF2E3] text-[#7A2E00] border border-[#C99A2E]/50 rounded-md">
          {kshetram.deity}
        </span>
        <span className="px-2 py-0.5 text-[11px] font-medium bg-[#FAF2E3] text-[#66523D] border border-[#C99A2E]/50 rounded-md">
          {kshetram.region}
        </span>
      </div>
    </article>
  );
}
