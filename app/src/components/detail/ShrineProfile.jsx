/**
 * ShrineProfile — the round-16 mock's "Shrine at a glance" fact sheet
 * (FR-83): gold-labelled ruled rows for region, geography, GPS, Vimanam,
 * Theertham, Sthala Vriksham, sanctum posture, distinctive form and
 * orientation. Renders whatever exists; the dossier posture string's
 * "Unique feature:" tail becomes the Distinctive form row.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

export default function ShrineProfile({ kshetram }) {
  const p = kshetram.profile ?? {};
  const posture = p.posture ?? kshetram.deityForm ?? null;
  const uniqueSplit = posture?.split(/\s*Unique feature:\s*/i) ?? [];
  const postureMain = uniqueSplit.length > 1 ? uniqueSplit[0] : posture;
  const distinctive = uniqueSplit.length > 1
    ? uniqueSplit.slice(1).join(' — ')
    : (p.posture && kshetram.deityForm ? kshetram.deityForm : null);
  const rows = [
    ['Region', p.regionNote ?? kshetram.region],
    ['Location', p.location ?? `${kshetram.place} · ${kshetram.state}`],
    ['GPS coordinates', p.gps ?? (kshetram.coords ? `${kshetram.coords[0]}° N, ${kshetram.coords[1]}° E` : null)],
    ['Vimanam', p.vimanam],
    ['Theertham', p.theertham],
    ['Sthala Vriksham', p.sthalaVriksham],
    ['Posture', postureMain],
    ['Distinctive form', distinctive],
    ['Orientation', p.orientation],
  ].filter(([, value]) => Boolean(value));

  return (
    <section id="profile" className="scroll-mt-36">
      <h2>Shrine at a glance</h2>
      {rows.length === 0 ? (
        <NotDocumented />
      ) : (
        <dl className="facts">
          {rows.map(([label, value]) => (
            <div className="fact-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
