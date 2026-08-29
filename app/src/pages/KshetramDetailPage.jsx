/**
 * KshetramDetailPage — full record for one kshetram at /kshetram/:id (FR-30..33).
 */
import { Link, useParams } from 'react-router-dom';
import { getKshetramById, getAzhwarById } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';

/** Detail page — renders sections for one kshetram record (FR-31/32/33). */
export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getKshetramById(id);

  if (!kshetram) {
    return (
      <div className="page">
        <EmptyState
          title="This kshetram was not found"
          message="The link may be outdated. Browse all 108 Divya Desams instead."
          action={<Link className="btn btn--primary" to="/kshetrams">Back to Browse</Link>}
        />
      </div>
    );
  }

  const azhwarNames = kshetram.azhwars
    .map((azhwarId) => getAzhwarById(azhwarId))
    .filter(Boolean);

  const mapHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(kshetram.mapQuery)}`
    : '';

  return (
    <div className="page detail">
      <p className="detail__back">
        <Link to="/kshetrams">← Back to all kshetrams</Link>
      </p>
      <p className="detail__tamil" lang="ta">{kshetram.tamilName}</p>
      <h1>{kshetram.name}</h1>
      <div className="detail__badges">
        <Badge>{kshetram.region}</Badge>
        <Badge>{kshetram.deityForm}</Badge>
        {kshetram.pasuramCount > 0
          ? <Badge>{kshetram.pasuramCount} pasurams</Badge>
          : null}
      </div>

      <div className="detail__grid">
        <section className="detail__section">
          <h2>Presiding Deity</h2>
          <dl>
            <dt>Deity</dt><dd>{kshetram.deity}</dd>
            <dt>Posture</dt><dd>{kshetram.deityForm}</dd>
            <dt>Temple</dt><dd>{kshetram.temple}</dd>
          </dl>
        </section>

        <section className="detail__section">
          <h2>Location</h2>
          <dl>
            <dt>Place</dt><dd>{kshetram.place}</dd>
            <dt>State</dt><dd>{kshetram.state}</dd>
          </dl>
          {mapHref ? (
            <a className="detail__map-link" href={mapHref} target="_blank" rel="noopener noreferrer">
              View on Google Maps ↗
            </a>
          ) : (
            <p className="detail__map-note">
              A celestial realm beyond earthly maps.
            </p>
          )}
        </section>

        <section className="detail__section">
          <h2>Mangalasasanam</h2>
          <p>Glorified by:</p>
          <ul className="detail__azhwar-list">
            {azhwarNames.map((a) => (
              <li key={a.id}>
                <Link to="/azhwars">{a.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="detail__section">
          <h2>Significance</h2>
          <p>{kshetram.significance}</p>
        </section>
      </div>
    </div>
  );
}
