/**
 * HomePage — hero, statistics, featured kshetrams and Azhwar teaser (FR-10/11/12).
 */
import { Link } from 'react-router-dom';
import { getFeaturedKshetrams } from '../data/api.js';
import { SITE_STATS } from '../data/config.js';
import KshetramCard from '../components/KshetramCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProgressBanner from '../components/ProgressBanner.jsx';

export default function HomePage() {
  const featured = getFeaturedKshetrams();
  return (
    <div className="page">
      <section className="hero">
        <p className="hero__ornament" aria-hidden="true">◆ ◆ ◆</p>
        <h1>108 Divya Kshetrams</h1>
        <p className="hero__intro">
          The sacred abodes of Lord Narayana — the 108 Divya Desams glorified by
          the twelve Azhwars in the four thousand verses of the Nalayira Divya
          Prabandham, the Tamil Veda.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/kshetrams">Explore the 108 Kshetrams</Link>
          <Link className="btn btn--outline" to="/azhwars">Azhwars</Link>
        </div>
      </section>

      <section className="stat-band" aria-label="Key figures">
        <div className="stat-band__item">
          <span className="stat-band__value">{SITE_STATS.kshetramCount}</span>
          <span className="stat-band__label">Kshetrams</span>
        </div>
        <div className="stat-band__item">
          <span className="stat-band__value">{SITE_STATS.azhwarCount}</span>
          <span className="stat-band__label">Azhwars</span>
        </div>
        <div className="stat-band__item">
          <span className="stat-band__value">{SITE_STATS.pasuramCount.toLocaleString('en-IN')}+</span>
          <span className="stat-band__label">Pasurams</span>
        </div>
      </section>

      <ProgressBanner total={SITE_STATS.kshetramCount} />

      <section>
        <SectionHeading
          title="Featured Kshetrams"
          lead="Begin your journey at the most celebrated of the 108 abodes."
        />
        <div className="card-grid">
          {featured.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      </section>

      <section className="azhwar-teaser">
        <SectionHeading
          title="The Twelve Azhwars"
          lead="Saint-poets whose hymns sanctified these hills, groves and cities."
        />
        <Link className="btn btn--outline" to="/azhwars">Discover the Azhwars</Link>
      </section>
    </div>
  );
}
