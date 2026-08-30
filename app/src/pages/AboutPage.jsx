/**
 * AboutPage — "About Us — Kshetra Tours" (FR-87), navigated as
 * "Kshetra Tours". Entirely data-driven from src/data/about.js.
 */
import { ABOUT } from '../data/about.js';

export default function AboutPage() {
  const { site, tours, contact } = ABOUT;
  return (
    <div className="page about-page">
      <h1>About Us — Kshetra Tours</h1>

      <section aria-labelledby="about-site">
        <h2 id="about-site">{site.heading}</h2>
        {site.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      </section>

      <section aria-labelledby="about-tours">
        <h2 id="about-tours">{tours.heading}</h2>
        <p>{tours.intro}</p>
        <ul className="about-page__list">
          {tours.highlights.map((h) => <li key={h.slice(0, 24)}>{h}</li>)}
        </ul>
        <p>{tours.note}</p>
      </section>

      <section aria-labelledby="about-contact">
        <h2 id="about-contact">{contact.heading}</h2>
        <dl className="about-page__contact">
          <dt>Email</dt>
          <dd>{contact.email}</dd>
          <dt>Phone</dt>
          <dd>{contact.phone}</dd>
        </dl>
        <p>{contact.note}</p>
      </section>
    </div>
  );
}
