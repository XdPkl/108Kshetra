/**
 * KshetramDetailPage — Detail V3 for one kshetram at /kshetram/:id
 * (FR-30..33, FR-60..87): shrine content template (profile, deity
 * breakdown, puranam & history, mangalasasanam, visit info, location,
 * visuals & media) with yatra hooks — visited toggle, trip control and a
 * lazy mini-map — plus share/print actions and a gallery lightbox.
 */
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEnrichedKshetramById, getAllKshetramsEnriched, getAzhwarById } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';
import NearbyDesams from '../components/NearbyDesams.jsx';
import DistanceFromMe from '../components/DistanceFromMe.jsx';
import PageActions from '../components/PageActions.jsx';
import VisitedToggle from '../components/VisitedToggle.jsx';
import TripControls from '../components/TripControls.jsx';
import MiniMap from '../components/MiniMap.jsx';
import SectionNav from '../components/detail/SectionNav.jsx';
import ShrineProfile from '../components/detail/ShrineProfile.jsx';
import DeityBreakdown from '../components/detail/DeityBreakdown.jsx';
import PuranamHistory from '../components/detail/PuranamHistory.jsx';
import MangalasasanamSection from '../components/detail/MangalasasanamSection.jsx';
import VisitInfoSection from '../components/detail/VisitInfoSection.jsx';
import VisualsMedia from '../components/detail/VisualsMedia.jsx';
import GalleryLightbox from '../components/detail/GalleryLightbox.jsx';

const CELESTIAL_NOTE = 'A celestial realm beyond earthly maps, timings and distances.';

export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getEnrichedKshetramById(id);
  const [lightbox, setLightbox] = useState({ photos: null, index: null });

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

  const { coords } = kshetram;
  const celestial = !coords && !kshetram.timings && kshetram.state === 'Celestial';
  const azhwarNames = kshetram.azhwars
    .map((azhwarId) => getAzhwarById(azhwarId))
    .filter(Boolean);
  const mapHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(kshetram.mapQuery)}`
    : '';

  const sections = [
    { id: 'profile', label: 'Profile' },
    { id: 'deities', label: 'Deities' },
    { id: 'puranam', label: 'Puranam' },
    { id: 'mangalasasanam', label: 'Mangalasasanam' },
    ...(celestial ? [] : [{ id: 'visit', label: 'Visit Info' }]),
    ...(celestial ? [] : [{ id: 'location', label: 'Location' }]),
    { id: 'media', label: 'Media' },
  ];

  const openPhoto = (photos, index) => setLightbox({ photos, index });

  return (
    <div className="page detail">
      <p className="detail__back">
        <Link to="/kshetrams">← Back to all kshetrams</Link>
      </p>
      <div className="detail__head">
        <div>
          {kshetram.serial ? (
            <p className="detail__serial detail__serial--hero">Divya Desam #{kshetram.serial}</p>
          ) : null}
          <p className="detail__tamil" lang="ta">{kshetram.tamilName}</p>
          <h1>{kshetram.name}</h1>
          <div className="detail__badges">
            <Badge>{kshetram.region}</Badge>
            <Badge>{kshetram.deityForm}</Badge>
            {kshetram.pasuramCount > 0 ? <Badge>{kshetram.pasuramCount} pasurams</Badge> : null}
          </div>
        </div>
        <div className="detail__head-actions">
          {!celestial ? (
            <>
              <VisitedToggle id={kshetram.id} />
              <TripControls id={kshetram.id} />
            </>
          ) : null}
          <PageActions />
        </div>
      </div>

      <SectionNav sections={sections} />

      {celestial ? <p className="detail__map-note">{CELESTIAL_NOTE}</p> : null}

      <ShrineProfile kshetram={kshetram} />

      <DeityBreakdown kshetram={kshetram} onOpenPhoto={openPhoto} />

      <PuranamHistory kshetram={kshetram} />

      <MangalasasanamSection kshetram={kshetram} />

      {!celestial ? <VisitInfoSection kshetram={kshetram} /> : null}

      {!celestial ? (
        <section id="location" className="detail__section detail__section--full">
          <h2>Location</h2>
          <p>{kshetram.place} · {kshetram.state}</p>
          {mapHref ? (
            <a className="detail__map-link" href={mapHref} target="_blank" rel="noopener noreferrer">
              View on Google Maps ↗
            </a>
          ) : null}
          {coords ? <MiniMap coords={coords} label={kshetram.name} /> : null}
          <DistanceFromMe coords={coords} mapQuery={kshetram.mapQuery} />
          <NearbyDesams coords={coords} kshetrams={getAllKshetramsEnriched()} />
        </section>
      ) : null}

      <VisualsMedia kshetram={kshetram} />

      <section className="detail__section detail__section--full">
        <h2>Azhwars Who Glorified</h2>
        <ul className="detail__azhwar-list">
          {azhwarNames.map((a) => (
            <li key={a.id}><Link to="/azhwars">{a.name}</Link></li>
          ))}
        </ul>
      </section>

      <GalleryLightbox
        photos={lightbox.photos}
        index={lightbox.index}
        onClose={() => setLightbox({ photos: null, index: null })}
        onNavigate={(delta) => setLightbox((prev) => ({
          photos: prev.photos,
          index: (prev.index + delta + prev.photos.length) % prev.photos.length,
        }))}
      />
    </div>
  );
}
