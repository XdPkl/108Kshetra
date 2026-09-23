/**
 * SaintSources — the sources list shared by the saint templates in
 * zip-parity styling (UXD v3.0 Gate 6). Renders the provided fallback
 * element when no sources exist.
 * @param {object} props
 * @param {string[]} [props.sources]
 * @param {import('react').ReactNode} props.fallback
 */
export default function SaintSources({ sources, fallback }) {
  if (!Array.isArray(sources) || sources.length === 0) return fallback;
  return (
    <ul className="text-sm space-y-1.5 list-disc pl-5 text-[#66523D]">
      {sources.map((s) => <li key={s}>{s}</li>)}
    </ul>
  );
}
