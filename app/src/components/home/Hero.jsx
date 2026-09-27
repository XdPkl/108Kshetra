/**
 * Hero — 2026-09 refresh (PO-approved mockup, docs/03-design/mockups/
 * refresh-2026-09): full-bleed photographic banner — the PO-supplied temple
 * corridor artwork (scripts/make-hero-image.mjs), left scrim for legibility,
 * display headline, Tamil subtitle, one-line description at desktop, gold
 * explore CTA + map link, and the invocation stack top-right (FR-10).
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Map as MapIcon } from 'lucide-react';
import { SITE_COPY } from '../../data/siteCopy.js';
import heroImage from '../../assets/hero-sunset-lamps.jpg';

export default function Hero() {
  const { hero } = SITE_COPY;
  return (
    <section className="relative w-full overflow-hidden">
      {/* PO-supplied artwork; the 20% vertical anchor keeps the gopuram crown
          fully inside the crop at the 364px banner height */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />

      {/* Scrims for text legibility over the photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#241105]/85 via-[#2A1408]/40 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C0C03]/55 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[364px] max-w-site flex-col justify-center px-4 py-12 sm:px-6">
        <div className="max-w-[900px]">
          {/* The ! marks beat the unlayered legacy h1 rule in base.css, which
              otherwise pins every h1 to --font-display-2 + a bottom margin */}
          <h1 className="font-display text-5xl! sm:text-[64px]! font-semibold leading-[1.04]! mb-0! text-[#FFFDF7]!">
            {hero.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#F0D9A6]" lang="ta">
            {hero.subtitle}
          </p>

          {/* One line at desktop (PO request), wraps naturally on phones */}
          <p className="mt-2 font-display text-lg italic leading-snug text-[#FFFDF7]/90 sm:text-[22px] lg:whitespace-nowrap">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Link
              to="/kshetrams"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#E9CF8C] to-[#C99A2E] px-7 py-3.5 text-[15px] font-bold text-[#4A3005]! shadow-lg shadow-[#4A3005]/30 hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <span>{hero.cta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/map"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#FFFDF7]! underline decoration-[#FFFDF7]/50 underline-offset-[6px] hover:decoration-[#FFFDF7]"
            >
              <MapIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              View map
            </Link>
          </div>
        </div>
      </div>

      {/* Invocation stack, top-right (existing hero copy, previously unrendered) */}
      <div className="absolute right-8 top-9 hidden text-right md:block">
        <p className="font-display text-[19px] italic leading-snug text-[#F5E3BC]/95">{hero.eyebrow}</p>
        <div className="ml-auto mt-2 h-px w-16 bg-[#E2C47C]/60" aria-hidden="true" />
        <p className="mt-2 text-[15px] leading-snug text-[#F5E3BC]/85" lang="ta">{hero.invocation}</p>
      </div>
    </section>
  );
}
