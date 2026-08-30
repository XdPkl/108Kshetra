/**
 * Identification — the definition grid at the top of a saint page
 * (Azhwar/Acharya templates, FR-90/94).
 * @param {object} props
 * @param {{label: string, value: import('react').ReactNode}[]} props.rows
 */
export default function Identification({ rows }) {
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;
  return (
    <dl className="detail__profile-grid saint-identification">
      {visible.map(({ label, value }) => (
        <div className="detail__profile-item" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
