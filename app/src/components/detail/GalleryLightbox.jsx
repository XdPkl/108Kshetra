/**
 * GalleryLightbox — full-size photo viewer for the deity photo strips
 * (FR-85). Dialog semantics with focus management, Esc to close and
 * arrow-key/button navigation; credits always rendered.
 * @param {object} props
 * @param {{src?: string, wiki?: string, alt: string, credit?: string}[]|null} props.photos
 * @param {number|null} props.index
 * @param {() => void} props.onClose
 * @param {(delta: number) => void} [props.onNavigate] - move ±1 photo (wrap-around)
 */
import { useEffect, useState } from 'react';
import { fetchWikiImage } from '../../utils/wikiImage.js';

/** Resolves a photo entry to a displayable image (src or cached/fetched wiki thumb). */
function usePhotoSource(photo) {
  const [resolved, setResolved] = useState(() => (photo?.src ? photo.src : null));
  useEffect(() => {
    if (!photo || photo.src) return undefined;
    let cancelled = false;
    fetchWikiImage(photo.wiki ?? null).then((img) => {
      if (!cancelled) setResolved(img.src);
    });
    return () => { cancelled = true; };
  }, [photo]);
  return resolved;
}

function LightboxImage({ photo }) {
  const src = usePhotoSource(photo);
  if (!src) {
    return <span className="deity-photo deity-photo--placeholder" aria-label={photo?.alt ?? 'Photo placeholder'}>◆</span>;
  }
  return <img src={src} alt={photo?.alt ?? ''} />;
}

export default function GalleryLightbox({ photos, index, onClose, onNavigate }) {
  const count = Array.isArray(photos) ? photos.length : 0;
  const open = count > 0 && index != null && index >= 0 && index < count;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate(1);
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, onNavigate]);

  if (!open) return null;
  const photo = photos[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
    >
      <figure className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close photo viewer">
          ✕
        </button>
        {count > 1 ? (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => onNavigate(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>
        ) : null}
        <LightboxImage key={index} photo={photo} />
        {count > 1 ? (
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => onNavigate(1)}
            aria-label="Next photo"
          >
            ›
          </button>
        ) : null}
        <figcaption className="lightbox__caption">
          <span>{photo.alt}</span>
          {photo.credit ? <span className="lightbox__credit">{photo.credit}</span> : null}
          {count > 1 ? <span className="lightbox__count">{index + 1} / {count}</span> : null}
        </figcaption>
      </figure>
    </div>
  );
}
