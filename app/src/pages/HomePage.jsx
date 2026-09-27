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

      <SaintStrip
        eyebrow={azhwarStrip.eyebrow}
        title={azhwarStrip.title}
        lead={azhwarStrip.lead}
        saints={featuredAzhwars}
        base="/azhwar"
        ctaLabel={azhwarStrip.ctaLabel}
        ctaTo="/azhwars"
      />

      <SaintStrip
        eyebrow={acharyaStrip.eyebrow}
        title={acharyaStrip.title}
        lead={acharyaStrip.lead}
        saints={featuredAcharyas}
        base="/acharya"
        ctaLabel={acharyaStrip.ctaLabel}
        ctaTo="/acharyas"
      />
    </>
  );
}
