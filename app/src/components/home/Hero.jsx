/**
 * Hero — zip-parity compact hero card (UXD v3.0 Gate 2): cream plate with
 * temple-corner brackets, golden inset border, the Sangu–Namam–Chakram
 * watermark trio, invocation pill, eyebrow, gradient title, Tamil subtitle
 * and the explore CTA (FR-10).
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ThirumanIcon, ChakraIcon, ShankaIcon, DeepamIcon } from '../SacredIcons.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center px-4 sm:px-6 py-6 sm:py-7 rounded-2xl border border-[#C99A2E]/50 shadow-xs bg-[#FFFDF7]">
      {/* Traditional Temple Corner Embellishments */}
      <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C99A2E]/70 rounded-tl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#C99A2E]/70 rounded-tr-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#C99A2E]/70 rounded-bl-xs pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#C99A2E]/70 rounded-br-xs pointer-events-none" aria-hidden="true" />

      {/* Decorative Inner Golden Inset Border */}
      <div className="absolute inset-2 sm:inset-2.5 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />

      {/* Sacred Watermark: Sangu, Namam, and Chakram */}
      <div
        className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-14 md:gap-24 pointer-events-none opacity-[0.09] select-none"
        aria-hidden="true"
      >
        {/* Sangu (Panchajanya Shanka) - Left */}
        <div className="w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 text-[#7A2E00] -rotate-12 flex items-center justify-center shrink-0">
          <ShankaIcon className="w-full h-full" />
        </div>

        {/* Namam (Thiruman & Srichoornam) - Center */}
        <div className="w-16 sm:w-28 md:w-36 h-24 sm:h-36 md:h-48 text-[#7A2E00] flex items-center justify-center shrink-0">
          <ThirumanIcon className="w-full h-full" />
        </div>

        {/* Chakram (Sudarshana Chakra) - Right */}
        <div className="w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 text-[#7A2E00] rotate-12 flex items-center justify-center shrink-0">
          <ChakraIcon className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Sacred Invocation */}
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <DeepamIcon className="w-4 h-4 hidden sm:block" />
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF2E3] border border-[#E3D2AE]">
            <ThirumanIcon className="w-3 h-4" />
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#7A2E00] tracking-wider" lang="ta">
              ஸ்ரீமதே ராமானுஜாய நமஃ
            </span>
          </div>
          <DeepamIcon className="w-4 h-4 hidden sm:block" />
        </div>

        {/* Eyebrow Label */}
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-[#B34700]">
          Nalayira Divya Prabandham
        </span>

        {/* Hero Title */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-bold mt-0.5 leading-[1.1] bg-gradient-to-b from-[#7A2E00] to-[#B34700] bg-clip-text text-transparent">
          108 Divya Kshetrams
        </h1>

        {/* Classical Tamil Subtitle */}
        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#96731F]" lang="ta">
          ஆழ்வார்களால் மங்களாசாசனம் செய்யப்பட்ட நூற்றெட்டு திவ்ய தேசங்கள்
        </p>

        {/* Compact Description */}
        <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-[#66523D] leading-relaxed">
          The sacred abodes of Lord Narayana — the 108 Divya Desams glorified by
          the twelve Azhwars in the four thousand verses of the Nalayira Divya
          Prabandham, the Tamil Veda.
        </p>

        {/* Primary CTA Button */}
        <div className="mt-3.5 sm:mt-4 flex items-center justify-center">
          <Link
            to="/kshetrams"
            className="inline-flex items-center gap-2 px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-b from-[#D95F0E] to-[#B34700] text-[#FFFDF7] text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Explore the 108 Kshetrams</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
