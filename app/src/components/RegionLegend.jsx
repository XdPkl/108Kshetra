/**
 * RegionLegend — region color key below the map (FR-77) with a gold-ring
 * sample for visited desams, zip-parity chip styling (UXD v3.0 Gate 9).
 * @param {object} props
 * @param {Record<string, string>} props.colors  - region → color map
 * @param {string[]} props.regions               - region names
 */
export default function RegionLegend({ colors, regions }) {
  const item = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2E3] border border-[#C99A2E]/40 text-xs font-medium text-[#332417]';
  return (
    <p className="flex flex-wrap gap-2">
      {regions.map((region) => (
        <span className={item} key={region}>
          <span className="region-dot" style={{ background: colors[region] }} aria-hidden="true" />
          {region}
        </span>
      ))}
      <span className={item}>
        <span className="region-dot" style={{ background: '#C99A2E', boxShadow: '0 0 0 2px #FFFDF7, 0 0 0 3.5px #C99A2E' }} aria-hidden="true" />
        Visited
      </span>
    </p>
  );
}
