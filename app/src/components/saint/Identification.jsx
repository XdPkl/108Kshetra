/**
 * Identification — the portrait-plus-details block at the top of a saint
 * page (Azhwar/Acharya templates, FR-90/94; UXD v1.5 §27). The portrait
 * (PO-supplied painting when available) sits on the left; the details are
 * stacked one below the other on the right.
 * @param {object} props
 * @param {{label: string, value: import('react').ReactNode}[]} props.rows
 * @param {{src?: string|null, wiki?: string|null, alt: string}} [props.portrait]
 */
import WikiThumb from '../WikiThumb.jsx';

export default function Identification({ rows, portrait }) {
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;
  return (
    <div className="saint-id">
      {portrait ? (
        <figure className="saint-id__portrait">
          <WikiThumb title={portrait.wiki ?? null} src={portrait.src ?? null} alt={portrait.alt} />
        </figure>
      ) : null}
      <dl className="saint-id__details">
        {visible.map(({ label, value }) => (
          <div className="saint-id__row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
