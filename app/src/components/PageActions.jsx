/**
 * PageActions — Share (Web Share API with clipboard fallback, FR-69) and
 * Print (print stylesheet, FR-70) actions. Two appearances: the zip-parity
 * pills (default) and the round-16 mock text buttons (`variant="kxd"`).
 * @param {object} props
 * @param {string} [props.variant] - 'kxd' for the mock styling
 */
import { useState } from 'react';
import { Printer, Share2 } from 'lucide-react';

export default function PageActions({ variant }) {
  const [copied, setCopied] = useState(false);

  const showCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return; // shared through the sheet
      } catch (err) {
        // AbortError = the visitor closed the sheet — do nothing more.
        // Any other failure (desktop browsers expose navigator.share but
        // cannot open a sheet) falls through to the clipboard, which is
        // what made Share look dead (PO round 36).
        if (err?.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showCopied();
    } catch {
      // clipboard blocked/unavailable (e.g. non-secure context) — legacy copy
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      if (ok) showCopied();
    }
  };

  const print = () => window.print();

  if (variant === 'kxd') {
    return (
      <div className="page-actions flex flex-wrap items-center">
        <button type="button" className="text-btn" onClick={share}>
          <Share2 className="h-4 w-4" aria-hidden="true" />
          <span>{copied ? 'Link copied ✓' : 'Share'}</span>
        </button>
        <button type="button" className="text-btn" onClick={print}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          <span>Print</span>
        </button>
      </div>
    );
  }

  return (
    <div className="page-actions flex flex-wrap gap-2">
      <button
        type="button"
        className="px-3.5 py-2 rounded-full text-xs font-semibold border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 transition-colors bg-[#FFFDF7] flex items-center gap-1"
        onClick={share}
      >
        <span aria-hidden="true">↗</span>
        <span>{copied ? 'Link copied ✓' : 'Share'}</span>
      </button>
      <button
        type="button"
        className="px-3.5 py-2 rounded-full text-xs font-semibold border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 transition-colors bg-[#FFFDF7] flex items-center gap-1"
        onClick={print}
      >
        <span aria-hidden="true">🖨</span>
        <span>Print</span>
      </button>
    </div>
  );
}
