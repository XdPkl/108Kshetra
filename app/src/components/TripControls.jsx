/**
 * TripControls — add/remove a kshetram to the personal trip (FR-79) in
 * zip-parity pill styling (UXD v3.0 Gate 3). Used on detail pages and map
 * popups; always rendered OUTSIDE any wrapping link so interactive
 * elements never nest.
 * @param {object} props
 * @param {string} props.id - kshetram slug
 * @param {string} [props.variant] - unused legacy slot kept for call sites
 */
import { useTrip } from '../hooks/useTrip.js';

export default function TripControls({ id }) {
  const { isInTrip, toggleTrip } = useTrip();
  const inTrip = isInTrip(id);
  const label = inTrip ? '✓ In trip' : '+ Add to trip';
  return (
    <button
      type="button"
      className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
        inTrip
          ? 'bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] border border-[#96731F]'
          : 'border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 bg-[#FFFDF7]'
      }`}
      aria-pressed={inTrip}
      aria-label={inTrip ? 'Remove from trip' : 'Add to trip'}
      onClick={() => toggleTrip(id)}
    >
      {label}
    </button>
  );
}
