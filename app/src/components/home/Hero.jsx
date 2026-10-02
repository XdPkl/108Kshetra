/**
 * Hero — coordinated restyle (PO round 23): full-bleed temple artwork
 * with a RELIABLE dark overlay behind the text (solid dim base plus the
 * left scrim), serif headline, Tamil subtitle, one short supporting
 * line, and exactly two hero actions — solid primary "Browse temples"
 * and outlined secondary "Plan your yatra". The competing gold gradient
 * pill, the italic display line and the top-right invocation stack are
 * retired as decorative clutter.
 */
import { ArrowRight, Map as MapIcon } from 'lucide-react';
import { ButtonLink } from '../ui/Button.jsx';
import { SITE_COPY } from '../../data/siteCopy.js';
import heroImage from '../../assets/hero-sunset-lamps.jpg';

export default function Hero() {
  const { hero } = SITE_COPY;
  return (
    <section className="relative w-full overflow-hidden">
      {/* PO-supplied artwork; the 20% vertical anchor keeps the gopuram crown
          fully inside the crop */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />

      {/* Reliable legibility base + left scrim behind the text block */}
      <div className="pointer-events-none absolute inset-0 bg-[#1C0C03]/40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241105]/90 via-[#241105]/55 to-[#241105]/15" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[364px] max-w-site flex-col justify-center px-4 py-12 sm:px-6">
        <div className="max-w-[720px]">
          {/* The ! marks beat the unlayered legacy h1 rule in base.css */}
          <h1 className="ui-heading text-5xl! sm:text-[64px]! font-semibold leading-[1.04]! mb-0! text-[#FFFDF7]!">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#F0D9A6]" lang="ta">
            {hero.subtitle}
          </p>
          <p className="mt-2 max-w-[60ch] text-[16px] leading-[27px] text-[#FFFDF7]/90">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink to="/kshetrams" variant="primary" className="shadow-lg shadow-[#1C0C03]/40">
              <span>{hero.cta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
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
