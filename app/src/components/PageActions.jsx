/**
 * PageActions — Share (Web Share API with clipboard fallback, FR-69) and
 * Print (print stylesheet, FR-70) actions for the detail page.
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
    <div className="page-actions">
      <button type="button" className="btn btn--outline btn--small" onClick={share}>
        {copied ? 'Link copied ✓' : '↗ Share'}
      </button>
      <button type="button" className="btn btn--outline btn--small" onClick={() => window.print()}>
        🖨 Print
      </button>
    </div>
  );
}
