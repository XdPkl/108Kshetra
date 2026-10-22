/**
 * AcharyaPortrait — the Identification-hero portrait panel (PO mockup,
 * round 38): the acharya's transparent portrait in a softly tinted cream
 * stage with a thin gold border and an arched top. The complete figure
 * and seat stay visible (object-fit contain, bottom-aligned) at a fixed
 * display height. Clicking opens the shared lightbox enlarged view —
 * Escape closes (GalleryLightbox), Tab is trapped inside the dialog, and
 * focus returns to the portrait trigger on close. A missing photo renders
 * nothing so the text layout stands alone.
 * @param {object} props
 * @param {string} props.name - acharya display name (caption + labels)
 * @param {{src?: string, alt?: string}|null} props.photo - photos[0] from the acharya's data
 */
import { useEffect, useRef, useState } from 'react';
import GalleryLightbox from './GalleryLightbox.jsx';
import { assetUrl } from '../../utils/assetUrl.js';

export default function AcharyaPortrait({ name, photo }) {
  const [enlarged, setEnlarged] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!enlarged) return undefined;
    const dlg = dialogRef.current;
    const trigger = triggerRef.current; // captured for the cleanup below
    dlg?.querySelector('button')?.focus();
    const onKey = (e) => {
      if (e.key !== 'Tab') return;
      const focusables = [...dlg.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')];
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    dlg.addEventListener('keydown', onKey);
    return () => {
      dlg.removeEventListener('keydown', onKey);
      trigger?.focus(); // focus returns to the portrait
    };
  }, [enlarged]);

  if (!photo?.src) return null;

  return (
    <>
      <figure className="acd-portrait">
        <div className="acd-portrait-stage">
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setEnlarged(true)}
            aria-label={`Enlarge ${name} portrait`}
            aria-haspopup="dialog"
          >
            <img src={assetUrl(photo.src)} alt={photo.alt ?? `${name} portrait`} />
          </button>
        </div>
        <figcaption>{name}</figcaption>
      </figure>
      {enlarged ? (
        <div ref={dialogRef}>
          <GalleryLightbox photos={[photo]} index={0} onClose={() => setEnlarged(false)} />
        </div>
      ) : null}
    </>
  );
}
