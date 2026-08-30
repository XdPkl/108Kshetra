/**
 * AcharyasPage — the guru parampara index at /acharyas (US-ACH-02, FR-93):
 * Acharyas grouped by era, in parampara order, linking to detail pages.
 */
import { Link } from 'react-router-dom';
import { getAllAcharyas } from '../data/api.js';
import { groupBy } from '../utils/group.js';

export default function AcharyasPage() {
  const acharyas = getAllAcharyas();
  const groups = groupBy(acharyas, (a) => a.eraGroup);

  return (
    <div className="page saint-index">
      <h1>The Acharyas</h1>
      <p className="page__lead">
        The acharyas of the guru parampara — the teachers who received,
        preserved and expounded the Sri Vaishnava tradition after the Azhwars,
        in addition to the twelve saint-poets.
      </p>
      {[...groups.entries()].map(([eraGroup, list]) => (
        <section className="saint-index__group" key={eraGroup} aria-labelledby={`era-${eraGroup.slice(0, 12)}`}>
          <h2 id={`era-${eraGroup.slice(0, 12)}`}>{eraGroup}</h2>
          <div className="acharya-list">
            {list.map((a) => (
              <article className="azhwar-card acharya-card" key={a.id}>
                <Link to={`/acharya/${a.id}`} className="acharya-card__link">
                  <div className="azhwar-card__head">
                    <span lang="ta">{a.tamilName}</span>
                    <h3>{a.name}</h3>
                  </div>
                  <p className="azhwar-card__meta">{a.era}</p>
                  {a.titles ? <p className="acharya-card__titles">{a.titles.join(' · ')}</p> : null}
                  <p>{a.role}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
