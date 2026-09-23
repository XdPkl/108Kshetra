/**
 * AcharyaDetailPage — the zip-parity saint template for one Acharya at
 * /acharya/:id (US-ACH-03, FR-94; UXD v3.0 Gate 8): breadcrumb bar, hero
 * with stat chips, sticky spy pills, and the dossier sections including
 * Guru & Sishyas. Content not yet provided renders the visible pending
 * marker.
 */
import { Link, useParams } from 'react-router-dom';
import { getAcharyaById, getAllAcharyas, getKshetramById } from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import ZipSection from '../components/detail/ZipSection.jsx';
import SectionNav from '../components/detail/SectionNav.jsx';
import { ThirumanIcon } from '../components/SacredIcons.jsx';
import Identification from '../components/saint/Identification.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintNarrative from '../components/saint/SaintNarrative.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintTimeline from '../components/saint/SaintTimeline.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';
import PendingContent from '../components/saint/PendingContent.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';

/** Resolves an acharya id to {id, name} for guru/sishya chips. */
function linkFor(id) {
  const a = getAllAcharyas().find((x) => x.id === id);
  return a ? { id: a.id, name: a.name } : null;
}

export default function AcharyaDetailPage() {
  const { id } = useParams();
  const acharya = getAcharyaById(id);

  if (!acharya) {
    return (
      <div className="max-w-xl mx-auto pt-8">
        <EmptyState
          title="This Acharya was not found"
          message="The link may be outdated. Browse the guru parampara instead."
          action={<Link className="btn btn--primary" to="/acharyas">All Acharyas</Link>}
        />
      </div>
    );
  }

  const birthplaceLink = acharya.birthplace?.kshetramId;
  const guru = acharya.guru ? linkFor(acharya.guru) : null;
  const sishyas = (acharya.sishyas ?? []).map(linkFor).filter(Boolean);
  const amsamLink = acharya.amsamAcharyaId ? linkFor(acharya.amsamAcharyaId) : null;
  const chipClass = 'px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#C99A2E]/10 border border-[#C99A2E]/55 text-[#571F00]';
  const paramparaChip = 'inline-block px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#B34700] hover:text-[#B34700] transition-all shadow-2xs';

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="flex items-center gap-2 flex-wrap text-sm text-[#66523D] pb-1">
        <Link to="/acharyas" className="hover:text-[#B34700] transition-colors font-medium">← All Acharyas</Link>
        <span className="text-[#96731F]">·</span>
        <span>{acharya.eraGroup ?? 'Guru Parampara'}</span>
      </div>

      {/* Hero banner */}
      <div className="border-b border-[#E3D2AE] pb-7">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] flex items-center gap-2">
          <ThirumanIcon className="w-3.5 h-5" />
          <span>Sri Vaishnava Sampradaya · {acharya.eraGroup ?? 'Guru Parampara'}</span>
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#7A2E00] tracking-tight mt-1.5">
          {acharya.name}
        </h1>
        <p className="text-xl sm:text-2xl text-[#96731F] font-bold mt-1" lang="ta">{acharya.tamilName}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className={chipClass}>🕰 {acharya.era}</span>
          {acharya.birthMonth ? (
            <span className={chipClass}>
              ★ {acharya.birthMonth} · {acharya.birthStar}{acharya.tithi ? ` · ${acharya.tithi}` : ''}
            </span>
          ) : null}
          {sishyas.length > 0 ? (
            <span className={chipClass}>🪷 {sishyas.length} sishyas in the lineage</span>
          ) : null}
        </div>
      </div>

      <SectionNav
        sections={[
          { id: 'identification', label: 'Identification' },
          { id: 'history', label: 'Life & Miracles' },
          { id: 'contributions', label: 'Contributions' },
          { id: 'verse', label: 'Representative Verse' },
          { id: 'gurusishyas', label: 'Guru & Sishyas' },
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
            { label: 'Names & titles', value: acharya.titles?.join(' · ') },
            {
              label: 'Birthplace',
              value: acharya.birthplace
                ? (
                  <>
                    {birthplaceLink
                      ? <>{acharya.birthplace.name} — <Link className="text-[#B34700] font-semibold hover:text-[#7A2E00] underline underline-offset-2" to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                      : acharya.birthplace.name}
                    {acharya.birthplace.district ? <span className="block text-xs text-[#66523D] mt-0.5">{acharya.birthplace.district}</span> : null}
                  </>
                )
                : null,
            },
            {
              label: 'Divine amsam',
              value: amsamLink
                ? <>{acharya.amsam} — <Link className="text-[#B34700] font-semibold hover:text-[#7A2E00] underline underline-offset-2" to={`/acharya/${amsamLink.id}`}>{amsamLink.name}</Link></>
                : acharya.amsam,
            },
          ]}
          portrait={{
            src: acharya.photos?.[0]?.src ?? null,
            wiki: null,
            alt: acharya.photos?.[0]?.alt ?? `${acharya.name} portrait`,
          }}
        />
      </section>

      {/* 2. Life History & Miracles — 7/5 with the lifeline rail */}
      <ZipSection id="history" eyebrow="Hagiography & Leelas" title="Life History & Miracles">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            {Array.isArray(acharya.lifeHistory) && acharya.lifeHistory.length > 0
              ? (
                <>
                  <SaintNarrative items={acharya.lifeHistory} />
                  <SaintLegend legend={acharya.legend} />
                </>
              )
              : <PendingContent />}
          </div>
          <aside className="lg:col-span-5">
            <SaintTimeline timeline={acharya.timeline} />
          </aside>
        </div>
      </ZipSection>

      {/* 3. Contributions */}
      <ZipSection id="contributions" eyebrow="Theological impact" title="Contributions">
        {acharya.works || acharya.preservation || acharya.philosophicalTheme ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {Array.isArray(acharya.works) && acharya.works.length > 0 ? (
                <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
                    <SaintGlyph kind="works" /> Works
                  </span>
                  <ul className="text-xs leading-relaxed text-[#66523D] list-disc pl-4 space-y-1.5 flex-1">
                    {acharya.works.map((w) => (
                      <li key={w.name ?? w}>{w.name ?? w}{w.language ? ` — ${w.language}` : ''}</li>
                    ))}
                  </ul>
                  {acharya.worksSummary ? (
                    <p className="text-xs text-[#66523D] leading-relaxed mt-3 pt-3 border-t border-[#F0E3C6]">{acharya.worksSummary}</p>
                  ) : null}
                </div>
              ) : null}
              {acharya.preservation ? (
                <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
                    <SaintGlyph kind="preservation" /> Sampradaya preservation
                  </span>
                  <p className="text-xs leading-relaxed text-[#66523D]">{acharya.preservation}</p>
                </div>
              ) : null}
              {acharya.philosophicalTheme ? (
                <div className="bg-[#FAF2E3] p-5 rounded-xl border border-[#C99A2E]/40 flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] mb-2 flex items-center gap-1.5">
                    <SaintGlyph kind="bhakti" /> Philosophical theme
                  </span>
                  <p className="text-xs leading-relaxed text-[#66523D]">✦ {acharya.philosophicalTheme}</p>
                </div>
              ) : null}
            </div>
            {Array.isArray(acharya.associatedDesams) && acharya.associatedDesams.length > 0 ? (
              <div className="mt-6 pt-6 border-t border-[#E3D2AE]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2.5 flex items-center gap-1.5">
                  <SaintGlyph kind="desams" /> Associated Divya Desams
                </span>
                <div className="flex flex-wrap gap-2">
                  {acharya.associatedDesams.map((kid) => {
                    const name = getKshetramById(kid)?.name;
                    return name ? (
                      <Link key={kid} to={`/kshetram/${kid}`} className={paramparaChip}>🛕 {name}</Link>
                    ) : null;
                  })}
                </div>
              </div>
            ) : null}
          </>
        ) : <PendingContent />}
      </ZipSection>

      {/* 4. Representative Verse */}
      <ZipSection id="verse" eyebrow="From the Prabandham" title="Representative Verse">
        {acharya.verse ? <SaintVerse verse={acharya.verse} /> : <PendingContent />}
      </ZipSection>

      {/* 5. Guru & Sishyas — the lineage */}
      <ZipSection id="gurusishyas" eyebrow="The lineage" title="Guru & Sishyas">
        {guru || sishyas.length > 0 ? (
          <div className="space-y-4">
            {guru ? (
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2.5">Guru:</span>
                <Link to={`/acharya/${guru.id}`} className={paramparaChip}>{guru.name}</Link>
              </div>
            ) : null}
            {sishyas.length > 0 ? (
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2.5">
                  Sishyas: <span className="text-[#96731F]">({sishyas.length})</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {sishyas.map((s) => (
                    <Link key={s.id} to={`/acharya/${s.id}`} className={paramparaChip}>{s.name}</Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : <PendingContent />}
      </ZipSection>

      {/* 6. Visual & Media */}
      <ZipSection id="media" eyebrow="Multimedia & archives" title="Visual & Media">
        <SaintMedia visuals={acharya.visuals} />
      </ZipSection>

      {/* 7. Sources */}
      <ZipSection id="sources" title="Sources & Sampradaya Texts">
        <SaintSources sources={acharya.sources} fallback={<PendingContent />} />
      </ZipSection>
    </>
  );
}
