/**
 * ZipSection — the zip-parity section shell (UXD v3.0 Gate 3): cream card,
 * gold gradient top strip, ruled heading row (optional eyebrow above the
 * title) with an optional right badge.
 * @param {object} props
 * @param {string} props.id - anchor id (scroll-spy target)
 * @param {string} props.title - section heading
 * @param {string} [props.eyebrow] - small-caps label above the heading
 * @param {import('react').ReactNode} [props.badge] - right-aligned badge in the heading row
 * @param {import('react').ReactNode} props.children - section body
 */
export default function ZipSection({ id, title, eyebrow = null, badge = null, children }) {
  return (
    <section
      id={id}
      className="bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/40 shadow-xs p-6 sm:p-8 relative overflow-hidden scroll-mt-36"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />
      <div className="border-b border-[#F0E3C6] pb-3 mb-6 flex items-center justify-between flex-wrap gap-2">
        <div>
          {eyebrow ? (
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{eyebrow}</span>
          ) : null}
          <h2 className={`font-display text-2xl sm:text-[1.7rem] font-semibold text-[#7A2E00]${eyebrow ? ' mt-0.5' : ''}`}>
            {title}
          </h2>
        </div>
        {badge}
      </div>
      {children}
    </section>
  );
}

/** The zip gradient serial badge used in the page head and profile heading. */
export function SerialBadge({ serial }) {
  return (
    <span className="px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] shadow-xs">
      {`Divya Desam #${serial}`}
    </span>
  );
}
