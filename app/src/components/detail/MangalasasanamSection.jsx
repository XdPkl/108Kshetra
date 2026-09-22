/**
 * MangalasasanamSection — summary band (total and per-Azhwar counts) with
 * representative pasuram excerpts (FR-64/65/83) rendered in the zip-parity
 * ornate verse containers (UXD v3.0 Gate 3): inner golden border, ❝
 * ornament, Tamil verse, transliteration, meaning, word-by-word meaning
 * chips and a listen link. Falls back to the legacy single-pasuram display.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import { Link } from 'react-router-dom';
import { getAzhwarById } from '../../data/api.js';
import PasuramSection from '../PasuramSection.jsx';
import NotDocumented from './NotDocumented.jsx';
import ZipSection from './ZipSection.jsx';

function listenHrefFor(excerpt) {
  if (excerpt.audio) return excerpt.audio;
  return excerpt.work
    ? `https://archive.org/search?query=${encodeURIComponent(`${excerpt.work} pasuram recitation`)}`
    : null;
}

/** One excerpt inside the zip ornate verse container. */
function Excerpt({ excerpt }) {
  const azhwar = getAzhwarById(excerpt.azhwarId);
  const href = listenHrefFor(excerpt);
  const title = `${azhwar ? azhwar.name : excerpt.azhwarId}${excerpt.work ? ` — ${excerpt.work}` : ' — representative pasuram'}${excerpt.verse ? ` (${excerpt.verse})` : ''}`;
  return (
    <div className="relative rounded-2xl border border-[#C99A2E]/55 bg-[#F6EBD6] px-6 py-8 text-center overflow-hidden">
      <div className="absolute inset-2 border border-[#C99A2E]/30 rounded-xl pointer-events-none" aria-hidden="true" />
      <span className="absolute top-3 left-1/2 -translate-x-1/2 font-display text-4xl leading-none text-[#C99A2E]/70" aria-hidden="true">❝</span>
      <h4 className="font-display text-xl font-semibold text-[#7A2E00] relative z-10 mt-2">{title}</h4>
      <p className="mt-2 font-body text-xl sm:text-2xl leading-relaxed text-[#4A2408] font-medium relative z-10" lang="ta">
        {excerpt.tamil}
      </p>
      {excerpt.transliteration ? (
        <p className="mt-4 pt-4 border-t border-[#C99A2E]/30 font-display italic text-lg text-[#332417] relative z-10">
          {excerpt.transliteration}
        </p>
      ) : null}
      <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-[#332417] relative z-10">
        {excerpt.meaning}
      </p>
      {Array.isArray(excerpt.wordMeanings) && excerpt.wordMeanings.length > 0 ? (
        <div className="relative z-10 mt-4">
          <h5 className="text-[0.7rem] uppercase font-bold tracking-wider text-[#96731F]">Word-by-word meaning</h5>
          <div className="mt-2 flex flex-wrap justify-center gap-1.5">
            {excerpt.wordMeanings.map(([word, meaning]) => (
              <span
                key={word}
                className="px-2.5 py-1 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-xs text-[#332417]"
                lang="ta"
                title={meaning}
              >
                <strong className="font-semibold">{word}</strong>
                <span className="text-[#66523D]"> — {meaning}</span>
              </span>
            ))}
          </div>
        </div>
      ) : null}
      {excerpt.significance ? (
        <p className="mt-4 text-sm text-[#7A2E00] relative z-10">✦ {excerpt.significance}</p>
      ) : null}
      {href ? (
        <div className="mt-5 relative z-10">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF2E3] hover:bg-[#C99A2E]/20 border border-[#C99A2E]/60 text-xs font-bold uppercase tracking-wider text-[#7A2E00] transition-colors shadow-xs"
          >
            <span aria-hidden="true">▶</span>
            <span>Listen ↗</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default function MangalasasanamSection({ kshetram }) {
  const m = kshetram.mangalasasanam;
  const legacy = kshetram.pasuram;

  if (!m && !legacy) {
    return (
      <ZipSection id="mangalasasanam" title="Mangalasasanam">
        <NotDocumented />
      </ZipSection>
    );
  }

  const total = kshetram.pasuramCount > 0 ? kshetram.pasuramCount : null;

  return (
    <ZipSection id="mangalasasanam" title="Mangalasasanam">
      {m?.perAzhwar?.length ? (
        <div className="text-sm mb-5 text-[#332417]">
          {total ? <><strong>{total.toLocaleString('en-IN')} pasurams</strong> · </> : null}
          {m.perAzhwar.length} Azhwars:{' '}
          <span className="inline-flex flex-wrap gap-1 align-middle mt-1 sm:mt-0">
            {m.perAzhwar.map(([azhwarId, count]) => {
              const azhwar = getAzhwarById(azhwarId);
              return (
                <Link
                  key={azhwarId}
                  to={`/azhwar/${azhwarId}`}
                  className="chip-link"
                  title={`${azhwar?.name ?? azhwarId}: ${count ?? '—'} pasurams`}
                >
                  {azhwar?.name ?? azhwarId} {count}
                </Link>
              );
            })}
          </span>
        </div>
      ) : null}
      {m?.excerpts?.length ? (
        <div className="space-y-6">
          {m.excerpts.map((excerpt) => <Excerpt key={`${excerpt.azhwarId}-${excerpt.work}`} excerpt={excerpt} />)}
        </div>
      ) : null}
      {!m?.excerpts?.length && legacy ? <PasuramSection pasuram={legacy} bare /> : null}
    </ZipSection>
  );
}
