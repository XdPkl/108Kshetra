/**
 * AzhwarDetailPage — the zip-parity saint template for one Azhwar at
 * /azhwar/:id (US-AZW-02, FR-90; UXD v3.0 Gate 6): breadcrumb bar with
 * quick prev/next toggles, hero with stat chips, sticky spy pills, and the
 * six dossier sections (identification, life history with the lifeline
 * rail, contributions, representative verse, media, sources) plus bottom
 * prev/next navigation.
 */
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { getAzhwarById, getAzhwarNeighbours, getKshetramById, getKshetramsByAzhwar } from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import ZipSection from '../components/detail/ZipSection.jsx';
import SectionNav from '../components/detail/SectionNav.jsx';
import { ThirumanIcon } from '../components/SacredIcons.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import Identification from '../components/saint/Identification.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintNarrative from '../components/saint/SaintNarrative.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintTimeline from '../components/saint/SaintTimeline.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';

export default function AzhwarDetailPage() {
  const { id } = useParams();
  const azhwar = getAzhwarById(id);

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
  const chipClass = 'px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#C99A2E]/10 border border-[#C99A2E]/55 text-[#571F00]';
  const quickToggle = 'px-2.5 py-1 rounded-full border border-[#C99A2E]/50 hover:border-[#B34700] hover:bg-[#FFFDF7] text-[11px] text-[#7A2E00] flex items-center gap-1 transition-colors';

  return (
    <>
      {/* Breadcrumb bar with quick prev/next */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[#66523D] pb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <Link to="/azhwars" className="hover:text-[#B34700] transition-colors font-medium">← All Azhwars</Link>
          {azhwar.order ? (
            <>
              <span className="text-[#96731F]">·</span>
              <span>{azhwar.order} of 12 in chronological order</span>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {prev ? (
            <Link to={`/azhwar/${prev.id}`} className={quickToggle}>
              <ChevronLeft className="w-3 h-3" aria-hidden="true" />
              <span className="hidden sm:inline">{prev.name}</span>
            </Link>
          ) : null}
          {next ? (
            <Link to={`/azhwar/${next.id}`} className={quickToggle}>
              <span className="hidden sm:inline">{next.name}</span>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>

      {/* Hero banner */}
      <div className="border-b border-[#E3D2AE] pb-7">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] flex items-center gap-2">
          <ThirumanIcon className="w-3.5 h-5" />
          <span>Sri Vaishnava Sampradaya{azhwar.order ? ` · Azhwar ${azhwar.order} of 12` : ''}</span>
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#7A2E00] tracking-tight mt-1.5">
          {azhwar.name}
        </h1>
        <p className="text-xl sm:text-2xl text-[#96731F] font-bold mt-1" lang="ta">{azhwar.tamilName}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {azhwar.birthMonth ? (
            <span className={chipClass}>
              ★ {azhwar.birthMonth} · {azhwar.birthStar}{azhwar.tithi ? ` · ${azhwar.tithi}` : ''}
            </span>
          ) : null}
          <span className={chipClass}>📜 {azhwar.pasuramCount.toLocaleString('en-IN')} Sacred Pasurams</span>
          <span className={chipClass}>🛕 {desams.length} Desams Glorified</span>
        </div>
      </div>

      <SectionNav
        sections={[
          { id: 'identification', label: 'Identification' },
          { id: 'history', label: 'Life & Miracles' },
          { id: 'contributions', label: 'Contributions' },
          { id: 'verse', label: 'Representative Verse' },
          { id: 'media', label: 'Visual & Media' },
          { id: 'sources', label: 'Sources' },
        ]}
      />

      {/* 1. Identification */}
      <section
        id="identification"
        className="bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/40 shadow-xs p-6 sm:p-8 relative overflow-hidden scroll-mt-36"
      >
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />
        <div className="border-b border-[#F0E3C6] pb-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">Biographical profile</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">Identification</h2>
        </div>
        <Identification
          rows={[
            { label: 'Names & aliases', value: azhwar.epithets?.join(' · ') },
            {
              label: 'Birthplace',
              value: azhwar.birthplace
                ? (
                  <>
                    {birthplaceLink
                      ? <>{azhwar.birthplace.name} — <Link className="text-[#B34700] font-semibold hover:text-[#7A2E00] underline underline-offset-2" to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                      : azhwar.birthplace.name}
                    {azhwar.birthplace.district ? <span className="block text-xs text-[#66523D] mt-0.5">{azhwar.birthplace.district}</span> : null}
                  </>
                )
                : null,
            },
            { label: 'Divine amsam', value: azhwar.amsam },
            {
              label: 'Era',
              value: azhwar.era
                ? <>{azhwar.period}{azhwar.era.academic ? <> (academic: {azhwar.era.academic})</> : null}{azhwar.era.contemporaries ? <> · contemporary with the {azhwar.era.contemporaries}</> : null}</>
                : azhwar.period,
            },
          ]}
          portrait={{
            src: azhwar.photos?.[0]?.src ?? null,
            wiki: null,
            alt: azhwar.photos?.[0]?.alt ?? `${azhwar.name} portrait`,
          }}
        />
      </section>

      {/* 2. Life History & Miracles — 7/5 with the lifeline rail */}
      <ZipSection id="history" eyebrow="Hagiography & Leelas" title="Life History & Miracles">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            {Array.isArray(azhwar.lifeHistory) && azhwar.lifeHistory.length > 0
              ? <SaintNarrative items={azhwar.lifeHistory} />
              : <NotDocumented />}
            <SaintLegend legend={azhwar.legend} />
          </div>
          <aside className="lg:col-span-5">
            <SaintTimeline timeline={azhwar.timeline} />
          </aside>
        </div>
      </ZipSection>

      {/* 3. Contributions */}
      <ZipSection id="contributions" eyebrow="Theological impact" title="Contributions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7 items-stretch">
          <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
              <SaintGlyph kind="works" /> Works
            </span>
            <ul className="text-xs leading-relaxed text-[#66523D] list-disc pl-4 space-y-1.5 flex-1">
              {(azhwar.works ?? []).map((w) => (
                <li key={w.name}>{w.name}{w.pasurams ? ` (${w.pasurams} pasurams)` : ''}{w.language ? ` — ${w.language}` : ''}</li>
              ))}
            </ul>
          </div>
          {azhwar.preservation ? (
            <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
                <SaintGlyph kind="preservation" /> Sampradaya preservation
              </span>
              <p className="text-xs leading-relaxed text-[#66523D]">{azhwar.preservation}</p>
            </div>
          ) : null}
          {azhwar.bhaktiBhava ? (
            <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
                <SaintGlyph kind="bhakti" /> Role &amp; bhakti bhava
              </span>
              <p className="text-xs leading-relaxed text-[#66523D]">{azhwar.bhaktiBhava}</p>
            </div>
          ) : null}
        </div>

        <div className="space-y-4 border-t border-[#E3D2AE] pt-6">
          {Array.isArray(azhwar.associatedDesams) && azhwar.associatedDesams.length > 0 ? (
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2.5 flex items-center gap-1.5">
                <SaintGlyph kind="desams" /> Primary associated Divya Desams (Mangalasasanam)
              </span>
              <div className="flex flex-wrap gap-2">
                {azhwar.associatedDesams.map((kid) => {
                  const k = getKshetramById(kid);
                  return k ? (
                    <Link
                      key={kid}
                      to={`/kshetram/${kid}`}
                      className="inline-block px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#B34700] hover:text-[#B34700] transition-all shadow-2xs"
                    >
                      🛕 {k.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          ) : null}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2.5 flex items-center gap-1.5">
              <SaintGlyph kind="desams" /> Desams glorified ({desams.length})
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {desams.map((k) => (
                <Link
                  key={k.id}
                  to={`/kshetram/${k.id}`}
                  className="inline-block px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-medium hover:border-[#B34700] hover:text-[#B34700] hover:-translate-y-0.5 transition-all shadow-2xs"
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
        </div>
      </ZipSection>

      {/* 4. Representative Verse */}
      <ZipSection id="verse" eyebrow="From the Prabandham" title="Representative Verse">
        {azhwar.verse ? <SaintVerse verse={azhwar.verse} /> : <NotDocumented />}
      </ZipSection>

      {/* 5. Visual & Media */}
      <ZipSection id="media" eyebrow="Multimedia & archives" title="Visual & Media">
        <SaintMedia visuals={azhwar.visuals} />
      </ZipSection>

      {/* 6. Sources */}
      <ZipSection id="sources" title="Sources & Sampradaya Texts">
        <SaintSources sources={azhwar.sources} fallback={<NotDocumented />} />
      </ZipSection>

      {/* Bottom prev / next */}
      <nav className="flex items-center justify-between gap-4 pt-4 border-t border-[#E3D2AE]" aria-label="Chronological navigation">
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
          : <span />}
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
          : <span />}
      </nav>
    </>
  );
}
