/**
 * TripControls — add/remove a kshetram to the personal trip (FR-79).
 * Two appearances: the zip-parity pill (map popups, default) and the
 * round-16 mock button (`variant="kxd"` — accent pill whose aria-pressed
 * state flips it to rust). `onNotify` feeds the page-level status toast.
 * Always rendered OUTSIDE any wrapping link so interactive elements never
 * nest.
 * @param {object} props
 * @param {string} props.id - kshetram slug
 * @param {string} [props.variant] - 'kxd' for the mock styling
 * @param {(message: string) => void} [props.onNotify] - status-toast hook
 */
import { Plus } from 'lucide-react';
import { useTrip } from '../hooks/useTrip.js';

export default function TripControls({ id, variant, onNotify }) {
  const { isInTrip, toggleTrip } = useTrip();
  const inTrip = isInTrip(id);
  const handleToggle = () => {
    toggleTrip(id);
    onNotify?.(inTrip
      ? 'Removed from trip — saved in this browser.'
      : 'Added to trip — saved in this browser.');
  };

  if (variant === 'kxd') {
    return (
      <button
        type="button"
        className="btn primary"
        aria-pressed={inTrip}
        aria-label={inTrip ? 'Remove from trip' : 'Add to trip'}
        onClick={handleToggle}
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
        <span>{inTrip ? 'Added to trip' : 'Add to trip'}</span>
      </button>
    );
  }

  const label = inTrip ? '✓ In trip' : '+ Add to trip';
  return (
    <button
      type="button"
      className="ui-btn ui-btn--secondary ui-btn--small"
      style={inTrip ? { background: '#fbf0dc', borderColor: '#a77529', color: '#922e0d' } : undefined}
      aria-pressed={inTrip}
      aria-label={inTrip ? 'Remove from trip' : 'Add to trip'}
      onClick={handleToggle}
    >
      {label}
    </button>
  );
}
