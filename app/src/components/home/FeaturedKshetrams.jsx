/**
 * FeaturedKshetrams — 2026-09 refresh (PO-approved mockup): eyebrow + display
 * title header with the right-aligned "view all" link, over the 4-card grid
 * of large photo cards (FR-11). Cream band, home-only.
 */
import { Link } from 'react-router-dom';
import { getFeaturedKshetrams } from '../../data/api.js';
import { SITE_COPY } from '../../data/siteCopy.js';
import FeaturedKshetramCard from './FeaturedKshetramCard.jsx';

export default function FeaturedKshetrams() {
  const featured = getFeaturedKshetrams();
  const { featured: copy } = SITE_COPY.home;
  return (
    <section className="w-full bg-[#FFFDF7]">
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#A6261D]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[44px]! leading-[1.05]! font-semibold text-[#5C1F00]!">
              {copy.title}
            </h2>
            <p className="mt-2 text-[15px] text-[#66523D]">
              {copy.lead}
            </p>
          </div>
          {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
          <Link
            to="/kshetrams"
            className="mb-1 text-[15px]! font-semibold text-[#7A2E00]! underline decoration-[#C99A2E]/70 underline-offset-[6px] hover:decoration-[#7A2E00]"
          >
            {copy.viewAll}
          </Link>
        </div>

        {/* Card grid — 2×2 of large horizontal cards (PO mockup 2026-09-30) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((k) => <FeaturedKshetramCard key={k.id} kshetram={k} />)}
        </div>
      </div>
    </section>
  );
}
