/**
 * SaintMedia — the media library for the Azhwar detail page (FR-90),
 * refined to the round-20 consistency pass: full-width discourse rows
 * (one shared explanation of the YouTube-search behaviour instead of a
 * helper line in every row) with the Sacred-iconography section below —
 * a modest portrait beside a wide text column on desktop, stacked on
 * mobile. Destinations stay YouTube search URLs — nothing implies
 * playable or verified recordings.
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
      <h2>Listen, learn &amp; contemplate</h2>
      {name ? (
        <p className="azd-sub">Selected discourses and upanyasams on {name} and related traditions.</p>
      ) : null}

      {hasListening ? (
        <div>
          {/* One explanation for the whole list — every row is a search,
              not a playable recording. */}
          <p className="note azd-media-note">
            Each title opens a YouTube search for that discourse — these are
            searches, not playable recordings.
          </p>
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
                  Search on YouTube ↗
                </a>
              </div>
            );
          })}
        </div>
      ) : null}

      {visuals.iconography || hasTexts || onSeeSources ? (
        <div className="azd-icono-grid section-rule">
          {photo?.src ? (
            <img
              className="azd-icono-photo"
              src={assetUrl(photo.src)}
              alt={photo.alt ?? ''}
              loading="lazy"
            />
          ) : null}
          <div>
            {visuals.iconography ? (
              <div>
                <h3 className="eyebrow azd-side-h">Sacred iconography</h3>
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
          </div>
        </div>
      ) : null}
    </div>
  );
}
