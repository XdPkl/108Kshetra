/**
 * AzhwarDetailPage — the azhwar dossier at /azhwar/:id (US-AZW-02, FR-90),
 * recreated to the 2026-09-30 PO snap: breadcrumb bar with the next-azhwar
 * pill, hero (portrait + name/Tamil/epithet, pasuram & desam stat row, the
 * Birthplace / Birth star / Divine amsam icon row), an accessible five-tab
 * switcher (Life & tradition · Hymns & meaning · Sacred places · Media ·
 * Sources), the persistent opening-verse band, Birthplace/Sacred-places
 * cards, a sources summary row and the chronological prev/next nav.
 * Content is dataset-driven (azhwar-details.json) — the snap's condensed
 * phrases are NOT in the data, so nearest fields render instead (lifeHistory
 * heading, timeline when/event, verse significance). No new icons: lucide
 * BookOpen/MapPin/Star/Search/ArrowRight/Chevron* + the existing
 * TempleGopuramIcon/ShankaIcon/ThirumanIcon sacred icons.
 */
import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, BookOpen, ChevronLeft, ChevronRight, MapPin, Search, Star,
} from 'lucide-react';
import { getAzhwarById, getAzhwarNeighbours, getKshetramsByAzhwar } from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import { ShankaIcon, TempleGopuramIcon } from '../components/SacredIcons.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import SaintKeyMoments from '../components/saint/SaintKeyMoments.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintPortrait from '../components/saint/SaintPortrait.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';

const MUDHAL_ORDINALS = ['first', 'second', 'third'];
const TAB_IDS = ['life', 'hymns', 'places', 'media', 'sources'];

export default function AzhwarDetailPage() {
  const { id } = useParams();
  const azhwar = getAzhwarById(id);

  const [tab, setTab] = useState('life');
  const [storyExpanded, setStoryExpanded] = useState(false);
  const tabRefs = useRef({});

  if (!azhwar) {
    return (
      <div className="max-w-xl mx-auto pt-8">
        <EmptyState
          title="This Azhwar was not found"
          message="The link may be outdated. Meet all twelve Azhwars instead."
          action={<Link className="btn btn--primary" to="/azhwars">All Azhwars</Link>}
        />
      </div>
    );
  }

  const { prev, next } = getAzhwarNeighbours(id);
  const desams = getKshetramsByAzhwar(id);
  const birthplaceLink = azhwar.birthplace?.kshetramId;
  const verse = azhwar.verse ?? null;
  const recitationHref = verse?.audio
    ?? (verse?.work ? `https://archive.org/search?query=${encodeURIComponent(`${verse.work} recitation`)}` : null);
  const heroEyebrow = azhwar.order && azhwar.order <= 3
    ? `The ${MUDHAL_ORDINALS[azhwar.order - 1]} of the Mudhal Azhwars`
    : `Sri Vaishnava Sampradaya${azhwar.order ? ` · Azhwar ${azhwar.order} of 12` : ''}`;
  const epithet = azhwar.epithets?.[0] ?? null;
  const moreEpithets = (azhwar.epithets ?? []).slice(1);
  const tabs = [
    { id: 'life', label: 'Life & tradition' },
    { id: 'hymns', label: 'Hymns & meaning' },
    { id: 'places', label: `Sacred places (${desams.length})` },
    { id: 'media', label: 'Media' },
    { id: 'sources', label: 'Sources' },
  ];

  const onTabKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const delta = e.key === 'ArrowRight' ? 1 : -1;
    const idx = TAB_IDS.indexOf(tab);
    const nextTab = TAB_IDS[(idx + delta + TAB_IDS.length) % TAB_IDS.length];
    setTab(nextTab);
    tabRefs.current[nextTab]?.focus();
  };

  const tabButtonClass = (tabId) => `px-1 pb-3 pt-1 text-[14px] font-medium transition-colors border-b-2 -mb-px whitespace-nowrap ${
    tab === tabId
      ? 'border-[#C99A2E] text-[#B34700]! font-semibold'
      : 'border-transparent text-[#66523D]! hover:text-[#7A2E00]!'
  }`;

  const storyBlocks = Array.isArray(azhwar.lifeHistory) ? azhwar.lifeHistory : [];
  const [firstBlock, ...restBlocks] = storyBlocks;

  return (
    <>
      {/* Breadcrumb bar with the next-azhwar pill (PO snap round 11) */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#66523D] pb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <Link to="/azhwars" className="hover:text-[#B34700] transition-colors font-medium">← All Azhwars</Link>
          {azhwar.order ? (
            <>
              <span className="text-[#96731F]">|</span>
              <span>{azhwar.order} of 12 in chronological order</span>
            </>
          ) : null}
        </div>
        {next ? (
          <Link
            to={`/azhwar/${next.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/60 bg-[#FFFDF7] text-[12px] font-semibold text-[#7A2E00] hover:border-[#B34700] transition-colors shadow-2xs"
          >
            {next.name}
            <ArrowRight className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
          </Link>
        ) : prev ? (
          <Link
            to={`/azhwar/${prev.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C99A2E]/60 bg-[#FFFDF7] text-[12px] font-semibold text-[#7A2E00] hover:border-[#B34700] transition-colors shadow-2xs"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            {prev.name}
          </Link>
        ) : null}
      </div>

      {/* Hero: portrait left, identity + stats + birth facts right */}
      <section className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-8 items-start border-b border-[#E3D2AE] pb-8" aria-label={`${azhwar.name} profile`}>
        <SaintPortrait
          portrait={{
            src: azhwar.photos?.[0]?.src ?? null,
            wiki: null,
            alt: azhwar.photos?.[0]?.alt ?? `${azhwar.name} portrait`,
          }}
        />
        <div className="min-w-0">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {heroEyebrow}
          </p>
          {/* ! bangs beat the unlayered legacy h1/h2 rules in base.css */}
          <h1 className="mt-1.5 font-display text-[40px]! leading-[1.02]! font-semibold text-[#5C1F00]! sm:text-[46px]!">
            {azhwar.name}
          </h1>
          <p className="font-display text-[26px] sm:text-[30px] font-semibold text-[#96731F]! leading-tight mt-1" lang="ta">
            {azhwar.tamilName}
          </p>
          {epithet ? (
            <p className="font-display text-[17px] font-semibold text-[#96731F]! mt-1">{epithet}</p>
          ) : null}
          {moreEpithets.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {moreEpithets.map((alias) => (
                <span
                  key={alias}
                  className="px-2.5 py-0.5 bg-[#FAF2E3] border border-[#C99A2E]/50 rounded-full text-[11px] font-medium text-[#4A3005]"
                >
                  {alias}
                </span>
              ))}
            </div>
          ) : null}
          <p className="mt-3 text-[15px] text-[#332417]">
            A life of devotion, remembered through {azhwar.pasuramCount.toLocaleString('en-IN')} sacred verses.
          </p>

          {/* Stat row */}
          <div className="mt-5 flex items-center gap-5 text-[14px]">
            <span className="flex items-center gap-2 font-semibold text-[#332417]">
              <BookOpen className="w-5 h-5 text-[#B34700]" aria-hidden="true" />
              {azhwar.pasuramCount.toLocaleString('en-IN')} pasurams
            </span>
            <span className="w-px h-6 bg-[#E3D2AE]" aria-hidden="true" />
            <span className="flex items-center gap-2 font-semibold text-[#332417]">
              <TempleGopuramIcon className="w-5 h-5" />
              {desams.length} Divya Desams
            </span>
          </div>

          {/* Birth facts row */}
          <div className="mt-6 pt-5 border-t border-[#E3D2AE] grid grid-cols-1 sm:grid-cols-3 gap-5">
            {azhwar.birthplace ? (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B34700] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#96731F]">Birthplace</p>
                  <p className="text-[13px] text-[#332417] leading-snug mt-0.5">{azhwar.birthplace.name}</p>
                  {azhwar.birthplace.district ? (
                    <p className="text-[11px] text-[#66523D] mt-0.5">{azhwar.birthplace.district}</p>
                  ) : null}
                </div>
              </div>
            ) : null}
            {azhwar.birthStar ? (
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#B34700] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#96731F]">Birth star</p>
                  <p className="text-[13px] text-[#332417] leading-snug mt-0.5">{azhwar.birthStar}</p>
                </div>
              </div>
            ) : null}
            {azhwar.amsam ? (
              <div className="flex items-start gap-3">
                <ShankaIcon className="w-6 h-5 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#96731F]">Divine amsam</p>
                  <p className="text-[13px] text-[#332417] leading-snug mt-0.5">{azhwar.amsam}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Five-tab switcher (PO snap) */}
      <div
        role="tablist"
        aria-label="Azhwar dossier sections"
        onKeyDown={onTabKey}
        className="flex items-center gap-6 sm:gap-10 overflow-x-auto border-b border-[#E3D2AE] mt-2"
      >
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            ref={(el) => { tabRefs.current[id] = el; }}
            type="button"
            role="tab"
            id={`azhwar-tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`azhwar-panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            onClick={() => setTab(id)}
            className={tabButtonClass(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`azhwar-panel-${tab}`}
        aria-labelledby={`azhwar-tab-${tab}`}
        className="pt-8 pb-2 min-h-[320px]"
      >
        {tab === 'life' ? (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 items-start">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
                Life &amp; tradition
              </p>
              {firstBlock ? (
                <>
                  <h2 className="mt-2 font-display text-[26px]! sm:text-[30px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
                    {firstBlock.heading}
                  </h2>
                  <div className="mt-3 space-y-4">
                    {firstBlock.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)} className="text-[15px] leading-relaxed text-[#332417]">{p}</p>
                    ))}
                  </div>
                </>
              ) : (
                <NotDocumented />
              )}

              {restBlocks.length > 0 && storyExpanded ? (
                <div className="mt-6 space-y-6">
                  {restBlocks.map((block) => (
                    <div key={block.heading}>
                      <h3 className="font-display text-xl font-semibold text-[#7A2E00]">{block.heading}</h3>
                      <div className="mt-2 space-y-3">
                        {block.paragraphs.map((p) => (
                          <p key={p.slice(0, 32)} className="text-[14px] leading-relaxed text-[#332417]">{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  <SaintLegend legend={azhwar.legend} />
                </div>
              ) : null}

              {restBlocks.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setStoryExpanded((v) => !v)}
                  aria-expanded={storyExpanded}
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#96731F]! underline decoration-[#C99A2E]/70 underline-offset-4 hover:text-[#7A2E00]! transition-colors"
                >
                  {storyExpanded ? 'Show less' : 'Read the complete life story'}
                  <ArrowRight className={`w-4 h-4 transition-transform${storyExpanded ? ' rotate-90' : ''}`} aria-hidden="true" />
                </button>
              ) : null}

              {(azhwar.bhaktiBhava || azhwar.preservation) ? (
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {azhwar.bhaktiBhava ? (
                    <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] flex items-center gap-1.5">
                        <SaintGlyph kind="bhakti" /> Role &amp; bhakti bhava
                      </span>
                      <p className="text-xs leading-relaxed text-[#66523D] mt-2">{azhwar.bhaktiBhava}</p>
                    </div>
                  ) : null}
                  {azhwar.preservation ? (
                    <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] flex items-center gap-1.5">
                        <SaintGlyph kind="preservation" /> Sampradaya preservation
                      </span>
                      <p className="text-xs leading-relaxed text-[#66523D] mt-2">{azhwar.preservation}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {azhwar.era || azhwar.period ? (
                <p className="mt-5 text-xs text-[#66523D]">
                  <span className="font-bold uppercase tracking-wider text-[#96731F]">Era · </span>
                  {azhwar.period}
                  {azhwar.era?.academic ? <> (academic: {azhwar.era.academic})</> : null}
                  {azhwar.era?.contemporaries ? <> · contemporary with the {azhwar.era.contemporaries}</> : null}
                </p>
              ) : null}
            </div>
            <aside>
              <SaintKeyMoments timeline={azhwar.timeline} />
            </aside>
          </div>
        ) : null}

        {tab === 'hymns' ? (
          <div className="space-y-8">
            {verse ? (
              <SaintVerse verse={verse} />
            ) : (
              <NotDocumented />
            )}
            {Array.isArray(azhwar.works) && azhwar.works.length > 0 ? (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-3 flex items-center gap-1.5">
                  <SaintGlyph kind="works" /> Sacred works
                </h3>
                <ul className="text-sm leading-relaxed text-[#332417] list-disc pl-5 space-y-1.5">
                  {azhwar.works.map((w) => (
                    <li key={w.name}>
                      {w.name}{w.pasurams ? ` (${w.pasurams.toLocaleString('en-IN')} pasurams)` : ''}{w.language ? ` — ${w.language}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {tab === 'places' ? (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-4 flex items-center gap-1.5">
              <TempleGopuramIcon className="w-4 h-4" /> Divya Desams glorified by {azhwar.name} ({desams.length})
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {desams.map((k) => (
                <Link
                  key={k.id}
                  to={`/kshetram/${k.id}`}
                  className="inline-block px-3 py-1.5 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-medium hover:border-[#B34700] hover:text-[#B34700] hover:-translate-y-0.5 transition-all shadow-2xs"
                >
                  {k.name}
                </Link>
              ))}
              <Link
                className="chip chip--more text-xs font-bold text-[#B34700] hover:text-[#7A2E00] transition-colors px-2 py-1"
                to={`/kshetrams?azhwar=${azhwar.id}`}
              >
                Browse all {desams.length} desams →
              </Link>
            </div>
          </div>
        ) : null}

        {tab === 'media' ? (
          <SaintMedia visuals={azhwar.visuals} />
        ) : null}

        {tab === 'sources' ? (
          <SaintSources sources={azhwar.sources} fallback={<NotDocumented />} />
        ) : null}
      </div>

      {/* Opening-verse band (persistent) */}
      {verse?.tamil ? (
        <section
          aria-label="Discover the opening verse"
          className="mt-4 rounded-2xl bg-[#F6EBD6] border border-[#C99A2E]/55 p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center"
        >
          <div className="flex items-start gap-4 min-w-0">
            <span className="hidden sm:flex w-12 h-12 rounded-xl bg-[#FFFDF7] border border-[#C99A2E]/50 items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-[#B34700]" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
                Discover the opening verse
              </p>
              <p className="font-body text-lg sm:text-[22px] leading-snug font-semibold text-[#4A2408] mt-1.5" lang="ta">
                {verse.tamil}
              </p>
              {verse.work ? (
                <p className="text-xs text-[#66523D] mt-1.5">{verse.work}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-stretch xl:items-center gap-4 lg:border-l lg:border-[#C99A2E]/40 lg:pl-6">
            {verse.significance ? (
              <div className="max-w-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#96731F]">Meaning:</p>
                <p className="text-xs text-[#332417] leading-relaxed mt-1">{verse.significance}</p>
              </div>
            ) : null}
            <div className="flex flex-col items-start gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setTab('hymns')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D95F0E] to-[#B34700] text-[#FFFDF7] text-[13px] font-bold shadow-xs hover:opacity-95 transition-opacity"
              >
                Read verse &amp; meaning
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              {recitationHref ? (
                <a
                  href={recitationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7A2E00]! hover:text-[#B34700]! transition-colors"
                >
                  <Search className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
                  Find recitations
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Birthplace / Sacred places cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {azhwar.birthplace ? (
          <div className="flex items-start gap-4 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-5 shadow-xs">
            <span className="flex w-12 h-12 rounded-xl bg-[#FAF2E3] border border-[#C99A2E]/50 items-center justify-center shrink-0">
              <TempleGopuramIcon className="w-7 h-7" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">Birthplace</p>
              <p className="font-display text-[20px] font-semibold text-[#7A2E00] leading-snug mt-0.5">
                {azhwar.birthplace.name}
              </p>
              <p className="text-xs text-[#66523D] mt-1">
                {azhwar.birthplace.district ?? `Sacred birthplace of ${azhwar.name}.`}
              </p>
              {birthplaceLink ? (
                <Link
                  to={`/kshetram/${birthplaceLink}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#96731F]! hover:text-[#7A2E00]! transition-colors"
                >
                  View kshetram
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="flex items-start gap-4 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-5 shadow-xs">
          <span className="flex w-12 h-12 rounded-xl bg-[#FAF2E3] border border-[#C99A2E]/50 items-center justify-center shrink-0">
            <TempleGopuramIcon className="w-7 h-7" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">Sacred places</p>
            <p className="font-display text-[20px] font-semibold text-[#7A2E00] leading-snug mt-0.5">
              {desams.length} Divya Desams
            </p>
            <p className="text-xs text-[#66523D] mt-1">
              Explore the {desams.length} Divya Desams glorified by {azhwar.name}
              {verse?.work ? <> in the {verse.work}</> : null}.
            </p>
            <Link
              to={`/kshetrams?azhwar=${azhwar.id}`}
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#96731F]! hover:text-[#7A2E00]! transition-colors"
            >
              Explore all {desams.length}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sources summary row → opens the Sources tab */}
      <button
        type="button"
        onClick={() => setTab('sources')}
        aria-haspopup="tab"
        className="mt-6 w-full flex items-center justify-between gap-4 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] px-5 py-4 text-left shadow-xs hover:border-[#C99A2E] transition-colors"
      >
        <span className="flex items-center gap-4 min-w-0">
          <span className="flex w-11 h-11 rounded-xl bg-[#FAF2E3] border border-[#C99A2E]/50 items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-[#B34700]" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-[18px] font-semibold text-[#7A2E00]">
              Sources &amp; Sampradaya Texts
            </span>
            <span className="block text-xs text-[#66523D] mt-0.5">
              Traditional texts, commentaries and references.
            </span>
          </span>
        </span>
        <ChevronRight className="w-5 h-5 text-[#96731F] shrink-0" aria-hidden="true" />
      </button>

      {/* Bottom chronological navigation */}
      <nav className="flex items-center justify-between gap-4 pt-5 mt-2 border-t border-[#E3D2AE]" aria-label="Chronological navigation">
        {prev
          ? (
            <Link
              to={`/azhwar/${prev.id}`}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#FFFDF7] rounded-full border border-[#C99A2E]/60 shadow-xs hover:shadow-md hover:border-[#B34700] transition-all text-xs sm:text-sm"
            >
              <ChevronLeft className="w-4 h-4 text-[#B34700] group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
              <span>Previous: <strong className="text-[#7A2E00]">{prev.name}</strong></span>
            </Link>
          )
          : (
            <Link to="/azhwars" className="inline-flex items-center gap-2 text-sm font-medium text-[#7A2E00]! hover:text-[#B34700]! transition-colors">
              ← All Azhwars
            </Link>
          )}
        {next
          ? (
            <Link
              to={`/azhwar/${next.id}`}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#FFFDF7] rounded-full border border-[#C99A2E]/60 shadow-xs hover:shadow-md hover:border-[#B34700] transition-all text-xs sm:text-sm ml-auto"
            >
              <span>Next: <strong className="text-[#7A2E00]">{next.name}</strong></span>
              <ChevronRight className="w-4 h-4 text-[#B34700] group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          )
          : (
            <Link to="/azhwars" className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-[#7A2E00]! hover:text-[#B34700]! transition-colors">
              All Azhwars →
            </Link>
          )}
      </nav>
    </>
  );
}
