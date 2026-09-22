/**
 * VisualsMedia — visual markers, recommended listening (YouTube-search
 * cards) and literature/digital-text references (FR-83) in the zip-parity
 * card (UXD v3.0 Gate 3). Renders whatever exists; a fully empty block
 * shows the documented fallback note.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';
import ZipSection from './ZipSection.jsx';

function YouTubeIcon() {
  return (
    <span className="w-9 h-9 rounded-lg bg-[#FEE2E2] text-[#C4302B] flex items-center justify-center shrink-0">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    </span>
  );
}

export default function VisualsMedia({ kshetram }) {
  const v = kshetram.visuals ?? {};
  const hasAny = [v.descriptions, v.literature, v.videoSearches].some((arr) => Array.isArray(arr) && arr.length > 0);

  return (
    <ZipSection id="media" title="Visuals & Media">
      {!hasAny ? <NotDocumented /> : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {Array.isArray(v.videoSearches) && v.videoSearches.length > 0 ? (
              <>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-3">Recommended listening</h3>
                <div className="space-y-2.5">
                  {v.videoSearches.map((q) => (
                    <a
                      key={q}
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 bg-[#FAF2E3] hover:bg-[#FFFDF7] rounded-xl border border-[#C99A2E]/45 hover:border-[#96731F] transition-all"
                    >
                      <YouTubeIcon />
                      <span className="flex-1 min-w-0">
                        <span className="block text-xs font-bold group-hover:text-[#B34700] transition-colors text-[#332417]">
                          {q}
                        </span>
                        <span className="block text-[11px] text-[#66523D]">Pasuram recitation · YouTube search</span>
                      </span>
                      <span className="text-[#B34700] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </>
            ) : null}
            {Array.isArray(v.descriptions) && v.descriptions.length > 0 ? (
              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2">Visual markers</h3>
                <ul className="space-y-1 text-sm text-[#332417] list-disc pl-5">
                  {v.descriptions.map((d) => <li key={d.slice(0, 24)}>{d}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
          <div>
            {Array.isArray(v.literature) && v.literature.length > 0 ? (
              <>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00] mb-2">Literature &amp; digital texts</h3>
                <ul className="space-y-1 text-sm text-[#332417] list-disc pl-5">
                  {v.literature.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      )}
    </ZipSection>
  );
}
