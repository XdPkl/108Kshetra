/**
 * AcharyaDetailPage — the guru-parampara dossier at /acharya/:id
 * (US-ACH-03, FR-94). Restyled to the shared kxd theme (round 18, same
 * paper/rust palette and fonts as the kshetram + azhwar detail pages):
 * the numbered open sections 01–07 keep their anchors and titles but sit
 * on flat rules with gold serif numerals, the identification hero carries
 * the fact sheet as kxd fact rows beside the biography lead, the "On this
 * page" anchor rail is sticky, the Chronology-of-Life-Events stepper sits
 * in a tint card behind a "Read the full chronology" disclosure, miracles
 * are numbered circle items, contribution rows are ruled label/content
 * pairs, the representative verse renders in a kxd verse card with pada
 * glossary tables, lineage chips are kxd pills, and iconography/listening/
 * sources use the resource idiom. Content not yet provided renders the
 * visible pending marker (FR-94 caveat).
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

/** Open dossier section: flat rule + gold serif numeral + title. */
function DossierSection({ id, num, title, children }) {
  return (
    <section id={id} className="acd-section">
      <div className="acd-section-head">
        <span className="acd-section-num" aria-hidden="true">{num}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

/** "N. Title: text" miracle paragraph → numbered circle + bold lead-in. */
function MiracleList({ paragraphs }) {
  return (
    <ol className="acd-miracles">
      {paragraphs.map((raw, i) => {
        const stripped = raw.replace(/^\s*\d+\.\s*/, '');
        const colon = stripped.indexOf(': ');
        const title = colon > 0 ? stripped.slice(0, colon) : null;
        const rest = colon > 0 ? stripped.slice(colon + 2) : stripped;
        return (
          <li key={stripped.slice(0, 32)}>
            <span className="acd-miracle-num" aria-hidden="true">{i + 1}</span>
            <p>
              {title ? <strong>{title}: </strong> : null}
              {rest}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

/** The Chronology stepper (timeline `when` labels) with the full events behind a disclosure. */
function Chronology({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div className="visit-card acd-chrono">
      <h3>Chronology of Life Events</h3>
      <ol className="acd-stepper">
        {timeline.map(({ when }, i) => (
          <li key={when}>
            <span className="acd-step-num" aria-hidden="true">{i + 1}</span>
            <span className="acd-step-when">{when}</span>
          </li>
        ))}
      </ol>
      {timeline.some(({ event }) => event) ? (
        <details className="disclosure">
          <summary>Read the full chronology</summary>
          <dl className="acd-chrono-list">
            {timeline.map(({ when, event }) => (
              <div key={when}>
                <dt>{when}</dt>
                <dd>{event}</dd>
              </div>
            ))}
          </dl>
        </details>
      ) : null}
    </div>
  );
}

/** Contributions row: label column beside content (ruled kxd rows). */
function ContributionRow({ icon, label, children }) {
  return (
    <div className="acd-row">
      <span className="acd-row-label">
        <span className="acd-row-icon" aria-hidden="true">{icon}</span>
        {label}
      </span>
      <div>{children}</div>
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
    <div className="kxd">
      <a className="skip no-print" href="#acharya-main">Skip to acharya details</a>
      <nav className="breadcrumb no-print" aria-label="Breadcrumb">
        <Link to="/acharyas">← All Acharyas</Link>
        <span>{acharya.eraGroup ?? 'Guru Parampara'}</span>
      </nav>

      {/* 01 Identification — hero: name block | fact sheet | on-this-page rail */}
      <section id="identification" className="acd-hero">
        <div className="min-w-0">
          <p className="eyebrow">
            ॥ Sri Vaishnava Sampradaya · {acharya.eraGroup ?? 'Guru Parampara'} ॥
          </p>
          <h1>{acharya.name}</h1>
          <p className="tamil" lang="ta">{acharya.tamilName}</p>
          {lead ? <p className="hero-summary">{lead}</p> : null}
        </div>

        <div className="min-w-0">
          <ShankaIcon className="acd-shanka" aria-hidden="true" />
          <dl className="facts">
            {[
              ['Period', acharya.era],
              ['Names & titles', acharya.titles?.length ? acharya.titles.join(', ') : null],
              ['Birthplace', acharya.birthplace ? (
                <>
                  {birthplaceLink
                    ? <>{acharya.birthplace.name} — <Link to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                    : acharya.birthplace.name}
                  {acharya.birthplace.district ? <span className="note">{acharya.birthplace.district}</span> : null}
                </>
              ) : null],
              ['Divine amsam', amsamLink
                ? <>{acharya.amsam} — <Link to={`/acharya/${amsamLink.id}`}>{amsamLink.name}</Link></>
                : acharya.amsam],
              ['Jayanthi', [acharya.birthMonth, acharya.birthStar, acharya.tithi].filter(Boolean).join(' · ') || null],
            ].map(([label, value]) => value ? (
              <div key={label} className="fact-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ) : null)}
          </dl>
        </div>

        {/* On this page rail */}
        <aside>
          <nav aria-label="On this page" className="acd-rail">
            <p className="eyebrow">On this page</p>
            <ol className="acd-rail-list">
              {SECTIONS.map(({ id: sid, num, label }) => (
                <li key={sid}>
                  <a href={`#${sid}`}>
                    <span className="acd-rail-num" aria-hidden="true">{num}</span>
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
              <article key={block.heading ?? i}>
                {i === 1 && Array.isArray(acharya.timeline) && acharya.timeline.length > 0
                  ? <Chronology timeline={acharya.timeline} />
                  : null}
                <h3>{block.heading}</h3>
                {block === miraclesBlock
                  ? <MiracleList paragraphs={block.paragraphs} />
                  : block.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
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
          <div>
            {Array.isArray(acharya.works) && acharya.works.length > 0 ? (
              <ContributionRow icon={<SaintGlyph kind="works" />} label="Works">
                <div className="acd-works">
                  <ul className="disc-list">
                    {acharya.works.map((w) => (
                      <li key={w.name ?? w}>{w.name ?? w}{w.language ? ` — ${w.language}` : ''}</li>
                    ))}
                  </ul>
                  {acharya.worksSummary ? (
                    <p className="note">{acharya.worksSummary}</p>
                  ) : null}
                </div>
              </ContributionRow>
            ) : null}
            {acharya.preservation ? (
              <ContributionRow icon={<SaintGlyph kind="preservation" />} label="Sampradaya Preservation">
                <p className="acd-row-text">{acharya.preservation}</p>
              </ContributionRow>
            ) : null}
            {acharya.philosophicalTheme ? (
              <ContributionRow icon={<LotusIcon className="h-5 w-5" />} label="Philosophical Theme">
                <p className="acd-row-text">{acharya.philosophicalTheme}</p>
              </ContributionRow>
            ) : null}
            {Array.isArray(acharya.associatedDesams) && acharya.associatedDesams.length > 0 ? (
              <ContributionRow icon={<SaintGlyph kind="desams" />} label="Associated Divya Desams">
                <div className="acd-chips">
                  {acharya.associatedDesams.map((kid) => {
                    const name = getKshetramById(kid)?.name;
                    return name ? (
                      <Link key={kid} to={`/kshetram/${kid}`} className="pill">{name}</Link>
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
              <p className="note">{acharya.verse.work}</p>
            ) : null}
            <div className="verse">
              {acharya.verse.tamil ? (
                <p className="tamil-verse" lang="ta">{acharya.verse.tamil}</p>
              ) : (
                <p className="detail__nodata" lang="ta">
                  [Original verse text pending — to be provided]
                </p>
              )}
              {acharya.verse.transliteration ? (
                <p className="transliteration">{acharya.verse.transliteration}</p>
              ) : null}
              {verseHref ? (
                <a
                  href={verseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span aria-hidden="true">▶</span>
                  <span>Listen</span>
                </a>
              ) : null}
            </div>

            {wordMeanings.length > 0 ? (
              <div className="section-rule">
                <h3>Word-by-word Meaning (Pada &amp; Atham)</h3>
                <div className="acd-pada">
                  {[wordMeanings.slice(0, padaHalf), wordMeanings.slice(padaHalf)].map((half, t) => (
                    <table key={t} className="glossary">
                      <tbody>
                        {half.map(([word, meaning]) => (
                          <tr key={word}>
                            <td lang="ta">{word}</td>
                            <td>{meaning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            ) : null}

            {Array.isArray(acharya.verse.commentary) && acharya.verse.commentary.length > 0 ? (
              <div className="section-rule">
                <h3>Theological commentary &amp; anubhavam</h3>
                <div className="acd-grid3">
                  {acharya.verse.commentary.map(({ heading, text }) => (
                    <div key={heading} className="azd-callout">
                      <h4>{heading}</h4>
                      <p>{text}</p>
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
          <div className="acd-lineage">
            {guru ? (
              <div>
                <span className="label">Guru:</span>
                <Link to={`/acharya/${guru.id}`} className="pill">{guru.name}</Link>
              </div>
            ) : null}
            {sishyas.length > 0 ? (
              <div>
                <span className="label">
                  Sishyas: <span className="acd-sishya-count">({sishyas.length})</span>
                </span>
                <div className="acd-chips">
                  {sishyas.map((s) => (
                    <Link key={s.id} to={`/acharya/${s.id}`} className="pill">{s.name}</Link>
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
            <div className="acd-media-grid">
              {iconography ? (
                <div>
                  <h3>Sacred Iconography</h3>
                  <dl className="facts">
                    {ICONOGRAPHY_LABELS.map(([key, label]) => (
                      iconography[key] ? (
                        <div key={key} className="fact-row">
                          <dt>{label}</dt>
                          <dd>{iconography[key]}</dd>
                        </div>
                      ) : null
                    ))}
                  </dl>
                </div>
              ) : null}
              {Array.isArray(acharya.visuals?.videoSearches) && acharya.visuals.videoSearches.length > 0 ? (
                <div>
                  <h3>Recommended Listening &amp; Discourses</h3>
                  <div>
                    {acharya.visuals.videoSearches.map((q) => (
                      <a
                        key={q}
                        className="acd-listen"
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="acd-listen-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </span>
                        <span className="min-w-0">
                          <span className="acd-listen-title">{q}</span>
                          <span className="note">Search on YouTube ↗</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {Array.isArray(acharya.visuals?.digitalTexts) && acharya.visuals.digitalTexts.length > 0 ? (
              <div className="section-rule">
                <h3>Digital texts</h3>
                <ul className="disc-list">
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
          <ol className="acd-sources">
            {acharya.sources.map((s, i) => (
              <li key={s}>
                <span className="acd-src-num" aria-hidden="true">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        ) : <PendingContent />}
      </DossierSection>

      {/* Closing ornament */}
      <div className="acd-ornament" aria-hidden="true">
        <LotusIcon className="h-4 w-4" />
      </div>
    </div>
  );
}
