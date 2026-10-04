/**
 * HomePage — option-1 redesign (PO round 30): immersive photo hero,
 * the pilgrimage progress strip, the featured KshetramCard grid (all
 * four curated records — the mockup's three plus Srivilliputhur on a
 * further row), the Azhwar/Acharya tradition columns (open editorial
 * halves with a vertical divider, each keeping its compact profile
 * previews below the introduction) and the guided-yatra invitation
 * (About-style two-column band with the shared gopuram illustration
 * and the standing browse quote). The main shell drops its constrained
 * container on this route (App.jsx) so the bands run edge-to-edge with
 * their own max-w-site columns.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllAzhwars, getAllKshetrams, getFeaturedAcharyas } from '../data/api.js';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';
import Hero from '../components/home/Hero.jsx';
import YatraProgressTracker from '../components/home/YatraProgressTracker.jsx';
import FeaturedKshetrams from '../components/home/FeaturedKshetrams.jsx';
import PersonPreview from '../components/directory/PersonPreview.jsx';

// Kshetrams gold action on the shared .ui-btn base (round-29 idiom).
const goldBtn = 'ui-btn rounded-lg! bg-[#96731F] text-[#FFFDF7]! shadow-xs transition-colors hover:bg-[#7A2E00]!';

/** One half of the tradition section: eyebrow, display heading, concise
 * explanation, tertiary Explore link, then the compact profile previews
 * (existing homepage profile access, kept). */
function TraditionColumn({ strip, saints, base, ctaTo }) {
  return (
    <div className="min-w-0">
      <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
        {strip.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
        {strip.title}
      </h2>
      <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.6] text-[#332417]">{strip.lead}</p>
      <Link to={ctaTo} className="ui-tertiary mt-4">
        <span>{strip.ctaLabel}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {/* Compact previews — the profile links stay reachable (PO round 30).
          Two per row keeps even the longest names on one line, so the
          "View profile" links align across the row. */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        {saints.map((saint) => (
          <PersonPreview key={saint.id} person={saint} base={base} />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const featuredAzhwars = getAllAzhwars().slice(0, 4);
  const featuredAcharyas = getFeaturedAcharyas();
  const { azhwarStrip, acharyaStrip, invite } = SITE_COPY.home;
  // The yatra counts only the earthly kshetrams — the 2 celestial abodes
  // (Thiruppaarkadal, Paramapadham) are not physically visitable.
  const earthlyIds = new Set(
    getAllKshetrams().filter((k) => k.region !== 'Celestial').map((k) => k.id),
  );
  return (
    <div className="dir">
      <Hero />

      <YatraProgressTracker total={earthlyIds.size} eligibleIds={earthlyIds} />

      <FeaturedKshetrams />

      {/* Tradition — two open editorial columns with a vertical divider;
          keep the .dir root wrapper so the portrait variables resolve */}
      <section aria-label="The tradition" className="w-full bg-[#FFFDF7]">
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
            <div className="lg:border-r lg:border-[#E3D2AE] lg:pr-14">
              <TraditionColumn
                strip={azhwarStrip}
                saints={featuredAzhwars}
                base="/azhwar"
                ctaTo="/azhwars"
              />
            </div>
            <div className="lg:pl-14">
              <TraditionColumn
                strip={acharyaStrip}
                saints={featuredAcharyas}
                base="/acharya"
                ctaTo="/acharyas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guided-yatra invitation — About-style two-column band with the
          shared sepia gopuram illustration and the standing browse quote */}
      <section aria-label="Guided yatras" className="w-full bg-[#FAF2E3]">
        <div className="mx-auto grid max-w-site items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-20">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
              {invite.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]! sm:text-[34px]!">
              {invite.title}
            </h2>
            <p className="mt-3 max-w-[54ch] text-[16px] leading-[1.6] text-[#332417]">
              {invite.description}
            </p>
            <div className="mt-6">
              <Link to="/about#guided-yatras" className={`${goldBtn} group`}>
                <span>{invite.cta}</span>
                <ArrowRight
                  className="h-4 w-4 opacity-85 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
          <figure className="relative min-h-[220px]">
            <img
              src={gopuramIllustration}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-[right_center] opacity-80"
            />
            <figcaption className="absolute right-0 top-0 max-w-[260px] text-right">
              <blockquote className="font-display text-[16px] italic leading-snug text-[#7A2E00]">
                &ldquo;{SITE_COPY.browse.quote}&rdquo;
              </blockquote>
              <div className="mt-2 flex items-center justify-end gap-2" aria-hidden="true">
                <span className="h-px w-10 bg-[#C99A2E]/60" />
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#C99A2E]" fill="currentColor">
                  <path d="M6 0l1.5 4.5L12 6 7.5 7.5 6 12 4.5 7.5 0 6l4.5-1.5L6 0z" />
                </svg>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Closing ornament */}
      <div className="w-full bg-[#FAF2E3] py-8" aria-hidden="true">
        <div className="mx-auto flex max-w-[520px] items-center gap-4 px-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent" />
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#C99A2E]" fill="currentColor">
            <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C99A2E] to-transparent" />
        </div>
      </div>
    </div>
  );
}
