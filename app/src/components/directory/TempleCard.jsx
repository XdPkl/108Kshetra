/**
 * TempleCard — the shared temple-card foundation (PO round 23) used by
 * the home featured grid (and reusable by any directory surface):
 * directory portrait framing for the photo (Wikipedia image or tint
 * fallback), English name followed by the Tamil name, location
 * metadata, and the consistent action set — "View temple" (solid
 * primary), "Add to trip" (outlined, pressed state) and "Mark as
 * visited" (outlined, pressed state). No whole-card overlay: the View
 * temple link is the single navigation stop.
 */
import { ArrowRight } from 'lucide-react';
import { useVisited } from '../../hooks/useVisited.js';
import { useTrip } from '../../hooks/useTrip.js';
import { useWikiImage } from '../../hooks/useWikiImage.js';
import { ButtonLink } from '../ui/Button.jsx';
import PortraitFallback from './PortraitFallback.jsx';

export default function TempleCard({ kshetram }) {
  const { isVisited, toggleVisited } = useVisited();
  const { isInTrip, toggleTrip } = useTrip();
  const visited = isVisited(kshetram.id);
  const inTrip = isInTrip(kshetram.id);
  const image = useWikiImage(kshetram.wiki ?? null, kshetram.photo ?? null);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border bg-[#FFFDF7] shadow-xs transition-all duration-300 hover:shadow-md ${
        visited ? 'border-[#a77529]' : 'border-[#e8cf9f] hover:border-[#a77529]'
      }`}
    >
      {/* Photo — one framing rule (top-anchored cover) everywhere */}
      <div className="relative h-52 shrink-0 overflow-hidden bg-[#fbf0dc] sm:h-56">
        {image.src ? (
          <img
            src={image.src}
            alt={`${kshetram.name} Temple`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <PortraitFallback icon={<span className="text-4xl text-[#96731F]/70" aria-hidden="true">◆</span>} />
        )}
        {visited ? (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#922e0d] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FFFDF7]">
            <svg viewBox="0 0 18 18" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 9.4l3.2 3.2 6.6-7" />
            </svg>
            Visited
          </span>
        ) : null}
      </div>

      {/* Identity — English name, then Tamil name (site-wide order) */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="dir-entry__name m-0">{kshetram.name}</h3>
        {kshetram.tamilName ? (
          <p className="dir-entry__tamil mt-0.5" lang="ta">{kshetram.tamilName}</p>
        ) : null}
        <p className="mt-3 text-[14px] font-semibold leading-snug text-[#333942]">
          {kshetram.temple}
        </p>
        <p className="mt-1 text-[14px] leading-[22px] text-[#74716b]">
          {kshetram.place} · {kshetram.state}
        </p>
        {kshetram.deity ? (
          <p className="mt-3 inline-flex self-start rounded-full border border-[#e8cf9f] bg-[#fbf0dc] px-3 py-1 text-[13px] font-medium text-[#922e0d]">
            {kshetram.deity}
          </p>
        ) : null}

        {/* Actions: navigation + trip prominent; visited state-toggle beside */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5">
          <ButtonLink to={`/kshetram/${kshetram.id}`} small>
            View temple
            <ArrowRight className="h-4 w-4 opacity-85" aria-hidden="true" />
          </ButtonLink>
          <button
            type="button"
            onClick={() => toggleTrip(kshetram.id)}
            aria-pressed={inTrip}
            className="ui-btn ui-btn--secondary ui-btn--small"
          >
            {inTrip ? '✓ In trip' : 'Add to trip'}
          </button>
          <button
            type="button"
            onClick={() => toggleVisited(kshetram.id)}
            aria-pressed={visited}
            className="ui-tertiary"
          >
            {visited ? '✓ Visited' : 'Mark as visited'}
          </button>
        </div>
      </div>
    </article>
  );
}
