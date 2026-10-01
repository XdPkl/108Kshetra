/**
 * AcharyaDetailPage — the guru-parampara dossier at /acharya/:id
 * (US-ACH-03, FR-94), recreated to the PO mock (2026-10-01, PO round 14):
 * numbered open sections 01–07 with ruled headings, a hero fact sheet
 * (Period / Names & titles / Birthplace / Divine amsam / Jayanthi) beside
 * the biography lead, an "On this page" anchor rail, the Chronology-of-
 * Life-Events stepper, numbered miracle items, contribution rows, the
 * representative-verse block with pada-artham tables, lineage chips,
 * iconography/listening columns and the sources row. Content not yet
 * provided renders the visible pending marker (FR-94 caveat).
 */
import { Link, useParams } from 'react-router-dom';
import { getAcharyaById, getAllAcharyas, getKshetramById } from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import { LotusIcon, ShankaIcon } from '../components/SacredIcons.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import PendingContent from '../components/saint/PendingContent.jsx';

/** Resolves an acharya id to {id, name} for guru/sishya chips. */
function linkFor(id) {
  const a = getAllAcharyas().find((x) => x.id === id);
  return a ? { id: a.id, name: a.name } : null;
}

/** The dossier's numbered sections — anchors for the On-this-page rail. */
const SECTIONS = [
  { id: 'identification', num: '01', label: 'Identification' },
  { id: 'history', num: '02', label: 'Life & Miracles' },
  { id: 'contributions', num: '03', label: 'Contributions' },
  { id: 'verse', num: '04', label: 'Representative Verse' },
  { id: 'gurusishyas', num: '05', label: 'Guru & Sishyas' },
  { id: 'media', num: '06', label: 'Visual & Media' },
  { id: 'sources', num: '07', label: 'Sources' },
];

/** Open dossier section: big gold number + serif title + rule (the mock's 02–07 headers). */
function DossierSection({ id, num, title, children }) {
  return (
    <section id={id} className="scroll-mt-36 pt-4">
      <div className="flex items-center gap-4 mb-5">
        <span className="font-display text-[22px] font-semibold text-[#C99A2E] w-9 shrink-0" aria-hidden="true">{num}</span>
        <h2 className="font-display text-[26px] sm:text-[30px] font-semibold text-[#7A2E00]">{title}</h2>
        <div className="h-px flex-1 bg-[#E3D2AE]" aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}

/** Sub-section heading inside 02 (mock: red serif ~21px). */
function SubHeading({ children }) {
  return <h3 className="font-display text-[21px] font-bold text-[#B34700] mt-7 first:mt-0">{children}</h3>;
}

/** "N. Title: text" miracle paragraph → numbered circle + bold lead-in. */
function MiracleList({ paragraphs }) {
  return (
    <ol className="mt-3 space-y-4">
      {paragraphs.map((raw, i) => {
        const stripped = raw.replace(/^\s*\d+\.\s*/, '');
        const colon = stripped.indexOf(': ');
        const title = colon > 0 ? stripped.slice(0, colon) : null;
        const rest = colon > 0 ? stripped.slice(colon + 2) : stripped;
        return (
          <li key={stripped.slice(0, 32)} className="flex gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C99A2E]/60 bg-[#FBF3DF] text-xs font-bold text-[#96731F]" aria-hidden="true">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-[#66523D]">
              {title ? <strong className="text-[#332417]">{title}: </strong> : null}
              {rest}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

/** The mock's horizontal Chronology stepper (timeline `when` labels) with the full events behind an expander. */
function Chronology({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div className="my-8 rounded-xl border border-[#E3D2AE] bg-[#F6EBD6]/60 px-5 py-5 sm:px-7">
      <h3 className="font-display text-lg font-semibold text-[#7A2E00] mb-5">Chronology of Life Events</h3>
      <ol className="relative flex justify-between gap-1">
        <span className="absolute left-[8%] right-[8%] top-[13px] h-px bg-[#C99A2E]/55" aria-hidden="true" />
        {timeline.map(({ when }, i) => (
          <li key={when} className="relative z-10 flex flex-1 flex-col items-center text-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-xs font-bold text-[#FFFDF7] shadow-xs">
              {i + 1}
            </span>
            <span className="mt-2 max-w-[11ch] text-[10px] font-semibold leading-snug text-[#66523D]">{when}</span>
          </li>
        ))}
      </ol>
      {timeline.some(({ event }) => event) ? (
        <details className="mt-5 border-t border-[#E3D2AE] pt-3">
          <summary className="cursor-pointer text-xs font-bold uppercase tracking-wider text-[#B34700] hover:text-[#96731F] transition-colors select-none">
            Read the full chronology
          </summary>
          <dl className="mt-3 space-y-3">
            {timeline.map(({ when, event }) => (
              <div key={when} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-4">
                <dt className="text-xs font-bold text-[#7A2E00]">{when}</dt>
                <dd className="text-xs leading-relaxed text-[#66523D]">{event}</dd>
              </div>
            ))}
          </dl>
        </details>
      ) : null}
    </div>
  );
}

/** Contributions row: icon + label column beside content (the mock's ruled rows). */
function ContributionRow({ icon, label, children }) {
  return (
    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[200px_1fr] sm:gap-6 sm:border-t sm:border-[#F0E3C6] first:sm:border-t-0">
      <span className="flex items-center gap-2 text-sm font-semibold text-[#332417]">
        <span className="text-[#B34700]" aria-hidden="true">{icon}</span>
        {label}
      </span>
      {children}
    </div>
  );
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
  const lifeHistory = Array.isArray(acharya.lifeHistory) ? acharya.lifeHistory : [];
  const lead = lifeHistory[0]?.paragraphs?.[0] ?? null;
  const miraclesBlock = lifeHistory.find((b) => typeof b === 'object' && /miracle/i.test(b.heading ?? ''));
  const chipClass = 'inline-block px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#B34700] hover:text-[#B34700] transition-all shadow-2xs';
  const verseHref = acharya.verse?.audio
    ?? (acharya.verse?.work
      ? `https://archive.org/search?query=${encodeURIComponent(`${acharya.verse.work} recitation`)}`
      : null);
  const wordMeanings = Array.isArray(acharya.verse?.wordMeanings) ? acharya.verse.wordMeanings : [];
  const padaHalf = Math.ceil(wordMeanings.length / 2);
  const iconography = typeof acharya.visuals?.iconography === 'object' && acharya.visuals?.iconography !== null
    ? acharya.visuals.iconography
    : null;
  const ICONOGRAPHY_LABELS = [
    ['posture', 'Physical posture (Asana)'],
    ['mudras', 'Hand gestures (Mudras)'],
    ['garments', 'Garments & Embellishments'],
    ['idol', 'Avathara Sthalam Idol'],
  ];

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="flex items-center gap-2 flex-wrap text-sm text-[#66523D] pb-1">
        <Link to="/acharyas" className="hover:text-[#B34700] transition-colors font-medium">← All Acharyas</Link>
        <span className="text-[#96731F]">·</span>
        <span>{acharya.eraGroup ?? 'Guru Parampara'}</span>
      </div>

      {/* 01 Identification — hero: name block | fact sheet | on-this-page rail */}
      <section id="identification" className="scroll-mt-36 grid grid-cols-1 gap-8 pt-3 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#96731F]">
            ॥ Sri Vaishnava Sampradaya · {acharya.eraGroup ?? 'Guru Parampara'} ॥
          </p>
          <h1 className="font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[52px]! mt-1.5">
            {acharya.name}
          </h1>
          <p className="font-display text-2xl font-bold text-[#7A2E00] mt-1" lang="ta">{acharya.tamilName}</p>
          {lead ? (
            <p className="mt-4 text-[15px] leading-relaxed text-[#66523D]">{lead}</p>
          ) : null}
        </div>

        <div className="lg:col-span-4">
          <ShankaIcon className="mx-auto mb-2 h-16 w-16 text-[#C99A2E] lg:mx-0 lg:ml-24" />
          <dl className="rounded-xl border border-[#F0E3C6] bg-[#FFFDF7]/60 px-4 py-1">
            {[
              ['Period', acharya.era],
              ['Names & titles', acharya.titles?.length ? acharya.titles.join(', ') : null],
              ['Birthplace', acharya.birthplace ? (
                <>
                  {birthplaceLink
                    ? <>{acharya.birthplace.name} — <Link className="text-[#B34700] font-semibold hover:text-[#7A2E00] underline underline-offset-2" to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                    : acharya.birthplace.name}
                  {acharya.birthplace.district ? <span className="block text-xs text-[#66523D] mt-0.5">{acharya.birthplace.district}</span> : null}
                </>
              ) : null],
              ['Divine amsam', amsamLink
                ? <>{acharya.amsam} — <Link className="text-[#B34700] font-semibold hover:text-[#7A2E00] underline underline-offset-2" to={`/acharya/${amsamLink.id}`}>{amsamLink.name}</Link></>
                : acharya.amsam],
              ['Jayanthi', [acharya.birthMonth, acharya.birthStar, acharya.tithi].filter(Boolean).join(' · ') || null],
            ].map(([label, value]) => value ? (
              <div key={label} className="grid grid-cols-[104px_1fr] gap-3 border-b border-[#F0E3C6] py-2.5 last:border-b-0">
                <dt className="text-[9px] font-bold uppercase tracking-wider text-[#96731F] pt-0.5">{label}</dt>
                <dd className="text-xs leading-relaxed text-[#332417]">{value}</dd>
              </div>
            ) : null)}
          </dl>
        </div>

        {/* On this page rail */}
        <aside className="lg:col-span-3">
          <nav aria-label="On this page" className="rounded-xl border border-[#F0E3C6] bg-[#FBF3DF]/70 p-4 lg:sticky lg:top-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#96731F] mb-2.5">On this page</p>
            <ol className="space-y-1.5">
              {SECTIONS.map(({ id: sid, num, label }) => (
                <li key={sid}>
                  <a href={`#${sid}`} className="flex items-baseline gap-2.5 text-[13px] text-[#66523D] hover:text-[#B34700] transition-colors">
                    <span className="text-[10px] font-bold text-[#C99A2E]" aria-hidden="true">{num}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </section>

      {/* 02 Life & Miracles — life blocks in data order, chronology stepper after the first */}
      <DossierSection id="history" num="02" title="Life & Miracles">
        {lifeHistory.length > 0 ? (
          <>
            {lifeHistory.map((block, i) => (
              <article key={block.heading ?? i} className={i > 0 ? 'mt-7' : ''}>
                {i === 1 && Array.isArray(acharya.timeline) && acharya.timeline.length > 0
                  ? <Chronology timeline={acharya.timeline} />
                  : null}
                <SubHeading>{block.heading}</SubHeading>
                {block === miraclesBlock
                  ? <MiracleList paragraphs={block.paragraphs} />
                  : block.paragraphs.map((p) => (
                    <p className="mt-2.5 text-sm leading-relaxed text-[#66523D]" key={p.slice(0, 24)}>{p}</p>
                  ))}
              </article>
            ))}
            <SaintLegend legend={acharya.legend} />
          </>
        ) : <PendingContent />}
      </DossierSection>

      {/* 03 Contributions */}
      <DossierSection id="contributions" num="03" title="Contributions">
        {acharya.works || acharya.preservation || acharya.philosophicalTheme || acharya.associatedDesams?.length ? (
          <div className="border-b border-[#F0E3C6]">
            {Array.isArray(acharya.works) && acharya.works.length > 0 ? (
              <ContributionRow icon={<SaintGlyph kind="works" />} label="Works">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#66523D]">
                    {acharya.works.map((w) => (
                      <li key={w.name ?? w}>{w.name ?? w}{w.language ? ` — ${w.language}` : ''}</li>
                    ))}
                  </ul>
                  {acharya.worksSummary ? (
                    <p className="border-[#F0E3C6] text-xs leading-relaxed text-[#66523D] md:border-l md:pl-5">{acharya.worksSummary}</p>
                  ) : null}
                </div>
              </ContributionRow>
            ) : null}
            {acharya.preservation ? (
              <ContributionRow icon={<SaintGlyph kind="preservation" />} label="Sampradaya Preservation">
                <p className="text-sm leading-relaxed text-[#66523D]">{acharya.preservation}</p>
              </ContributionRow>
            ) : null}
            {acharya.philosophicalTheme ? (
              <ContributionRow icon={<LotusIcon className="h-5 w-5" />} label="Philosophical Theme">
                <p className="text-sm leading-relaxed text-[#66523D]">{acharya.philosophicalTheme}</p>
              </ContributionRow>
            ) : null}
            {Array.isArray(acharya.associatedDesams) && acharya.associatedDesams.length > 0 ? (
              <ContributionRow icon={<SaintGlyph kind="desams" />} label="Associated Divya Desams">
                <div className="flex flex-wrap gap-2">
                  {acharya.associatedDesams.map((kid) => {
                    const name = getKshetramById(kid)?.name;
                    return name ? (
                      <Link key={kid} to={`/kshetram/${kid}`} className={chipClass}>{name}</Link>
                    ) : null;
                  })}
                </div>
              </ContributionRow>
            ) : null}
          </div>
        ) : <PendingContent />}
      </DossierSection>

      {/* 04 Representative Verse */}
      <DossierSection id="verse" num="04" title="Representative Verse">
        {acharya.verse ? (
          <article>
            {acharya.verse.work ? (
              <p className="text-sm font-medium text-[#66523D]">{acharya.verse.work}</p>
            ) : null}
            <div className="mt-6 text-center">
              {acharya.verse.tamil ? (
                <p className="mx-auto max-w-3xl font-body text-xl sm:text-2xl leading-relaxed font-semibold text-[#9B2C12] break-words" lang="ta">
                  {acharya.verse.tamil}
                </p>
              ) : (
                <p className="font-body text-base leading-relaxed font-medium text-[#8C765C]" lang="ta">
                  [Original verse text pending — to be provided]
                </p>
              )}
              {acharya.verse.transliteration ? (
                <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-[#66523D]">
                  {acharya.verse.transliteration}
                </p>
              ) : null}
              {verseHref ? (
                <a
                  href={verseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C99A2E]/70 bg-[#FFFDF7] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#B34700] shadow-xs hover:bg-[#FAF2E3] transition-colors"
                >
                  <span aria-hidden="true">▶</span>
                  <span>Listen</span>
                </a>
              ) : null}
            </div>

            {wordMeanings.length > 0 ? (
              <div className="mt-8">
                <h3 className="font-display text-[19px] font-bold text-[#7A2E00]">Word-by-word Meaning (Pada &amp; Atham)</h3>
                <div className="mt-3 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                  {[wordMeanings.slice(0, padaHalf), wordMeanings.slice(padaHalf)].map((half, t) => (
                    <table key={t} className="w-full border-collapse text-left">
                      <tbody>
                        {half.map(([word, meaning]) => (
                          <tr key={word} className="border-b border-[#F0E3C6] align-top">
                            <th scope="row" className="w-1/3 py-2 pr-4 text-xs font-bold text-[#332417]" lang="ta">{word}</th>
                            <td className="py-2 text-xs text-[#66523D]">{meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            ) : null}

            {Array.isArray(acharya.verse.commentary) && acharya.verse.commentary.length > 0 ? (
              <div className="mt-8">
                <h3 className="font-display text-[19px] font-bold text-[#7A2E00]">Theological commentary &amp; anubhavam</h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {acharya.verse.commentary.map(({ heading, text }) => (
                    <div key={heading} className="rounded-xl border border-[#F0E3C6] bg-[#FAF2E3]/60 p-4">
                      <h4 className="font-display text-base font-bold text-[#332417] mb-1.5">{heading}</h4>
                      <p className="text-xs leading-relaxed text-[#66523D]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        ) : <PendingContent />}
      </DossierSection>

      {/* 05 Guru & Sishyas */}
      <DossierSection id="gurusishyas" num="05" title="Guru & Sishyas">
        {guru || sishyas.length > 0 ? (
          <div className="space-y-4">
            {guru ? (
              <div>
                <span className="block text-sm font-bold text-[#332417] mb-2">Guru:</span>
                <Link to={`/acharya/${guru.id}`} className={chipClass}>{guru.name}</Link>
              </div>
            ) : null}
            {sishyas.length > 0 ? (
              <div>
                <span className="block text-sm font-bold text-[#332417] mb-2">
                  Sishyas: <span className="text-[#96731F]">({sishyas.length})</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {sishyas.map((s) => (
                    <Link key={s.id} to={`/acharya/${s.id}`} className={chipClass}>{s.name}</Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : <PendingContent />}
      </DossierSection>

      {/* 06 Visual & Media */}
      <DossierSection id="media" num="06" title="Visual & Media">
        {iconography || acharya.visuals?.videoSearches?.length || acharya.visuals?.digitalTexts?.length ? (
          <div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {iconography ? (
                <div>
                  <h3 className="font-display text-[19px] font-bold text-[#7A2E00] mb-1">Sacred Iconography</h3>
                  <dl>
                    {ICONOGRAPHY_LABELS.map(([key, label]) => (
                      iconography[key] ? (
                        <div key={key} className="grid grid-cols-[150px_1fr] gap-4 border-b border-[#F0E3C6] py-3 last:border-b-0">
                          <dt className="text-xs font-bold text-[#7A2E00]">{label}</dt>
                          <dd className="text-xs leading-relaxed text-[#66523D]">{iconography[key]}</dd>
                        </div>
                      ) : null
                    ))}
                  </dl>
                </div>
              ) : null}
              {Array.isArray(acharya.visuals?.videoSearches) && acharya.visuals.videoSearches.length > 0 ? (
                <div>
                  <h3 className="font-display text-[19px] font-bold text-[#7A2E00] mb-3">Recommended Listening &amp; Discourses</h3>
                  <div className="space-y-2.5">
                    {acharya.visuals.videoSearches.map((q) => (
                      <a
                        key={q}
                        className="listen-card group flex items-center gap-3 p-3 bg-[#FAF2E3] hover:bg-[#FFFDF7] rounded-xl border border-[#C99A2E]/45 hover:border-[#96731F] transition-all"
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E53E3E] text-white" aria-hidden="true">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="listen-card__title block truncate text-xs font-bold text-[#7A2E00] group-hover:text-[#B34700] transition-colors">{q}</span>
                          <span className="block truncate text-[11px] text-[#66523D]">Search on YouTube ↗</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {Array.isArray(acharya.visuals?.digitalTexts) && acharya.visuals.digitalTexts.length > 0 ? (
              <div className="mt-6 border-t border-[#F0E3C6] pt-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#96731F] mb-2">Digital texts</h3>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-[#66523D]">
                  {acharya.visuals.digitalTexts.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        ) : <NotDocumented />}
      </DossierSection>

      {/* 07 Sources */}
      <DossierSection id="sources" num="07" title="Sources & Sampradaya Texts">
        {Array.isArray(acharya.sources) && acharya.sources.length > 0 ? (
          <ol className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-3">
            {acharya.sources.map((s, i) => (
              <li key={s} className="flex items-baseline gap-2 text-sm text-[#66523D]">
                <span className="text-xs font-bold text-[#C99A2E]" aria-hidden="true">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        ) : <PendingContent />}
      </DossierSection>

      {/* Closing ornament */}
      <div className="flex justify-center pt-6" aria-hidden="true">
        <LotusIcon className="h-4 w-4 text-[#C99A2E]" />
      </div>
    </>
  );
}
