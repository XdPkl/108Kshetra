/**
 * SaintLegend — the Sthala Puranam & legend highlight callout shared by the
 * saint templates (dossier §2.2 closing block) in the zip-parity sunk panel
 * (UXD v3.0 Gate 6). Renders nothing when absent.
 * @param {object} props
 * @param {{title?: string, text: string}} [props.legend]
 */
import { Sparkles } from 'lucide-react';

export default function SaintLegend({ legend }) {
  if (!legend?.text) return null;
  return (
    <aside className="bg-[#F6EBD6] p-5 rounded-xl border border-[#C99A2E]/50 mt-6">
      <h5 className="text-xs font-bold text-[#7A2E00] uppercase tracking-wider mb-1 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
        <span>{legend.title ?? 'Legend highlight'}</span>
      </h5>
      <p className="text-xs text-[#66523D] leading-relaxed">{legend.text}</p>
    </aside>
  );
}
