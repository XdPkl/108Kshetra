/**
 * MapPage — interactive map of every earthly Divya Desam (FR-76..78).
 * Lazy-loaded route chunk (NFR-11): Leaflet + OpenStreetMap tiles with
 * visible attribution. Region-colored markers with a legend, region filter
 * chips, visited styling, opt-in "my location", and popups linking to the
 * detail page with a trip action.
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getAllKshetramsEnriched } from '../data/api.js';
import { buildRegionColors } from '../utils/regionColors.js';
import RegionLegend from '../components/RegionLegend.jsx';
import TripControls from '../components/TripControls.jsx';
import { useVisited } from '../hooks/useVisited.js';

export default function MapPage() {
  const { visitedIds } = useVisited();
  const plotted = useMemo(
    () => getAllKshetramsEnriched().filter((k) => Array.isArray(k.coords)),
    [],
  );
  const regions = useMemo(() => [...new Set(plotted.map((k) => k.region))], [plotted]);
  const colors = useMemo(() => buildRegionColors(regions), [regions]);

  const [activeRegions, setActiveRegions] = useState(() => new Set());
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');

  const shown = activeRegions.size === 0
    ? plotted
    : plotted.filter((k) => activeRegions.has(k.region));

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
    <div className="page map-page">
      <div className="map-page__head">
        <h1>Map of the Divya Desams</h1>
        <button type="button" className="btn btn--outline btn--small" onClick={locate}>
          📍 Show my location
        </button>
      </div>
      <p className="map-page__hint" aria-live="polite">
        {geoMessage || `${shown.length} of ${plotted.length} desams shown · visited desams carry a gold ring`}
      </p>
      <div className="map-page__chips" role="group" aria-label="Filter by region">
        {regions.map((region) => (
          <button
            key={region}
            type="button"
            className={activeRegions.has(region) ? 'region-chip is-active' : 'region-chip'}
            aria-pressed={activeRegions.has(region)}
            onClick={() => toggleRegion(region)}
          >
            <span className="region-chip__dot" style={{ background: colors[region] }} aria-hidden="true" />
            {region}
          </button>
        ))}
      </div>
      <div className="map-page__frame">
        <MapContainer
          center={[11.4, 78.7]}
          zoom={6}
          scrollWheelZoom={false}
          className="map-page__leaflet"
          aria-label="Map of the Divya Desams"
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
      </div>
      <RegionLegend colors={colors} regions={regions} />
    </div>
  );
}
