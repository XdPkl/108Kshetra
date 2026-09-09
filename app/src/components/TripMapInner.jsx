/**
 * TripMapInner — the actual Leaflet map for the trip planner: one marker
 * per earthly stop, a dashed polyline joining them in display order, and
 * hover tooltips with the stop number and inbound leg distance. Celestial
 * stops (no coords) are skipped; their list numbers keep the original
 * position so tooltips match the numbered list. Split from TripMap so
 * Leaflet stays out of the TripPage bundle (NFR-11).
 * @param {object} props
 * @param {Kshetram[]} props.stops - stops in display order (route or current)
 * @param {(number|null)[]} props.legs - inbound leg km per stop (legsFor)
 */
import { MapContainer, TileLayer, CircleMarker, Polyline, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/** Degrees of padding so edge markers don't touch the frame. */
const BOUNDS_PAD = 0.35;

export default function TripMapInner({ stops, legs }) {
  const points = stops.filter((k) => Array.isArray(k.coords));
  if (points.length === 0) return null;

  // Fit the whole route; a single earthly stop falls back to center/zoom.
  const bounds = points.length > 1
    ? [
        [Math.min(...points.map((k) => k.coords[0])) - BOUNDS_PAD, Math.min(...points.map((k) => k.coords[1])) - BOUNDS_PAD],
        [Math.max(...points.map((k) => k.coords[0])) + BOUNDS_PAD, Math.max(...points.map((k) => k.coords[1])) + BOUNDS_PAD],
      ]
    : undefined;

  return (
    <MapContainer
      bounds={bounds}
      center={bounds ? undefined : points[0].coords}
      zoom={bounds ? undefined : 11}
      scrollWheelZoom={false}
      className="trip-map"
      aria-label="Map of your trip route"
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
      {points.length > 1 ? (
        <Polyline
          positions={points.map((k) => k.coords)}
          pathOptions={{ color: '#B34700', weight: 2.5, dashArray: '6 6', opacity: 0.8 }}
        />
      ) : null}
      {stops.map((k, i) => (!Array.isArray(k.coords) ? null : (
        <CircleMarker
          key={k.id}
          center={k.coords}
          radius={7}
          pathOptions={{ color: '#7A2E00', fillColor: '#B34700', fillOpacity: 0.85 }}
        >
          <Tooltip direction="top" offset={[0, -6]} interactive={false}>
            <strong>{i + 1}. {k.name}</strong>
            {legs[i] != null ? <span> · {legs[i]} km from previous</span> : null}
          </Tooltip>
          <Popup>
            <span lang="ta">{k.tamilName}</span> — stop {i + 1} of {stops.length}
          </Popup>
        </CircleMarker>
      )))}
    </MapContainer>
  );
}
