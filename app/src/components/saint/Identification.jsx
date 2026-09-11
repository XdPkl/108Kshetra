/**
 * Identification — the portrait-plus-details block at the top of a saint
 * page (Azhwar/Acharya templates, FR-90/94; UXD v2 mocks). The portrait
 * (PO-supplied painting when available) sits on the left; the name row
 * renders as alias chips and the remaining details as definition cards.
 * @param {object} props
 * @param {{label: string, value: import('react').ReactNode}[]} props.rows
 * @param {{src?: string|null, wiki?: string|null, alt: string}} [props.portrait]
 */
import WikiThumb from '../WikiThumb.jsx';

export default function Identification({ rows, portrait }) {
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;
  const [first, ...rest] = visible;
  const aliases = typeof first.value === 'string' && first.value.includes(' · ')
    ? first.value.split(' · ')
    : null;
  return (
    <div className="saint-id">
      {portrait ? (
        <figure className="saint-id__portrait">
          <WikiThumb title={portrait.wiki ?? null} src={portrait.src ?? null} alt={portrait.alt} />
        </figure>
      ) : null}
      <dl className="saint-id__details">
        <div className="saint-id__names">
          <dt>{first.label}</dt>
          <dd>
            {aliases
              ? aliases.map((alias) => <span className="saint-alias" key={alias}>{alias}</span>)
              : first.value}
          </dd>
        </div>
        <div className="saint-id__grid">
          {rest.map(({ label, value }) => (
            <div className="saint-id__card" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </div>
      </dl>
    </div>
  );
}
