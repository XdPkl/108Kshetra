/**
 * SaintVerse — the representative verse block shared by the Azhwar and
 * Acharya templates (FR-90/94) in the zip-parity layout (UXD v3.0 Gate 6):
 * the central verse banner (inner golden border, big Tamil, transliteration,
 * essence pill), the Word-by-word meaning (Pada Artham) tile grid, and
 * theological commentary cards. When the original-script text is not yet
 * provided the slot renders an explicit pending marker (dossier caveat:
 * script lost in PDF export).
 * @param {object} props
 * @param {object} props.verse - {work?, tamil?, transliteration, meaning?, wordMeanings?, significance?, commentary?, audio?}
 */
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export default function SaintVerse({ verse }) {
  const href = verse.audio
    ?? (verse.work
      ? `https://archive.org/search?query=${encodeURIComponent(`${verse.work} recitation`)}`
      : null);
  return (
    <article>
      {verse.work ? <h4 className="font-display text-lg font-semibold text-[#7A2E00] mb-3">{verse.work}</h4> : null}

      {/* Central verse banner */}
      <div className="p-6 sm:p-8 bg-[#F6EBD6] rounded-2xl border border-[#C99A2E]/60 text-center relative shadow-xs">
        <div className="absolute inset-2 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />
        {verse.tamil ? (
          <p className="font-body text-xl sm:text-2xl leading-relaxed font-semibold text-[#4A2408] relative z-10" lang="ta">
            {verse.tamil}
          </p>
        ) : (
          <p className="font-body text-base leading-relaxed font-medium text-[#8C765C] relative z-10" lang="ta">
            [Original verse text pending — to be provided]
          </p>
        )}
        {verse.transliteration ? (
          <div className="mt-5 pt-4 border-t border-[#C99A2E]/35 max-w-2xl mx-auto relative z-10">
            <p className="text-xs sm:text-sm text-[#66523D] leading-relaxed italic">{verse.transliteration}</p>
          </div>
        ) : null}
        {verse.meaning ? (
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-[#332417] relative z-10">{verse.meaning}</p>
        ) : null}
        {verse.significance ? (
          <div className="mt-5 inline-flex items-center gap-2 bg-[#FFFDF7] text-[#4A3005] border border-[#C99A2E]/60 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-2xs relative z-10">
            <Sparkles className="w-4 h-4 text-[#B34700] shrink-0" aria-hidden="true" />
            <span>{verse.significance}</span>
          </div>
        ) : null}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg bg-[#FAF2E3] hover:bg-[#C99A2E]/20 border border-[#C99A2E]/60 text-xs font-bold uppercase tracking-wider text-[#7A2E00] transition-colors shadow-xs relative z-10"
          >
            <span aria-hidden="true">▶</span>
            <span>Listen ↗</span>
          </a>
        ) : null}
      </div>

      {/* Word-by-word meaning (Pada Artham) */}
      {Array.isArray(verse.wordMeanings) && verse.wordMeanings.length > 0 ? (
        <div className="mt-8">
          <h5 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-3 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Word-by-word meaning (Pada Artham)</span>
          </h5>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {verse.wordMeanings.map(([word, meaning]) => (
              <div key={word} className="p-3 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/35">
                <span className="block text-xs font-bold text-[#7A2E00]" lang="ta">{word}</span>
                <span className="text-xs text-[#66523D] mt-0.5 block">{meaning}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Theological commentary */}
      {Array.isArray(verse.commentary) && verse.commentary.length > 0 ? (
        <div className="mt-8">
          <h5 className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700] mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Theological commentary &amp; anubhavam</span>
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {verse.commentary.map(({ heading, text }) => (
              <div key={heading} className="p-4 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/40">
                <h6 className="font-display font-bold text-[#332417] text-base mb-1.5">{heading}</h6>
                <p className="text-xs text-[#66523D] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
