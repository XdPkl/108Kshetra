/**
 * Identification — the portrait-plus-details block at the top of a saint
 * page (Azhwar/Acharya templates, FR-90/94) in the zip-parity layout (UXD
 * v3.0 Gate 6): a 3/4 portrait with the Thiruman watermark fallback on the
 * left; alias chips and definition cards on the right.
 * @param {object} props
 * @param {{label: string, value: import('react').ReactNode}[]} props.rows
 * @param {{src?: string|null, wiki?: string|null, alt: string}} [props.portrait]
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import { ThirumanIcon } from '../SacredIcons.jsx';

export default function Identification({ rows, portrait }) {
  const image = useWikiImage(portrait?.wiki ?? null, portrait?.src ?? null);
  const visible = rows.filter((row) => row.value);
  if (visible.length === 0) return null;
  const [first, ...rest] = visible;
  const aliases = typeof first.value === 'string' && first.value.includes(' · ')
    ? first.value.split(' · ')
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
      {/* Portrait with high-contrast framing */}
      {portrait ? (
        <div className="md:col-span-4">
          <figure className="relative rounded-2xl overflow-hidden border-2 border-[#C99A2E]/70 shadow-md aspect-[3/4] bg-[#FAF2E3] m-0 group">
            {image.src ? (
              <img
                src={image.src}
                alt={portrait.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 relative z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAF2E3] text-[#7A2E00]" role="img" aria-label={portrait.alt}>
              <ThirumanIcon className="w-14 h-20 opacity-60" />
            </div>
          </figure>
        </div>
      ) : null}

      {/* Details & aliases */}
      <dl className={`space-y-5 ${portrait ? 'md:col-span-8' : 'md:col-span-12'}`}>
        <div>
          <dt className="block text-[11px] font-bold uppercase tracking-[0.1em] text-[#96731F] mb-2">
            {first.label}
          </dt>
          <dd className="flex flex-wrap gap-2">
            {aliases
              ? aliases.map((alias) => (
                <span
                  key={alias}
                  className="px-3 py-1 bg-[#FAF2E3] border border-[#C99A2E]/50 rounded-lg text-xs font-medium text-[#4A3005]"
                >
                  {alias}
                </span>
              ))
              : first.value}
          </dd>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map(({ label, value }) => (
            <div key={label} className="p-4 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/40">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-[#96731F]">{label}</dt>
              <dd className="text-sm text-[#332417] mt-1 leading-relaxed">{value}</dd>
            </div>
          ))}
        </div>
      </dl>
    </div>
  );
}
