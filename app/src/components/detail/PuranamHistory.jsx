/**
 * PuranamHistory — Sthala Puranam with history subsections (FR-83):
 * origin legend & miracles, prathyaksham, timeline & epigraphy, invasions
 * & preservation, cultural milestones, literature references. Falls back
 * to the legacy V2 puranam paragraph.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';

const SUBSECTIONS = [
  ['timeline', 'Historical timeline & epigraphy'],
  ['invasions', 'Invasions & preservation'],
  ['milestones', 'Cultural milestones'],
];

export default function PuranamHistory({ kshetram }) {
  const p = kshetram.puranam;
  const legacyText = !p || Array.isArray(p) || typeof p !== 'object' ? kshetram.puranam : null;
  const legend = Array.isArray(p?.legend) ? p.legend : legacyText ? [legacyText] : null;
  const literature = Array.isArray(p?.literature) ? p.literature : null;

  if (!legend && !literature && !p?.prathyaksham && !SUBSECTIONS.some(([key]) => p?.[key])) {
    return (
      <section id="puranam" className="detail__section detail__section--full">
        <h2>Sthala Puranam &amp; History</h2>
        <NotDocumented />
      </section>
    );
  }

  return (
    <section id="puranam" className="detail__section detail__section--full">
      <h2>Sthala Puranam &amp; History</h2>
      {legend ? (
        <div className="puranam__legend">
          <h3>Origin legend &amp; miracles</h3>
          {legend.map((para) => <p className="puranam" key={para.slice(0, 24)}>{para}</p>)}
        </div>
      ) : null}
      {p?.prathyaksham ? (
        <div>
          <h3>Prathyaksham</h3>
          <p className="puranam">{p.prathyaksham}</p>
        </div>
      ) : null}
      {kshetram.significance ? (
        <div>
          <h3>Significance</h3>
          <p className="puranam">{kshetram.significance}</p>
        </div>
      ) : null}
      {SUBSECTIONS.map(([key, label]) => (p?.[key] ? (
        <div key={key}>
          <h3>{label}</h3>
          <p className="puranam">{p[key]}</p>
        </div>
      ) : null))}
      {literature ? (
        <div>
          <h3>Literature references</h3>
          <ul className="puranam__literature">
            {literature.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
