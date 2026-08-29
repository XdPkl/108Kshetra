/**
 * NearbyDesams — other Divya Desams within 50 km, nearest first (FR-63).
 * @param {object} props
 * @param {[number, number]|null} props.coords - this kshetram's [lat, lng]
 * @param {Kshetram[]} props.kshetrams - full dataset (enriched)
 */
import { Link } from 'react-router-dom';
import { nearbyKshetrams } from '../utils/geo.js';

export default function NearbyDesams({ coords, kshetrams }) {
  if (!coords) return null;
  const nearby = nearbyKshetrams(coords, kshetrams);
  if (nearby.length === 0) return null;
  return (
    <section className="detail__section detail__section--full">
      <h2>Nearby Divya Desams <span className="nearby__radius">within 50 km</span></h2>
      <ul className="nearby__list">
        {nearby.map(({ kshetram, distanceKm }) => (
          <li key={kshetram.id}>
            <Link to={`/kshetram/${kshetram.id}`}>{kshetram.name}</Link>
            <span className="nearby__km"> — {distanceKm} km</span>
          </li>
        ))}
      </ul>
      <p className="nearby__note">Distances are straight-line and approximate.</p>
    </section>
  );
}
