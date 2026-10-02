/**
 * DirectoryHeader — shared hero for the person directories (/azhwars,
 * /acharyas): eyebrow, serif English title, optional Tamil title and
 * lead. The decorative illustration (`media`) sits in an absolutely-
 * positioned slot that is hidden below 1024px, so the intro text always
 * uses the full available content width on mobile (PO round 22, item 3).
 * Extra content (jump links, rules) passes as `children` below the lead.
 */
export default function DirectoryHeader({
  eyebrow,
  title,
  tamilTitle = null,
  lead = null,
  media = null,
  children = null,
}) {
  return (
    <header className="dir-head">
      {media ? (
        <div className="dir-head__media" aria-hidden="true">{media}</div>
      ) : null}
      <div className="dir-head__body">
        <p className="dir-head__eyebrow">{eyebrow}</p>
        <h1 className="dir-head__title">{title}</h1>
        {tamilTitle ? <p className="dir-head__tamil" lang="ta">{tamilTitle}</p> : null}
        {lead ? <p className="dir-head__lead">{lead}</p> : null}
        {children}
      </div>
    </header>
  );
}
