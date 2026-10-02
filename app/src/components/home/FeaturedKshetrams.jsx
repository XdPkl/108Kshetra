/**
 * FeaturedKshetrams — coordinated restyle (PO round 23): shared
 * SectionHeading with the right-aligned view-all tertiary link over the
 * 2×2 grid of shared TempleCards (the directory temple-card foundation:
 * View temple / Add to trip / Mark as visited action set). Cream band,
 * home-only (FR-11).
 */
import { Link } from 'react-router-dom';
import { getFeaturedKshetrams } from '../../data/api.js';
import { SITE_COPY } from '../../data/siteCopy.js';
import TempleCard from '../directory/TempleCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function FeaturedKshetrams() {
  const featured = getFeaturedKshetrams();
  const { featured: copy } = SITE_COPY.home;
  return (
    <section className="w-full bg-[#FFFDF7]">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((k) => <TempleCard key={k.id} kshetram={k} />)}
        </div>
      </div>
    </section>
  );
}
