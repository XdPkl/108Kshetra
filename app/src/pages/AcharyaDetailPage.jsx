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
          <p className="detail__tamil" lang="ta">{acharya.tamilName}</p>
          <h1>{acharya.name}</h1>
          <div className="detail__badges">
            <Badge>{acharya.era}</Badge>
            {acharya.birthMonth ? <Badge>{acharya.birthMonth} · {acharya.birthStar}{acharya.tithi ? ` · ${acharya.tithi}` : ''}</Badge> : null}
          </div>
        </div>
      </div>

      <section className="detail__section detail__section--full">
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
        />
      </section>

      <section className="detail__section detail__section--full">
        <h2>Life History &amp; Miracles</h2>
        <SaintTimeline timeline={acharya.timeline} />
        {Array.isArray(acharya.lifeHistory) && acharya.lifeHistory.length > 0
          ? (
            <>
              <SaintNarrative items={acharya.lifeHistory} />
              <SaintLegend legend={acharya.legend} />
            </>
          )
          : <PendingContent />}
      </section>

      <section className="detail__section detail__section--full">
        <h2>Contributions</h2>
        {acharya.works || acharya.philosophicalTheme || acharya.associatedDesams ? (
          <>
            {Array.isArray(acharya.works) && acharya.works.length > 0 ? (
              <ul className="saint-works">
                {acharya.works.map((w) => (
                  <li key={w.name ?? w}>{w.name ?? w}{w.language ? ` — ${w.language}` : ''}</li>
                ))}
              </ul>
            ) : null}
            {acharya.worksSummary ? <p className="saint-works-summary">{acharya.worksSummary}</p> : null}
            {acharya.preservation ? (
              <p className="acharya-preservation"><strong>Sampradaya preservation:</strong> {acharya.preservation}</p>
            ) : null}
            {acharya.philosophicalTheme ? (
              <p className="acharya-theme">✦ {acharya.philosophicalTheme}</p>
            ) : null}
            {Array.isArray(acharya.associatedDesams) && acharya.associatedDesams.length > 0 ? (
              <p className="saint-desams">
                <strong>Associated Divya Desams:</strong>{' '}
                {acharya.associatedDesams.map((kid) => {
                  const k = getKshetramName(kid);
                  return k ? <Link key={kid} className="chip" to={`/kshetram/${kid}`}>{k}</Link> : null;
                })}
              </p>
            ) : null}
          </>
        ) : <PendingContent />}
      </section>

      <section className="detail__section detail__section--full">
        <h2>Representative Verse</h2>
        {acharya.verse ? <SaintVerse verse={acharya.verse} /> : <PendingContent />}
      </section>

      <section className="detail__section detail__section--full">
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

      <section className="detail__section detail__section--full">
        <h2>Visuals &amp; Media</h2>
        <SaintMedia visuals={acharya.visuals} />
      </section>

      <section className="detail__section detail__section--full">
        <h2>Sources</h2>
        <SaintSources sources={acharya.sources} fallback={<PendingContent />} />
      </section>
    </div>
  );
}

function getKshetramName(kshetramId) {
  return getKshetramById(kshetramId)?.name ?? null;
}
