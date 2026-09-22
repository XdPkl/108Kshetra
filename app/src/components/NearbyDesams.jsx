/**
 * NearbyDesams — other Divya Desams within 50 km, nearest first (FR-63) in
 * the zip-parity index list (UXD v3.0 Gate 3). Renders inside the Location
 * section card.
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
    <div className="mt-5">
      <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00]">
        Nearby Divya Desams{' '}
        <span className="font-normal text-[#66523D] normal-case tracking-normal">within 50 km</span>
      </h3>
      <ul className="nearby__list mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
        {nearby.map(({ kshetram, distanceKm }) => (
          <li key={kshetram.id} className="flex items-center justify-between py-0.5">
            <Link
              to={`/kshetram/${kshetram.id}`}
              className="text-[#B34700] hover:text-[#7A2E00] transition-colors font-medium text-left hover:underline"
            >
              {kshetram.name}
            </Link>
            <span className="text-[#66523D] text-xs font-medium">— {distanceKm} km</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-[#66523D] italic mt-2">Distances are straight-line and approximate.</p>
    </div>
  );
}
