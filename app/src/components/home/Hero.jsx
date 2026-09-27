/**
 * Hero — zip-parity compact hero card (UXD v3.0 Gate 2): cream plate with
 * temple-corner brackets, golden inset border, the Sangu–Namam–Chakram
 * watermark trio, invocation pill, eyebrow, gradient title, Tamil subtitle
 * and the explore CTA (FR-10).
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ThirumanIcon, ChakraIcon, ShankaIcon, DeepamIcon } from '../SacredIcons.jsx';
import { SITE_COPY } from '../../data/siteCopy.js';

export default function Hero() {
  const { hero } = SITE_COPY;
  return (
    <section className="relative overflow-hidden text-center px-4 sm:px-6 py-6 sm:py-7 rounded-2xl border border-[#C99A2E]/50 shadow-xs bg-[#FFFDF7]">
      {/* Traditional Temple Corner Embellishments */}
      <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C99A2E]/70 rounded-tl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#C99A2E]/70 rounded-tr-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#C99A2E]/70 rounded-bl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#C99A2E]/70 rounded-br-xs pointer-events-none" aria-hidden="true" />

      {/* Decorative Inner Golden Inset Border */}
      <div className="absolute inset-2 sm:inset-2.5 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />

      {/* Sacred Watermark: Sangu, Namam, and Chakram — spread edge-to-edge so
          the trio spans the full banner with no empty side margins (PO 2026-09-25) */}
      <div
        className="absolute inset-0 flex items-center justify-between gap-4 sm:gap-10 md:gap-16 px-2 sm:px-6 pointer-events-none opacity-[0.09] select-none"
        aria-hidden="true"
      >
        {/* Sangu (Panchajanya Shanka) - Left; ink scaled past its box to crop
            the sketch's intrinsic whitespace (PO 2026-09-25) */}
        <div className="w-28 sm:w-48 md:w-72 h-28 sm:h-48 md:h-72 text-[#7A2E00] -rotate-12 flex items-center justify-center shrink-0">
          <ShankaIcon className="w-full h-full scale-[1.35]" />
        </div>

        {/* Namam (Thiruman & Srichoornam) - Center */}
        <div className="w-22 sm:w-38 md:w-56 h-28 sm:h-48 md:h-72 text-[#7A2E00] flex items-center justify-center shrink-0">
          <ThirumanIcon className="w-full h-full scale-[1.25]" />
        </div>

        {/* Chakram (Sudarshana Chakra) - Right */}
        <div className="w-28 sm:w-48 md:w-72 h-28 sm:h-48 md:h-72 text-[#7A2E00] rotate-12 flex items-center justify-center shrink-0">
          <ChakraIcon className="w-full h-full scale-[1.35]" />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Sacred Invocation */}
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <DeepamIcon className="w-4 h-4 hidden sm:block" />
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF2E3] border border-[#E3D2AE]">
            <ThirumanIcon className="w-3 h-4" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#7A2E00] tracking-wider" lang="ta">
              {hero.invocation}
            </span>
          </div>
          <DeepamIcon className="w-4 h-4 hidden sm:block" />
        </div>

        {/* Eyebrow Label */}
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#B34700]">
          {hero.eyebrow}
        </span>

        {/* Hero Title */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold mt-0.5 leading-[1.1] bg-gradient-to-b from-[#7A2E00] to-[#B34700] bg-clip-text text-transparent">
          {hero.title}
        </h1>

        {/* Classical Tamil Subtitle */}
        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#96731F]" lang="ta">
          {hero.subtitle}
        </p>

        {/* Compact Description */}
        <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-[#66523D] leading-relaxed">
          {hero.description}
        </p>

        {/* Primary CTA Button — gold idiom so the label stands apart from the
            button fill and from the brown banner title (PO 2026-09-25) */}
        <div className="mt-3.5 sm:mt-4 flex items-center justify-center">
          <Link
            to="/kshetrams"
            className="inline-flex items-center gap-2 px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] text-xs sm:text-sm font-bold border border-[#96731F] shadow-xs hover:shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>{hero.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
