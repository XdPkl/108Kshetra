/**
 * DeityBreakdown — two-column Moolavar | Urchavar breakdown (FR-83/85) in
 * the zip-parity deity cards (UXD v3.0 Gate 3): lead photo with lightbox,
 * Tamil/Sanskrit/transliteration names, etymology and Thaayar legends.
 * Falls back to the legacy V2 deity fields, then to the documented
 * placeholder.
 * @param {object} props
 * @param {Kshetram & object} props.kshetram - enriched record
 * @param {(photos: object[], index: number) => void} props.onOpenPhoto - opens the lightbox
 */
import { useWikiImage } from '../../hooks/useWikiImage.js';
import NotDocumented from './NotDocumented.jsx';
import ZipSection from './ZipSection.jsx';

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

function DeityColumn({ title, deity, legacy, fallbackWiki, onOpenPhoto }) {
  if (!deity && !legacy) {
    return (
      <div className="p-5 rounded-2xl border border-[#C99A2E]/40 bg-[#FAF2E3] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] to-[#C99A2E]" aria-hidden="true" />
        <h3 className="font-display text-2xl font-semibold text-[#7A2E00]">{title}</h3>
        <div className="mt-4"><NotDocumented /></div>
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

  return (
    <div className="p-5 rounded-2xl border border-[#C99A2E]/40 bg-[#FAF2E3] relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] to-[#C99A2E]" aria-hidden="true" />
      <div>
        <h3 className="font-display text-2xl font-semibold text-[#7A2E00]">{title}</h3>

        {/* Lead photo (lightbox) */}
        {lead ? (
          <button
            type="button"
            className="mt-3 w-full rounded-xl overflow-hidden border border-[#C99A2E]/45 bg-[#F6EBD6] block text-left"
            onClick={() => onOpenPhoto(photos, 0)}
            aria-label={`View ${title} photo 1`}
          >
            <PhotoImg photo={lead} alt={lead.alt ?? `${title} photo`} className="w-full aspect-video object-cover" />
            {lead.credit ? (
              <p className="text-[0.68rem] text-[#66523D] px-2 py-1 bg-[#F6EBD6]">{lead.credit}</p>
            ) : null}
          </button>
        ) : (
          <div className="mt-3 rounded-xl border border-[#C99A2E]/45 bg-[#F6EBD6] aspect-video flex flex-col items-center justify-center">
            <span className="text-4xl text-[#96731F]/70" aria-label={`${title} photo placeholder`}>◆</span>
            <span className="text-xs text-[#7A2E00] font-semibold mt-1">Sannidhi photo forthcoming</span>
          </div>
        )}

        {/* Extra photo thumbnails */}
        {rest.length > 0 ? (
          <div className="flex gap-2 mt-2">
            {rest.map((photo, i) => (
              <button
                key={`${photo.src ?? ''}-${i}`}
                type="button"
                className="flex-1 rounded-lg overflow-hidden border border-[#C99A2E]/45"
                onClick={() => onOpenPhoto(photos, i + 1)}
                aria-label={`View ${title} photo ${i + 2}`}
              >
                <PhotoImg photo={photo} alt={photo.alt ?? `${title} photo ${i + 2}`} className="w-full aspect-video object-cover" />
              </button>
            ))}
          </div>
        ) : null}

        <p className="mt-3 text-sm font-semibold text-[#332417]">
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
        {legacy?.form ? <p className="text-xs text-[#66523D] italic mt-0.5">{legacy.form}</p> : null}
        {d.etymology ? <p className="text-xs text-[#66523D] leading-relaxed mt-1">{d.etymology}</p> : null}
      </div>

      {thaayars.length > 0 ? (
        <div className="mt-4 pt-3 border-t border-[#EBDDBE]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A2E00]">
            {thaayars.length > 1 ? 'Thaayars' : 'Thaayar'}
          </h4>
          {thaayars.map((t) => (
            <div key={t.name} className="mt-1.5">
              <p className="text-sm font-medium text-[#332417]">{t.name}</p>
              {t.legend ? <p className="text-xs text-[#66523D] leading-relaxed mt-0.5">{t.legend}</p> : null}
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
    <ZipSection id="deities" title="Deities & Consorts">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      {t?.sanctumNote ? (
        <p className="mt-4 text-xs text-[#66523D] italic">{t.sanctumNote}</p>
      ) : null}
    </ZipSection>
  );
}
