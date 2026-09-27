/**
 * Hero — zip-parity compact hero card (UXD v3.0 Gate 2): cream plate with
 * temple-corner brackets, golden inset border, the Garuda–Chakra–Namam–
 * Shankha–Hanuman plaque watermark, invocation pill, eyebrow, gradient title,
 * Tamil subtitle and the explore CTA (FR-10).
 *
 * Round 2 (PO 2026-09-27): banner height halved (310px → ~155px at desktop)
 * and the watermark is now the PO-supplied wooden-plaque motif strip, photo
 * background removed (scripts/make-hero-watermark.mjs), replacing the
 * Sangu–Namam–Chakram SVG trio.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_COPY } from '../../data/siteCopy.js';
import heroWatermark from '../../assets/hero-plaque-watermark.png';

export default function Hero() {
  const { hero } = SITE_COPY;
  return (
    <section className="relative overflow-hidden text-center px-4 sm:px-6 py-4 rounded-2xl border border-[#C99A2E]/50 shadow-xs bg-[#FFFDF7]">
      {/* Traditional Temple Corner Embellishments */}
      <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C99A2E]/70 rounded-tl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#C99A2E]/70 rounded-tr-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#C99A2E]/70 rounded-bl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#C99A2E]/70 rounded-br-xs pointer-events-none" aria-hidden="true" />

      {/* Decorative Inner Golden Inset Border */}
      <div className="absolute inset-2 sm:inset-2.5 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />

      {/* Sacred watermark: the five-motif plaque strip, fully visible and
          centred in the banner at full height (PO round 3) */}
      <img
        src={heroWatermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none opacity-[0.09]"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Hero Title — the ! marks beat the unlayered legacy h1 rule in
            base.css, which otherwise pins every h1 to --font-display-2 with a
            16px bottom margin (that override is what kept the banner tall) */}
        <h1 className="font-display text-2xl! sm:text-3xl! font-bold mb-0! leading-[1.1]! bg-gradient-to-b from-[#7A2E00] to-[#B34700] bg-clip-text text-transparent">
          {hero.title}
        </h1>

        {/* Classical Tamil Subtitle */}
        <p className="mt-0.5 text-[11px] sm:text-xs font-semibold text-[#96731F]" lang="ta">
          {hero.subtitle}
        </p>

        {/* Description — PO round 4: shorter copy, single row at desktop,
            fully visible (no clamp; wraps naturally on phones) */}
        <p className="max-w-xl mx-auto mt-2.5 text-xs text-[#66523D] leading-relaxed">
          {hero.description}
        </p>

        {/* Primary CTA Button — gold idiom so the label stands apart from the
            button fill and from the brown banner title (PO 2026-09-25) */}
        <div className="mt-4 flex items-center justify-center">
          <Link
            to="/kshetrams"
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] text-xs font-bold border border-[#96731F] shadow-xs hover:shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>{hero.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
