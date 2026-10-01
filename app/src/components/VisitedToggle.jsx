/**
 * VisitedToggle — accessible mark-as-visited control (FR-72). Two
 * appearances: the zip-parity pill (default) and the round-16 mock button
 * (`variant="kxd"` — outline pill whose aria-pressed state flips it to
 * rust). `onNotify` feeds the page-level status toast. Persists via the
 * visited store; reflects current state.
 * @param {object} props
 * @param {string} props.id - kshetram slug
 * @param {string} [props.variant] - 'kxd' for the mock styling
 * @param {(message: string) => void} [props.onNotify] - status-toast hook
 */
import { Star } from 'lucide-react';
import { useVisited } from '../hooks/useVisited.js';

export default function VisitedToggle({ id, variant, onNotify }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(id);
  const handleToggle = () => {
    toggleVisited(id);
    onNotify?.(visited
      ? 'Removed from visited — saved in this browser.'
      : 'Visited — saved in this browser.');
  };

  if (variant === 'kxd') {
    return (
      <button type="button" className="btn" aria-pressed={visited} onClick={handleToggle}>
        <Star className="h-4 w-4" aria-hidden="true" />
        <span>{visited ? '✓ Visited' : 'Mark as visited'}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
        visited
          ? 'bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] border border-[#96731F]'
          : 'border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 bg-[#FFFDF7]'
      }`}
      aria-pressed={visited}
      onClick={handleToggle}
    >
      {visited ? '✓ Visited' : '☆ Mark as visited'}
    </button>
  );
}
