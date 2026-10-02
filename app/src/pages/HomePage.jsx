/**
 * HomePage — 2026-09 refresh (PO-approved mockup, docs/03-design/mockups/
 * refresh-2026-09): full-bleed photo hero, the "My yatra" tracker row, the
 * featured kshetram card grid, the stacked Azhwar/Acharya darshan bands
 * (ivory → sandal) and the closing ornament (FR-10/11/12). The main shell
 * drops its constrained container on this route (App.jsx) so the bands run
 * edge-to-edge with their own max-w-site columns.
 */
import { getAllAzhwars, getAllKshetrams, getFeaturedAcharyas } from '../data/api.js';
import { SITE_COPY } from '../data/siteCopy.js';
import Hero from '../components/home/Hero.jsx';
import YatraProgressTracker from '../components/home/YatraProgressTracker.jsx';
import FeaturedKshetrams from '../components/home/FeaturedKshetrams.jsx';
import SaintStrip from '../components/home/SaintStrip.jsx';

export default function HomePage() {
  const featuredAzhwars = getAllAzhwars().slice(0, 4);
  const featuredAcharyas = getFeaturedAcharyas();
  const { azhwarStrip, acharyaStrip } = SITE_COPY.home;
  // The yatra counts only the earthly kshetrams — the 2 celestial abodes
  // (Thiruppaarkadal, Paramapadham) are not physically visitable.
  const earthlyIds = new Set(
    getAllKshetrams().filter((k) => k.region !== 'Celestial').map((k) => k.id),
  );
  return (
    <div className="dir">
      <Hero />

      <YatraProgressTracker total={earthlyIds.size} eligibleIds={earthlyIds} />

      <FeaturedKshetrams />

      {/* Full-width darshan bands; the strip's section label leads as the
          eyebrow and the poetic line is the display heading (approved layout) */}
      <SaintStrip
        tone="ivory"
        eyebrow={azhwarStrip.title}
        title={azhwarStrip.eyebrow}
        lead={azhwarStrip.lead}
        saints={featuredAzhwars}
        base="/azhwar"
        ctaLabel={azhwarStrip.ctaLabel}
        ctaTo="/azhwars"
      />

      <SaintStrip
        tone="sandal"
        eyebrow={acharyaStrip.title}
        title={acharyaStrip.eyebrow}
        lead={acharyaStrip.lead}
        saints={featuredAcharyas}
        base="/acharya"
        ctaLabel={acharyaStrip.ctaLabel}
        ctaTo="/acharyas"
      />

      {/* Closing ornament */}
      <div className="w-full bg-[#FAF2E3] py-8" aria-hidden="true">
        <div className="mx-auto flex max-w-[520px] items-center gap-4 px-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent" />
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C99A2E]" fill="currentColor">
            <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C99A2E] to-transparent" />
        </div>
      </div>
    </div>
  );
}
