/**
 * VisualsMedia — "Sacred features & resources" (FR-83), retitled and
 * de-duplicated per the PO round-17 audit: numbered "What to look for"
 * markers, then a single labelled resource list where YouTube entries are
 * explicitly labelled as search links (title 20px, metadata 14px) and
 * literature rows carry no invented links or thumbnails. A fully empty
 * block shows the documented fallback note.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import { BookOpen } from 'lucide-react';
import NotDocumented from './NotDocumented.jsx';

function YouTubeIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 fill-current text-[#C4302B]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}

export default function VisualsMedia({ kshetram }) {
  const v = kshetram.visuals ?? {};
  const hasAny = [v.descriptions, v.literature, v.videoSearches].some((arr) => Array.isArray(arr) && arr.length > 0);

  return (
    <section id="media">
      <h2>Sacred features &amp; resources</h2>
      <p className="value">What to look for and where to study further.</p>
      {!hasAny ? <NotDocumented /> : (
        <div className="two-columns section-rule">
          {Array.isArray(v.descriptions) && v.descriptions.length > 0 ? (
            <div className="markers">
              <h3>What to look for</h3>
              {v.descriptions.map((d) => {
                const colon = d.indexOf(': ');
                const title = colon > 0 && colon < 60 ? d.slice(0, colon) : null;
                const body = title ? d.slice(colon + 2) : d;
                return (
                  <div className="marker" key={d.slice(0, 24)}>
                    {title ? <h3>{title}</h3> : null}
                    <p>{body}</p>
                  </div>
                );
              })}
            </div>
          ) : <div />}
          <div>
            <h3>Texts &amp; discourses</h3>
            <p className="resource-meta">Search links open YouTube or archive searches — no recordings are hosted here.</p>
            {Array.isArray(v.videoSearches) && v.videoSearches.map((q) => (
              <div className="resource" key={q}>
                <h3>
                  <YouTubeIcon />
                  {q}
                </h3>
                <p className="resource-meta">YouTube search</p>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search videos
                </a>
              </div>
            ))}
            {Array.isArray(v.literature) && v.literature.map((item) => (
              <div className="resource" key={item.slice(0, 24)}>
                <h3>
                  <BookOpen className="h-6 w-6 shrink-0 text-[#A77529]" aria-hidden="true" />
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
