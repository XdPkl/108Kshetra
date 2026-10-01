/**
 * AcharyasPage — the guru parampara index at /acharyas (US-ACH-02, FR-93),
 * recreated to the PO snap (2026-10-01, PO round 13): "The Guru Parampara"
 * hero over the gopuram artwork watermark, era sections as ruled headings
 * (single-source era labels preserved), and a two-column parampara roster —
 * portrait (Wikipedia image via `useWikiImage`, golden-Shanka radial-blob
 * fallback) beside Tamil/name/role, an Era | Guru meta line and a
 * "Read story" link, with lotus-centred rules between roster rows.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllAcharyas, getAcharyaById } from '../data/api.js';
import { groupBy } from '../utils/group.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { LotusIcon, ShankaIcon } from '../components/SacredIcons.jsx';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

function AcharyaPortrait({ acharya }) {
  const image = useWikiImage(acharya.wiki ?? null, acharya.photos?.[0]?.src ?? null);
  return (
    <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg sm:h-36 sm:w-44">
      {image.src ? (
        <img
          src={image.src}
          alt={`${acharya.name} portrait`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : null}
      {/* Golden-Shanka radial-blob fallback for photo-less entries */}
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#F6EAD0_0%,#F9F2E0_42%,rgba(250,242,227,0)_66%)]" aria-hidden="true">
        <ShankaIcon className="h-16 w-16 text-[#C99A2E]" />
      </div>
    </div>
  );
}

function AcharyaRow({ acharya, right }) {
  const guru = acharya.guru ? getAcharyaById(acharya.guru) : null;
  return (
    <article className={`acharya-card group relative flex items-center gap-4 py-6 sm:gap-6 sm:px-7 ${right ? 'sm:border-l sm:border-[#E3D2AE]' : ''}`}>
      {/* Whole-row navigation overlay */}
      <Link
        to={`/acharya/${acharya.id}`}
        aria-label={`${acharya.name} — view the acharya dossier`}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 pointer-events-none">
        <AcharyaPortrait acharya={acharya} />
      </div>

      <div className="relative z-10 min-w-0 flex-1 pointer-events-none">
        <p className="text-[14px] font-bold text-[#7A2E00]" lang="ta">
          {acharya.tamilName}
        </p>
        <h3 className="font-display text-[24px] font-bold leading-tight text-[#7A2E00] group-hover:text-[#B34700] transition-colors sm:text-[28px]">
          {acharya.name}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#332417]">
          {acharya.role}
        </p>
        <p className="mt-2.5 text-[13px] text-[#66523D]">
          <span className="font-bold">Era:</span> {acharya.era}
          <span className="mx-2.5 text-[#C9B98F]" aria-hidden="true">|</span>
          <span className="font-bold">Guru:</span> {guru ? guru.name : 'Not specified'}
        </p>
        <Link
          to={`/acharya/${acharya.id}`}
          className="pointer-events-auto relative z-10 mt-2.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#B34700] hover:text-[#96731F] transition-colors"
        >
          Read story
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

/** Lotus-centred rule between roster rows (the snap's row divider). */
function RowDivider() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-[#E3D2AE]" />
      <LotusIcon className="h-3.5 w-3.5 text-[#C99A2E]" />
      <span className="h-px flex-1 bg-[#E3D2AE]" />
    </div>
  );
}

export default function AcharyasPage() {
  const acharyas = getAllAcharyas();
  const groups = groupBy(acharyas, (a) => a.eraGroup);

  return (
    <div className="space-y-8">
      {/* Guru-parampara hero — gopuram artwork as a right-half watermark */}
      <div className="relative min-h-[240px] pb-2 pt-8">
        <img
          src={gopuramIllustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-contain object-[right_bottom] opacity-80 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)] lg:block"
        />
        <div className="relative max-w-[60%]">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#B34700]">
            {SITE_COPY.acharyasPage.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[56px]!">
            {SITE_COPY.acharyasPage.title}
          </h1>
          <div className="mt-2 flex w-56 items-center gap-2" aria-hidden="true">
            <span className="h-px flex-1 bg-[#C99A2E]/50" />
            <LotusIcon className="h-3.5 w-3.5 text-[#C99A2E]" />
            <span className="h-px flex-1 bg-[#C99A2E]/50" />
          </div>
          <p className="mt-4 max-w-[74ch] text-[17px] leading-relaxed text-[#66523D]">
            {SITE_COPY.acharyasPage.lead}
          </p>
        </div>
      </div>

      {[...groups.entries()].map(([eraGroup, list]) => {
        // Two-column roster: chunk into pairs; a lotus rule separates rows
        const rows = [];
        for (let i = 0; i < list.length; i += 2) rows.push(list.slice(i, i + 2));
        return (
          <section key={eraGroup} aria-labelledby={`era-${eraGroup.slice(0, 12)}`}>
            <div className="flex items-center gap-3">
              <h2
                id={`era-${eraGroup.slice(0, 12)}`}
                className="font-display text-[26px] font-semibold text-[#7A2E00] sm:text-[30px]"
              >
                {eraGroup}
              </h2>
              <LotusIcon className="h-4 w-4 shrink-0 text-[#C99A2E]" aria-hidden="true" />
              <div className="h-px flex-1 bg-[#E3D2AE]" aria-hidden="true" />
            </div>
            <div>
              {rows.map((pair, r) => (
                <div key={pair[0].id}>
                  {r > 0 ? <RowDivider /> : null}
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <AcharyaRow acharya={pair[0]} right={false} />
                    {pair[1] ? <AcharyaRow acharya={pair[1]} right /> : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
