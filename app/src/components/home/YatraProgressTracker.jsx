/**
 * YatraProgressTracker — option-1 progress strip (PO round 30): a calm
 * ivory card subordinate to the hero. The heading answers the visitor's
 * state — "Begin your yatra" empty, "Continue your yatra" returning —
 * above the supporting line, the progressbar (unchanged contract:
 * aria-label "{count} of {total} kshetrams visited") and the 108/106
 * scope sentence (site-copy `progressScope`); the gold "Mark a visit"
 * action and the visited total sit right. The reset control renders
 * only when progress exists (native confirm). Counts only the 106
 * terrestrial shrines — the two celestial abodes are beyond physical
 * travel (PO 2026-09-25); counts come from live state, never hard-coded.
 * @param {object} props
 * @param {number} [props.total] - total scoped kshetrams (default 106 earthly)
 * @param {Set<string>} [props.eligibleIds] - ids that count toward the yatra
 */
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVisited } from '../../hooks/useVisited.js';
import { SITE_COPY } from '../../data/siteCopy.js';

// Kshetrams gold action on the shared .ui-btn base (round-29 idiom).
const goldBtn = 'ui-btn rounded-lg! bg-[#96731F] text-[#FFFDF7]! shadow-xs transition-colors hover:bg-[#7A2E00]! group';

export default function YatraProgressTracker({ total = 106, eligibleIds }) {
  const { visitedIds, resetVisited } = useVisited();
  const scopedIds = eligibleIds ? visitedIds.filter((id) => eligibleIds.has(id)) : visitedIds;
  const count = scopedIds.length;
  const percentage = Math.round((count / total) * 100);
  const fillWidth = count > 0 ? Math.max(3, percentage) : 0;
  const { progress } = SITE_COPY.home;

  const onReset = () => {
    if (window.confirm(`Clear all ${visitedIds.length} visited marks? This cannot be undone.`)) {
      resetVisited();
    }
  };

  return (
    <section className="w-full bg-[#FAF2E3]" aria-label="Darshan progress">
      <div className="mx-auto max-w-site px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-5 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-5 shadow-xs sm:p-6 lg:flex-row lg:items-center lg:gap-10">
          <div className="shrink-0 lg:max-w-[220px]">
            <h2 className="ui-heading m-0 text-[26px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
              {count === 0 ? progress.beginTitle : progress.continueTitle}
            </h2>
            <p className="mt-1.5 text-[14px] leading-[22px] text-[#66523D]">{progress.support}</p>
          </div>

          {/* Progress bar — visible text equivalent sits beside it */}
          <div className="min-w-0 flex-1">
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-[#EADFC6]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={count}
              aria-label={`${count} of ${total} kshetrams visited`}
            >
              <div
                className="h-full rounded-full bg-[#96731F] transition-all duration-700 ease-out motion-reduce:transition-none"
                style={{ width: `${fillWidth}%` }}
              />
            </div>
            <p className="mt-2 text-[13px] leading-[21px] text-[#66523D]">
              <span className="font-semibold text-[#5C1F00]">{count} of {total} visited.</span>{' '}
              {SITE_COPY.progressScope}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/kshetrams" className={`${goldBtn}`}>
              <span>Mark a visit</span>
              <ArrowRight className="h-4 w-4 opacity-85 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            </Link>
            {/* Secondary management action — hidden entirely at zero progress */}
            {count > 0 ? (
              <button
                type="button"
                onClick={onReset}
                className="ui-tertiary text-[13px] font-semibold text-[#66523D]"
              >
                Reset progress
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
