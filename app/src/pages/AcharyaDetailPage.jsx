/**
 * AcharyaDetailPage — the saint template for one Acharya at /acharya/:id
 * (US-ACH-03, FR-94), with Guru & Sishyas links and a Sources section.
 * Content not yet provided renders the visible pending marker.
 */
import { Link, useParams } from 'react-router-dom';
import { getAcharyaById, getAllAcharyas, getKshetramById } from '../data/api.js';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Identification from '../components/saint/Identification.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintNarrative from '../components/saint/SaintNarrative.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintTimeline from '../components/saint/SaintTimeline.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';
import PendingContent from '../components/saint/PendingContent.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import SectionNav from '../components/detail/SectionNav.jsx';

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
      <div className="page">
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

  return (
    <div className="page saint-page">
      <p className="detail__back">
        <Link to="/acharyas">← All Acharyas</Link>
      </p>
      <div className="detail__head">
        <div>
          <span className="eyebrow">{acharya.eraGroup ?? 'Guru Parampara'}</span>
          <p className="detail__tamil" lang="ta">{acharya.tamilName}</p>
          <h1>{acharya.name}</h1>
          <div className="detail__badges">
            <Badge>{acharya.era}</Badge>
            {acharya.birthMonth ? <Badge>{acharya.birthMonth} · {acharya.birthStar}{acharya.tithi ? ` · ${acharya.tithi}` : ''}</Badge> : null}
          </div>
        </div>
      </div>

      <SectionNav
        sections={[
          { id: 'identification', label: 'Identification' },
          { id: 'history', label: 'Life & Miracles' },
          { id: 'contributions', label: 'Contributions' },
          { id: 'verse', label: 'Representative Verse' },
          { id: 'gurusishyas', label: 'Guru & Sishyas' },
          { id: 'media', label: 'Media' },
          { id: 'sources', label: 'Sources' },
        ]}
      />

      <section id="identification" className="detail__section detail__section--full">
        <span className="eyebrow">Biographical profile</span>
        <h2>Identification</h2>
        <Identification
          rows={[
            { label: 'Names & titles', value: acharya.titles?.join(' · ') },
            {
              label: 'Birthplace',
              value: acharya.birthplace
                ? (
                  <>
                    {birthplaceLink
                      ? <>{acharya.birthplace.name} — <Link to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                      : acharya.birthplace.name}
                    {acharya.birthplace.district ? <span className="detail__subline">{acharya.birthplace.district}</span> : null}
                  </>
                )
                : null,
            },
            {
              label: 'Divine amsam',
              value: amsamLink
                ? <>{acharya.amsam} — <Link to={`/acharya/${amsamLink.id}`}>{amsamLink.name}</Link></>
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

      <section id="history" className="detail__section detail__section--full">
        <span className="eyebrow">Hagiography</span>
        <h2>Life History &amp; Miracles</h2>
        <div className="saint-history">
          <div className="saint-history__main">
            {Array.isArray(acharya.lifeHistory) && acharya.lifeHistory.length > 0
              ? (
                <>
                  <SaintNarrative items={acharya.lifeHistory} />
                  <SaintLegend legend={acharya.legend} />
                </>
              )
              : <PendingContent />}
          </div>
          <aside className="saint-history__lifeline">
            <SaintTimeline timeline={acharya.timeline} />
          </aside>
        </div>
      </section>

      <section id="contributions" className="detail__section detail__section--full">
        <span className="eyebrow">Theological impact</span>
        <h2>Contributions</h2>
        {acharya.works || acharya.philosophicalTheme || acharya.associatedDesams ? (
          <>
            {Array.isArray(acharya.works) && acharya.works.length > 0 ? (
              <div className="detail__profile-item acharya-works">
                <dt><SaintGlyph kind="works" /> Works</dt>
                <dd>
                  <ul className="saint-works">
                    {acharya.works.map((w) => (
                      <li key={w.name ?? w}>{w.name ?? w}{w.language ? ` — ${w.language}` : ''}</li>
                    ))}
                  </ul>
                  {acharya.worksSummary ? <p className="saint-works-summary">{acharya.worksSummary}</p> : null}
                </dd>
              </div>
            ) : null}
            {acharya.preservation ? (
              <div className="detail__profile-item">
                <dt><SaintGlyph kind="preservation" /> Sampradaya preservation</dt>
                <dd>{acharya.preservation}</dd>
              </div>
            ) : null}
            {acharya.philosophicalTheme ? (
              <div className="detail__profile-item">
                <dt><SaintGlyph kind="bhakti" /> Philosophical theme</dt>
                <dd>✦ {acharya.philosophicalTheme}</dd>
              </div>
            ) : null}
            {Array.isArray(acharya.associatedDesams) && acharya.associatedDesams.length > 0 ? (
              <p className="saint-desams">
                <strong><SaintGlyph kind="desams" /> Associated Divya Desams:</strong>{' '}
                {acharya.associatedDesams.map((kid) => {
                  const k = getKshetramName(kid);
                  return k ? <Link key={kid} className="chip" to={`/kshetram/${kid}`}>{k}</Link> : null;
                })}
              </p>
            ) : null}
          </>
        ) : <PendingContent />}
      </section>

      <section id="verse" className="detail__section detail__section--full">
        <span className="eyebrow">From the Prabandham</span>
        <h2>Representative Verse</h2>
        {acharya.verse ? <SaintVerse verse={acharya.verse} /> : <PendingContent />}
      </section>

      <section id="gurusishyas" className="detail__section detail__section--full">
        <span className="eyebrow">The lineage</span>
        <h2>Guru &amp; Sishyas</h2>
        {guru || sishyas.length > 0 ? (
          <p className="saint-desams">
            {guru ? <><strong>Guru:</strong> <Link className="chip" to={`/acharya/${guru.id}`}>{guru.name}</Link>{' '} </> : null}
            {sishyas.length > 0 ? (
              <><strong>Sishyas:</strong> {sishyas.map((s) => (
                <Link key={s.id} className="chip" to={`/acharya/${s.id}`}>{s.name}</Link>
              ))}</>
            ) : null}
          </p>
        ) : <PendingContent />}
      </section>

      <section id="media" className="detail__section detail__section--full">
        <span className="eyebrow">Multimedia &amp; archives</span>
        <h2>Visuals &amp; Media</h2>
        <SaintMedia visuals={acharya.visuals} />
      </section>

      <section id="sources" className="detail__section detail__section--full">
        <h2>Sources</h2>
        <SaintSources sources={acharya.sources} fallback={<PendingContent />} />
      </section>
    </div>
  );
}

function getKshetramName(kshetramId) {
  return getKshetramById(kshetramId)?.name ?? null;
}
