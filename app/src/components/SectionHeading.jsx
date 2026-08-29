/**
 * SectionHeading — consistent section title with optional lead text.
 * @param {object} props
 * @param {string} props.title   - heading text (rendered at the page's sub-level)
 * @param {number} props.level   - heading level 2–4 (default 2)
 * @param {string} [props.lead]  - optional lead paragraph
 */
export default function SectionHeading({ title, level = 2, lead }) {
  const Tag = `h${level}`;
  return (
    <div className="section-heading">
      <Tag>{title}</Tag>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
