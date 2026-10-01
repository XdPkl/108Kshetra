/**
 * MangalasasanamSection — sacred hymns of the Azhwars (FR-64/65/83),
 * rescanned per the PO round-17 audit: a compact three-column Azhwar
 * name/count list (two columns on mobile), verse cards with intentional
 * line breaks, and the word-by-word glossary + commentary in labelled
 * disclosure sections so the verse and Listen action stay visible.
 * Falls back to the legacy single-pasuram display.
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

/** One excerpt: verse card + glossary/commentary disclosures. */
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
        <details className="disclosure">
          <summary>Word-by-word meaning</summary>
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
        </details>
      ) : null}
      {excerpt.significance ? (
        <details className="disclosure">
          <summary>Commentary</summary>
          <p>{excerpt.significance}</p>
        </details>
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
        <>
          <p className="muted">
            {total ? <strong>{total.toLocaleString('en-IN')} pasurams</strong> : null}
            {total ? ' · ' : ''}
            {m.perAzhwar.length} Azhwars:
          </p>
          <ul className="azhwar-list">
            {m.perAzhwar.map(([azhwarId, count]) => {
              const azhwar = getAzhwarById(azhwarId);
              return (
                <li key={azhwarId}>
                  <Link
                    to={`/azhwar/${azhwarId}`}
                    title={`${azhwar?.name ?? azhwarId}: ${count ?? '—'} pasurams`}
                  >
                    <span>{azhwar?.name ?? azhwarId}</span>
                    <span className="azhwar-count"> · {count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
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
