/**
 * SaintLegend — the Sthala Puranam & legend highlight callout shared by the
 * saint templates (dossier §2.2 closing block). Restyled to the kxd theme
 * (round 18): gold-edged tint callout. Renders nothing when absent.
 * @param {object} props
 * @param {{title?: string, text: string}} [props.legend]
 */
import { Sparkles } from 'lucide-react';

export default function SaintLegend({ legend }) {
  if (!legend?.text) return null;
  return (
    <aside className="azd-callout azd-legend">
      <h5 className="eyebrow">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{legend.title ?? 'Legend highlight'}</span>
      </h5>
      <p className="note">{legend.text}</p>
    </aside>
  );
}
