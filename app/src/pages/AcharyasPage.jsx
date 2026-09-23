/**
 * AcharyasPage — the guru parampara index at /acharyas (US-ACH-02, FR-93) in
 * the zip-parity layout (UXD v3.0 Gate 7): ruled banner, era sections (one
 * labelled heading per parampara era, preserving the single-source era
 * labels) and the zip portrait card grid — portrait with Thiruman watermark
 * fallback, Tamil/name/title, Era & Guru rows, role summary, amsam footer.
 */
import { Link } from 'react-router-dom';
import { getAllAcharyas, getAcharyaById } from '../data/api.js';
import { groupBy } from '../utils/group.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { ThirumanIcon } from '../components/SacredIcons.jsx';

function AcharyaCard({ acharya }) {
  const image = useWikiImage(acharya.wiki ?? null, acharya.photos?.[0]?.src ?? null);
  const guru = acharya.guru ? getAcharyaById(acharya.guru) : null;
  return (
    <article className="acharya-card group relative bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/45 p-5 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#C99A2E] transition-all flex flex-col justify-between">
      {/* Whole-card navigation overlay */}
      <Link
        to={`/acharya/${acharya.id}`}
        aria-label={`${acharya.name} — view the acharya dossier`}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 pointer-events-none">
        {/* Portrait + identity block */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-2 border-[#C99A2E]/70 overflow-hidden shrink-0 bg-[#FAF2E3] shadow-xs group-hover:border-[#B34700] transition-colors relative flex items-center justify-center">
            {image.src ? (
              <img
                src={image.src}
                alt={`${acharya.name} portrait`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 relative z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAF2E3] text-[#7A2E00]">
              <ThirumanIcon className="w-8 h-10 opacity-70" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-xs text-[#96731F] font-bold block" lang="ta">
              {acharya.tamilName}
            </span>
            <h3 className="font-display text-xl font-bold text-[#7A2E00] leading-snug group-hover:text-[#B34700] transition-colors">
              {acharya.name}
            </h3>
            {acharya.titles?.[0] ? (
              <p className="text-[11px] text-[#66523D] line-clamp-1">{acharya.titles[0]}</p>
            ) : null}

            <div className="mt-2 text-[11px] text-[#66523D] space-y-0.5">
              <p className="truncate"><strong>Era:</strong> {acharya.era}</p>
              {guru ? (
                <p className="truncate"><strong>Guru:</strong> {guru.name}</p>
              ) : null}
            </div>
          </div>
        </div>

        <p className="text-xs text-[#332417] line-clamp-3 leading-relaxed">
          {acharya.role}
        </p>
      </div>

      {/* Footer: amsam */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-[#F0E3C6] text-[11px] text-[#66523D]">
        <p><strong>Divine Amsam:</strong> {acharya.amsam ?? '—'}</p>
      </div>
    </article>
  );
}

export default function AcharyasPage() {
  const acharyas = getAllAcharyas();
  const groups = groupBy(acharyas, (a) => a.eraGroup);

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="border-b border-[#E3D2AE] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
          The Guru Parampara
        </span>
        <h1 className="font-display text-3xl font-semibold text-[#7A2E00] mt-0.5">
          The Acharyas
        </h1>
        <p className="text-sm text-[#66523D] mt-1 max-w-2xl">
          The acharyas of the guru parampara — the teachers who received,
          preserved and expounded the Sri Vaishnava tradition after the Azhwars,
          in addition to the twelve saint-poets.
        </p>
      </div>

      {[...groups.entries()].map(([eraGroup, list]) => (
        <section key={eraGroup} aria-labelledby={`era-${eraGroup.slice(0, 12)}`}>
          <div className="flex items-end gap-4 mb-5">
            <h2
              id={`era-${eraGroup.slice(0, 12)}`}
              className="font-display text-2xl font-semibold text-[#7A2E00]"
            >
              {eraGroup}
            </h2>
            <span className="text-[10px] font-bold bg-[#FAF2E3] text-[#96731F] px-2 py-0.5 rounded-full border border-[#C99A2E]/30 mb-1.5">
              {list.length} {list.length === 1 ? 'acharya' : 'acharyas'}
            </span>
            <div className="flex-1 h-px bg-[#E3D2AE] mb-3" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((a) => <AcharyaCard key={a.id} acharya={a} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
