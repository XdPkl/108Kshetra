/**
 * Dialog — the shared modal (PO round 23): Escape-to-close, focus
 * containment (Tab/Shift+Tab cycle inside), focus return to the opener
 * on close, overlay-click close and a scrollable mobile body. Labelled
 * by its heading; `eyebrow` renders the small-caps line above the title.
 */
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Dialog({ open, onClose, title, eyebrow = null, children }) {
  const surfaceRef = useRef(null);
  const returnFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    returnFocus.current = document.activeElement;
    const surface = surfaceRef.current;
    const first = surface?.querySelector(FOCUSABLE);
    if (first) first.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab' || !surface) return;
      const items = [...surface.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (returnFocus.current && typeof returnFocus.current.focus === 'function') {
        returnFocus.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="ui-dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ui-dialog" ref={surfaceRef}>
        <div className="ui-dialog__header">
          <div>
            {eyebrow ? <p className="ui-dialog__eyebrow">{eyebrow}</p> : null}
            <h2 className="ui-dialog__title">{title}</h2>
          </div>
          <button type="button" className="ui-dialog__close" aria-label="Close" onClick={onClose}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="ui-dialog__body">{children}</div>
      </div>
    </div>
  );
}
