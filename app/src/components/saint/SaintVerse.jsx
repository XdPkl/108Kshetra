/**
 * SaintVerse — the representative verse block shared by the Azhwar and
 * Acharya templates (FR-90/94): Tamil, transliteration, optional word-by-
 * word meaning and significance, with a curated listen link.
 * @param {object} props
 * @param {object} props.verse - {work?, tamil, transliteration, meaning?, wordMeanings?, significance?, audio?}
 */
export default function SaintVerse({ verse }) {
  const href = verse.audio
    ?? (verse.work
      ? `https://archive.org/search?query=${encodeURIComponent(`${verse.work} recitation`)}`
      : null);
  return (
    <article className="pasuram-excerpt">
      {verse.work ? <h4>{verse.work}</h4> : null}
      <blockquote className="pasuram">
        <p className="pasuram__tamil" lang="ta">{verse.tamil}</p>
        <p className="pasuram__transliteration"><em>{verse.transliteration}</em></p>
        {verse.meaning ? <p className="pasuram__meaning">{verse.meaning}</p> : null}
        {Array.isArray(verse.wordMeanings) && verse.wordMeanings.length > 0 ? (
          <>
            <h5>Word-by-word meaning</h5>
            <dl className="pasuram__words">
              {verse.wordMeanings.map(([word, meaning]) => (
                <div className="pasuram__word" key={word}>
                  <dt>{word}</dt>
                  <dd>{meaning}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}
        {verse.significance ? <p className="pasuram__significance">✦ {verse.significance}</p> : null}
        {href ? (
          <a className="pasuram__listen" href={href} target="_blank" rel="noopener noreferrer">
            ▶ Listen ↗
          </a>
        ) : null}
      </blockquote>
    </article>
  );
}
