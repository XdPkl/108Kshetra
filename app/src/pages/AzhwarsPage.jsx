/**
 * AzhwarsPage — the twelve Azhwars in traditional order with the desams
 * they glorified, linking into Browse pre-filtered (FR-40/41).
 */
import { Link } from 'react-router-dom';
import { getAllAzhwars, getKshetramsByAzhwar } from '../data/api.js';
import Badge from '../components/Badge.jsx';

/** Number of desam chips shown before the "+N more" link. */
const CHIP_LIMIT = 4;

export default function AzhwarsPage() {
  const azhwars = getAllAzhwars();
  return (
    <div className="page">
      <h1>The Twelve Azhwars</h1>
      <p className="page__lead">
        The saint-poets of the Nalayira Divya Prabandham whose hymns sanctified
        the 108 Divya Desams, listed in traditional chronological order.
      </p>
      <div className="azhwar-list">
        {azhwars.map((azhwar) => {
          const desams = getKshetramsByAzhwar(azhwar.id);
          const chips = desams.slice(0, CHIP_LIMIT);
          const more = desams.length - chips.length;
          return (
            <article className="azhwar-card" key={azhwar.id}>
              <Link to={`/azhwar/${azhwar.id}`} className="azhwar-card__detail-link">
                <div className="azhwar-card__head">
                  <span lang="ta">{azhwar.tamilName}</span>
                  <h2>{azhwar.name}</h2>
                </div>
              </Link>
              <p className="azhwar-card__meta">
                {azhwar.period} · {azhwar.pasuramCount.toLocaleString('en-IN')} pasurams
              </p>
              <p>{azhwar.note}</p>
              <p className="azhwar-card__work"><em>{azhwar.work}</em></p>
              <div className="azhwar-card__desams">
                <Badge>{desams.length} desams</Badge>
                {chips.map((k) => (
                  <Link key={k.id} to={`/kshetram/${k.id}`} className="chip">
                    {k.name}
                  </Link>
                ))}
                {more > 0 ? (
                  <Link className="chip chip--more" to={`/kshetrams?azhwar=${azhwar.id}`}>
                    +{more} more
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
