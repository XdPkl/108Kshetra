/**
 * SaintMedia — the media library for the Azhwar detail page (FR-90),
 * restyled to the 2026-10-01 poigai mock (round 19): discourse
 * search-title rows (speaker split from the trailing name where the
 * dataset carries one) beside a Sacred-iconography sidebar with the
 * saint's portrait, the structured iconography rows, digital texts and a
 * See-sources shortcut. Destinations stay YouTube search URLs — nothing
 * implies playable or verified recordings.
 * @param {object} props
 * @param {object} [props.visuals] - {iconography?, videoSearches?, digitalTexts?}
 * @param {string} [props.name] - saint name for the subtitle line
 * @param {{src?: string, alt?: string}} [props.photo] - portrait for the sidebar
 * @param {() => void} [props.onSeeSources] - jump to the Sources tab
 */
import { ArrowRight } from 'lucide-react';
import NotDocumented from '../detail/NotDocumented.jsx';
import { assetUrl } from '../../utils/assetUrl.js';

const ICONOGRAPHY_LABELS = [
  ['posture', 'Posture'],
  ['mudras', 'Mudras'],
  ['garments', 'Garments'],
  ['idol', 'Shrine tradition'],
];

/** Splits "Title Speaker" rows where the dataset carries a speaker name. */
const SPEAKER_PATTERN = /\s+(Velukkudi Krishnan|Karunakarachariar|Ananthapadmanabhachariar)$/;

/** "Title — domain" → external https link for the referenced repository. */
function repositoryHref(text) {
  const dash = text.indexOf(' — ');
  if (dash <= 0) return null;
  return `https://${text.slice(dash + 3).replace(/^https?:\/\//, '')}`;
}

export default function SaintMedia({ visuals, name, photo, onSeeSources }) {
  const hasAny = visuals
    && [visuals.iconography, visuals.videoSearches, visuals.digitalTexts]
      .some((x) => (Array.isArray(x) ? x.length > 0 : Boolean(x)));
  if (!hasAny) return <NotDocumented />;
  const hasListening = Array.isArray(visuals.videoSearches) && visuals.videoSearches.length > 0;
  const hasTexts = Array.isArray(visuals.digitalTexts) && visuals.digitalTexts.length > 0;
  const structuredIconography = typeof visuals.iconography === 'object' && visuals.iconography !== null;
  return (
    <div>
      <p className="eyebrow">Media library</p>
      <h2 className="azd-display">Listen, learn &amp; contemplate</h2>
      {name ? (
        <p className="azd-sub">Selected discourses and upanyasams on {name} and related traditions.</p>
      ) : null}

      <div className="azd-media-grid">
        {hasListening ? (
          <div>
            {visuals.videoSearches.map((raw) => {
              const speaker = raw.match(SPEAKER_PATTERN);
              const title = speaker ? raw.slice(0, speaker.index) : raw;
              return (
                <div key={raw} className="azd-listen-row">
                  <span className="azd-listen-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </span>
                  <span className="azd-listen-main">
                    <span className="azd-listen-title">{title}</span>
                    {speaker ? <span className="azd-listen-speaker">{speaker[1]}</span> : null}
                  </span>
                  <a
                    className="azd-listen-action"
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(raw)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="azd-listen-go">Search on YouTube ↗</span>
                    <span className="note">Find related discourses and upanyasams on YouTube</span>
                  </a>
                </div>
              );
            })}
          </div>
        ) : null}

        {visuals.iconography || hasTexts || onSeeSources ? (
          <aside className="azd-media-side">
            {visuals.iconography ? (
              <div>
                <h3 className="eyebrow azd-side-h">Sacred iconography</h3>
                {photo?.src ? (
                  <img className="azd-icono-photo" src={assetUrl(photo.src)} alt="" loading="lazy" />
                ) : null}
                {structuredIconography ? (
                  <dl className="azd-icono">
                    {ICONOGRAPHY_LABELS.map(([key, label]) => (
                      visuals.iconography[key] ? (
                        <div key={key} className="azd-icono-row">
                          <dt>{label}</dt>
                          <dd>{visuals.iconography[key]}</dd>
                        </div>
                      ) : null
                    ))}
                  </dl>
                ) : (
                  <p>{visuals.iconography}</p>
                )}
              </div>
            ) : null}
            {hasTexts ? (
              <div className="azd-texts">
                <h3 className="eyebrow azd-side-h">Digital texts</h3>
                <ul>
                  {visuals.digitalTexts.map((t) => {
                    const href = repositoryHref(t);
                    return (
                      <li key={t}>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer">{t} ↗</a>
                        ) : t}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {onSeeSources ? (
              <button type="button" className="text-btn azd-see-sources" onClick={onSeeSources}>
                See sources
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </aside>
        ) : null}
      </div>
    </div>
  );
}
