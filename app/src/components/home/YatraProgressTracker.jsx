/**
 * YatraProgressTracker — compacted (PO round 23): one calm row — the
 * serif "My yatra" label, the {count} / {total} count, a slim progress
 * bar and ONE useful action ("Mark a visit" → Browse). The reset control
 * is a secondary management action that renders only when progress
 * exists (native confirm). The 108/106 scope sentence (site-copy
 * `progressScope`) explains the count consistently site-wide; the
 * progressbar contract (aria-label "{count} of {total} kshetrams
 * visited") is unchanged. Counts only the 106 terrestrial shrines —
 * the two celestial abodes are beyond physical travel (PO 2026-09-25).
 * @param {object} props
 * @param {number} [props.total] - total scoped kshetrams (default 106 earthly)
 * @param {Set<string>} [props.eligibleIds] - ids that count toward the yatra
 */
import { ArrowRight } from 'lucide-react';
import { useVisited } from '../../hooks/useVisited.js';
import { ButtonLink } from '../ui/Button.jsx';
import { SITE_COPY } from '../../data/siteCopy.js';

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
      <div className="mx-auto max-w-site px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-5 rounded-xl border border-[#e8cf9f] bg-[#FFFDF7] p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex shrink-0 items-baseline gap-3">
            <h2 className="ui-heading m-0 text-[24px]! leading-[32px]! font-semibold text-[#922e0d]!">
              My yatra
            </h2>
            <p className="flex items-baseline gap-1.5">
              <span className="ui-heading text-[30px] font-semibold leading-none text-[#922e0d]">{count}</span>
              <span className="ui-heading text-[18px] font-medium leading-none text-[#a77529]">/ {total}</span>
            </p>
          </div>

          {/* Progress bar — one compact presentation */}
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
                className="h-full rounded-full bg-[#922e0d] transition-all duration-700 ease-out"
                style={{ width: `${fillWidth}%` }}
              />
            </div>
            <p className="mt-2 text-[14px] leading-[22px] text-[#74716b]">{SITE_COPY.progressScope}</p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2">
            <ButtonLink to="/kshetrams" variant="primary">
              <span>Mark a visit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            {/* Secondary management action — hidden entirely at zero progress */}
            {count > 0 ? (
              <button
                type="button"
                onClick={onReset}
                className="ui-tertiary text-[13px] font-semibold text-[#74716b]"
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
