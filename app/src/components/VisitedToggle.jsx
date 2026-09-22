/**
 * VisitedToggle — accessible mark-as-visited control for the detail page
 * (FR-72) in zip-parity pill styling (UXD v3.0 Gate 3). Persists via the
 * visited store; reflects current state.
 * @param {object} props
 * @param {string} props.id - kshetram slug
 */
import { useVisited } from '../hooks/useVisited.js';

export default function VisitedToggle({ id }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(id);
  return (
    <button
      type="button"
      className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-xs ${
        visited
          ? 'bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] border border-[#96731F]'
          : 'border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 bg-[#FFFDF7]'
      }`}
      aria-pressed={visited}
      onClick={() => toggleVisited(id)}
    >
      {visited ? '✓ Visited' : '☆ Mark as visited'}
    </button>
  );
}
