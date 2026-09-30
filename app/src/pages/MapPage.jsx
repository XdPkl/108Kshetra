/**
 * MapPage — interactive map of every earthly Divya Desam (FR-76..78), 2026-09-30
 * look-and-feel refresh (PO mockup): display header with lotus ornament and
 * location pills, a sidebar with region chips + All/Visited/In-trip scope
 * pills (ported from the Explore page's exclusive-pill pattern) over the
 * nearest-first desam cards (photo, View temple, Add to trip, Mark visited,
 * Focus, Directions), and the Leaflet atlas in a gold frame with a
 * "Fit all temples" control and an on-map legend. Lazy-loaded route chunk
 * (NFR-11).
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { Navigation, ExternalLink, MapPin, Crosshair, Maximize } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { getAllKshetramsEnriched } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import { buildRegionColors } from '../utils/regionColors.js';
import { distanceKm } from '../utils/geo.js';
import RegionLegend from '../components/RegionLegend.jsx';
import TripControls from '../components/TripControls.jsx';
import { useVisited } from '../hooks/useVisited.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { useTrip } from '../hooks/useTrip.js';
import { SITE_COPY } from '../data/siteCopy.js';

const scopeBase = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition-all';
const scopeActive = `${scopeBase} bg-[#B34700] font-semibold text-[#FFFDF7] shadow-xs`;
const scopeIdle = `${scopeBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#7A2E00] hover:border-[#C99A2E]`;

/** Nearest-first desam card — photo thumb, live distances, and the same
 * action set as the browse cards (View temple / Add to trip / Mark visited)
 * plus the map-specific Focus and Directions actions. */
function NearestCard({ kshetram: k, km, mapApi }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(k.id);
  const image = useWikiImage(k.wiki ?? null, k.photo ?? null);
  return (
    <li className="rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] p-3.5 shadow-xs">
      <div className="flex items-start gap-3">
        <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#F6EBD6]">
          {image.src ? (
            <img src={image.src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div className="min-w-0">
          <Link to={`/kshetram/${k.id}`} className="font-display text-[19px] font-semibold leading-tight text-[#7A2E00] hover:text-[#B34700] transition-colors">
            {k.name}
          </Link>
          <p className="truncate text-[12px] text-[#332417]">{k.temple}</p>
          <p className="truncate text-[12px] text-[#66523D]">{k.place}</p>
          <p className="text-[12px] font-bold text-[#B34700] tabular-nums">{km} km away</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
        <Link
          to={`/kshetram/${k.id}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#7A2E00] px-3.5 py-2 text-[13px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors hover:bg-[#5C1F00]"
        >
          View temple
          <span aria-hidden="true">→</span>
        </Link>
        <TripControls id={k.id} />
        <button
          type="button"
          onClick={() => toggleVisited(k.id)}
          aria-pressed={visited}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-semibold transition-colors ${
            visited
              ? 'border-[#C99A2E] bg-[#FAF2E3] text-[#7A2E00]'
              : 'border-[#E3D2AE] bg-[#FFFDF7] text-[#332417] hover:border-[#C99A2E]'
          }`}
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {visited ? (
              <><circle cx="10" cy="10" r="7.5" /><path d="M6.7 10.3l2.2 2.2 4.4-4.8" /></>
            ) : (
              <circle cx="10" cy="10" r="7.5" />
            )}
          </svg>
          {visited ? 'Darshan Done' : 'Mark visited'}
        </button>
        <span className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => mapApi?.flyTo(k.coords, 12)}
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#7A2E00] underline decoration-[#C99A2E]/70 underline-offset-4 hover:decoration-[#7A2E00]"
          >
            Focus
          </button>
          {k.mapQuery ? (
            <a
              href={`${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${k.mapQuery}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B34700]! hover:underline"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          ) : null}
        </span>
      </div>
    </li>
  );
}

export default function MapPage() {
  const { visitedIds } = useVisited();
  const { tripIds } = useTrip();
  const plotted = useMemo(
    () => getAllKshetramsEnriched().filter((k) => Array.isArray(k.coords)),
    [],
  );
  const regions = useMemo(() => [...new Set(plotted.map((k) => k.region))], [plotted]);
  const colors = useMemo(() => buildRegionColors(regions), [regions]);
  const counts = useMemo(() => {
    const c = {};
    plotted.forEach((k) => { c[k.region] = (c[k.region] ?? 0) + 1; });
    return c;
  }, [plotted]);

  const [activeRegions, setActiveRegions] = useState(() => new Set());
  const [scope, setScope] = useState('all');
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');
  const [mapApi, setMapApi] = useState(null);

  const regionShown = activeRegions.size === 0
    ? plotted
    : plotted.filter((k) => activeRegions.has(k.region));
  const shown = useMemo(() => {
    if (scope === 'visited') return regionShown.filter((k) => visitedIds.includes(k.id));
    if (scope === 'trip') return regionShown.filter((k) => tripIds.includes(k.id));
    return regionShown;
  }, [regionShown, scope, visitedIds, tripIds]);

  const scopeCounts = useMemo(() => ({
    all: regionShown.length,
    visited: regionShown.filter((k) => visitedIds.includes(k.id)).length,
    trip: regionShown.filter((k) => tripIds.includes(k.id)).length,
  }), [regionShown, visitedIds, tripIds]);

  const nearest = useMemo(() => {
    if (!me) return [];
    return [...shown]
      .map((k) => ({ kshetram: k, km: distanceKm(me, k.coords) }))
      .sort((a, b) => a.km - b.km)
      .slice(0, 12);
  }, [me, shown]);

  const toggleRegion = (region) => {
    setActiveRegions((prev) => {
      const next = new Set(prev);
      if (next.has(region)) next.delete(region);
      else next.add(region);
      return next;
    });
  };

  const fitAll = () => {
    if (!mapApi || shown.length === 0) return;
    mapApi.fitBounds(L.latLngBounds(shown.map((k) => k.coords)), { padding: [28, 28], maxZoom: 12 });
  };

  const locate = () => {
    if (!navigator.geolocation) {
      setGeoMessage('Location is not supported on this device.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoMessage('');
        setMe([pos.coords.latitude, pos.coords.longitude]);
      },
      () => setGeoMessage('Location permission was denied — showing the desams only.'),
      { timeout: 10000 },
    );
  };

  return (
    <div>
      {/* Display header with lotus ornament + location pills */}
      <header className="relative pb-6">
        <div className="hidden items-center gap-2.5 absolute right-0 top-1 lg:flex" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C99A2E]" fill="currentColor">
            <path d="M12 2c2 3 2 5 0 8-2-3-2-5 0-8zm0 8c3 1 5 3 5 7H7c0-4 2-6 5-7zM4 21h16v1H4v-1z" />
          </svg>
          <span className="font-display text-[15px] italic leading-tight text-[#96731F]">
            Divine Abodes<br />Timeless Grace
          </span>
        </div>
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
          {SITE_COPY.map.eyebrow}
        </p>
        {/* ! beats the unlayered legacy h1 rule in base.css */}
        <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[48px]!">
          {SITE_COPY.map.title}
        </h1>
        <p className="mt-2 text-[15px] text-[#66523D]" aria-live="polite">
          {geoMessage || `${shown.length} of ${plotted.length} desams shown · visited desams carry a gold ring`}
        </p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={locate}
            className="inline-flex items-center gap-2 rounded-full border border-[#E3D2AE] bg-[#FFFDF7] px-4 py-2 text-[13px] font-semibold text-[#332417] shadow-xs transition-colors hover:border-[#C99A2E]"
          >
            <MapPin className="h-4 w-4 text-[#B34700]" aria-hidden="true" />
            <span>Show my location</span>
            {me ? <span className="text-[10px] opacity-80">(GPS active)</span> : null}
          </button>
          {me ? (
            <button
              type="button"
              onClick={() => setMe(null)}
              title="Clear my location marker"
              aria-label="Clear my location"
              className="rounded-full border border-[#E3D2AE] bg-[#FFFDF7] p-2 text-[#7A2E00] transition-colors hover:border-[#C99A2E]"
            >
              <Crosshair className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </header>

      {/* Location status card */}
      {me ? (
        <div className="mb-6 rounded-2xl border border-[#C99A2E]/60 bg-[#FFFDF7] p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#FAF2E3] border border-[#C99A2E] flex items-center justify-center shrink-0 text-[#B34700]">
              <Navigation className="w-5 h-5 animate-pulse" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B34700]/10 text-[#B34700]">
                You are here
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#7A2E00] mt-1">
                Your darshan distances are live below
              </h2>
              <p className="text-xs text-[#66523D] mt-0.5">
                Approximate position <strong className="text-[#B34700]">{me[0].toFixed(3)}° N, {me[1].toFixed(3)}° E</strong> — distances are straight-line.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Sidebar (filters + nearest cards) beside the atlas */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="space-y-5">
          {/* Scope pills — All / Visited / In trip (exclusive, Explore idiom) */}
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Showing">
            <button
              type="button"
              aria-pressed={scope === 'all'}
              onClick={() => setScope('all')}
              className={scope === 'all' ? scopeActive : scopeIdle}
            >
              All ({scopeCounts.all})
            </button>
            <button
              type="button"
              aria-pressed={scope === 'visited'}
              onClick={() => setScope(scope === 'visited' ? 'all' : 'visited')}
              className={scope === 'visited' ? scopeActive : scopeIdle}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#C99A2E]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5" />
              </svg>
              Visited ({scopeCounts.visited})
            </button>
            <button
              type="button"
              aria-pressed={scope === 'trip'}
              onClick={() => setScope(scope === 'trip' ? 'all' : 'trip')}
              className={scope === 'trip' ? scopeActive : scopeIdle}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#B34700]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
              </svg>
              In trip ({scopeCounts.trip})
            </button>
          </div>

          {/* Region chips with dots and counts */}
          <div className="flex items-center gap-1.5 flex-wrap" role="group" aria-label="Filter by region">
            <button
              type="button"
              className={activeRegions.size === 0 ? 'region-chip is-active' : 'region-chip'}
              aria-pressed={activeRegions.size === 0}
              onClick={() => setActiveRegions(new Set())}
            >
              All regions ({plotted.length})
            </button>
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                className={activeRegions.has(region) ? 'region-chip is-active' : 'region-chip'}
                aria-pressed={activeRegions.has(region)}
                onClick={() => toggleRegion(region)}
              >
                <span className="region-dot" style={{ background: colors[region] }} aria-hidden="true" />
                {region} ({counts[region]})
              </button>
            ))}
          </div>

          {/* Nearest-first cards (after geolocation) */}
          {me && nearest.length > 0 ? (
            <section aria-label="Nearest Divya Desams from you">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="font-display text-[22px] font-semibold text-[#5C1F00]">
                  Temples in this area
                </h2>
                <span className="text-[12px] font-medium text-[#66523D]">{nearest.length} results</span>
              </div>
              <ul className="space-y-3">
                {nearest.map(({ kshetram: k, km }) => (
                  <NearestCard key={k.id} kshetram={k} km={km} mapApi={mapApi} />
                ))}
              </ul>
              <p className="text-[11px] text-[#66523D] italic mt-2.5">Distances are straight-line and approximate.</p>
            </section>
          ) : null}
        </div>

        {/* Map frame with fit-all control + on-map legend */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C99A2E]/55 shadow-xs h-[520px] lg:h-[640px] bg-[#F6EBD6]">
          <MapContainer
            center={[11.4, 78.7]}
            zoom={6}
            scrollWheelZoom={false}
            className="map-page__leaflet w-full h-full"
            aria-label="Map of the Divya Desams"
            ref={setMapApi}
          >
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {shown.map((k) => {
              const visited = visitedIds.includes(k.id);
              return (
                <CircleMarker
                  key={k.id}
                  center={k.coords}
                  radius={visited ? 8 : 6}
                  pathOptions={{
                    color: visited ? '#C99A2E' : '#FFFFFF',
                    weight: visited ? 3 : 1.5,
                    fillColor: colors[k.region],
                    fillOpacity: 0.9,
                  }}
                >
                  <Tooltip direction="top" offset={[0, -6]} interactive={false}>
                    <span className="map-tooltip__tamil" lang="ta">{k.tamilName}</span>
                    <span className="map-tooltip__name">
                      {k.name}
                      {visited ? ' · ✓ visited' : ''}
                    </span>
                  </Tooltip>
                  <Popup>
                    <div className="map-popup">
                      <p className="map-popup__tamil" lang="ta">{k.tamilName}</p>
                      <p className="map-popup__name">{k.name}</p>
                      <div className="map-popup__actions">
                        <Link className="btn btn--primary btn--small" to={`/kshetram/${k.id}`}>
                          Open page
                        </Link>
                        <TripControls id={k.id} />
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}
            {me ? (
              <CircleMarker
                center={me}
                radius={7}
                pathOptions={{ color: '#1F4E79', fillColor: '#3E7CB1', fillOpacity: 0.9 }}
              >
                <Popup>You are here (approximate)</Popup>
              </CircleMarker>
            ) : null}
          </MapContainer>
          <button
            type="button"
            onClick={fitAll}
            className="absolute right-3 top-3 z-[500] inline-flex items-center gap-2 rounded-lg bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#332417] shadow-md transition-colors hover:bg-[#FAF2E3]"
          >
            <Maximize className="h-4 w-4 text-[#7A2E00]" aria-hidden="true" />
            Fit all temples
          </button>
          <span className="absolute right-3 top-[52px] z-[500] rounded-full bg-[#571F00]/85 px-3 py-1 text-[11px] font-semibold text-[#FFFDF7] shadow-xs backdrop-blur-xs pointer-events-none">
            {shown.length} of {plotted.length} desams plotted
          </span>
          <div className="absolute bottom-3 left-3 z-[500] flex items-center gap-4 rounded-lg bg-[#FFFDF7]/95 px-3.5 py-2 text-[12px] font-medium text-[#332417] shadow-md">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#B34700' }} aria-hidden="true" />
              Temple
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#C99A2E', boxShadow: '0 0 0 2px #FFFDF7, 0 0 0 3.5px #C99A2E' }} aria-hidden="true" />
              Visited
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#B34700]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
              </svg>
              In trip
            </span>
          </div>
        </div>
      </div>

      {/* Region-color legend card */}
      <div className="mt-6 rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-5 shadow-xs">
        <RegionLegend colors={colors} regions={regions} />
      </div>
    </div>
  );
}
