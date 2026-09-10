/**
 * SaintMedia — iconography, listening cards and digital texts shared by the
 * saint templates (FR-90/94; UXD v1.5 §27): a two-column top row (iconography
 * | recommended listening) with digital texts full-width below. Iconography
 * may be a single string or a structured dossier block
 * {posture?, mudras?, garments?, idol?}. Recommended listening renders each
 * video search as a YouTube-style card (play badge + query + hint).
 * @param {object} props
 * @param {object} [props.visuals] - {iconography?, videoSearches?, digitalTexts?}
 */
import NotDocumented from '../detail/NotDocumented.jsx';

const ICONOGRAPHY_LABELS = [
  ['posture', 'Physical posture (asana)'],
  ['mudras', 'Hand gestures (mudras)'],
  ['garments', 'Garments & embellishments'],
  ['idol', 'Avathara sthalam idol'],
];

/** YouTube-style play badge (decorative). */
function PlayBadge() {
  return (
    <svg className="listen-card__badge" viewBox="0 0 28 20" aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="27" height="19" rx="5" fill="#c4302b" stroke="rgba(0,0,0,0.15)" />
      <path d="M11.4 5.9l7.2 4.1-7.2 4.1V5.9z" fill="#fffdf7" />
    </svg>
  );
}

function Iconography({ iconography }) {
  if (typeof iconography === 'string') return <p>{iconography}</p>;
  return (
    <dl className="saint-iconography">
      {ICONOGRAPHY_LABELS.map(([key, label]) => (
        iconography[key] ? (
          <div key={key}>
            <dt>{label}</dt>
            <dd>{iconography[key]}</dd>
          </div>
        ) : null
      ))}
    </dl>
  );
}

export default function SaintMedia({ visuals }) {
  const hasAny = visuals
    && [visuals.iconography, visuals.videoSearches, visuals.digitalTexts]
      .some((x) => (Array.isArray(x) ? x.length > 0 : Boolean(x)));
  if (!hasAny) return <NotDocumented />;
  const hasListening = Array.isArray(visuals.videoSearches) && visuals.videoSearches.length > 0;
  const hasTexts = Array.isArray(visuals.digitalTexts) && visuals.digitalTexts.length > 0;
  return (
    <div className="saint-media">
      {visuals.iconography || hasListening ? (
        <div className="saint-media__top">
          {visuals.iconography ? (
            <div className="saint-media__col">
              <h3>Iconography</h3>
              <Iconography iconography={visuals.iconography} />
            </div>
          ) : null}
          {hasListening ? (
            <div className="saint-media__col">
              <h3>Recommended listening</h3>
              <ul className="listen-cards">
                {visuals.videoSearches.map((q) => (
                  <li key={q}>
                    <a
                      className="listen-card"
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayBadge />
                      <span className="listen-card__body">
                        <span className="listen-card__title">{q}</span>
                        <span className="listen-card__hint">Search on YouTube ↗</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
      {hasTexts ? (
        <div className="saint-media__bottom">
          <h3>Digital texts</h3>
          <ul className="saint-media__texts">
            {visuals.digitalTexts.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
