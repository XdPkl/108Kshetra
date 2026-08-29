/**
 * KshetramCard — reusable card presenting one kshetram; the whole card
 * links to the detail page (FR-30). Used on Home and Browse.
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record
 */
import { Link } from 'react-router-dom';
import Badge from './Badge.jsx';

export default function KshetramCard({ kshetram }) {
  return (
    <article className="kshetram-card">
      <Link to={`/kshetram/${kshetram.id}`} className="kshetram-card__link">
        <p className="kshetram-card__tamil" lang="ta">{kshetram.tamilName}</p>
        <h3 className="kshetram-card__name">{kshetram.name}</h3>
        <p className="kshetram-card__place">{kshetram.temple}</p>
        <p className="kshetram-card__place">{kshetram.place} · {kshetram.state}</p>
        <div className="kshetram-card__badges">
          <Badge>{kshetram.deity}</Badge>
          <Badge>{kshetram.region}</Badge>
        </div>
      </Link>
    </article>
  );
}
