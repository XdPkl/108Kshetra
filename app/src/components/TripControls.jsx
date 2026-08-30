/**
 * TripControls — add/remove a kshetram to the personal trip (FR-79).
 * Used on detail pages, cards and map popups; always rendered OUTSIDE any
 * wrapping link so interactive elements never nest.
 * @param {object} props
 * @param {string} props.id - kshetram slug
 * @param {string} [props.variant] - 'card' renders the compact corner button
 */
import { useTrip } from '../hooks/useTrip.js';

export default function TripControls({ id, variant = '' }) {
  const { isInTrip, toggleTrip } = useTrip();
  const inTrip = isInTrip(id);
  const label = inTrip ? '✓ In trip' : variant === 'card' ? '+ Trip' : '+ Add to trip';
  return (
    <button
      type="button"
      className={inTrip ? `btn btn--small btn-trip is-active ${variant}`.trim() : `btn btn--outline btn--small btn-trip ${variant}`.trim()}
      aria-pressed={inTrip}
      aria-label={inTrip ? 'Remove from trip' : 'Add to trip'}
      onClick={() => toggleTrip(id)}
    >
      {label}
    </button>
  );
}
