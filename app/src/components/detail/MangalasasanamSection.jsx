/**
 * MangalasasanamSection — summary band (total and per-Azhwar counts) with
 * representative pasuram excerpts showing Tamil, transliteration,
 * word-by-word meaning and theological significance (FR-83). Falls back to
 * the legacy single-pasuram display (FR-64/65).
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 */
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

function Excerpt({ excerpt }) {
  const azhwar = getAzhwarById(excerpt.azhwarId);
  const href = listenHrefFor(excerpt);
  return (
    <article className="pasuram-excerpt">
      <h4>
        {azhwar ? azhwar.name : excerpt.azhwarId}
        {excerpt.work ? ` — ${excerpt.work}` : ' — representative pasuram'}
        {excerpt.verse ? ` (${excerpt.verse})` : ''}
      </h4>
      <blockquote className="pasuram">
        <p className="pasuram__tamil" lang="ta">{excerpt.tamil}</p>
        <p className="pasuram__transliteration"><em>{excerpt.transliteration}</em></p>
        <p className="pasuram__meaning">{excerpt.meaning}</p>
        {Array.isArray(excerpt.wordMeanings) && excerpt.wordMeanings.length > 0 ? (
          <>
            <h5>Word-by-word meaning</h5>
            <dl className="pasuram__words">
              {excerpt.wordMeanings.map(([word, meaning]) => (
                <div className="pasuram__word" key={word}>
                  <dt>{word}</dt>
                  <dd>{meaning}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}
        {excerpt.significance ? (
          <p className="pasuram__significance">✦ {excerpt.significance}</p>
        ) : null}
        <footer className="pasuram__attribution">
          {href ? (
            <a className="pasuram__listen" href={href} target="_blank" rel="noopener noreferrer">
              ▶ Listen ↗
            </a>
          ) : null}
        </footer>
      </blockquote>
    </article>
  );
}

export default function MangalasasanamSection({ kshetram }) {
  const m = kshetram.mangalasasanam;
  const legacy = kshetram.pasuram;

  if (!m && !legacy) {
    return (
      <section id="mangalasasanam" className="detail__section detail__section--full">
        <h2>Mangalasasanam</h2>
        <NotDocumented />
      </section>
    );
  }

  const total = kshetram.pasuramCount > 0 ? kshetram.pasuramCount : null;

  return (
    <section id="mangalasasanam" className="detail__section detail__section--full">
      <h2>Mangalasasanam</h2>
      {m?.perAzhwar?.length ? (
        <p className="mangalasasanam__summary">
          {total ? <><strong>{total.toLocaleString('en-IN')} pasurams</strong> · </> : null}
          {m.perAzhwar.length} Azhwars:{' '}
          {m.perAzhwar.map(([azhwarId, count]) => {
            const azhwar = getAzhwarById(azhwarId);
            return (
              <Link
                key={azhwarId}
                className="chip"
                to={`/azhwar/${azhwarId}`}
                title={`${azhwar?.name ?? azhwarId}: ${count ?? '—'} pasurams`}
              >
                {azhwar?.name ?? azhwarId} {count}
              </Link>
            );
          })}
        </p>
      ) : null}
      {m?.excerpts?.length ? (
        <div className="mangalasasanam__excerpts">
          {m.excerpts.map((excerpt) => <Excerpt key={`${excerpt.azhwarId}-${excerpt.work}`} excerpt={excerpt} />)}
        </div>
      ) : null}
      {!m?.excerpts?.length && legacy ? <PasuramSection pasuram={legacy} bare /> : null}
    </section>
  );
}
