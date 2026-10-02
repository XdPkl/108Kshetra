/**
 * PersonEntry — the standardized directory entry (PO round 22, item 4):
 * English name (serif), Tamil name (Mukta Malar), short contribution
 * summary, Period/Guru-style metadata rows and a single shared profile
 * link. Names, Tamil text and dates wrap naturally — no truncation.
 * The portrait keeps one framing (3/4, top-anchored crop) at every
 * breakpoint: 72px beside the identity on mobile, 104px spanning the
 * entry on desktop; entries without a resolved image show
 * PortraitFallback. The whole entry is NOT a link — the profile link is
 * the only keyboard stop for the destination (item 9).
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import PortraitFallback from './PortraitFallback.jsx';
import ProfileLink from './ProfileLink.jsx';
import { ShankaIcon } from '../SacredIcons.jsx';

export default function PersonEntry({
  name,
  tamilName = null,
  summary = null,
  meta = [],
  portrait = null,
  profileTo,
  profileLabel = 'View profile',
}) {
  const image = useWikiImage(portrait?.wiki ?? null, portrait?.src ?? null);
  return (
    <article className="dir-entry">
      <div className="dir-entry__portrait">
        <div className="dir-portrait">
          {image.src ? (
            <img
              src={image.src}
              alt={portrait?.alt ?? `${name} portrait`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ) : (
            <PortraitFallback icon={<ShankaIcon className="h-10 w-10" />} />
          )}
        </div>
      </div>
      <div className="dir-entry__identity">
        <h3 className="dir-entry__name">{name}</h3>
        {tamilName ? <p className="dir-entry__tamil" lang="ta">{tamilName}</p> : null}
      </div>
      {summary ? <p className="dir-entry__summary">{summary}</p> : null}
      {meta.length > 0 ? (
        <dl className="dir-entry__meta">
          {meta.map(({ label, value }) => (
            <div key={label} className="dir-meta-row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <div className="dir-entry__link">
        <ProfileLink to={profileTo} accessibleName={`${profileLabel} — ${name}`}>
          {profileLabel}
        </ProfileLink>
      </div>
    </article>
  );
}
