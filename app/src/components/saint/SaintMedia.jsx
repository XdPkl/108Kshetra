/**
 * SaintMedia — iconography, listening chips and digital texts shared by
 * the saint templates (FR-90/94).
 * @param {object} props
 * @param {object} [props.visuals] - {iconography?, videoSearches?, digitalTexts?}
 */
import NotDocumented from '../detail/NotDocumented.jsx';

export default function SaintMedia({ visuals }) {
  const hasAny = visuals
    && [visuals.iconography, visuals.videoSearches, visuals.digitalTexts]
      .some((x) => (Array.isArray(x) ? x.length > 0 : Boolean(x)));
  if (!hasAny) return <NotDocumented />;
  return (
    <div className="visuals-media">
      {visuals.iconography ? (
        <div>
          <h3>Iconography</h3>
          <p>{visuals.iconography}</p>
        </div>
      ) : null}
      {Array.isArray(visuals.videoSearches) && visuals.videoSearches.length > 0 ? (
        <div>
          <h3>Recommended listening</h3>
          <p className="visuals-media__chips">
            {visuals.videoSearches.map((q) => (
              <a
                key={q}
                className="chip"
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ {q} ↗
              </a>
            ))}
          </p>
        </div>
      ) : null}
      {Array.isArray(visuals.digitalTexts) && visuals.digitalTexts.length > 0 ? (
        <div>
          <h3>Digital texts</h3>
          <ul>
            {visuals.digitalTexts.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
