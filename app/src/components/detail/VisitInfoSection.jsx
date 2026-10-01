/**
 * VisitInfoSection — pilgrim information (FR-83), adjusted per the PO
 * round-17 audit: the daily-darshan lines from `timings.notes` render under
 * "Special darshan timings" while any Ekadasi/festival sentence becomes a
 * separately labelled "Festival note" (no invented dates); a fully empty
 * "Further visit details" set collapses to one short note instead of four
 * "not yet documented" rows; directions stay the primary action; the
 * temple-office disclaimer is preserved.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import { Clock } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { MAPS_URL_TEMPLATE } from '../../data/config.js';
import NotDocumented from './NotDocumented.jsx';

const FESTIVAL_PATTERN = /ekad[ai]si|utsavam|festival|brahmotsavam/i;

/** Splits `timings.notes` into darshan lines and festival-note lines. */
function splitNotes(notes) {
  if (!notes) return { special: [], festival: [] };
  const lines = notes.split(/;\s*/).map((s) => s.trim()).filter(Boolean);
  return {
    special: lines.filter((s) => !FESTIVAL_PATTERN.test(s)),
    festival: lines.filter((s) => FESTIVAL_PATTERN.test(s)),
  };
}

export default function VisitInfoSection({ kshetram }) {
  const { timings, festivals, access, tips, references } = kshetram;
  const p = kshetram.profile ?? {};
  const directionsHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${kshetram.mapQuery}`)}`
    : null;
  const { special, festival } = splitNotes(timings?.notes);
  const hasFestivals = Array.isArray(festivals) && festivals.length > 0;
  const hasAccess = Boolean(access);
  const hasTips = Array.isArray(tips) && tips.length > 0;
  const hasReferences = Array.isArray(references) && references.length > 0;
  const hasAnyFurther = hasFestivals || hasAccess || hasTips || hasReferences;

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

          {special.length > 0 ? (
            <>
              <h3 className="section-rule">Special darshan timings</h3>
              {special.map((line) => <p className="value" key={line}>{line}</p>)}
            </>
          ) : null}

          {festival.length > 0 ? (
            <>
              <h3 className="section-rule">Festival note</h3>
              {festival.map((line) => <p className="value" key={line}>{line}</p>)}
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
        {hasAnyFurther ? (
          <dl className="facts">
            <div className="fact-row">
              <dt>Festivals &amp; utsavams</dt>
              <dd>
                {hasFestivals ? (
                  <ul className="list-disc pl-5">
                    {festivals.map((f) => (
                      <li key={f.name}>{f.name}{f.month ? ` — ${f.month}` : ''}</li>
                    ))}
                  </ul>
                ) : <p className="detail__nodata">Not yet documented.</p>}
              </dd>
            </div>
            <div className="fact-row">
              <dt>How to reach</dt>
              <dd>
                {hasAccess ? (
                  <dl className="space-y-1.5">
                    {['town', 'rail', 'airport', 'road'].map((key) => (access[key] ? (
                      <div className="flex" key={key}>
                        <dt className="w-20 shrink-0 text-xs uppercase tracking-wider pt-0.5 text-[#74716B]">{key}</dt>
                        <dd className="font-medium">{access[key]}</dd>
                      </div>
                    ) : null))}
                  </dl>
                ) : <p className="detail__nodata">Not yet documented.</p>}
              </dd>
            </div>
            <div className="fact-row">
              <dt>Stay &amp; darshan tips</dt>
              <dd>
                {hasTips ? (
                  <ul className="list-disc pl-5">
                    {tips.map((tip) => <li key={tip.slice(0, 24)}>{tip}</li>)}
                  </ul>
                ) : <p className="detail__nodata">Not yet documented.</p>}
              </dd>
            </div>
            <div className="fact-row">
              <dt>References</dt>
              <dd>
                {hasReferences ? (
                  <ul className="list-disc pl-5">
                    {references.map((ref) => <li key={ref.slice(0, 24)}>{ref}</li>)}
                  </ul>
                ) : <p className="detail__nodata">Not yet documented.</p>}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="detail__nodata">
            Additional travel and darshan details are not yet documented.
          </p>
        )}
        <p className="note">Your visits and trip list are saved in this browser only.</p>
      </div>
    </section>
  );
}
