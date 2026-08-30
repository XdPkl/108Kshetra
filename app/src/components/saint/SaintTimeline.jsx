/**
 * SaintTimeline — the chronological life timeline shared by the Azhwar and
 * Acharya templates (dossier §2.1). Renders nothing when absent.
 * @param {object} props
 * @param {{when?: string, event: string}[]} [props.timeline]
 */
export default function SaintTimeline({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div className="saint-timeline">
      <h3>Chronological life timeline</h3>
      <ol>
        {timeline.map(({ when, event }, i) => (
          <li key={`${i}-${event.slice(0, 24)}`}>
            {when ? <strong>{when}: </strong> : null}
            {event}
          </li>
        ))}
      </ol>
    </div>
  );
}
