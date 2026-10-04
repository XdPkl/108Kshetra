/**
 * AcharyasPage — the guru parampara index at /acharyas (US-ACH-02, FR-93),
 * restyled onto the /kshetrams design system (PO round 25, mirroring the
 * round-24 /azhwars treatment): Browse-style compact intro with the
 * gopuram illustration as a quiet desktop-only watermark, era navigation
 * styled like the Kshetrams scope pills (anchor links, never filters —
 * all sections stay rendered; gold selected state via aria-current, set
 * on click and tracked while scrolling with an IntersectionObserver when
 * available), and a two-column (one on mobile) roster of horizontal
 * profile cards rebuilt on the KshetramCard interaction rules —
 * object-contain portrait (quiet emblem fallback), English + Tamil names,
 * full biography, hairline, Period/Guru rows (dataset values verbatim,
 * "Not specified" never inferred) and a gold "View profile" action.
 * Era ids and URL fragments are unchanged.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllAcharyas, getAcharyaById } from '../data/api.js';
import { groupBy } from '../utils/group.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { ShankaIcon } from '../components/SacredIcons.jsx';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

/**
 * Era-group jump anchors — explicit mapping so the section ids are
 * stable; an unmapped future era group falls back to a slugged id and
 * uses its own label (no data is invented).
 */
const ERA_ANCHORS = {
  'Purvacharyas — the early masters': { id: 'early-masters', jump: 'Early masters' },
  'The age of Ramanuja': { id: 'age-of-ramanuja', jump: 'Age of Ramanuja' },
  'Later acharyas': { id: 'later-acharyas', jump: 'Later acharyas' },
};

const anchorFor = (eraGroup) => ERA_ANCHORS[eraGroup]
  ?? { id: eraGroup.toLowerCase().replace(/[^a-z0-9]+/g, '-'), jump: eraGroup };

/* Scope-pill idiom from /kshetrams — the gold selected treatment */
const pillBase = 'flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] transition-all';
const pillActive = `${pillBase} border border-[#C99A2E]/60 bg-[#F6EBD6] font-semibold text-[#7A2E00] shadow-xs`;
const pillIdle = `${pillBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#332417] hover:border-[#C99A2E]`;

function AcharyaCard({ acharya }) {
  const guru = acharya.guru ? getAcharyaById(acharya.guru) : null;
  const image = useWikiImage(acharya.wiki ?? null, acharya.photos?.[0]?.src ?? null);

  return (
    <article className="acharya-card group relative flex flex-col rounded-2xl border border-[#C99A2E]/45 bg-[#FFFDF7] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A2E] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:flex-row">
      {/* Portrait column — object-contain keeps proportions; the emblem
          fallback stays small and quiet (22 of 27 have no image) */}
      <div className="flex h-28 shrink-0 items-center justify-center overflow-hidden border-b border-[#E3D2AE] bg-[#F6EBD6] sm:h-auto sm:w-32 sm:border-b-0 sm:border-r sm:self-stretch">
        {image.src ? (
          <img
            src={image.src}
            alt={`${acharya.name} portrait`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <ShankaIcon className="h-10 w-10 text-[#C99A2E] opacity-60" />
        )}
      </div>

      {/* Body — names and biography left-aligned, metadata as labelled rows */}
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <h3 className="font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
          {acharya.name}
        </h3>
        <p className="mt-0.5 text-[14px] font-medium text-[#96731F]" lang="ta">
          {acharya.tamilName}
        </p>

        <p className="mt-3 text-[15px] leading-[1.65] text-[#332417]">{acharya.role}</p>

        <div className="mt-3 border-t border-[#E3D2AE]" aria-hidden="true" />

        <dl className="mt-3 space-y-1.5 text-[13px] leading-snug">
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 font-semibold text-[#66523D]">Period</dt>
            <dd className="text-[#332417]">{acharya.era}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-14 shrink-0 font-semibold text-[#66523D]">Guru</dt>
            <dd className="text-[#332417]">{guru ? guru.name : 'Not specified'}</dd>
          </div>
        </dl>

        {/* Action row — pinned to the card foot, lower right; metadata
            can never collide with it */}
        <div className="mt-auto flex justify-end pt-4">
          <Link
            to={`/acharya/${acharya.id}`}
            aria-label={`View profile — ${acharya.name}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#96731F] px-5 py-2.5 text-[14px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#7A2E00]"
          >
            <span>View profile</span>
            <ArrowRight
              className="h-4 w-4 opacity-85 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function AcharyasPage() {
  const acharyas = getAllAcharyas();
  const groups = groupBy(acharyas, (a) => a.eraGroup);
  const eras = [...groups.entries()].map(([eraGroup, list]) => ({
    ...anchorFor(eraGroup),
    label: eraGroup,
    count: list.length,
    list,
  }));

  /* Active-era pill: set on click; while scrolling, the topmost visible
     section wins (skipped where IntersectionObserver is unavailable). */
  const [activeEra, setActiveEra] = useState(null);
  const eraIds = eras.map((e) => e.id).join(',');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const sections = eraIds.split(',').map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const topmost = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (topmost) setActiveEra(topmost.target.id);
    }, { rootMargin: '-96px 0px -55% 0px' });
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [eraIds]);

  return (
    <div>
      {/* Compact intro — the Browse header idiom; quiet illustration, text leads */}
      <div className="relative min-h-[210px] pb-6 pt-10">
        <img
          src={gopuramIllustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-contain object-[right_bottom] opacity-60 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)] lg:block"
        />
        <div className="relative max-w-[52%]">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {SITE_COPY.acharyasPage.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[48px]!">
            {SITE_COPY.acharyasPage.title}
          </h1>
          <p className="mt-2 max-w-[62ch] text-[17px] text-[#66523D]">
            {SITE_COPY.acharyasPage.lead}
          </p>
        </div>
      </div>

      {/* Era navigation — anchor pills styled like the Kshetrams scope
          pills; counts come from the dataset grouping */}
      <nav aria-label="Era sections" className="flex flex-wrap items-center gap-3 pb-2">
        {eras.map(({ id, jump, count }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeEra === id ? 'true' : undefined}
            onClick={() => setActiveEra(id)}
            className={activeEra === id ? pillActive : pillIdle}
          >
            {jump} ({count})
          </a>
        ))}
      </nav>

      {eras.map(({ id, label, count, list }) => (
        <section key={label} id={id} aria-labelledby={`era-${id}`} className="scroll-mt-[88px] pt-8">
          <div className="flex flex-wrap items-center gap-4 border-b border-[#E3D2AE]/70 pb-3">
            <h2 className="font-display text-[30px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
              {label}
            </h2>
            <span className="h-px w-16 bg-[#C99A2E]/60" aria-hidden="true" />
            <span className="text-[13px] font-medium text-[#66523D]">
              {count} {count === 1 ? 'acharya' : 'acharyas'}
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {list.map((acharya) => <AcharyaCard key={acharya.id} acharya={acharya} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
