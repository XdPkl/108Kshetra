/**
 * SectionHeading — consistent section title with optional eyebrow and lead
 * text (UXD v2 mocks: eyebrow + title + lead).
 * @param {object} props
 * @param {string} props.title   - heading text (rendered at the page's sub-level)
 * @param {number} props.level   - heading level 2–4 (default 2)
 * @param {string} [props.eyebrow] - optional small-caps label above the heading
 * @param {string} [props.lead]  - optional lead paragraph
 */
export default function SectionHeading({ title, level = 2, eyebrow, lead }) {
  const Tag = `h${level}`;
  return (
    <div className="section-heading">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag>{title}</Tag>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
