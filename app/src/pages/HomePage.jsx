/**
 * HomePage — zip-parity assembly (UXD v3.0 Gate 2): compact hero card with
 * temple-corner brackets and the emblem watermark, yatra progress tracker,
 * featured kshetrams, and the Azhwar/Acharya darshan strips (FR-10/11/12).
 */
import { getAllAzhwars, getFeaturedAcharyas } from '../data/api.js';
import { SITE_STATS } from '../data/config.js';
import Hero from '../components/home/Hero.jsx';
import YatraProgressTracker from '../components/home/YatraProgressTracker.jsx';
import FeaturedKshetrams from '../components/home/FeaturedKshetrams.jsx';
import SaintStrip from '../components/home/SaintStrip.jsx';

export default function HomePage() {
  const featuredAzhwars = getAllAzhwars().slice(0, 4);
  const featuredAcharyas = getFeaturedAcharyas();
  return (
    <>
      <Hero />

      <YatraProgressTracker total={SITE_STATS.kshetramCount} />

      <FeaturedKshetrams />

      <SaintStrip
        eyebrow="Saint-poets of the Tamil Veda"
        title="The Twelve Azhwars"
        lead="Whose hymns sanctified these hills, groves and cities."
        saints={featuredAzhwars}
        base="/azhwar"
        ctaLabel="Azhwar Darshan - Featured"
        ctaTo="/azhwars"
      />

      <SaintStrip
        eyebrow="The guru parampara"
        title="The Acharyas"
        lead="Teachers who received, preserved and expounded the tradition."
        saints={featuredAcharyas}
        base="/acharya"
        ctaLabel="Acharya Darshan - Featured"
        ctaTo="/acharyas"
      />
    </>
  );
}
