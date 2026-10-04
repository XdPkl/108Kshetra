/**
 * Hero — option-1 redesign (PO round 30): the same PO-supplied
 * atmospheric artwork (hero-sunset-lamps.jpg, 2172×724) at an immersive
 * ~600px desktop height, with the reliable dark base + left scrim kept
 * (the image stays brighter on the right so the gopuram and warm light
 * read). New copy hierarchy — eyebrow, two-line Cormorant display
 * heading (60–68px desktop), supporting line, the real-text Tamil line
 * (`lang="ta"`) — and the two standing actions: the kshetrams gold
 * primary (on the shared .ui-btn base) and the on-photo inverse
 * secondary. No video, parallax or carousel.
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Map as MapIcon } from 'lucide-react';
import { ButtonLink } from '../ui/Button.jsx';
import { SITE_COPY } from '../../data/siteCopy.js';
import heroImage from '../../assets/hero-sunset-lamps.jpg';

// The kshetrams gold action on the shared .ui-btn base (44px target,
// gold focus ring); on the dark artwork the hover deepens to brown.
const heroPrimary =
  'ui-btn rounded-lg! bg-[#96731F] text-[#FFFDF7]! shadow-lg shadow-[#1C0C03]/40 transition-colors hover:bg-[#7A2E00]!';

export default function Hero() {
  const { hero } = SITE_COPY;
  return (
    <section className="relative w-full overflow-hidden">
      {/* PO-supplied artwork; the 20% vertical anchor keeps the gopuram crown
          fully inside the crop; dimensions reserved via the min-height to
          avoid layout shift while it loads */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />

      {/* Reliable legibility base + left scrim behind the text block —
          the right side stays bright for the temple and warm light */}
      <div className="pointer-events-none absolute inset-0 bg-[#1C0C03]/40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241105]/90 via-[#241105]/55 to-[#241105]/15" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[440px] max-w-site flex-col justify-center px-4 py-14 sm:px-6 lg:min-h-[600px] lg:py-20">
        <div className="max-w-[640px]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#E2C47C]">
            {hero.eyebrow}
          </p>
          {/* ! marks beat the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-3 max-w-[12ch] font-display text-[40px]! leading-[1.05]! font-semibold text-[#FFFDF7]! sm:text-[60px]! sm:max-w-[22ch] lg:text-[66px]!">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-[1.6] text-[#FFFDF7]/90">
            {hero.description}
          </p>
          <p className="mt-3 text-[18px] font-medium text-[#E2C47C]" lang="ta">
            {hero.tamilLine}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/kshetrams" className={`${heroPrimary} group`}>
              <span>{hero.cta}</span>
              <ArrowRight
                className="h-4 w-4 opacity-85 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              />
            </Link>
            <ButtonLink to="/map" variant="inverse">
              <MapIcon className="h-4 w-4" aria-hidden="true" />
              <span>{hero.ctaSecondary}</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
