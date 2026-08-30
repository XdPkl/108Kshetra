/**
 * ProgressBanner — "X of 108 kshetrams visited" with a reset action
 * (FR-73/75). Data never leaves the browser; reset confirms first.
 * @param {object} props
 * @param {number} props.total - total earthly kshetrams (108)
 */
import { useVisited } from '../hooks/useVisited.js';

export default function ProgressBanner({ total }) {
  const { count, resetVisited } = useVisited();
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;

  const onReset = () => {
    if (window.confirm(`Clear all ${count} visited marks? This cannot be undone.`)) {
      resetVisited();
    }
  };

  return (
    <section className="progress-banner" aria-label="Darshan progress">
      <p className="progress-banner__label">
        <span aria-hidden="true">🙏</span> Your yatra — <strong>{count}</strong> of{' '}
        {total} kshetrams visited
      </p>
      <div
        className="progress-banner__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={count}
        aria-label={`${count} of ${total} kshetrams visited`}
      >
        <div className="progress-banner__fill" style={{ width: `${percent}%` }} />
      </div>
      {count > 0 ? (
        <button type="button" className="progress-banner__reset" onClick={onReset}>
          Reset progress
        </button>
      ) : null}
    </section>
  );
}
