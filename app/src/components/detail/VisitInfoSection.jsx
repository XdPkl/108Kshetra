/**
 * VisitInfoSection — pilgrim information (FR-83) in the zip-parity card
 * (UXD v3.0 Gate 3): temple timings plus the Festivals & Utsavams, How to
 * Reach, Stay & Darshan Tips and References blocks as gold-bordered tiles.
 * Every block falls back to the documented "not yet documented" note when
 * data is absent.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';
import ZipSection from './ZipSection.jsx';

const tileClass = 'p-5 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/35';

export default function VisitInfoSection({ kshetram }) {
  const { timings, festivals, access, tips, references } = kshetram;
  return (
    <ZipSection id="visit" title="Visit Info">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={tileClass}>
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Temple Timings</h3>
          {timings ? (
            <>
              <p className="text-sm font-semibold mt-2 text-[#332417]">
                🕉 Morning {timings.morning[0]} – {timings.morning[1]}
                {timings.evening ? ` · Evening ${timings.evening[0]} – ${timings.evening[1]}` : ''}
              </p>
              {timings.notes ? <p className="text-xs text-[#66523D] mt-1">{timings.notes}</p> : null}
              <p className="text-xs text-[#66523D] italic mt-2">Indicative timings — please confirm with the temple office.</p>
            </>
          ) : (
            <NotDocumented />
          )}
        </div>

        <div className={tileClass}>
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Festivals &amp; Utsavams</h3>
          {Array.isArray(festivals) && festivals.length > 0 ? (
            <ul className="mt-2.5 space-y-1 text-sm text-[#332417] list-disc pl-5">
              {festivals.map((f) => (
                <li key={f.name}>{f.name}{f.month ? ` — ${f.month}` : ''}</li>
              ))}
            </ul>
          ) : <div className="mt-2"><NotDocumented /></div>}
        </div>

        <div className={tileClass}>
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">How to Reach</h3>
          {access ? (
            <dl className="text-sm mt-2 space-y-1.5 text-[#332417]">
              {access.town ? (
                <div className="flex">
                  <dt className="w-20 shrink-0 text-xs text-[#66523D] uppercase tracking-wider pt-0.5">Town</dt>
                  <dd className="font-medium">{access.town}</dd>
                </div>
              ) : null}
              {access.rail ? (
                <div className="flex">
                  <dt className="w-20 shrink-0 text-xs text-[#66523D] uppercase tracking-wider pt-0.5">Rail</dt>
                  <dd className="font-medium">{access.rail}</dd>
                </div>
              ) : null}
              {access.airport ? (
                <div className="flex">
                  <dt className="w-20 shrink-0 text-xs text-[#66523D] uppercase tracking-wider pt-0.5">Airport</dt>
                  <dd className="font-medium">{access.airport}</dd>
                </div>
              ) : null}
              {access.road ? (
                <div className="flex">
                  <dt className="w-20 shrink-0 text-xs text-[#66523D] uppercase tracking-wider pt-0.5">Road</dt>
                  <dd className="font-medium">{access.road}</dd>
                </div>
              ) : null}
            </dl>
          ) : <div className="mt-2"><NotDocumented /></div>}
        </div>

        <div className={tileClass}>
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Stay &amp; Darshan Tips</h3>
          {Array.isArray(tips) && tips.length > 0 ? (
            <ul className="mt-2.5 space-y-1 text-sm text-[#332417] list-disc pl-5">
              {tips.map((tip) => <li key={tip.slice(0, 24)}>{tip}</li>)}
            </ul>
          ) : <div className="mt-2"><NotDocumented /></div>}
        </div>

        <div className={`${tileClass} md:col-span-2`}>
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">References</h3>
          {Array.isArray(references) && references.length > 0 ? (
            <ul className="mt-2.5 space-y-1 text-sm text-[#332417] list-disc pl-5">
              {references.map((ref) => <li key={ref.slice(0, 24)}>{ref}</li>)}
            </ul>
          ) : <div className="mt-2"><NotDocumented /></div>}
        </div>
      </div>
    </ZipSection>
  );
}
