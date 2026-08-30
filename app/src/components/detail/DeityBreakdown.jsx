/**
 * DeityBreakdown — two-column Moolavar | Urchavar breakdown with photo
 * strips (up to 3 photos per column, FR-83/85), names in Tamil/Sanskrit/
 * transliteration, etymology and Thaayar legends. Falls back to the legacy
 * V2 deity fields, then to the documented placeholder.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 * @param {(photos: object[], index: number) => void} props.onOpenPhoto - opens the lightbox
 */
import WikiThumb from '../WikiThumb.jsx';
import NotDocumented from './NotDocumented.jsx';

/** Normalises a deity entry's photo list to {src?|wiki?, alt, credit?} items. */
function photosFor(deity, fallbackWiki, fallbackAlt) {
  if (deity?.photos?.length) return deity.photos.slice(0, 3);
  if (fallbackWiki) return [{ wiki: fallbackWiki, alt: fallbackAlt }];
  return [];
}

/** One photo strip: first photo large, up to two more as thumbnails. */
function PhotoStrip({ photos, column, onOpenPhoto }) {
  if (photos.length === 0) {
    return <span className="deity-photo deity-photo--placeholder" aria-label={`${column} photo placeholder`}>◆</span>;
  }
  return (
    <div className="photo-strip">
      {photos.map((photo, i) => (
        <button
          key={`${photo.src ?? photo.wiki}-${i}`}
          type="button"
          className={`photo-strip__item${i === 0 ? ' photo-strip__item--lead' : ''}`}
          onClick={() => onOpenPhoto(photos, i)}
          aria-label={`View ${column} photo ${i + 1}`}
        >
          <WikiThumb title={photo.wiki ?? null} alt={photo.alt ?? `${column} photo`} />
        </button>
      ))}
    </div>
  );
}

function DeityColumn({ title, deity, legacy, fallbackWiki, onOpenPhoto }) {
  if (!deity && !legacy) {
    return (
      <div className="deity-column">
        <h3>{title}</h3>
        <NotDocumented />
      </div>
    );
  }
  const d = deity ?? {};
  const photos = photosFor(deity, fallbackWiki, `${title} at this kshetram`);
  return (
    <div className="deity-column">
      <h3>{title}</h3>
      <PhotoStrip photos={photos} column={title} onOpenPhoto={onOpenPhoto} />
      <p className="deity-column__names">
        {d.names ? (
          <>
            <span lang="ta">{d.names.tamil}</span>
            {d.names.sanskrit ? <span lang="sa"> · {d.names.sanskrit}</span> : null}
            <span> · {d.names.translit}</span>
          </>
        ) : (
          <>
            {legacy?.tamilName ? <span lang="ta">{legacy.tamilName}</span> : null}
            {legacy?.name ? <span> · {legacy.name}</span> : null}
          </>
        )}
      </p>
      {d.names?.translit || legacy?.name ? (
        <p className="deity-column__form">{legacy?.form ?? ''}</p>
      ) : null}
      {d.etymology ? <p className="deity-column__etymology">{d.etymology}</p> : null}
      {(d.thaayar || legacy?.thaayarName) && (
        <div className="deity-column__thaayar">
          <h4>Thaayar</h4>
          <p>{d.thaayar?.name ?? legacy?.thaayarName}</p>
          {d.thaayar?.legend ? <p className="deity-column__legend">{d.thaayar.legend}</p> : null}
        </div>
      )}
    </div>
  );
}

export default function DeityBreakdown({ kshetram, onOpenPhoto }) {
  const t = kshetram.deities;
  const moolavarColumn = (
    <DeityColumn
      title="Moolavar"
      deity={t?.moolavar}
      legacy={kshetram.moolavar
        ? { ...kshetram.moolavar, thaayarName: kshetram.thaayar ? `${kshetram.thaayar.tamilName ?? ''} ${kshetram.thaayar.name}`.trim() : null }
        : null}
      fallbackWiki={kshetram.wiki}
      onOpenPhoto={onOpenPhoto}
    />
  );
  const urchavarColumn = (
    <DeityColumn
      title="Urchavar"
      deity={t?.urchavar}
      legacy={kshetram.urchavar}
      fallbackWiki={null}
      onOpenPhoto={onOpenPhoto}
    />
  );

  return (
    <section id="deities" className="detail__section detail__section--full">
      <h2>Deities &amp; Consorts</h2>
      <div className="deity-columns">
        {moolavarColumn}
        {urchavarColumn}
      </div>
      {t?.sanctumNote ? <p className="deity-sanctum-note">{t.sanctumNote}</p> : null}
    </section>
  );
}
