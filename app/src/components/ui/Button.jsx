/**
 * Button / ButtonLink — the shared control language (PO round 23):
 * solid maroon primary, outlined secondary, plain tertiary, plus the
 * on-photo inverse variant for the dark hero. 44px touch targets and
 * the shared gold focus ring come from ui.css (.ui-btn / .ui-tertiary).
 * `small` renders the 36px compact size for dense workspaces (map).
 */
import { Link } from 'react-router-dom';


export function Button({ variant = 'primary', small = false, className = '', children, ...rest }) {
  const cls = variant === 'tertiary'
    ? `ui-tertiary${small ? ' ui-btn--small' : ''}`
    : `ui-btn ui-btn--${variant}${small ? ' ui-btn--small' : ''}`;
  return (
    <button type="button" className={`${cls} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = 'primary', small = false, className = '', children, ...rest }) {
  const cls = variant === 'tertiary'
    ? `ui-tertiary${small ? ' ui-btn--small' : ''}`
    : `ui-btn ui-btn--${variant}${small ? ' ui-btn--small' : ''}`;
  return (
    <Link className={`${cls} ${className}`.trim()} {...rest}>
      {children}
    </Link>
  );
}
