/**
 * AzhwarsPage — the twelve Azhwars in traditional order (FR-40/41),
 * restyled to match /kshetrams (PO round 24): the Browse header idiom
 * (eyebrow / display title / Tamil subtitle / lead with the gopuram
 * illustration as a right-side desktop watermark) over the same
 * 1/2/3-column card grid. Cards reuse the KshetramCard interaction
 * rules (300ms rise, opaque-gold hover border, gold action button that
 * deepens on card hover) with object-contain portraits that preserve
 * the original artwork. No ordinal badges; hymn titles wrap fully; the
 * whole-card overlay link stays retired — profile and Divya Desam
 * links are independent semantic stops (Madhurakavi, with zero desams,
 * gets a note instead of a link to an empty result).
 */
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getAllAzhwars, getKshetramsByAzhwar } from '../data/api.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { ThirumanIcon, LotusIcon } from '../components/SacredIcons.jsx';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

function AzhwarCard({ azhwar }) {
  const desams = getKshetramsByAzhwar(azhwar.id);
  const image = useWikiImage(azhwar.wiki ?? null, azhwar.photos?.[0]?.src ?? null);

  return (
    <article className="azhwar-card group relative flex flex-col rounded-2xl border border-[#C99A2E]/45 bg-[#FFFDF7] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A2E] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Portrait band — object-contain keeps each artwork's proportions
          and any text embedded in it (PO round 24) */}
      <div className="relative h-52 shrink-0 overflow-hidden border-b border-[#E3D2AE] bg-[#F6EBD6]">
        {image.src ? (
          <img
            src={image.src}
            alt={`${azhwar.name} portrait`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 z-10 h-full w-full object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <ThirumanIcon className="h-16 w-12 text-[#C99A2E] opacity-60" />
          </div>
        )}
      </div>

      {/* Card body — names centered as in the mock, biography left-aligned */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-center text-[14px] font-medium text-[#96731F]" lang="ta">
          {azhwar.tamilName}
        </p>
        <h2 className="mt-0.5 text-center font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
          {azhwar.name}
        </h2>

        <p className="mt-3 text-[15px] leading-[1.65] text-[#332417]">{azhwar.note}</p>

        {/* Hymn details — plain rows under a hairline, never a nested card */}
        <div className="mt-3 border-t border-[#E3D2AE]" aria-hidden="true" />
        <div className="mt-3 flex items-start gap-2.5">
          <BookOpen className="mt-1 h-4 w-4 shrink-0 text-[#96731F]" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[14px] font-semibold leading-snug text-[#332417]">{azhwar.work}</p>
            <p className="mt-0.5 text-[13px] text-[#66523D]">
              {azhwar.pasuramCount.toLocaleString('en-IN')} pasurams
            </p>
          </div>
        </div>

        {/* CTA row — pinned to the card foot so desktop rows align */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <Link
            to={`/azhwar/${azhwar.id}`}
            aria-label={`View profile — ${azhwar.name}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#96731F] px-5 py-2.5 text-[14px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#7A2E00]"
          >
            <span>View profile</span>
            <ArrowRight
              className="h-4 w-4 opacity-85 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </Link>
          {desams.length > 0 ? (
            <Link
              to={`/kshetrams?azhwar=${azhwar.id}`}
              className="text-[13px] font-bold text-[#96731F]! underline underline-offset-2 transition-colors hover:text-[#7A2E00]!"
            >
              {desams.length} Divya Desams
            </Link>
          ) : (
            <p className="max-w-[20ch] text-right text-[12px] leading-snug text-[#66523D]">
              {SITE_COPY.azhwarsPage.noDesamsNote}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AzhwarsPage() {
  const azhwars = getAllAzhwars();
  return (
    <div>
      {/* Compact intro — the Browse header idiom; illustration desktop-only */}
      <div className="relative min-h-[230px] pb-6 pt-10">
        <img
          src={gopuramIllustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-contain object-[right_bottom] opacity-80 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)] lg:block"
        />
        <div className="relative max-w-[52%]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {SITE_COPY.azhwarsPage.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[48px]!">
            {SITE_COPY.azhwarsPage.title}
          </h1>
          <p className="mt-1 text-[16px] font-medium text-[#96731F]" lang="ta">
            {SITE_COPY.azhwarsPage.titleTamil}
          </p>
          <p className="mt-2 text-[17px] text-[#66523D]">{SITE_COPY.azhwarsPage.lead}</p>
        </div>
      </div>

      {/* Grid of all 12 — same pattern as /kshetrams */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {azhwars.map((azhwar) => <AzhwarCard key={azhwar.id} azhwar={azhwar} />)}
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
