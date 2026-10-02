/**
 * Form field primitives (PO round 23): Field (label + control + error),
 * SearchField (icon + input) and FilterSelect (labelled select). All
 * controls share the .ui-input/.ui-select classes — 16px text, 44px
 * targets, gold focus rings.
 */

export function Field({ id, label, error = null, hint = null, children }) {
  return (
    <div>
      <label className="ui-label" htmlFor={id}>{label}</label>
      {children}
      {error ? <p className="ui-field-error" id={`${id}-error`} role="alert">{error}</p> : null}
      {hint ? <p className="ui-hint" id={`${id}-hint`}>{hint}</p> : null}
    </div>
  );
}

export function SearchField({ id, label, value, onChange, placeholder }) {
  return (
    <div className="relative">
      <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
      </svg>
      <input
        id={id}
        type="text"
        className="ui-input"
        style={{ paddingLeft: 42 }}
        value={value}
        onChange={onChange}
        aria-label={label}
        placeholder={placeholder}
      />
    </div>
  );
}

export function FilterSelect({ id, label, value, onChange, children, className = '' }) {
  return (
    <select
      id={id}
      aria-label={label}
      value={value}
      onChange={onChange}
      className={`ui-select ${className}`.trim()}
    >
      {children}
    </select>
  );
}
