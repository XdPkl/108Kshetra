/**
 * SaintTimeline — the chronological life timeline rail shared by the Azhwar
 * and Acharya templates (dossier §2.1) in the zip-parity lifeline style
 * (UXD v3.0 Gate 6): a ruled aside with saffaron-ringed milestone dots.
 * Renders nothing when absent.
 * @param {object} props
 * @param {{when?: string, event: string}[]} [props.timeline]
 */
import { Clock } from 'lucide-react';

export default function SaintTimeline({ timeline }) {
  if (!Array.isArray(timeline) || timeline.length === 0) return null;
  return (
    <div className="bg-[#FAF2E3] p-6 rounded-2xl border border-[#C99A2E]/45">
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-6 flex items-center gap-2">
        <Clock className="w-4 h-4" aria-hidden="true" />
        <span>Chronological life timeline</span>
      </h3>
      <ol className="relative border-l-2 border-[#E3D2AE] ml-2 space-y-6">
        {timeline.map(({ when, event }, i) => (
          <li key={`${i}-${event.slice(0, 24)}`} className="relative pl-6">
            <span className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#FFFDF7] border-4 border-[#B34700]" aria-hidden="true" />
            {when ? (
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00]">{when}</h4>
            ) : null}
            <p className={`text-xs text-[#66523D] leading-relaxed${when ? ' mt-0.5' : ''}`}>{event}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
