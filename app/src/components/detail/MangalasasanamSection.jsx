/**
 * MangalasasanamSection — sacred hymns of the Azhwars (FR-64/65/83) in the
 * round-16 mock's layout: per-Azhwar count pills, centered verse cards
 * (Tamil lines split on the dataset's "*" markers), word-by-word meaning
 * glossary tables, commentary, and a listen link. Falls back to the legacy
 * single-pasuram display.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAzhwarById } from '../../data/api.js';
import PasuramSection from '../PasuramSection.jsx';
import NotDocumented from './NotDocumented.jsx';

function listenHrefFor(excerpt) {
  if (excerpt.audio) return excerpt.audio;
  return excerpt.work
    ? `https://archive.org/search?query=${encodeURIComponent(`${excerpt.work} pasuram recitation`)}`
    : null;
}

/** Dataset verse text uses "*" as line separators — split into lines. */
function verseLines(text) {
  if (!text) return null;
  const lines = text
    .split('*')
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines : null;
}

/** One excerpt: verse card + glossary table + commentary. */
function Excerpt({ excerpt }) {
  const azhwar = getAzhwarById(excerpt.azhwarId);
  const href = listenHrefFor(excerpt);
  const title = `${azhwar ? azhwar.name : excerpt.azhwarId}${excerpt.work ? ` · ${excerpt.work}` : ' · representative pasuram'}${excerpt.verse ? ` (${excerpt.verse})` : ''}`;
  const tamil = verseLines(excerpt.tamil);
  const transliteration = verseLines(excerpt.transliteration);
  return (
    <>
      <div className="verse">
        <h3>{title}</h3>
        {tamil ? (
          <p className="tamil-verse" lang="ta">
            {tamil.map((line, i) => (
              <Fragment key={line}>{i > 0 ? <br /> : null}{line}</Fragment>
            ))}
          </p>
        ) : null}
        {transliteration ? (
          <p className="transliteration">
            {transliteration.map((line, i) => (
              <Fragment key={line}>{i > 0 ? ' / ' : null}{line}</Fragment>
            ))}
          </p>
        ) : null}
        {excerpt.meaning ? <p className="verse-meaning">{excerpt.meaning}</p> : null}
        {href ? (
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
            Listen to recitation
          </a>
        ) : null}
      </div>
      {Array.isArray(excerpt.wordMeanings) && excerpt.wordMeanings.length > 0 ? (
        <>
          <h3>Word-by-word meaning</h3>
          <table className="glossary" aria-label="Pasuram phrase meanings">
            <tbody>
              {excerpt.wordMeanings.map(([word, meaning]) => (
                <tr key={word}>
                  <td lang="ta">{word}</td>
                  <td>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {excerpt.significance ? (
        <>
          <h3>Commentary</h3>
          <p>{excerpt.significance}</p>
        </>
      ) : null}
    </>
  );
}

export default function MangalasasanamSection({ kshetram }) {
  const m = kshetram.mangalasasanam;
  const legacy = kshetram.pasuram;

  if (!m && !legacy) {
    return (
      <section id="mangalasasanam">
        <h2>Mangalasasanam</h2>
        <NotDocumented />
      </section>
    );
  }

  const total = kshetram.pasuramCount > 0 ? kshetram.pasuramCount : null;

  return (
    <section id="mangalasasanam">
      <h2>Mangalasasanam</h2>
      <p className="value">Sacred hymns of the Azhwars</p>
      {m?.perAzhwar?.length ? (
        <p className="muted">
          {total ? <strong>{total.toLocaleString('en-IN')} pasurams</strong> : null}
          {total ? ' · ' : ''}
          {m.perAzhwar.length} Azhwars:
        </p>
      ) : null}
      {m?.perAzhwar?.length ? (
        <div className="azhwar-counts">
          {m.perAzhwar.map(([azhwarId, count]) => {
            const azhwar = getAzhwarById(azhwarId);
            return (
              <Link
                key={azhwarId}
                to={`/azhwar/${azhwarId}`}
                className="pill"
                title={`${azhwar?.name ?? azhwarId}: ${count ?? '—'} pasurams`}
              >
                {azhwar?.name ?? azhwarId} · {count}
              </Link>
            );
          })}
        </div>
      ) : null}
      {m?.excerpts?.length
        ? m.excerpts.map((excerpt) => (
          <Excerpt key={`${excerpt.azhwarId}-${excerpt.work}`} excerpt={excerpt} />
        ))
        : null}
      {!m?.excerpts?.length && legacy ? <PasuramSection pasuram={legacy} bare /> : null}
    </section>
  );
}
