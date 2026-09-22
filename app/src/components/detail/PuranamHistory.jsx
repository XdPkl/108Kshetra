/**
 * PuranamHistory — Sthala Puranam with history subsections (FR-83) in the
 * zip-parity card (UXD v3.0 Gate 3): origin legend & miracles, prathyaksham,
 * timeline & epigraphy, invasions & preservation, cultural milestones,
 * literature references; Significance as a gold-bar callout. Falls back to
 * the legacy V2 puranam paragraph.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import NotDocumented from './NotDocumented.jsx';
import ZipSection from './ZipSection.jsx';

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
      <ZipSection id="puranam" title="Sthala Puranam & History">
        <NotDocumented />
      </ZipSection>
    );
  }

  return (
    <ZipSection id="puranam" title="Sthala Puranam & History">
      {legend ? (
        <article className="space-y-3 text-sm leading-relaxed text-[#332417]">
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Origin legend &amp; miracles</h3>
          {legend.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
        </article>
      ) : null}
      {p?.prathyaksham ? (
        <article className="mt-5 space-y-1.5 text-sm leading-relaxed text-[#332417]">
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Prathyaksham</h3>
          <p>{p.prathyaksham}</p>
        </article>
      ) : null}
      {kshetram.significance ? (
        <div className="mt-5 p-5 rounded-r-xl border border-[#C99A2E]/40 border-l-4 border-l-[#96731F] bg-[#FAF2E3]">
          <h3 className="text-[0.7rem] uppercase font-bold tracking-wider text-[#96731F]">Significance</h3>
          <p className="text-sm mt-1 leading-relaxed text-[#332417]">{kshetram.significance}</p>
        </div>
      ) : null}
      {SUBSECTIONS.map(([key, label]) => (p?.[key] ? (
        <article key={key} className="mt-5 space-y-1.5 text-sm leading-relaxed text-[#332417]">
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">{label}</h3>
          <p>{p[key]}</p>
        </article>
      ) : null))}
      {literature ? (
        <article className="mt-5 text-sm leading-relaxed text-[#332417]">
          <h3 className="font-display text-xl font-semibold text-[#7A2E00]">Literature references</h3>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            {literature.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
          </ul>
        </article>
      ) : null}
    </ZipSection>
  );
}
