/**
 * KshetramDetailPage — enriched page for one kshetram at /kshetram/:id
 * (FR-30..33, FR-60..70): deity gallery, timings, pasuram, puranam,
 * location with nearby desams and distance, share/print actions.
 */
import { Link, useParams } from 'react-router-dom';
import { getEnrichedKshetramById, getAllKshetramsEnriched, getAzhwarById } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';
import DeityGallery from '../components/DeityGallery.jsx';
import NearbyDesams from '../components/NearbyDesams.jsx';
import PasuramSection from '../components/PasuramSection.jsx';
import DistanceFromMe from '../components/DistanceFromMe.jsx';
import PageActions from '../components/PageActions.jsx';

const CELESTIAL_NOTE = 'A celestial realm beyond earthly maps, timings and distances.';

/** Renders one deity/devotee line (name + Tamil name) or nothing. */
function DeityLine({ label, d }) {
  if (!d) return null;
  return (
    <dl className="detail__pair">
      <dt>{label}</dt>
      <dd>
        <span lang="ta">{d.tamilName}</span> · {d.name}
      </dd>
    </dl>
  );
}

export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getEnrichedKshetramById(id);

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

  const { timings, coords, puranam, pasuram } = kshetram;
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
      <div className="detail__head">
        <div>
          <p className="detail__tamil" lang="ta">{kshetram.tamilName}</p>
          <h1>{kshetram.name}</h1>
          <div className="detail__badges">
            <Badge>{kshetram.region}</Badge>
            <Badge>{kshetram.deityForm}</Badge>
            {kshetram.pasuramCount > 0 ? <Badge>{kshetram.pasuramCount} pasurams</Badge> : null}
          </div>
        </div>
        <PageActions />
      </div>

      {timings ? (
        <section className="detail__section detail__section--full timings" aria-label="Temple timings">
          <h2>Temple Timings</h2>
          <p className="timings__sessions">
            🕉 Morning {timings.morning[0]} – {timings.morning[1]}
            {timings.evening ? ` · Evening ${timings.evening[0]} – ${timings.evening[1]}` : ''}
          </p>
          {timings.notes ? <p className="timings__notes">{timings.notes}</p> : null}
          <p className="timings__note">Indicative timings — please confirm with the temple office.</p>
        </section>
      ) : (
        <p className="detail__map-note">{CELESTIAL_NOTE}</p>
      )}

      <DeityGallery kshetram={kshetram} />

      <PasuramSection pasuram={pasuram} />

      {puranam ? (
        <section className="detail__section detail__section--full">
          <h2>Sthala Puranam</h2>
          <p className="puranam">{puranam}</p>
        </section>
      ) : null}

      <section className="detail__section detail__section--full">
        <h2>Significance</h2>
        <p>{kshetram.significance}</p>
      </section>

      <section className="detail__section detail__section--full">
        <h2>Location</h2>
        <p>{kshetram.place} · {kshetram.state}</p>
        {mapHref ? (
          <a className="detail__map-link" href={mapHref} target="_blank" rel="noopener noreferrer">
            View on Google Maps ↗
          </a>
        ) : null}
        <DistanceFromMe coords={coords} mapQuery={kshetram.mapQuery} />
        <NearbyDesams coords={coords} kshetrams={getAllKshetramsEnriched()} />
      </section>

      <section className="detail__section detail__section--full">
        <h2>Mangalasasanam</h2>
        <ul className="detail__azhwar-list">
          {azhwarNames.map((a) => (
            <li key={a.id}><Link to="/azhwars">{a.name}</Link></li>
          ))}
        </ul>
        <DeityLine label="Moolavar" d={kshetram.moolavar} />
        <DeityLine label="Thaayar" d={kshetram.thaayar} />
        <DeityLine label="Urchavar" d={kshetram.urchavar} />
      </section>
    </div>
  );
}
