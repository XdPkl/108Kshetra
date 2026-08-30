/**
 * VisitInfoSection — pilgrim information (FR-83): temple timings plus the
 * Festivals & Utsavams, How to Reach, Stay & Darshan Tips and References
 * blocks. Every block falls back to the documented "not yet documented"
 * note when data is absent.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

export default function VisitInfoSection({ kshetram }) {
  const { timings, festivals, access, tips, references } = kshetram;
  return (
    <section id="visit" className="detail__section detail__section--full">
      <h2>Visit Info</h2>
      <div className="visit-info">
        <div className="visit-info__block">
          <h3>Temple Timings</h3>
          {timings ? (
            <>
              <p className="timings__sessions">
                🕉 Morning {timings.morning[0]} – {timings.morning[1]}
                {timings.evening ? ` · Evening ${timings.evening[0]} – ${timings.evening[1]}` : ''}
              </p>
              {timings.notes ? <p className="timings__notes">{timings.notes}</p> : null}
              <p className="timings__note">Indicative timings — please confirm with the temple office.</p>
            </>
          ) : (
            <NotDocumented />
          )}
        </div>

        <div className="visit-info__block">
          <h3>Festivals &amp; Utsavams</h3>
          {Array.isArray(festivals) && festivals.length > 0 ? (
            <ul>
              {festivals.map((f) => (
                <li key={f.name}>{f.name}{f.month ? ` — ${f.month}` : ''}</li>
              ))}
            </ul>
          ) : <NotDocumented />}
        </div>

        <div className="visit-info__block">
          <h3>How to Reach</h3>
          {access ? (
            <dl className="visit-info__access">
              {access.town ? <><dt>Town</dt><dd>{access.town}</dd></> : null}
              {access.rail ? <><dt>Rail</dt><dd>{access.rail}</dd></> : null}
              {access.airport ? <><dt>Airport</dt><dd>{access.airport}</dd></> : null}
              {access.road ? <><dt>Road</dt><dd>{access.road}</dd></> : null}
            </dl>
          ) : <NotDocumented />}
        </div>

        <div className="visit-info__block">
          <h3>Stay &amp; Darshan Tips</h3>
          {Array.isArray(tips) && tips.length > 0 ? (
            <ul>
              {tips.map((tip) => <li key={tip.slice(0, 24)}>{tip}</li>)}
            </ul>
          ) : <NotDocumented />}
        </div>

        <div className="visit-info__block">
          <h3>References</h3>
          {Array.isArray(references) && references.length > 0 ? (
            <ul>
              {references.map((ref) => <li key={ref.slice(0, 24)}>{ref}</li>)}
            </ul>
          ) : <NotDocumented />}
        </div>
      </div>
    </section>
  );
}
