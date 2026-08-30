/**
 * VisitedBadge — gold "✓ Visited" marker shown on cards and detail headers
 * for kshetrams the visitor has marked (FR-72).
 */
export default function VisitedBadge() {
  return (
    <span className="visited-badge">
      <span aria-hidden="true">✓</span> Visited
    </span>
  );
}
