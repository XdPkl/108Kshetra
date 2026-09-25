/**
 * MapPage — interactive map of every earthly Divya Desam (FR-76..78) in the
 * zip-parity chrome (UXD v3.0 Gate 9): atlas header with the live hint and
 * "Show my location" pill, region chips with dots and counts, the Leaflet
 * atlas in a gold frame with a status badge, the legend card, and — once
 * the pilgrim shares their location — a nearest-first desam list with
 * focus / directions / trip actions. Lazy-loaded route chunk (NFR-11).
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import { Navigation, ExternalLink, MapPin, Crosshair } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { getAllKshetramsEnriched } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import { buildRegionColors } from '../utils/regionColors.js';
import { distanceKm } from '../utils/geo.js';
import RegionLegend from '../components/RegionLegend.jsx';
import TripControls from '../components/TripControls.jsx';
import { useVisited } from '../hooks/useVisited.js';
import { SITE_COPY } from '../data/siteCopy.js';

export default function MapPage() {
  const { visitedIds } = useVisited();
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
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');
  const [mapApi, setMapApi] = useState(null);

  const shown = activeRegions.size === 0
    ? plotted
    : plotted.filter((k) => activeRegions.has(k.region));

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
    <div className="space-y-6">
      {/* Atlas header */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#E3D2AE]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
            {SITE_COPY.map.eyebrow}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#7A2E00] tracking-tight leading-tight mt-1">
            {SITE_COPY.map.title}
          </h1>
          <p className="mt-2 text-sm text-[#66523D]" aria-live="polite">
            {geoMessage || `${shown.length} of ${plotted.length} desams shown · visited desams carry a gold ring`}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start lg:self-auto shrink-0 flex-wrap">
          <button
            type="button"
            onClick={locate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#B34700]/60 bg-[#FFFDF7] text-[#7A2E00] text-sm font-semibold hover:bg-[#B34700]/10 transition-all shadow-xs"
          >
            <MapPin className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
            <span>Show my location</span>
            {me ? <span className="text-[10px] opacity-80">(GPS active)</span> : null}
          </button>
          {me ? (
            <button
              type="button"
              onClick={() => setMe(null)}
              title="Clear my location marker"
              aria-label="Clear my location"
              className="p-2.5 rounded-full border border-[#C99A2E]/50 bg-[#FFFDF7] text-[#7A2E00] hover:bg-[#FAF2E3] transition-colors"
            >
              <Crosshair className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </header>

      {/* Location status card */}
      {me ? (
        <div className="rounded-2xl border border-[#C99A2E]/60 bg-[#FFFDF7] p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
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

      {/* Map frame with status badge */}
      <div className="relative rounded-2xl overflow-hidden border border-[#C99A2E]/55 shadow-xs h-[520px] bg-[#F6EBD6]">
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
        <span className="absolute top-3 right-3 z-[500] px-3 py-1 rounded-full bg-[#571F00]/85 backdrop-blur-xs text-[#FFFDF7] text-[11px] font-semibold shadow-xs pointer-events-none">
          {shown.length} of {plotted.length} desams plotted
        </span>
      </div>

      {/* Legend card */}
      <div className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-5 shadow-xs">
        <RegionLegend colors={colors} regions={regions} />
      </div>

      {/* Nearest-first list (after geolocation) */}
      {me && nearest.length > 0 ? (
        <div className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-6 shadow-xs">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-3">
            Nearest Divya Desams from you
          </h2>
          <ul className="divide-y divide-[#F0E3C6]">
            {nearest.map(({ kshetram: k, km }) => (
              <li key={k.id} className="flex flex-wrap items-center gap-x-4 gap-y-1.5 py-2.5 text-sm">
                <span className="font-display font-semibold text-[#7A2E00] min-w-[7.5rem]">
                  <Link to={`/kshetram/${k.id}`} className="hover:text-[#B34700] transition-colors">{k.name}</Link>
                </span>
                <span className="text-xs text-[#66523D] truncate flex-1 min-w-[10rem]">{k.place} · {k.state}</span>
                <span className="text-xs font-bold text-[#B34700] tabular-nums">{km} km</span>
                <span className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => mapApi?.flyTo(k.coords, 12)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#C99A2E]/50 text-[#7A2E00] hover:bg-[#C99A2E]/15 transition-colors"
                  >
                    Focus
                  </button>
                  {k.mapQuery ? (
                    <a
                      href={`${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${k.mapQuery}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#B34700]/60 text-[#B34700] hover:bg-[#B34700]/10 transition-colors"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-[#66523D] italic mt-2.5">Distances are straight-line and approximate.</p>
        </div>
      ) : null}
    </div>
  );
}
