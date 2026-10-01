/**
 * DeityBreakdown — two-column Moolavar | Urchavar breakdown (FR-83/85) in
 * the round-16 mock's ruled columns: photo with lightbox, Tamil/Sanskrit/
 * transliteration names, italic form note, etymology and a Thaayar consort
 * block. Falls back to the legacy V2 deity fields, then to the documented
 * placeholder. The dossier names blob ("… Sanskrit: … Transliteration: …")
 * is parsed into its three display lines.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 * @param {(photos: object[], index: number) => void} props.onOpenPhoto - opens the lightbox
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import NotDocumented from './NotDocumented.jsx';

/** Normalises a deity entry's photo list to {src?|wiki?, alt, credit?} items. */
function photosFor(deity, fallbackWiki, fallbackAlt) {
  if (deity?.photos?.length) return deity.photos.slice(0, 3);
  if (fallbackWiki) return [{ wiki: fallbackWiki, alt: fallbackAlt }];
  return [];
}

/** Resolves a photo entry (src or wiki title) to a displayable image URL. */
function PhotoImg({ photo, alt, className }) {
  const image = useWikiImage(photo.wiki ?? null, photo.src ?? null);
  if (!image.src) {
    return <span className="flex aspect-video items-center justify-center text-3xl text-[#96731F]/70" aria-hidden="true">◆</span>;
  }
  return (
    <img
      src={image.src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    />
  );
}

/** Splits a names blob into {tamil, sanskrit, translit} display lines. */
function parseNames(names = {}) {
  let tamil = names.tamil ?? '';
  let sanskrit = names.sanskrit ?? null;
  let translit = names.translit ?? null;
  if (!sanskrit && /Sanskrit:/.test(tamil)) {
    const match = tamil.match(/^(.*?)\s*Sanskrit:\s*(.*?)(?:\s*Transliteration:\s*(.*))?$/s);
    if (match) {
      tamil = match[1];
      sanskrit = match[2];
      translit = translit ?? match[3] ?? null;
    }
  }
  return { tamil: tamil.trim() || null, sanskrit, translit };
}

function DeityColumn({ title, deity, legacy, fallbackWiki, onOpenPhoto }) {
  if (!deity && !legacy) {
    return (
      <div>
        <h3>{title}</h3>
        <NotDocumented />
      </div>
    );
  }
  const d = deity ?? {};
  const photos = photosFor(deity, fallbackWiki, `${title} at this kshetram`);
  const thaayars = Array.isArray(d.thaayar)
    ? d.thaayar
    : d.thaayar
      ? [d.thaayar]
      : legacy?.thaayarName
        ? [{ name: legacy.thaayarName }]
        : [];
  const lead = photos[0];
  const rest = photos.slice(1);
  const names = parseNames(d.names ?? {});
  const displayName = names.translit ?? legacy?.name ?? null;
  const tamilName = names.tamil ?? legacy?.tamilName ?? null;
  const formNote = legacy?.form ?? null;

  return (
    <div>
      <h3>{title}</h3>

      {/* Lead photo (lightbox) */}
      {lead ? (
        <button
          type="button"
          className="deity-photo"
          onClick={() => onOpenPhoto(photos, 0)}
          aria-label={`View ${title} photo 1`}
        >
          <PhotoImg photo={lead} alt={lead.alt ?? `${title} photo`} />
          {lead.credit ? <p className="note px-2 py-1">{lead.credit}</p> : null}
        </button>
      ) : (
        <p className="note">Sannidhi photo forthcoming.</p>
      )}

      {/* Extra photo thumbnails */}
      {rest.length > 0 ? (
        <div className="deity-thumbs">
          {rest.map((photo, i) => (
            <button
              key={`${photo.src ?? ''}-${i}`}
              type="button"
              onClick={() => onOpenPhoto(photos, i + 1)}
              aria-label={`View ${title} photo ${i + 2}`}
            >
              <PhotoImg photo={photo} alt={photo.alt ?? `${title} photo ${i + 2}`} />
            </button>
          ))}
        </div>
      ) : null}

      {displayName ? <p className="deity-name">{displayName}</p> : null}
      {tamilName ? <p className="tamil-small" lang="ta">{tamilName}</p> : null}
      {names.sanskrit ? (
        <p>
          Sanskrit: <span lang="sa">{names.sanskrit}</span>
          {names.translit && displayName !== names.translit ? (
            <><br />Transliteration: {names.translit}</>
          ) : null}
        </p>
      ) : names.translit && displayName !== names.translit ? (
        <p>Transliteration: {names.translit}</p>
      ) : null}
      {formNote ? <p><em>{formNote}</em></p> : null}
      {d.etymology ? <p>{d.etymology}</p> : null}

      {thaayars.length > 0 ? (
        <div className="consort">
          <h4 className="eyebrow">{thaayars.length > 1 ? 'Thaayars' : 'Thaayar'}</h4>
          {thaayars.map((t) => (
            <div key={t.name}>
              <p className="value">{t.name}</p>
              {t.legend ? <p>{t.legend}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function DeityBreakdown({ kshetram, onOpenPhoto }) {
  const t = kshetram.deities;
  return (
    <section id="deities">
      <h2>Deities &amp; consorts</h2>
      <div className="two-columns section-rule">
        <DeityColumn
          title="Moolavar"
          deity={t?.moolavar}
          legacy={kshetram.moolavar
            ? {
              ...kshetram.moolavar,
              thaayarName: kshetram.thaayar
                ? `${kshetram.thaayar.tamilName ?? ''} ${kshetram.thaayar.name}`.trim()
                : null,
            }
            : null}
          fallbackWiki={kshetram.wiki}
          onOpenPhoto={onOpenPhoto}
        />
        <DeityColumn
          title="Urchavar"
          deity={t?.urchavar}
          legacy={kshetram.urchavar}
          fallbackWiki={null}
          onOpenPhoto={onOpenPhoto}
        />
      </div>
      {t?.sanctumNote ? <p className="note section-rule">{t.sanctumNote}</p> : null}
    </section>
  );
}
