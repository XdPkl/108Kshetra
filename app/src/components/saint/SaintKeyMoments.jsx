/**
 * SaintKeyMoments — the "Key moments" aside rail of the azhwar detail page.
 * Restyled to the kxd theme (round 18): gold-diamond milestone list
 * (`.milestones` from detail-theme.css) with serif moment titles. The
 * Acharya template keeps the classic SaintTimeline lifeline; this variant
 * is azhwar-page only.
 * @param {object} props
 * @param {{when?: string, event: string}[]} [props.timeline]
 */
export default function SaintKeyMoments({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div>
      <h3 className="eyebrow">
        Key moments
      </h3>
      <ol className="milestones">
        {timeline.map(({ when, event }, i) => (
          <li key={`${i}-${event.slice(0, 24)}`}>
            {when ? <h4>{when}</h4> : null}
            <p className="note">{event}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
