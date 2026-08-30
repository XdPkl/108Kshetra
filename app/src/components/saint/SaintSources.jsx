/**
 * SaintSources — the sources list shared by the saint templates. Renders
 * the provided fallback element when no sources exist.
 * @param {object} props
 * @param {string[]} [props.sources]
 * @param {import('react').ReactNode} props.fallback
 */
export default function SaintSources({ sources, fallback }) {
  if (!Array.isArray(sources) || sources.length === 0) return fallback;
  return (
    <ul className="saint-works">
      {sources.map((s) => <li key={s}>{s}</li>)}
    </ul>
  );
}
