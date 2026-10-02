/**
 * ProfileLink — the shared maroon text link to a person dossier
 * (PO round 22, items 6/9): visible hover state, gold keyboard-focus
 * ring (the kxd idiom) and a 44px touch target. `accessibleName` makes
 * every profile link unique to assistive tech even though the visible
 * label ("View profile", "Explore profile") repeats across the roster.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProfileLink({ to, accessibleName, children }) {
  return (
    <Link to={to} aria-label={accessibleName} className="dir-profile-link">
      <span aria-hidden="true">{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
