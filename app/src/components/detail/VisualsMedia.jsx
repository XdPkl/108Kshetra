/**
 * VisualsMedia — visual markers, recommended listening (video-search
 * chips) and literature/digital-text references (FR-83). Renders whatever
 * exists; a fully empty block shows the documented fallback note.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

export default function VisualsMedia({ kshetram }) {
  const v = kshetram.visuals ?? {};
  const hasAny = [v.descriptions, v.literature, v.videoSearches].some((arr) => Array.isArray(arr) && arr.length > 0);

  return (
    <section id="media" className="detail__section detail__section--full">
      <h2>Visuals &amp; Media</h2>
      {!hasAny ? <NotDocumented /> : (
        <div className="visuals-media">
          {Array.isArray(v.descriptions) && v.descriptions.length > 0 ? (
            <div>
              <h3>Visual markers</h3>
              <ul>
                {v.descriptions.map((d) => <li key={d.slice(0, 24)}>{d}</li>)}
              </ul>
            </div>
          ) : null}
          {Array.isArray(v.videoSearches) && v.videoSearches.length > 0 ? (
            <div>
              <h3>Recommended listening</h3>
              <p className="visuals-media__chips">
                {v.videoSearches.map((q) => (
                  <a
                    key={q}
                    className="chip"
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▶ {q} ↗
                  </a>
                ))}
              </p>
            </div>
          ) : null}
          {Array.isArray(v.literature) && v.literature.length > 0 ? (
            <div>
              <h3>Literature &amp; digital texts</h3>
              <ul>
                {v.literature.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
