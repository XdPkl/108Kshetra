/**
 * SaintNarrative — the life-history body shared by the saint templates.
 * Items may be plain paragraphs (legacy shape) or headed blocks
 * `{heading, paragraphs}` per the dossier's Deep Biographical Narrative.
 * @param {object} props
 * @param {(string | {heading: string, paragraphs: string[]})[]} props.items
 */
export default function SaintNarrative({ items }) {
  return (
    <>
      {items.map((item) => {
        if (typeof item === 'string') {
          return <p className="puranam" key={item.slice(0, 24)}>{item}</p>;
        }
        return (
          <div className="saint-narrative__block" key={item.heading}>
            <h3>{item.heading}</h3>
            {item.paragraphs.map((p) => <p className="puranam" key={p.slice(0, 24)}>{p}</p>)}
          </div>
        );
      })}
    </>
  );
}
