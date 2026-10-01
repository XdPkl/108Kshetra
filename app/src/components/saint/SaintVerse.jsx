/**
 * SaintVerse — the opening-verse reader for the Azhwar detail page
 * (FR-90), restyled to the 2026-10-01 poigai mock (round 19): an editorial
 * two-column reader — Tamil verse, transliteration/meaning flag blocks and
 * a Find-recitations action in the main column, the word-by-word glossary
 * rows and the About-this-verse note in the sidebar — followed by the
 * Commentary & anubhavam accordions. When the original-script text is not
 * yet provided the slot renders an explicit pending marker (dossier
 * caveat: script lost in PDF export).
 * @param {object} props
 * @param {object} props.verse - {work?, tamil?, transliteration?, meaning?, wordMeanings?, significance?, commentary?, audio?}
 */
import { ArrowRight } from 'lucide-react';

export default function SaintVerse({ verse }) {
  const href = verse.audio
    ?? (verse.work
      ? `https://archive.org/search?query=${encodeURIComponent(`${verse.work} recitation`)}`
      : null);
  const wordMeanings = Array.isArray(verse.wordMeanings) ? verse.wordMeanings : [];
  const commentary = Array.isArray(verse.commentary) ? verse.commentary : [];
  // The mock's MEANING block — the dataset usually carries only the longer
  // significance text, so it stands in when no condensed meaning exists
  // (the sidebar About block then only renders when both fields exist).
  const meaningText = verse.meaning ?? verse.significance ?? null;
  const hasAbout = verse.meaning && verse.significance;
  return (
    <div>
      <div className="azd-verse-reader">
        <div className="azd-verse-main">
          {verse.work ? <p className="eyebrow">{verse.work}</p> : null}
          <h2 className="azd-display">Opening verse</h2>
          {verse.tamil ? (
            <p className="tamil azd-verse-tamil" lang="ta">{verse.tamil}</p>
          ) : (
            <p className="detail__nodata" lang="ta">
              [Original verse text pending — to be provided]
            </p>
          )}
          {verse.transliteration ? (
            <div className="azd-flag">
              <p className="eyebrow">Transliteration</p>
              <p className="azd-flag-text">{verse.transliteration}</p>
            </div>
          ) : null}
          {meaningText ? (
            <div className="azd-flag">
              <p className="eyebrow">Meaning</p>
              <p className="azd-flag-text">{meaningText}</p>
            </div>
          ) : null}
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary azd-recite"
            >
              Find recitations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {wordMeanings.length > 0 || hasAbout ? (
          <aside className="azd-verse-side">
            {wordMeanings.length > 0 ? (
              <div>
                <h3 className="eyebrow azd-side-h">Word-by-word meaning (Pada Artham)</h3>
                <dl className="azd-gloss">
                  {wordMeanings.map(([word, meaning]) => (
                    <div key={word} className="azd-gloss-row">
                      <dt lang="ta">{word}</dt>
                      <dd>{meaning}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
            {hasAbout ? (
              <div className="azd-about">
                <h3 className="eyebrow azd-side-h">About this verse</h3>
                <p>{verse.significance}</p>
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>

      {commentary.length > 0 ? (
        <div className="section-rule azd-commentary">
          <h2 className="azd-display">Commentary &amp; anubhavam</h2>
          <div className="azd-acc">
            {commentary.map(({ heading, text }) => (
              <details key={heading} className="azd-acc-item">
                <summary>{heading}</summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
