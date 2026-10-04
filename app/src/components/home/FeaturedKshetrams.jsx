/**
 * FeaturedKshetrams — option-1 redesign (PO round 30): the shared
 * KshetramCard (the /kshetrams directory card: correct temple photo,
 * Tamil over English name, temple/place/state, region pill, gold
 * "View temple", trip chip and Mark visited) in a 1/2/3-column grid.
 * All four curated featured records render — the mockup's first row of
 * three (Srirangam, Thiruvengadam, Thirukkachi) plus Srivilliputhur,
 * which wraps onto a further row rather than being dropped (no
 * carousel, no invented imagery: photos come from each temple's own
 * record). Cream band, home-only (FR-11).
 */
import { Link } from 'react-router-dom';
import { getFeaturedKshetrams } from '../../data/api.js';
import { SITE_COPY } from '../../data/siteCopy.js';
import KshetramCard from '../KshetramCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function FeaturedKshetrams() {
  const featured = getFeaturedKshetrams();
  const { featured: copy } = SITE_COPY.home;
  return (
    <section className="w-full bg-[#FAF2E3]">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          lead={copy.lead}
          aside={(
            <Link to="/kshetrams" className="ui-tertiary">
              <span>{copy.viewAll}</span>
            </Link>
          )}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
        </div>
      </div>
    </section>
  );
}
