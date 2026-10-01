/**
 * AzhwarsPage — the twelve Azhwars in traditional order (FR-40/41),
 * recreated to the PO snap (2026-10-01, PO round 12): saint-poet gallery
 * hero with the gopuram watermark and "Traditional order" rule, and
 * numbered portrait cards — Tamil/English name over a lotus divider,
 * dataset note, Primary Work | pasurams stat band, and an
 * Explore profile / "N Divya Desams" CTA row (the desams link keeps the
 * pre-filtered Browse deep link from the old chips row).
 */
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { getAllAzhwars, getKshetramsByAzhwar } from '../data/api.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { LotusIcon, ThirumanIcon } from '../components/SacredIcons.jsx';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

function AzhwarCard({ azhwar, index }) {
  const desams = getKshetramsByAzhwar(azhwar.id);
  const image = useWikiImage(azhwar.wiki ?? null, azhwar.photos?.[0]?.src ?? null);

  return (
    <article className="azhwar-card group relative flex flex-col rounded-2xl border border-[#C99A2E]/50 bg-[#FFFCF3] p-6 shadow-xs hover:-translate-y-1 hover:border-[#C99A2E] hover:shadow-md transition-all">
      {/* Whole-card navigation overlay (below the CTA row) */}
      <Link
        to={`/azhwar/${azhwar.id}`}
        aria-label={`${azhwar.name} — view the saint dossier`}
        className="absolute inset-0 z-0"
      />

      {/* Numbered portrait */}
      <div className="relative z-10 flex items-start gap-4 pointer-events-none">
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C99A2E]/60 bg-[#FBF3DF] text-sm font-bold text-[#7A2E00]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="relative aspect-square flex-1 overflow-hidden rounded-xl border border-[#E3D2AE] bg-[#FAF2E3]">
          {image.src ? (
            <img
              src={image.src}
              alt={`${azhwar.name} portrait`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          ) : null}
          {/* Sacred Thiruman watermark fallback */}
          <div className="absolute inset-0 flex items-center justify-center text-[#7A2E00]" aria-hidden="true">
            <ThirumanIcon className="w-12 h-16 opacity-60" />
          </div>
        </div>
      </div>

      {/* Name block */}
      <div className="relative z-10 mt-5 text-center pointer-events-none">
        <p className="font-display text-[22px] font-bold leading-tight text-[#96731F]" lang="ta">
          {azhwar.tamilName}
        </p>
        <h2 className="font-display text-[27px] font-bold leading-tight text-[#7A2E00] group-hover:text-[#B34700] transition-colors">
          {azhwar.name}
        </h2>
        <div className="mx-auto mt-2.5 flex w-40 items-center gap-2.5" aria-hidden="true">
          <span className="h-px flex-1 bg-[#C99A2E]/45" />
          <LotusIcon className="h-3.5 w-3.5 text-[#C99A2E]" />
          <span className="h-px flex-1 bg-[#C99A2E]/45" />
        </div>
        <p className="mx-auto mt-2.5 max-w-[34ch] text-[14px] leading-relaxed text-[#4A3A28] line-clamp-2">
          {azhwar.note}
        </p>
      </div>

      {/* Stat band: primary work | pasuram count */}
      <div className="relative z-10 mt-5 flex items-stretch overflow-hidden rounded-xl border border-[#EEDDBB] bg-[#F7EDD8]/80 text-left pointer-events-none">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 px-4 py-3">
          <BookOpen className="h-5 w-5 shrink-0 text-[#96731F]" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] text-[#8A6A2A]">Primary Work</p>
            <p className="truncate text-[13px] font-bold text-[#4A3005]">{azhwar.work}</p>
          </div>
        </div>
        <div className="my-2 w-px bg-[#E3D2AE]" aria-hidden="true" />
        <div className="flex items-center gap-2.5 px-4 py-3">
          <FileText className="h-5 w-5 shrink-0 text-[#96731F]" aria-hidden="true" />
          <div>
            <p className="text-[15px] font-bold leading-none text-[#4A3005]">
              {azhwar.pasuramCount.toLocaleString('en-IN')}
            </p>
            <p className="mt-0.5 text-[11px] text-[#8A6A2A]">pasurams</p>
          </div>
        </div>
      </div>

      {/* CTA row — pinned to the card foot so rows with wrapped names align */}
      <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-4">
        <Link
          to={`/azhwar/${azhwar.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#C99A2E] to-[#96731F] px-5 py-2.5 text-[13px] font-bold text-[#FFF9EC] shadow-xs hover:opacity-95 transition-opacity"
        >
          Explore profile
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          to={`/kshetrams?azhwar=${azhwar.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#96731F] underline underline-offset-2 hover:text-[#B34700] transition-colors"
        >
          {desams.length} Divya Desams
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function AzhwarsPage() {
  const azhwars = getAllAzhwars();
  return (
    <div className="space-y-7">
      {/* Saint-poet gallery hero — gopuram watermark on the right */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-1 right-0 hidden select-none items-start gap-4 lg:flex" aria-hidden="true">
          <img
            src={gopuramIllustration}
            alt=""
            className="h-40 w-auto object-contain opacity-60 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_70%,transparent),linear-gradient(to_bottom,black_70%,transparent)]"
          />
          <span className="mt-2 flex flex-col items-start gap-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#B0A183]">
            <span>Divine</span>
            <span>Places</span>
            <span>Eternal</span>
            <span>Grace</span>
          </span>
        </div>

        <div className="relative max-w-[72%]">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#B34700]">
            {SITE_COPY.azhwarsPage.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[60px]!">
            {SITE_COPY.azhwarsPage.title}
          </h1>
          <p className="mt-1 font-display text-[26px] font-bold leading-tight text-[#96731F] sm:text-[32px]" lang="ta">
            {SITE_COPY.azhwarsPage.titleTamil}
          </p>
          <p className="mt-2 text-[17px] text-[#66523D]">
            {SITE_COPY.azhwarsPage.lead}
          </p>
        </div>

        {/* Traditional order rule — tucked under the gopuram watermark */}
        <div className="relative z-10 mt-1 hidden justify-end lg:flex">
          <div className="flex flex-col items-center">
            <LotusIcon className="h-4 w-4 text-[#C99A2E]" aria-hidden="true" />
            <div className="mt-1 flex items-center gap-3">
              <span className="h-px w-14 bg-[#C99A2E]/50" aria-hidden="true" />
              <span className="text-[13px] text-[#66523D]">Traditional order</span>
              <span className="h-px w-14 bg-[#C99A2E]/50" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of all 12 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {azhwars.map((azhwar, i) => <AzhwarCard key={azhwar.id} azhwar={azhwar} index={i} />)}
      </div>

      {/* Gallery footer strip */}
      <div className="flex flex-col items-center gap-1.5 pt-1">
        <LotusIcon className="h-4 w-4 text-[#C99A2E]" aria-hidden="true" />
        <div className="flex items-center gap-4" aria-hidden="false">
          <span className="h-px w-24 bg-[#C99A2E]/40" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A7A5E]">
            Alwars <span className="mx-2 text-[#C9B98F]">|</span> Divya Desams <span className="mx-2 text-[#C9B98F]">|</span> Eternal Inspiration
          </p>
          <span className="h-px w-24 bg-[#C99A2E]/40" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
