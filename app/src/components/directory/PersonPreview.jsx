/**
 * PersonPreview — the shared person tile for home-page preview strips
 * (PO round 23): the directory portrait frame (3/4, top-anchored) with
 * the restrained PortraitFallback tile, then the English name followed
 * by the Tamil name (site-wide name order), and a single uniquely-named
 * profile link — no whole-tile overlay stop.
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import PortraitFallback from './PortraitFallback.jsx';
import ProfileLink from './ProfileLink.jsx';

export default function PersonPreview({ person, base, profileLabel = 'View profile' }) {
  const image = useWikiImage(person.wiki ?? null, person.photos?.[0]?.src ?? null);
  return (
    <div className="min-w-0">
      <div className="dir-portrait">
        {image.src ? (
          <img
            src={image.src}
            alt={`${person.name} portrait`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <PortraitFallback icon={<span className="text-3xl text-[#96731F]/70" aria-hidden="true">◆</span>} />
        )}
      </div>
      <h3 className="dir-entry__name mt-3 text-center text-[20px] leading-[27px]">{person.name}</h3>
      {person.tamilName ? (
        <p className="dir-entry__tamil text-center" lang="ta">{person.tamilName}</p>
      ) : null}
      <div className="mt-1 flex justify-center">
        <ProfileLink to={`${base}/${person.id}`} accessibleName={`${profileLabel} — ${person.name}`}>
          {profileLabel}
        </ProfileLink>
      </div>
    </div>
  );
}
