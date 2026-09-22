/**
 * ShrineProfile — the "Basic Shrine Profile" definition grid (FR-83) in the
 * zip-parity three-column tile layout (UXD v3.0 Gate 3): serial number,
 * region, geography, Vimanam, Theertham, Sthala Vriksham, sanctum posture
 * and orientation. Renders whatever exists.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';
import ZipSection, { SerialBadge } from './ZipSection.jsx';

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
  const serial = kshetram.serial;

  return (
    <ZipSection
      id="profile"
      title="Basic Shrine Profile"
      badge={serial ? <SerialBadge serial={serial} /> : null}
    >
      {rows.length === 0 ? (
        <NotDocumented />
      ) : (
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rows.map(([label, value]) => (
            <div key={label} className="p-4 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/35 border-l-4 border-l-[#C99A2E]">
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#66523D]">
                {label}
              </dt>
              <dd className="text-sm mt-1 font-medium text-[#332417]">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </ZipSection>
  );
}
