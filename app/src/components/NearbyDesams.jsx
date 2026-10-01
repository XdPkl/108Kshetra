/**
 * NearbyDesams — other Divya Desams within 50 km, nearest first (FR-63),
 * rendered as the round-16 mock's hover rows (name left, distance +
 * chevron right). Keeps the `nearby__list` hook used by the e2e specs.
 * @param {object} props
 * @param {[number, number]|null} props.coords - this kshetram's [lat, lng]
 * @param {Kshetram[]} props.kshetrams - full dataset (enriched)
 */
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { nearbyKshetrams } from '../utils/geo.js';

export default function NearbyDesams({ coords, kshetrams }) {
  if (!coords) return null;
  const nearby = nearbyKshetrams(coords, kshetrams);
  if (nearby.length === 0) return null;
  return (
    <div className="kxd-nearby">
      <h3>
        Nearby Divya Desams <small>Within 50 km</small>
      </h3>
      <ul className="nearby nearby__list">
        {nearby.map(({ kshetram, distanceKm }) => (
          <li key={kshetram.id}>
            <Link to={`/kshetram/${kshetram.id}`}>
              <span>{kshetram.name}</span>
              <span>
                {distanceKm} km
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="note">
        <em>Distances are straight-line and approximate.</em>
      </p>
    </div>
  );
}
