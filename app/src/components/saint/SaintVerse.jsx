/**
 * SaintVerse — the representative verse block shared by the Azhwar and
 * Acharya templates (FR-90/94): Tamil, transliteration, optional word-by-
 * word meaning, significance, theological commentary and a curated listen
 * link. When the original-script text is not yet provided the slot renders
 * an explicit pending marker (dossier caveat: script lost in PDF export).
 * @param {object} props
 * @param {object} props.verse - {work?, tamil?, transliteration, meaning?, wordMeanings?, significance?, commentary?, audio?}
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
        {verse.tamil
          ? <p className="pasuram__tamil" lang="ta">{verse.tamil}</p>
          : <p className="pasuram__tamil pasuram__tamil--pending" lang="ta">[Original verse text pending — to be provided]</p>}
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
        {Array.isArray(verse.commentary) && verse.commentary.length > 0 ? (
          <div className="pasuram__commentary">
            <h5>Theological commentary</h5>
            {verse.commentary.map(({ heading, text }) => (
              <div className="pasuram__commentary-item" key={heading}>
                <strong>{heading}. </strong>{text}
              </div>
            ))}
          </div>
        ) : null}
        {href ? (
          <a className="pasuram__listen" href={href} target="_blank" rel="noopener noreferrer">
            ▶ Listen ↗
          </a>
        ) : null}
      </blockquote>
    </article>
  );
}
