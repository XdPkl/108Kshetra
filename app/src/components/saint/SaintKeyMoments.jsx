/**
 * SaintKeyMoments — the "KEY MOMENTS" rail of the azhwar detail restyle
 * (2026-09-30 PO snap): gold ring dots on a thin connector line with serif
 * moment titles. The Acharya template keeps the classic SaintTimeline
 * lifeline; this variant is azhwar-page only.
 * @param {object} props
 * @param {{when?: string, event: string}[]} [props.timeline]
 */
export default function SaintKeyMoments({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#B34700] mb-5">
        Key moments
      </h3>
      <ol className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[#C99A2E]/60">
        {timeline.map(({ when, event }, i) => (
          <li key={`${i}-${event.slice(0, 24)}`} className="relative pl-8">
            <span
              className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-[#FFFDF7] border-[3px] border-[#C99A2E]"
              aria-hidden="true"
            />
            {when ? (
              <h4 className="font-display text-[17px] font-semibold text-[#7A2E00] leading-snug">
                {when}
              </h4>
            ) : null}
            <p className={`text-[13px] text-[#66523D] leading-relaxed${when ? ' mt-0.5' : ''}`}>
              {event}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
