/**
 * SectionHeading — the shared section header (PO round 23): gold
 * small-caps eyebrow over a Source Serif heading with an optional lead
 * and a right-aligned aside slot (view-all link, note). Used by the
 * home bands, the map workspace and the about page so section rhythm
 * matches the detail pages.
 */
export default function SectionHeading({ eyebrow, title, lead = null, id = null, level = 2, aside = null }) {
  const Tag = level === 3 ? 'h3' : level === 2 ? 'h2' : 'h1';
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#a77529]">{eyebrow}</p>
        ) : null}
        <Tag
          id={id}
          className="ui-heading mt-1 text-[32px]! leading-[40px]! font-semibold tracking-[-0.4px] text-[#922e0d]! sm:text-[36px]! sm:leading-[44px]!"
        >
          {title}
        </Tag>
        {lead ? <p className="mt-2 max-w-[72ch] text-[16px] leading-[27px] text-[#74716b]">{lead}</p> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
