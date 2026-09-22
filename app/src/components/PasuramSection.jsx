/**
 * PasuramSection — a representative Mangalasasanam pasuram in Tamil with
 * transliteration, meaning and a curated "listen" link (FR-64/65), rendered
 * in the zip-parity ornate verse container (UXD v3.0 Gate 3).
 * @param {object} props
 * @param {object|null} props.pasuram - {azhwarId, reference, work, tamil?, transliteration?, meaning}
 * @param {boolean} [props.bare] - render only the verse container (embedded in the V3 Mangalasasanam section)
 */
import { getAzhwarById } from '../data/api.js';

export default function PasuramSection({ pasuram, bare = false }) {
  if (!pasuram) return null;
  const azhwar = getAzhwarById(pasuram.azhwarId);
  const listenHref = pasuram.work
    ? `https://archive.org/search?query=${encodeURIComponent(`${pasuram.work} pasuram recitation`)}`
    : null;
  const container = (
    <div className="relative rounded-2xl border border-[#C99A2E]/55 bg-[#F6EBD6] px-6 py-8 text-center overflow-hidden">
      <div className="absolute inset-2 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />
      <span className="absolute top-3 left-1/2 -translate-x-1/2 font-display text-4xl leading-none text-[#C99A2E]/70" aria-hidden="true">❝</span>
      <blockquote className="relative z-10 mt-3">
        {pasuram.tamil ? (
          <p className="font-body text-xl sm:text-2xl leading-relaxed text-[#4A2408] font-medium" lang="ta">
            {pasuram.tamil}
          </p>
        ) : null}
        {pasuram.transliteration ? (
          <p className="mt-4 pt-4 border-t border-[#C99A2E]/30 font-display italic text-lg text-[#332417]">
            {pasuram.transliteration}
          </p>
        ) : null}
        <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-[#332417]">{pasuram.meaning}</p>
        <footer className="mt-4 text-xs text-[#66523D]">
          — {azhwar ? azhwar.name : pasuram.azhwarId}, {pasuram.reference}
        </footer>
        {listenHref ? (
          <a
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-[#FAF2E3] hover:bg-[#C99A2E]/20 border border-[#C99A2E]/60 text-xs font-bold uppercase tracking-wider text-[#7A2E00] transition-colors shadow-xs"
            href={listenHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">▶</span>
            <span>Listen ↗</span>
          </a>
        ) : null}
      </blockquote>
    </div>
  );
  if (bare) return container;
  return (
    <section className="bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/40 shadow-xs p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />
      <div className="border-b border-[#F0E3C6] pb-3 mb-6">
        <h2 className="font-display text-2xl sm:text-[1.7rem] font-semibold text-[#7A2E00]">Mangalasasanam Pasuram</h2>
      </div>
      {container}
    </section>
  );
}
