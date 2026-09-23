/**
 * SaintMedia — iconography, listening cards and digital texts shared by the
 * saint templates (FR-90/94) in the zip-parity layout (UXD v3.0 Gate 6): a
 * two-column top row (iconography tiles | recommended listening cards) with
 * digital texts full-width below. Iconography may be a single string or a
 * structured dossier block {posture?, mudras?, garments?, idol?}.
 * @param {object} props
 * @param {object} [props.visuals] - {iconography?, videoSearches?, digitalTexts?}
 */
import NotDocumented from '../detail/NotDocumented.jsx';

const ICONOGRAPHY_LABELS = [
  ['posture', 'Physical posture (asana)'],
  ['mudras', 'Hand gestures (mudras)'],
  ['garments', 'Garments & embellishments'],
  ['idol', 'Avathara sthalam idol'],
];

export default function SaintMedia({ visuals }) {
  const hasAny = visuals
    && [visuals.iconography, visuals.videoSearches, visuals.digitalTexts]
      .some((x) => (Array.isArray(x) ? x.length > 0 : Boolean(x)));
  if (!hasAny) return <NotDocumented />;
  const hasListening = Array.isArray(visuals.videoSearches) && visuals.videoSearches.length > 0;
  const hasTexts = Array.isArray(visuals.digitalTexts) && visuals.digitalTexts.length > 0;
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visuals.iconography ? (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B34700] mb-3">Sacred iconography</h3>
            {typeof visuals.iconography === 'string' ? (
              <p className="text-sm text-[#66523D] leading-relaxed">{visuals.iconography}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ICONOGRAPHY_LABELS.map(([key, label]) => (
                  visuals.iconography[key] ? (
                    <div key={key} className="bg-[#FAF2E3] p-3.5 rounded-xl border border-[#C99A2E]/40">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#96731F] block mb-1">
                        {label}
                      </span>
                      <p className="text-xs text-[#66523D] leading-relaxed">{visuals.iconography[key]}</p>
                    </div>
                  ) : null
                ))}
              </div>
            )}
          </div>
        ) : null}
        {hasListening ? (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B34700] mb-3">
              Recommended listening &amp; discourses
            </h3>
            <div className="space-y-2.5">
              {visuals.videoSearches.map((q) => (
                <a
                  key={q}
                  className="listen-card group flex items-center gap-3 p-3 bg-[#FAF2E3] hover:bg-[#FFFDF7] rounded-xl border border-[#C99A2E]/45 hover:border-[#96731F] transition-all"
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#FEE2E2] text-[#C4302B] flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="listen-card__title block text-xs font-bold text-[#7A2E00] group-hover:text-[#B34700] transition-colors truncate">
                      {q}
                    </span>
                    <span className="block text-[11px] text-[#66523D] truncate">Search on YouTube ↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {hasTexts ? (
        <div className="mt-6 pt-5 border-t border-[#E3D2AE]">
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B34700] mb-2">Digital texts</h3>
          <ul className="text-sm space-y-1.5 list-disc pl-5 text-[#66523D]">
            {visuals.digitalTexts.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
