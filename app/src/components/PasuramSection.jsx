/**
 * PasuramSection — a representative Mangalasasanam pasuram in Tamil with
 * transliteration, meaning and a curated "listen" link (FR-64/65).
 * @param {object} props
 * @param {object|null} props.pasuram - {azhwarId, reference, work, tamil?, transliteration?, meaning}
 * @param {boolean} [props.bare] - render only the blockquote (embedded in the V3 Mangalasasanam section)
 */
import { getAzhwarById } from '../data/api.js';

export default function PasuramSection({ pasuram, bare = false }) {
  if (!pasuram) return null;
  const azhwar = getAzhwarById(pasuram.azhwarId);
  const listenHref = pasuram.work
    ? `https://archive.org/search?query=${encodeURIComponent(`${pasuram.work} pasuram recitation`)}`
    : null;
  const blockquote = (
    <blockquote className="pasuram">
      {pasuram.tamil ? <p className="pasuram__tamil" lang="ta">{pasuram.tamil}</p> : null}
      {pasuram.transliteration ? (
        <p className="pasuram__transliteration"><em>{pasuram.transliteration}</em></p>
      ) : null}
      <p className="pasuram__meaning">{pasuram.meaning}</p>
      <footer className="pasuram__attribution">
        — {azhwar ? azhwar.name : pasuram.azhwarId}, {pasuram.reference}
        {listenHref ? (
          <a className="pasuram__listen" href={listenHref} target="_blank" rel="noopener noreferrer">
            ▶ Listen ↗
          </a>
        ) : null}
      </footer>
    </blockquote>
  );
  if (bare) return blockquote;
  return (
    <section className="detail__section detail__section--full">
      <h2>Mangalasasanam Pasuram</h2>
      {blockquote}
    </section>
  );
}
