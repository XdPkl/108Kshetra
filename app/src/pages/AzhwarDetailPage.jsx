/**
 * AzhwarDetailPage — the saint template for one Azhwar at /azhwar/:id
 * (US-AZW-02, FR-90): identification, life history, contributions,
 * representative verse, media, derived desam links, prev/next navigation.
 */
import { Link, useParams } from 'react-router-dom';
import { getAzhwarById, getAzhwarNeighbours, getKshetramsByAzhwar } from '../data/api.js';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import Identification from '../components/saint/Identification.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';

export default function AzhwarDetailPage() {
  const { id } = useParams();
  const azhwar = getAzhwarById(id);

  if (!azhwar) {
    return (
      <div className="page">
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

  return (
    <div className="page saint-page">
      <p className="detail__back">
        <Link to="/azhwars">← All Azhwars</Link>
        {azhwar.order ? <span className="saint-page__order"> · {azhwar.order} of 12 in chronological order</span> : null}
      </p>
      <div className="detail__head">
        <div>
          <p className="detail__tamil" lang="ta">{azhwar.tamilName}</p>
          <h1>{azhwar.name}</h1>
          <div className="detail__badges">
            {azhwar.birthMonth ? <Badge>{azhwar.birthMonth} · {azhwar.birthStar}{azhwar.tithi ? ` · ${azhwar.tithi}` : ''}</Badge> : null}
            <Badge>{azhwar.pasuramCount.toLocaleString('en-IN')} pasurams</Badge>
            <Badge>{desams.length} desams glorified</Badge>
          </div>
        </div>
      </div>

      <section className="detail__section detail__section--full">
        <h2>Identification</h2>
        <Identification
          rows={[
            { label: 'Names & aliases', value: azhwar.epithets?.join(' · ') },
            {
              label: 'Birthplace',
              value: azhwar.birthplace
                ? (birthplaceLink
                  ? <>{azhwar.birthplace.name} — <Link to={`/kshetram/${birthplaceLink}`}>view kshetram</Link></>
                  : azhwar.birthplace.name)
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
        />
      </section>

      <section className="detail__section detail__section--full">
        <h2>Life History &amp; Miracles</h2>
        {Array.isArray(azhwar.lifeHistory) && azhwar.lifeHistory.length > 0
          ? azhwar.lifeHistory.map((p) => <p className="puranam" key={p.slice(0, 24)}>{p}</p>)
          : <NotDocumented />}
      </section>

      <section className="detail__section detail__section--full">
        <h2>Contributions</h2>
        <dl className="detail__profile-grid">
          <div className="detail__profile-item">
            <dt>Works</dt>
            <dd>
              <ul className="saint-works">
                {(azhwar.works ?? []).map((w) => (
                  <li key={w.name}>{w.name}{w.pasurams ? ` (${w.pasurams} pasurams)` : ''}</li>
                ))}
              </ul>
            </dd>
          </div>
          {azhwar.bhaktiBhava ? (
            <div className="detail__profile-item">
              <dt>Role &amp; bhakti bhava</dt>
              <dd>{azhwar.bhaktiBhava}</dd>
            </div>
          ) : null}
        </dl>
        <p className="saint-desams">
          <strong>Desams glorified ({desams.length}):</strong>{' '}
          {desams.map((k) => (
            <Link key={k.id} className="chip" to={`/kshetram/${k.id}`}>{k.name}</Link>
          ))}
          <Link className="chip chip--more" to={`/kshetrams?azhwar=${azhwar.id}`}>
            Browse all {desams.length} desams →
          </Link>
        </p>
      </section>

      <section className="detail__section detail__section--full">
        <h2>Representative Verse</h2>
        {azhwar.verse ? <SaintVerse verse={azhwar.verse} /> : <NotDocumented />}
      </section>

      <section className="detail__section detail__section--full">
        <h2>Visual &amp; Media</h2>
        <SaintMedia visuals={azhwar.visuals} />
      </section>

      <nav className="saint-prevnext" aria-label="Chronological navigation">
        {prev
          ? <Link className="btn btn--outline btn--small" to={`/azhwar/${prev.id}`}>‹ Previous: {prev.name}</Link>
          : <span />}
        {next
          ? <Link className="btn btn--outline btn--small" to={`/azhwar/${next.id}`}>Next: {next.name} ›</Link>
          : <span />}
      </nav>
    </div>
  );
}
