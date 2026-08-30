/**
 * KshetramCard — reusable card presenting one kshetram; the whole card
 * links to the detail page (FR-30). Used on Home and Browse. Visited badge
 * (FR-72) and trip control (FR-79) sit OUTSIDE the link so interactive
 * elements never nest.
 * @param {object} props
 * @param {Kshetram} props.kshetram - the kshetram record
 */
import { Link } from 'react-router-dom';
import Badge from './Badge.jsx';
import VisitedBadge from './VisitedBadge.jsx';
import TripControls from './TripControls.jsx';
import { useVisited } from '../hooks/useVisited.js';

export default function KshetramCard({ kshetram }) {
  const { isVisited } = useVisited();
  const visited = isVisited(kshetram.id);
  return (
    <article className={`kshetram-card${visited ? ' kshetram-card--visited' : ''}`}>
      <div className="kshetram-card__actions">
        {visited ? <VisitedBadge /> : <span className="kshetram-card__actions-spacer" />}
        <TripControls id={kshetram.id} variant="card" />
      </div>
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
