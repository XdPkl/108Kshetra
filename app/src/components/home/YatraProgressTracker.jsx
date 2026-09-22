/**
 * YatraProgressTracker — zip-parity tracker card (UXD v3.0 Gate 2): cream
 * card with a gold side accent, count headline, gradient progress bar with
 * inline percentage, reset action (native confirm, FR-73/75) and the
 * "abodes awaiting darshan" helper row.
 */
import { Link } from 'react-router-dom';
import { useVisited } from '../../hooks/useVisited.js';

export default function YatraProgressTracker({ total = 108 }) {
  const { count, resetVisited } = useVisited();
  const percentage = Math.round((count / total) * 100);
  const fillWidth = Math.max(2, percentage); // show at least a hint of progress if 0

  const onReset = () => {
    if (window.confirm(`Clear all ${count} visited marks? This cannot be undone.`)) {
      resetVisited();
    }
  };

  return (
    <section
      className="bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/45 shadow-xs p-5 sm:p-6 relative overflow-hidden transition-all"
      aria-label="Darshan progress"
    >
      {/* Golden side accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="font-medium text-[#332417] flex items-center gap-2">
          <span aria-hidden="true" className="text-xl">🙏</span>
          <span>
            Your yatra —{' '}
            <strong className="text-[#B34700] text-xl font-bold font-display">
              {count}
            </strong>{' '}
            of {total} kshetrams visited
          </span>
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-[#66523D] underline underline-offset-2 hover:text-[#B34700] transition-colors justify-self-start"
          >
            Reset progress
          </button>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div
        className="mt-3.5 h-3.5 rounded-full bg-[#F6EBD6] overflow-hidden shadow-inner p-0.5 relative"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={count}
        aria-label={`${count} of ${total} kshetrams visited`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#D95F0E] via-[#B34700] to-[#7A2E00] relative transition-all duration-700 ease-out shadow-xs"
          style={{ width: `${fillWidth}%` }}
        >
          {percentage >= 2 && (
            <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-[#FFFDF7] opacity-100 transition-opacity whitespace-nowrap">
              {percentage}%
            </span>
          )}
        </div>
      </div>

      <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#66523D]">
        <p>
          Visited kshetrams glow with a gold ring across the site — open{' '}
          <Link
            to="/kshetrams"
            className="underline underline-offset-2 hover:text-[#B34700] transition-colors font-medium"
          >
            Browse
          </Link>{' '}
          to continue your yatra.
        </p>
        <span className="text-[11px] font-medium text-[#96731F]">
          {total - count} sacred abodes awaiting your darshan
        </span>
      </div>
    </section>
  );
}
