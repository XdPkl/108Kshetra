/**
 * HomePage — zip-parity assembly (UXD v3.0 Gate 2): compact hero card with
 * temple-corner brackets and the emblem watermark, yatra progress tracker,
 * featured kshetrams, and the Azhwar/Acharya darshan strips (FR-10/11/12).
 */
import { getAllAzhwars, getAllKshetrams, getFeaturedAcharyas } from '../data/api.js';
import { SITE_COPY } from '../data/siteCopy.js';
import Hero from '../components/home/Hero.jsx';
import YatraProgressTracker from '../components/home/YatraProgressTracker.jsx';
import FeaturedKshetrams from '../components/home/FeaturedKshetrams.jsx';
import SaintStrip from '../components/home/SaintStrip.jsx';

export default function HomePage() {
  // PO round 4: one row of 4 tiles per strip (was all twelve / five).
  const featuredAzhwars = getAllAzhwars().slice(0, 4);
  const featuredAcharyas = getFeaturedAcharyas();
  const { azhwarStrip, acharyaStrip } = SITE_COPY.home;
  // The yatra counts only the earthly kshetrams — the 2 celestial abodes
  // (Thiruppaarkadal, Paramapadham) are not physically visitable.
  const earthlyIds = new Set(
    getAllKshetrams().filter((k) => k.region !== 'Celestial').map((k) => k.id),
  );
  return (
    <>
      <Hero />

      <YatraProgressTracker total={earthlyIds.size} eligibleIds={earthlyIds} />

      <FeaturedKshetrams />

      {/* PO round 3: the two darshan strips share one row, 50/50 on desktop */}
      <div className="grid gap-6 lg:grid-cols-2 items-stretch">
        <SaintStrip
          headlineA={azhwarStrip.eyebrow}
          headlineB={azhwarStrip.title}
          subline={azhwarStrip.lead}
          saints={featuredAzhwars}
          base="/azhwar"
          ctaLabel={azhwarStrip.ctaLabel}
          ctaTo="/azhwars"
        />

        <SaintStrip
          headlineA={acharyaStrip.title}
          headlineB={acharyaStrip.lead}
          subline={acharyaStrip.eyebrow}
          saints={featuredAcharyas}
          base="/acharya"
          ctaLabel={acharyaStrip.ctaLabel}
          ctaTo="/acharyas"
        />
      </div>
    </>
  );
}
