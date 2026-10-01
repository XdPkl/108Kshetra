/**
 * PuranamHistory — Sthala Puranam & history (FR-83) in the round-16 mock's
 * article grid: story blocks (dossier legend items carry "Title — body"
 * strings, split for the mock's titled-story layout), "History &
 * inscriptions" timeline, Invasions/Cultural milestones subsections,
 * "Literary references" rows; aside with the Prathyaksham list (split from
 * the dossier's comma string) and the significance blockquote. Falls back
 * to the legacy V2 puranam paragraph.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

const SUBSECTIONS = [
  ['invasions', 'Invasions & preservation'],
  ['milestones', 'Cultural milestones'],
];

/** Splits "Title — body" legend strings; returns {title, body}. */
function parseStory(item) {
  if (typeof item !== 'string') return { body: item };
  const dash = item.indexOf(' — ');
  if (dash > 0 && dash < 90) {
    return { title: item.slice(0, dash), body: item.slice(dash + 3) };
  }
  return { body: item };
}

export default function PuranamHistory({ kshetram }) {
  const p = kshetram.puranam;
  const legacyText = !p || Array.isArray(p) || typeof p !== 'object' ? kshetram.puranam : null;
  const legend = Array.isArray(p?.legend) ? p.legend : legacyText ? [legacyText] : null;
  const literature = Array.isArray(p?.literature) ? p.literature : null;
  const prathyakshamList = typeof p?.prathyaksham === 'string'
    ? p.prathyaksham.split(',').map((s) => s.trim()).filter(Boolean)
    : null;

  if (!legend && !literature && !p?.prathyaksham && !p?.timeline && !SUBSECTIONS.some(([key]) => p?.[key])) {
    return (
      <section id="puranam">
        <h2>Sthala Puranam &amp; history</h2>
        <NotDocumented />
      </section>
    );
  }

  const hasAside = Boolean(prathyakshamList?.length || kshetram.significance);
  const article = (
    <article>
      <h2>Sthala Puranam &amp; history</h2>
      {legend ? (
        legend.map((item) => {
          const { title, body } = parseStory(item);
          return (
            <div className="story" key={String(item).slice(0, 24)}>
              {title ? <h3>{title}</h3> : null}
              <p>{body}</p>
            </div>
          );
        })
      ) : null}
      {p?.timeline ? (
        <>
          <h3>History &amp; inscriptions</h3>
          <div className="timeline">
            <p>{p.timeline}</p>
          </div>
        </>
      ) : null}
      {SUBSECTIONS.map(([key, label]) => (p?.[key] ? (
        <div key={key}>
          <h3>{label}</h3>
          <p>{p[key]}</p>
        </div>
      ) : null))}
      {literature ? (
        <>
          <h3>Literary references</h3>
          {literature.map((item) => (
            <div className="resource-row" key={String(item).slice(0, 24)}>
              <span>{item}</span>
            </div>
          ))}
        </>
      ) : null}
    </article>
  );

  if (!hasAside) {
    return (
      <section id="puranam">
        {article}
      </section>
    );
  }

  return (
    <div id="puranam" className="article-grid">
      {article}
      <aside>
        {prathyakshamList?.length ? (
          <>
            <h3>Prathyaksham</h3>
            {prathyakshamList.map((name) => (
              <div className="prathyaksham" key={name}>{name}</div>
            ))}
          </>
        ) : null}
        {kshetram.significance ? <blockquote>{kshetram.significance}</blockquote> : null}
      </aside>
    </div>
  );
}
