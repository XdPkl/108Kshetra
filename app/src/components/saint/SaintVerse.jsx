/**
 * SaintVerse — the representative verse block shared by the Azhwar and
 * Acharya templates (FR-90/94). Restyled to the kxd theme (round 18): the
 * central verse card (`.verse` — big Tamil, transliteration rule, meaning,
 * significance pill, Listen text-button), the Word-by-word meaning (Pada
 * Artham) glossary table, and theological commentary callouts. When the
 * original-script text is not yet provided the slot renders an explicit
 * pending marker (dossier caveat: script lost in PDF export).
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
      {verse.work ? <h4>{verse.work}</h4> : null}

      {/* Central verse card */}
      <div className="verse">
        {verse.tamil ? (
          <p className="tamil-verse" lang="ta">{verse.tamil}</p>
        ) : (
          <p className="detail__nodata" lang="ta">
            [Original verse text pending — to be provided]
          </p>
        )}
        {verse.transliteration ? (
          <p className="transliteration">{verse.transliteration}</p>
        ) : null}
        {verse.meaning ? (
          <p className="verse-meaning">{verse.meaning}</p>
        ) : null}
        {verse.significance ? (
          <p className="pill">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>{verse.significance}</span>
          </p>
        ) : null}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-btn"
          >
            <span aria-hidden="true">▶</span>
            <span>Listen ↗</span>
          </a>
        ) : null}
      </div>

      {/* Word-by-word meaning (Pada Artham) */}
      {Array.isArray(verse.wordMeanings) && verse.wordMeanings.length > 0 ? (
        <div className="section-rule">
          <h3>
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            Word-by-word meaning (Pada Artham)
          </h3>
          <table className="glossary">
            <tbody>
              {verse.wordMeanings.map(([word, meaning]) => (
                <tr key={word}>
                  <td lang="ta">{word}</td>
                  <td>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {/* Theological commentary */}
      {Array.isArray(verse.commentary) && verse.commentary.length > 0 ? (
        <div className="section-rule">
          <h3>
            <Layers className="h-5 w-5" aria-hidden="true" />
            Theological commentary &amp; anubhavam
          </h3>
          <div className="acd-grid3">
            {verse.commentary.map(({ heading, text }) => (
              <div key={heading} className="azd-callout">
                <h4>{heading}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
