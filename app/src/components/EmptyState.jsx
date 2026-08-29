/**
 * EmptyState — reusable empty/error message block with an optional action (FR-24/33).
 * @param {object} props
 * @param {string} props.title     - message heading
 * @param {string} [props.message] - explanatory text
 * @param {React.ReactNode} [props.action] - call-to-action element (e.g. a Link)
 */
export default function EmptyState({ title, message, action }) {
  return (
    <div className="empty-state" role="status">
      <h2 className="empty-state__title">{title}</h2>
      {message ? <p className="empty-state__message">{message}</p> : null}
      {action ? <div className="empty-state__action">{action}</div> : null}
    </div>
  );
}
