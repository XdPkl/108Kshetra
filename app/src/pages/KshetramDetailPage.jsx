/**
 * KshetramDetailPage — zip-parity Detail template (UXD v3.0 Gate 3) for one
 * kshetram at /kshetram/:id (FR-30..33, FR-60..87): gradient serial head,
 * scroll-spy section nav, seven gold-strip sections (profile, deities,
 * puranam, mangalasasanam, visit info, location, media) with yatra hooks —
 * visited toggle, trip control and a lazy mini-map — plus share/print
 * actions and a gallery lightbox.
 */
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { getEnrichedKshetramById, getAllKshetramsEnriched, getAzhwarById } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
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
import ZipSection, { SerialBadge } from '../components/detail/ZipSection.jsx';

const CELESTIAL_NOTE = 'A celestial realm beyond earthly maps, timings and distances.';

export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getEnrichedKshetramById(id);
  const [lightbox, setLightbox] = useState({ photos: null, index: null });

  if (!kshetram) {
    return (
      <div className="max-w-xl mx-auto pt-8">
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
  const serial = kshetram.serial;
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
    <>
      {/* Back link */}
      <p className="text-sm detail__back no-print">
        <Link to="/kshetrams" className="text-[#66523D] hover:text-[#B34700] transition-colors font-medium">
          ← Back to all kshetrams
        </Link>
      </p>

      {/* ============ PAGE HEAD ============ */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 flex-wrap pb-2">
        <div>
          {serial ? <SerialBadge serial={serial} /> : null}
          <p className="text-xl text-[#96731F] font-medium mt-2" lang="ta">{kshetram.tamilName}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#7A2E00] leading-tight">
            {kshetram.name}
          </h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C99A2E]/10 border border-[#C99A2E]/55 text-[#332417]">
              {kshetram.region}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C99A2E]/10 border border-[#C99A2E]/55 text-[#332417]">
              {kshetram.deityForm}
            </span>
            {kshetram.pasuramCount > 0 ? (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#C99A2E]/10 border border-[#C99A2E]/55 text-[#332417]">
                {kshetram.pasuramCount} pasurams
              </span>
            ) : null}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 items-start justify-start lg:justify-end no-print self-start lg:self-auto">
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

      {celestial ? (
        <p className="text-sm text-[#66523D] bg-[#F6EBD6] border border-[#C99A2E]/40 rounded-xl px-4 py-3">
          {CELESTIAL_NOTE}
        </p>
      ) : null}

      <ShrineProfile kshetram={kshetram} />

      <DeityBreakdown kshetram={kshetram} onOpenPhoto={openPhoto} />

      <PuranamHistory kshetram={kshetram} />

      <MangalasasanamSection kshetram={kshetram} />

      {!celestial ? <VisitInfoSection kshetram={kshetram} /> : null}

      {!celestial ? (
        <ZipSection id="location" title="Location">
          <p className="text-sm text-[#66523D]">{kshetram.place} · {kshetram.state}</p>
          <div className="flex flex-wrap gap-3 items-center mt-3 mb-4 no-print">
            {mapHref ? (
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B34700] hover:text-[#7A2E00] transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ) : null}
            <DistanceFromMe coords={coords} mapQuery={kshetram.mapQuery} />
          </div>
          {coords ? (
            <div className="rounded-2xl overflow-hidden border border-[#C99A2E]/55 shadow-xs h-72 bg-[#F6EBD6]">
              <MiniMap coords={coords} label={kshetram.name} />
            </div>
          ) : null}
          <NearbyDesams coords={coords} kshetrams={getAllKshetramsEnriched()} />
        </ZipSection>
      ) : null}

      <VisualsMedia kshetram={kshetram} />

      <ZipSection id="azhwar-list" title="Azhwars Who Glorified">
        <div className="flex flex-wrap gap-1.5">
          {azhwarNames.map((a) => (
            <Link key={a.id} to={`/azhwar/${a.id}`} className="chip-link" title={`View ${a.name} details`}>
              {a.name}
            </Link>
          ))}
        </div>
      </ZipSection>

      <GalleryLightbox
        photos={lightbox.photos}
        index={lightbox.index}
        onClose={() => setLightbox({ photos: null, index: null })}
        onNavigate={(delta) => setLightbox((prev) => ({
          photos: prev.photos,
          index: (prev.index + delta + prev.photos.length) % prev.photos.length,
        }))}
      />
    </>
  );
}
