/**
 * YatraProgressTracker — 2026-09 refresh (PO-approved mockup): ivory band
 * row — "My yatra" heading with gold underline, the big visited count
 * ({count} / {total}), a slim progress bar, the remaining-abodes helper line,
 * the gold "Mark a visit" action linking to Browse, and the reset control
 * (native confirm, FR-73/75). The yatra counts only the 106 earthly
 * kshetrams — the two celestial abodes are beyond physical travel
 * (PO 2026-09-25).
 * @param {object} props
 * @param {number} [props.total] - total scoped kshetrams (default 106 earthly)
 * @param {Set<string>} [props.eligibleIds] - ids that count toward the yatra
 *   (the earthly kshetrams); when omitted every visited mark counts.
 */
import { Link } from 'react-router-dom';
import { useVisited } from '../../hooks/useVisited.js';

export default function YatraProgressTracker({ total = 106, eligibleIds }) {
  const { visitedIds, resetVisited } = useVisited();
  const scopedIds = eligibleIds ? visitedIds.filter((id) => eligibleIds.has(id)) : visitedIds;
  const count = scopedIds.length;
  const percentage = Math.round((count / total) * 100);
  const fillWidth = count > 0 ? Math.max(3, percentage) : 0;

  const onReset = () => {
    if (window.confirm(`Clear all ${visitedIds.length} visited marks? This cannot be undone.`)) {
      resetVisited();
    }
  };

  return (
    <section className="w-full bg-[#FAF2E3]" aria-label="Darshan progress">
      <div className="mx-auto flex max-w-site flex-col gap-8 px-4 py-11 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="shrink-0">
          <h2 className="font-display text-[32px]! leading-none! font-semibold text-[#7A2E00]!">My yatra</h2>
          <div className="mt-2.5 h-[3px] w-10 rounded-full bg-[#C99A2E]" aria-hidden="true" />
        </div>

        <div className="flex shrink-0 items-center gap-8">
          <p className="flex items-baseline gap-2">
            <span className="font-display text-[64px] font-semibold leading-none text-[#B34700]">{count}</span>
            <span className="font-display text-[30px] font-medium leading-none text-[#B39B72]">/ {total}</span>
          </p>
          <p className="text-[15px] font-medium leading-tight text-[#66523D]">
            Kshetrams
            <br />
            visited
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-display text-[21px] font-semibold text-[#5C4326]">
            {total - count} sacred abodes awaiting your darshan
          </p>
          <div
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#EADFC6]"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={count}
            aria-label={`${count} of ${total} kshetrams visited`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#D95F0E] via-[#B34700] to-[#7A2E00] transition-all duration-700 ease-out"
              style={{ width: `${fillWidth}%` }}
            />
          </div>
          <div className="mt-1.5 flex justify-end">
            <button
              type="button"
              onClick={onReset}
              className="text-[11px] text-[#66523D] underline underline-offset-2 hover:text-[#B34700] transition-colors"
            >
              Reset progress
            </button>
          </div>
        </div>

        <Link
          to="/kshetrams"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gradient-to-b from-[#E9CF8C] to-[#C99A2E] px-6 py-3 text-sm font-bold text-[#4A3005]! shadow-md hover:brightness-105 active:scale-[0.98] transition-all lg:self-center"
        >
          <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M9 2l1 2h2l-1.5 1.7.8 1.8H9.9l.8 2H7.3l.8-2H5.7l.8-1.8L5 4h2l1-2h1zM5.5 9h7l1.2 2.4H4.3L5.5 9zm-1.6 3.6h10.2l1 2H2.9l1-2zM3 15.6h12v1.2H3v-1.2z" />
          </svg>
          Mark a visit
        </Link>
      </div>
    </section>
  );
}
