/**
 * PuranamHistory — Sthala Puranam & history (FR-83), restructured per the
 * PO round-17 audit: a separate "Origin legend" heading for the traditional
 * accounts (dossier legend items carry "Title — body" strings, split for the
 * titled-story layout) and a "Temple history" heading for the historically
 * sourced material, with the chronology converted to a milestone list.
 * Aside keeps the Prathyaksham side list and the significance blockquote.
 * Falls back to the legacy V2 puranam paragraph.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

/** Splits "Title — body" legend strings; returns {title, body}. */
function parseStory(item) {
  if (typeof item !== 'string') return { body: item };
  const dash = item.indexOf(' — ');
  if (dash > 0 && dash < 90) {
    return { title: item.slice(0, dash), body: item.slice(dash + 3) };
  }
  return { body: item };
}

/** Splits a prose chronology into milestone entries. */
function parseMilestones(text) {
  if (typeof text !== 'string') return [];
  const parts = text.includes(';')
    ? text.split(/;\s*/)
    : text.split(/(?<=[.!?])\s+(?=[A-Z(])/);
  return parts.map((part) => part.trim().replace(/[.;]$/, '')).filter(Boolean);
}

export default function PuranamHistory({ kshetram }) {
  const p = kshetram.puranam;
  const legacyText = !p || Array.isArray(p) || typeof p !== 'object' ? kshetram.puranam : null;
  const legendRaw = Array.isArray(p?.legend) ? p.legend : legacyText ? [legacyText] : null;
  // Some dossiers (srirangam) embed the Prathyaksham inside a legend item
  // ("Prathyaksham: manifested for …") — pull it out into the side list so
  // the aside doesn't collapse to the blockquote alone.
  const storyItems = [];
  const legendPrathyaksham = [];
  legendRaw?.forEach((item) => {
    if (typeof item === 'string' && /^Prathyaksham\s*:/i.test(item)) {
      item.replace(/^Prathyaksham\s*:\s*/i, '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((name) => legendPrathyaksham.push(name));
    } else {
      storyItems.push(item);
    }
  });
  const legend = storyItems.length > 0 ? storyItems : null;
  const literature = Array.isArray(p?.literature) ? p.literature : null;
  const prathyakshamList = typeof p?.prathyaksham === 'string'
    ? p.prathyaksham.split(',').map((s) => s.trim()).filter(Boolean)
    : legendPrathyaksham.length > 0 ? legendPrathyaksham : null;
  const milestones = p?.timeline ? parseMilestones(p.timeline) : null;

  if (!legend && !literature && !prathyakshamList?.length && !milestones?.length && !p?.invasions && !p?.milestones) {
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
        <>
          <h3>Origin legend</h3>
          {legend.map((item) => {
            const { title, body } = parseStory(item);
            return (
              <div className="story" key={String(item).slice(0, 24)}>
                {title ? <h3>{title}</h3> : null}
                <p>{body}</p>
              </div>
            );
          })}
        </>
      ) : null}
      {milestones?.length || p?.invasions || p?.milestones ? (
        <>
          <h3>Temple history</h3>
          {milestones?.length ? (
            <ul className="milestones">
              {milestones.map((entry) => <li key={entry.slice(0, 32)}>{entry}.</li>)}
            </ul>
          ) : null}
          {p?.invasions ? (
            <div>
              <h4>Invasions &amp; preservation</h4>
              <p>{p.invasions}</p>
            </div>
          ) : null}
          {p?.milestones ? (
            <div>
              <h4>Cultural milestones</h4>
              <p>{p.milestones}</p>
            </div>
          ) : null}
        </>
      ) : null}
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
