/**
 * SaintSources — the sources list for the saint templates, refined in the
 * round-20 consistency pass: every repository row carries the same
 * labelled external link ("Open repository ↗"). Rows of the shape
 * "Title — domain" link to https://domain (the domain is dataset-supplied
 * — nothing is fabricated); other shapes render as plain rows. Renders
 * the provided fallback element when no sources exist.
 * @param {object} props
 * @param {string[]} [props.sources]
 * @param {import('react').ReactNode} props.fallback
 */
import { ArrowRight, BookOpen } from 'lucide-react';

export default function SaintSources({ sources, fallback }) {
  if (!Array.isArray(sources) || sources.length === 0) return fallback;
  return (
    <ol className="azd-source-list">
      {sources.map((s) => {
        const dash = s.indexOf(' — ');
        const title = dash > 0 ? s.slice(0, dash) : s;
        const domain = dash > 0 ? s.slice(dash + 3) : null;
        const href = domain ? `https://${domain.replace(/^https?:\/\//, '')}` : null;
        return (
          <li key={s} className="azd-source-row">
            <span className="azd-source-icon" aria-hidden="true">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="azd-source-main">
              <span className="azd-source-title">{title}</span>
              {domain ? <span className="azd-source-domain">{domain}</span> : null}
            </span>
            {href ? (
              <a className="azd-source-link" href={href} target="_blank" rel="noopener noreferrer">
                Open repository
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
