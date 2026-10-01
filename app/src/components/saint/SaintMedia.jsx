/**
 * SaintMedia — iconography, listening rows and digital texts shared by the
 * saint templates (FR-90/94). Restyled to the kxd theme (round 18): fact
 * rows for structured iconography, YouTube listening rows and a plain
 * digital-texts list. Iconography may be a single string or a structured
 * dossier block {posture?, mudras?, garments?, idol?}.
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

export default function SaintMedia({ visuals }) {
  const hasAny = visuals
    && [visuals.iconography, visuals.videoSearches, visuals.digitalTexts]
      .some((x) => (Array.isArray(x) ? x.length > 0 : Boolean(x)));
  if (!hasAny) return <NotDocumented />;
  const hasListening = Array.isArray(visuals.videoSearches) && visuals.videoSearches.length > 0;
  const hasTexts = Array.isArray(visuals.digitalTexts) && visuals.digitalTexts.length > 0;
  return (
    <div>
      <div className="acd-media-grid">
        {visuals.iconography ? (
          <div>
            <h3>Sacred iconography</h3>
            {typeof visuals.iconography === 'string' ? (
              <p>{visuals.iconography}</p>
            ) : (
              <dl className="facts">
                {ICONOGRAPHY_LABELS.map(([key, label]) => (
                  visuals.iconography[key] ? (
                    <div key={key} className="fact-row">
                      <dt>{label}</dt>
                      <dd>{visuals.iconography[key]}</dd>
                    </div>
                  ) : null
                ))}
              </dl>
            )}
          </div>
        ) : null}
        {hasListening ? (
          <div>
            <h3>Recommended listening &amp; discourses</h3>
            <div>
              {visuals.videoSearches.map((q) => (
                <a
                  key={q}
                  className="acd-listen"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="acd-listen-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </span>
                  <span className="min-w-0">
                    <span className="acd-listen-title">{q}</span>
                    <span className="note">Search on YouTube ↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {hasTexts ? (
        <div className="section-rule">
          <h3>Digital texts</h3>
          <ul className="disc-list">
            {visuals.digitalTexts.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
