/**
 * SearchFilterBar — search input plus filter selects and a reset action (FR-21/22/25).
 * Options are supplied by the caller so the component stays data-driven.
 * @param {object} props
 * @param {object} props.filters              - active filter values keyed by name
 * @param {Function} props.onFilterChange     - (name, value) => void
 * @param {Function} props.onReset            - () => void
 * @param {{value: string, label: string}[]} props.stateOptions
 * @param {{value: string, label: string}[]} props.deityFormOptions
 * @param {{value: string, label: string}[]} props.regionOptions
 * @param {{value: string, label: string}[]} props.azhwarOptions
 * @param {boolean} [props.showReset]         - hide reset when no filter is active
 */
export default function SearchFilterBar({
  filters,
  onFilterChange,
  onReset,
  stateOptions,
  deityFormOptions,
  regionOptions,
  azhwarOptions,
  showReset = true,
}) {
  const selects = [
    { name: 'state', label: 'State', options: stateOptions },
    { name: 'region', label: 'Region', options: regionOptions },
    { name: 'deityForm', label: 'Deity Form', options: deityFormOptions },
    { name: 'azhwar', label: 'Azhwar', options: azhwarOptions },
  ];

  return (
    <div className="search-filter-bar">
      <div className="search-filter-bar__search">
        <label htmlFor="kshetram-search">Search kshetrams</label>
        <input
          id="kshetram-search"
          type="search"
          placeholder="Name, place, deity or Azhwar…"
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>
      {selects.map(({ name, label, options }) => (
        <div className="search-filter-bar__select" key={name}>
          <label htmlFor={`filter-${name}`}>{label}</label>
          <select
            id={`filter-${name}`}
            value={filters[name]}
            onChange={(e) => onFilterChange(name, e.target.value)}
          >
            <option value="">All {label.toLowerCase()}s</option>
            {options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      ))}
      {showReset ? (
        <button type="button" className="btn btn--outline" onClick={onReset}>
          Clear all
        </button>
      ) : null}
    </div>
  );
}
