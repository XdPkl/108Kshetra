/**
 * SaintNarrative — the life-history body shared by the saint templates in
 * zip-parity prose styling (UXD v3.0 Gate 6). Items may be plain paragraphs
 * (legacy shape) or headed blocks `{heading, paragraphs}` per the dossier's
 * Deep Biographical Narrative.
 * @param {object} props
 * @param {(string | {heading: string, paragraphs: string[]})[]} props.items
 */
export default function SaintNarrative({ items }) {
  return (
    <>
      {items.map((item) => {
        if (typeof item === 'string') {
          return <p className="text-sm text-[#66523D] leading-relaxed mt-2.5" key={item.slice(0, 24)}>{item}</p>;
        }
        return (
          <article className="mt-6 first:mt-0" key={item.heading}>
            <h3 className="font-display text-2xl font-semibold text-[#332417]">{item.heading}</h3>
            {item.paragraphs.map((p) => (
              <p className="text-sm text-[#66523D] leading-relaxed mt-2.5" key={p.slice(0, 24)}>{p}</p>
            ))}
          </article>
        );
      })}
    </>
  );
}
