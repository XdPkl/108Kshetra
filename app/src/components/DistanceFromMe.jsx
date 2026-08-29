/**
 * DistanceFromMe — opt-in geolocation button showing straight-line distance
 * to the temple, plus a Google Maps directions link (FR-67).
 * @param {object} props
 * @param {[number, number]|null} props.coords - temple [lat, lng]
 * @param {string} props.mapQuery - Google Maps query for directions
 */
import { useState } from 'react';
import { distanceKm } from '../utils/geo.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';

const STATUS = {
  idle: 'idle',
  unsupported: 'unsupported',
  denied: 'denied',
  locating: 'locating',
  done: 'done',
};

export default function DistanceFromMe({ coords, mapQuery }) {
  const [status, setStatus] = useState(STATUS.idle);
  const [distance, setDistance] = useState(null);

  const locate = () => {
    if (!('geolocation' in navigator)) {
      setStatus(STATUS.unsupported);
      return;
    }
    setStatus(STATUS.locating);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setDistance(distanceKm(coords, [pos.coords.latitude, pos.coords.longitude]));
        setStatus(STATUS.done);
      },
      () => setStatus(STATUS.denied),
    );
  };

  if (!coords) return null;
  const directionsHref = mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${mapQuery}`)}`
    : null;

  return (
    <div className="distance">
      {status === STATUS.done ? (
        <p className="distance__result" role="status">You are about {distance} km away (straight line).</p>
      ) : (
        <button type="button" className="btn btn--outline" onClick={locate} disabled={status === STATUS.locating}>
          📍 {status === STATUS.locating ? 'Locating…' : 'Distance from me'}
        </button>
      )}
      {status === STATUS.denied ? (
        <p className="distance__error" role="alert">
          Location permission was denied — allow location access to see the distance.
        </p>
      ) : null}
      {status === STATUS.unsupported ? (
        <p className="distance__error" role="alert">Your browser does not support location.</p>
      ) : null}
      {directionsHref ? (
        <a className="distance__directions" href={directionsHref} target="_blank" rel="noopener noreferrer">
          Get directions ↗
        </a>
      ) : null}
    </div>
  );
}
