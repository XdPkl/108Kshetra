/**
 * SaintStrip — 2026-09 refresh (PO-approved mockup): full-width darshan band
 * with a left text column (small-caps eyebrow + gold rule, display title,
 * lead, outline CTA, optional ornament divider) and a 4-tile photo row whose
 * Tamil + English names sit BELOW the photos. `tone` switches the band
 * background (azhwars = ivory, acharyas = sandal). Shared by the Azhwar and
 * Acharya strips on Home.
 * @param {object} props
 * @param {string} props.eyebrow - small-caps section label
 * @param {string} props.title - display heading
 * @param {string} props.lead - supporting line
 * @param {Array} props.saints - azhwar/acharya records (wiki / photos / names)
 * @param {string} props.base - detail route base ('/azhwar' | '/acharya')
 * @param {string} props.ctaLabel - outline CTA text
 * @param {string} props.ctaTo - outline CTA destination
 * @param {'ivory'|'sandal'} [props.tone] - band background (default ivory)
 * @param {boolean} [props.withDivider] - render the ornament divider under
 *   the text column
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useWikiImage } from '../../hooks/useWikiImage.js';

/** One photo tile with the names below; the whole tile links to the dossier. */
function SaintTile({ saint, base }) {
  const image = useWikiImage(saint.wiki ?? null, saint.photos?.[0]?.src ?? null);
  return (
    <Link to={`${base}/${saint.id}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#F6EBD6] shadow-xs group-hover:shadow-md transition-shadow">
        {image.src ? (
          <img
            src={image.src}
            alt={`${saint.name} portrait`}
            loading="lazy"
            className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
            <span className="text-3xl text-[#96731F]/70">◆</span>
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-sm font-medium text-[#7A2E00]" lang="ta">
        {saint.tamilName}
      </p>
      <p className="text-center font-display text-[21px] font-semibold leading-tight text-[#5C1F00]">
        {saint.name}
      </p>
    </Link>
  );
}

export default function SaintStrip({
  eyebrow, title, lead, saints, base, ctaLabel, ctaTo, tone = 'ivory', withDivider = false,
}) {
  const bandBg = tone === 'sandal' ? 'bg-[#EEDCC0]' : 'bg-[#FAF2E3]';
  const ctaBg = tone === 'sandal'
    ? 'border-[#C99A2E]/80 bg-[#FFFDF7]/40 hover:bg-[#FFFDF7]/70'
    : 'border-[#C99A2E]/70 hover:bg-[#C99A2E]/10';
  return (
    <section className={`w-full ${bandBg}`}>
      <div className="mx-auto grid max-w-site items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[360px_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <p className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#96731F]">
              {eyebrow}
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-[#C99A2E]/70 to-transparent" aria-hidden="true" />
          </div>
          <h2 className="mt-3 font-display text-[40px]! leading-[1.08]! font-semibold text-[#5C1F00]!">
            {title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#66523D]">
            {lead}
          </p>
          <Link
            to={ctaTo}
            className={`mt-6 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-bold text-[#7A2E00]! transition-colors ${ctaBg}`}
          >
            {ctaLabel}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          {withDivider && (
            <div className="mt-9 flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-[#E3D2AE]" />
              <svg viewBox="0 0 20 20" className="h-5 w-5 text-[#C99A2E]" fill="currentColor">
                <path d="M10 1l1.8 5.2L17 8l-5.2 1.8L10 15l-1.8-5.2L3 8l5.2-1.8L10 1z" />
              </svg>
              <div className="h-px flex-1 bg-[#E3D2AE]" />
            </div>
          )}
        </div>

        {/* Photo tiles — names below the photos */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {saints.map((saint) => (
            <SaintTile key={saint.id} saint={saint} base={base} />
          ))}
        </div>
      </div>
    </section>
  );
}
