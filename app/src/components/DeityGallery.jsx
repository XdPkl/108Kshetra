/**
 * DeityGallery — Moolavar, Thaayar, Urchavar and Urchavar Thaayar cards
 * with sourced photos or placeholders (FR-60/61).
 * @param {object} props
 * @param {object} props.kshetram - enriched kshetram record
 */
import WikiThumb from './WikiThumb.jsx';

export default function DeityGallery({ kshetram }) {
  const cards = [
    { role: 'Moolavar', d: kshetram.moolavar, wiki: kshetram.wiki },
    { role: 'Thaayar', d: kshetram.thaayar, wiki: kshetram.wiki },
    { role: 'Urchavar', d: kshetram.urchavar, wiki: kshetram.wiki },
  ].filter((c) => c.d);

  return (
    <section className="detail__section detail__section--full">
      <h2>Presiding Deities</h2>
      <div className="deity-grid">
        {cards.map(({ role, d, wiki }) => (
          <article className="deity-card" key={role}>
            <WikiThumb title={wiki} alt={`${d.name} — ${role} at ${kshetram.name}`} />
            <h3>{role}</h3>
            <p className="deity-card__tamil" lang="ta">{d.tamilName}</p>
            <p className="deity-card__name">{d.name}</p>
            {d.form ? <p className="deity-card__form">{d.form}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
