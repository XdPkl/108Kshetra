/**
 * SectionNav — sticky in-page anchor chips for the detail template (FR-84).
 * @param {object} props
 * @param {{id: string, label: string}[]} props.sections - rendered sections in order
 */
export default function SectionNav({ sections }) {
  if (!sections?.length) return null;
  return (
    <nav className="section-nav" aria-label="Page sections">
      {sections.map(({ id, label }) => (
        <a key={id} className="section-nav__chip" href={`#${id}`}>{label}</a>
      ))}
    </nav>
  );
}
