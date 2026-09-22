/**
 * FeaturedKshetrams — zip-parity featured section (UXD v3.0 Gate 2): ruled
 * section header with a "View all" link and the 4-card grid (FR-11).
 */
import { Link } from 'react-router-dom';
import { getFeaturedKshetrams } from '../../data/api.js';
import KshetramCard from '../KshetramCard.jsx';

export default function FeaturedKshetrams() {
  const featured = getFeaturedKshetrams();
  return (
    <section>
      {/* Section header */}
      <div className="border-b border-[#E3D2AE] pb-3 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
            Begin your journey
          </span>
          <h2 className="font-display text-3xl font-semibold text-[#7A2E00] mt-0.5">
            Featured Kshetrams
          </h2>
          <p className="text-sm text-[#66523D] mt-1">
            The most celebrated of the 108 abodes — hover a card to plan your visit.
          </p>
        </div>
        <Link
          to="/kshetrams"
          className="text-xs font-semibold text-[#B34700] hover:text-[#7A2E00] underline underline-offset-4 self-start sm:self-auto"
        >
          View all 108 Kshetrams →
        </Link>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((k) => <KshetramCard key={k.id} kshetram={k} />)}
      </div>
    </section>
  );
}
