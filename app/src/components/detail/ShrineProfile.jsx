/**
 * ShrineProfile — the "Basic Shrine Profile" definition grid (FR-83):
 * serial number, region, geography, Vimanam, Theertham, Sthala Vriksham,
 * sanctum posture and orientation. Renders whatever exists.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

export default function ShrineProfile({ kshetram }) {
  const p = kshetram.profile ?? {};
  const rows = [
    ['Region', p.regionNote ?? kshetram.region],
    ['Geographic location', p.location ?? `${kshetram.place} · ${kshetram.state}`],
    ['GPS coordinates', p.gps ?? (kshetram.coords ? `${kshetram.coords[0]}° N, ${kshetram.coords[1]}° E` : null)],
    ['Sanctum tower (Vimanam)', p.vimanam],
    ['Sacred water body (Theertham)', p.theertham],
    ['Sthala Vriksham', p.sthalaVriksham],
    ['Sanctum posture', p.posture ?? kshetram.deityForm],
    ['Orientation', p.orientation],
  ].filter(([, value]) => Boolean(value));

  return (
    <section id="profile" className="detail__section detail__section--full">
      <h2>
        Basic Shrine Profile
        {kshetram.serial ? (
          <span className="detail__serial" aria-label={`Divya Desam number ${kshetram.serial}`}>
            Divya Desam #{kshetram.serial}
          </span>
        ) : null}
      </h2>
      {rows.length === 0 ? (
        <NotDocumented />
      ) : (
        <dl className="detail__profile-grid">
          {rows.map(([label, value]) => (
            <div className="detail__profile-item" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
