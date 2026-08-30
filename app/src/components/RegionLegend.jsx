/**
 * RegionLegend — region color key below the map (FR-77) with a gold-ring
 * sample for visited desams.
 * @param {object} props
 * @param {Record<string, string>} props.colors  - region → color map
 * @param {string[]} props.regions               - region names
 */
export default function RegionLegend({ colors, regions }) {
  return (
    <p className="region-legend">
      {regions.map((region) => (
        <span className="region-legend__item" key={region}>
          <span className="region-legend__dot" style={{ background: colors[region] }} aria-hidden="true" />
          {region}
        </span>
      ))}
      <span className="region-legend__item region-legend__item--visited">
        <span className="region-legend__dot region-legend__dot--visited" aria-hidden="true" />
        Visited
      </span>
    </p>
  );
}
