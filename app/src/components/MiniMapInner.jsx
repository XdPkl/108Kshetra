/**
 * MiniMapInner — the actual Leaflet map for the detail page location
 * section. Split from MiniMap so Leaflet stays out of the initial bundle
 * (NFR-11).
 * @param {object} props
 * @param {[number, number]} props.coords - [lat, lng]
 * @param {string} props.label            - accessible label (kshetram name)
 */
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MiniMapInner({ coords, label }) {
  return (
    <MapContainer
      center={coords}
      zoom={11}
      scrollWheelZoom={false}
      className="mini-map"
      aria-label={`Map showing the location of ${label}`}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker
        center={coords}
        radius={8}
        pathOptions={{ color: '#7A2E00', fillColor: '#B34700', fillOpacity: 0.85 }}
      >
        <Popup>
          <span lang="ta">ॐ</span> {label}
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}
