/**
 * NotDocumented — the muted fallback line shown when a shrine-template
 * block has no data yet (FR-83: never a blank heading).
 * @param {object} [props]
 * @param {string} [props.as] - render as list item when 'li'
 */
export default function NotDocumented({ as = 'p' }) {
  const Tag = as;
  return <Tag className="detail__nodata">Not yet documented yet.</Tag>;
}
