/**
 * VisitInfoSection — pilgrim information (FR-83) in the round-16 mock's
 * layout: "Plan your darshan" (big serif timing hours, festival highlight,
 * getting-here text, directions button), a "Quick facts" tinted card and a
 * "Further visit details" fact sheet whose blocks fall back to the
 * documented "not yet documented" note when data is absent.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import { Clock } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { MAPS_URL_TEMPLATE } from '../../data/config.js';
import NotDocumented from './NotDocumented.jsx';

export default function VisitInfoSection({ kshetram }) {
  const { timings, festivals, access, tips, references } = kshetram;
  const p = kshetram.profile ?? {};
  const directionsHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${kshetram.mapQuery}`)}`
    : null;

  return (
    <section id="visit">
      <div className="overview-grid">
        <div>
          <h2>Plan your darshan</h2>
          <p>
            Essential visitor information for {kshetram.temple || kshetram.name}.
          </p>

          <h3 className="section-rule">Temple timings</h3>
          {timings ? (
            <>
              <div className="timing-pair">
                <div>
                  <div className="label">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Morning
                  </div>
                  <span className="hour">{timings.morning[0]} – {timings.morning[1]}</span>
                </div>
                {timings.evening ? (
                  <div>
                    <div className="label">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      Evening
                    </div>
                    <span className="hour">{timings.evening[0]} – {timings.evening[1]}</span>
                  </div>
                ) : null}
              </div>
              <p className="note">
                <em>Indicative timings — please confirm with the temple office.</em>
              </p>
            </>
          ) : (
            <NotDocumented />
          )}

          {timings?.notes ? (
            <>
              <h3 className="section-rule">Festival highlight</h3>
              <p className="value">{timings.notes}</p>
            </>
          ) : null}

          <h3 className="section-rule">Getting here</h3>
          <p>{p.location ?? `${kshetram.place} · ${kshetram.state}`}</p>
          {directionsHref ? (
            <a
              className="btn primary directions"
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
            </a>
          ) : null}
        </div>

        <aside className="visit-card">
          <h3>Quick facts</h3>
          <div className="times">
            <span>Divya Desam</span>
            <strong>{kshetram.serial ?? '—'}</strong>
          </div>
          <div className="times">
            <span>Region</span>
            <span>{kshetram.region}</span>
          </div>
          <div className="times">
            <span>Location</span>
            <span>{kshetram.place}, {kshetram.state}</span>
          </div>
        </aside>
      </div>

      <div className="section-rule">
        <h3>Further visit details</h3>
        <dl className="facts">
          <div className="fact-row">
            <dt>Festivals &amp; utsavams</dt>
            <dd>
              {Array.isArray(festivals) && festivals.length > 0 ? (
                <ul className="list-disc pl-5">
                  {festivals.map((f) => (
                    <li key={f.name}>{f.name}{f.month ? ` — ${f.month}` : ''}</li>
                  ))}
                </ul>
              ) : <NotDocumented />}
            </dd>
          </div>
          <div className="fact-row">
            <dt>How to reach</dt>
            <dd>
              {access ? (
                <dl className="space-y-1.5">
                  {['town', 'rail', 'airport', 'road'].map((key) => (access[key] ? (
                    <div className="flex" key={key}>
                      <dt className="w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5 text-[#74716B]">{key}</dt>
                      <dd className="font-medium">{access[key]}</dd>
                    </div>
                  ) : null))}
                </dl>
              ) : <NotDocumented />}
            </dd>
          </div>
          <div className="fact-row">
            <dt>Stay &amp; darshan tips</dt>
            <dd>
              {Array.isArray(tips) && tips.length > 0 ? (
                <ul className="list-disc pl-5">
                  {tips.map((tip) => <li key={tip.slice(0, 24)}>{tip}</li>)}
                </ul>
              ) : <NotDocumented />}
            </dd>
          </div>
          <div className="fact-row">
            <dt>References</dt>
            <dd>
              {Array.isArray(references) && references.length > 0 ? (
                <ul className="list-disc pl-5">
                  {references.map((ref) => <li key={ref.slice(0, 24)}>{ref}</li>)}
                </ul>
              ) : <NotDocumented />}
            </dd>
          </div>
        </dl>
        <p className="note">Your visits and trip list are saved in this browser only.</p>
      </div>
    </section>
  );
}
