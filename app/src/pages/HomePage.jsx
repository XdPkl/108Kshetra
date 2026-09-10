/**
 * HomePage — compact hero over the Adisesha sketch watermark, yatra
 * progress, featured kshetrams and the Azhwar/Acharya darshan strips
 * (FR-10/11/12, PO request 2026-09-10).
 */
import { Link } from 'react-router-dom';
import { getAllAzhwars, getFeaturedAcharyas, getFeaturedKshetrams } from '../data/api.js';
import { SITE_STATS } from '../data/config.js';
import KshetramCard from '../components/KshetramCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProgressBanner from '../components/ProgressBanner.jsx';
import WikiThumb from '../components/WikiThumb.jsx';
import heroSketch from '../assets/hero-adisesha-sketch.jpg';

/** Featured-strip card: one thumbnail + the saint's names, whole card links. */
function SaintCard({ saint, base }) {
  return (
    <Link className="saint-card" to={`${base}/${saint.id}`}>
      <WikiThumb title={saint.wiki ?? null} alt={`${saint.name} portrait`} />
      <span className="saint-card__name">{saint.name}</span>
      <span className="saint-card__tamil" lang="ta">{saint.tamilName}</span>
    </Link>
  );
}

export default function HomePage() {
  const featured = getFeaturedKshetrams();
  const featuredAzhwars = getAllAzhwars().slice(0, 4);
  const featuredAcharyas = getFeaturedAcharyas();
  return (
    <div className="page">
      <section className="hero" style={{ '--hero-sketch': `url(${heroSketch})` }}>
        <h1>108 Divya Kshetrams</h1>
        <p className="hero__intro">
          The sacred abodes of Lord Narayana — the 108 Divya Desams glorified by
          the twelve Azhwars in the four thousand verses of the Nalayira Divya
          Prabandham, the Tamil Veda.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/kshetrams">Explore the 108 Kshetrams</Link>
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

      <section className="darshan-strip">
        <SectionHeading
          title="The Twelve Azhwars"
          lead="Saint-poets whose hymns sanctified these hills, groves and cities."
        />
        <div className="darshan-strip__grid">
          {featuredAzhwars.map((a) => <SaintCard key={a.id} saint={a} base="/azhwar" />)}
        </div>
        <div className="darshan-strip__action">
          <Link className="btn btn--outline" to="/azhwars">Azhwar Darshan - Featured</Link>
        </div>
      </section>

      <section className="darshan-strip">
        <SectionHeading
          title="The Acharyas"
          lead="The guru parampara that received, preserved and expounded the tradition."
        />
        <div className="darshan-strip__grid">
          {featuredAcharyas.map((a) => <SaintCard key={a.id} saint={a} base="/acharya" />)}
        </div>
        <div className="darshan-strip__action">
          <Link className="btn btn--outline" to="/acharyas">Acharya Darshan - Featured</Link>
        </div>
      </section>
    </div>
  );
}
