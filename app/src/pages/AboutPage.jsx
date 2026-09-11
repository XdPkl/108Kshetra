/**
 * AboutPage — "About Us — Kshetra Tours" (FR-87), navigated as
 * "Kshetra Tours". Entirely data-driven from src/data/about.js, laid out per
 * the PO-approved design mockups (docs/03-design/mockups/about.html): a
 * feature grid, a numbered tours card and a contact card with
 * copy-to-clipboard actions.
 */
import { useState } from 'react';
import { ABOUT } from '../data/about.js';

/** Copy-to-clipboard button with a transient "Copied ✓" acknowledgement. */
function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return; // clipboard unavailable — the value remains visible to copy by hand
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button type="button" className="about-copy" onClick={onCopy}>
      {copied ? 'Copied ✓' : label}
    </button>
  );
}

export default function AboutPage() {
  const { site, tours, contact } = ABOUT;
  return (
    <div className="page about-page">
      <header className="about-page__head">
        <span className="eyebrow">Nalayira Divya Prabandham Series</span>
        <h1>About Us — Kshetra Tours</h1>
        <p className="about-page__intro">
          A dedicated devotional resource and guided pilgrimage initiative celebrating the 108 Divya Desams
          glorified in the Tamil Veda.
        </p>
      </header>

      <section aria-labelledby="about-site" className="detail__section detail__section--full about-panel">
        <div className="section-head">
          <span className="eyebrow">The digital archive</span>
          <h2 id="about-site">{site.heading}</h2>
        </div>
        {site.paragraphs.map((p) => <p key={p.slice(0, 24)} className="about-page__para">{p}</p>)}
        {Array.isArray(site.features) && site.features.length > 0 ? (
          <div className="about-features">
            {site.features.map((f) => (
              <div className="about-feature" key={f.label}>
                <span className="about-feature__label">{f.label}</span>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <div className="about-split">
        <section aria-labelledby="about-tours" className="detail__section detail__section--full about-panel">
          <div className="section-head">
            <span className="eyebrow">Guided yatras</span>
            <h2 id="about-tours">{tours.heading}</h2>
          </div>
          <p className="about-page__para">{tours.intro}</p>
          <div className="about-numbered">
            {(tours.highlights ?? []).map((h, i) => (
              <div className="about-numbered__item" key={h.title ?? h.slice(0, 24)}>
                <span className="about-numbered__no">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{typeof h === 'string' ? h : h.title}</h3>
                  <p>{typeof h === 'string' ? null : h.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="about-page__para about-page__note">{tours.note}</p>
        </section>

        <section aria-labelledby="about-contact" className="detail__section detail__section--full about-panel about-contact">
          <div className="section-head">
            <span className="eyebrow">Pilgrim inquiries</span>
            <h2 id="about-contact">{contact.heading}</h2>
          </div>
          <div className="about-contact__row">
            <div>
              <span className="about-contact__label">Email us</span>
              <span className="about-contact__value">{contact.email}</span>
            </div>
            {contact.email && !contact.email.includes('[To be provided') ? (
              <CopyButton value={contact.email} label="Copy" />
            ) : null}
          </div>
          <div className="about-contact__row">
            <div>
              <span className="about-contact__label">Phone / WhatsApp</span>
              <span className="about-contact__value">{contact.phone}</span>
            </div>
            {contact.phone && !contact.phone.includes('[To be provided') ? (
              <CopyButton value={contact.phone} label="Copy" />
            ) : null}
          </div>
          <p className="about-contact__note"><strong>Response hours:</strong> {contact.note}</p>
        </section>
      </div>
    </div>
  );
}
