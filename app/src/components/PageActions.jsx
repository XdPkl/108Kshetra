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
