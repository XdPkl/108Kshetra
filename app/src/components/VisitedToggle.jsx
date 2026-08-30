/**
 * VisitedToggle — accessible mark-as-visited control for the detail page
 * (FR-72). Persists via the visited store; reflects current state.
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
      className={visited ? 'btn btn--small btn-visited is-active' : 'btn btn--outline btn--small btn-visited'}
      aria-pressed={visited}
      onClick={() => toggleVisited(id)}
    >
      {visited ? '✓ Visited' : '☆ Mark as visited'}
    </button>
  );
}
