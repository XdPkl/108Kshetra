/**
 * PageActions — Share (Web Share API with clipboard fallback, FR-69) and
 * Print (print stylesheet, FR-70) actions for the detail page, zip-parity
 * pill styling (UXD v3.0 Gate 3).
 */
import { useState } from 'react';

export default function PageActions() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const { title, url } = document;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        return; // user dismissed the share sheet
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        onClick={() => window.print()}
      >
        <span aria-hidden="true">🖨</span>
        <span>Print</span>
      </button>
    </div>
  );
}
