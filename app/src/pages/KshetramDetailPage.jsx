/**
 * KshetramDetailPage — Detail template for one kshetram at /kshetram/:id
 * (FR-30..33, FR-60..87), recreated to the PO mock (2026-10-01, PO round
 * 15): "Kshetras / name" breadcrumb, split hero (name block with Divya-Desam
 * eyebrow, Tamil, temple subtitle, location pin, significance summary and
 * the yatra/share actions | temple photo with caption), an accessible
 * seven-tab section switcher (azhwar-dossier idiom) wrapping the existing
 * gold-strip section components unchanged, and a "Plan your visit" sidebar
 * (timings, Get directions, distance, browser note) beside the Overview
 * tab. Celestial desams keep hiding the earthly features (no visit/location
 * tabs, no sidebar, celestial note). No data or functionality changes.
 */
import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, ExternalLink, MapPin } from 'lucide-react';
import {
  getEnrichedKshetramById,
  getAllKshetramsEnriched,
  getAzhwarById,
} from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import EmptyState from '../components/EmptyState.jsx';
import NearbyDesams from '../components/NearbyDesams.jsx';
import DistanceFromMe from '../components/DistanceFromMe.jsx';
import PageActions from '../components/PageActions.jsx';
import VisitedToggle from '../components/VisitedToggle.jsx';
import TripControls from '../components/TripControls.jsx';
import MiniMap from '../components/MiniMap.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import ShrineProfile from '../components/detail/ShrineProfile.jsx';
import DeityBreakdown from '../components/detail/DeityBreakdown.jsx';
import PuranamHistory from '../components/detail/PuranamHistory.jsx';
import MangalasasanamSection from '../components/detail/MangalasasanamSection.jsx';
import VisitInfoSection from '../components/detail/VisitInfoSection.jsx';
import VisualsMedia from '../components/detail/VisualsMedia.jsx';
import GalleryLightbox from '../components/detail/GalleryLightbox.jsx';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

const CELESTIAL_NOTE = 'A celestial realm beyond earthly maps, timings and distances.';

const BASE_TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'deities', label: 'Deities' },
  { id: 'history', label: 'History' },
  { id: 'mangalasasanam', label: 'Mangalasasanam' },
  { id: 'visit', label: 'Visit info' },
  { id: 'location', label: 'Location' },
  { id: 'media', label: 'Media' },
];

export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getEnrichedKshetramById(id);
  const [lightbox, setLightbox] = useState({ photos: null, index: null });
  const [tab, setTab] = useState('overview');
  const tabRefs = useRef({});

  if (!kshetram) {
    return (
      <div className="max-w-xl mx-auto pt-8">
        <EmptyState
          title="This kshetram was not found"
          message="The link may be outdated. Browse all 108 Divya Desams instead."
          action={<Link className="btn btn--primary" to="/kshetrams">Back to Browse</Link>}
        />
      </div>
    );
  }

  const { coords } = kshetram;
  const celestial = !coords && !kshetram.timings && kshetram.state === 'Celestial';
  const serial = kshetram.serial;
  const azhwarNames = kshetram.azhwars
    .map((azhwarId) => getAzhwarById(azhwarId))
    .filter(Boolean);
  const mapHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(kshetram.mapQuery)}`
    : '';
  const photo = useWikiImage(kshetram.wiki ?? null, kshetram.photos?.[0]?.src ?? null);
  const moolavarName = kshetram.deities?.moolavar?.name ?? kshetram.moolavar?.name ?? null;
  const thaayarName = kshetram.deities?.thaayars?.[0]?.name ?? kshetram.thaayar?.name ?? null;
  const tabs = celestial
    ? BASE_TABS.filter(({ id: tid }) => tid !== 'visit' && tid !== 'location')
    : BASE_TABS;

  const onTabKey = (e) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const idx = tabs.findIndex(({ id: tid }) => tid === tab);
    const nextTab = tabs[(idx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    setTab(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  const openPhoto = (photos, index) => setLightbox({ photos, index });

  return (
    <>
      {/* Breadcrumb */}
      <p className="text-sm pb-1 no-print">
        <Link to="/kshetrams" className="text-[#66523D] hover:text-[#B34700] transition-colors font-medium">
          Kshetras
        </Link>
        <span className="mx-2 text-[#96731F]" aria-hidden="true">/</span>
        <span className="font-bold text-[#332417]">{kshetram.name}</span>
      </p>

      {/* ============ SPLIT HERO ============ */}
      <section className="grid grid-cols-1 gap-8 pt-2 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-[13px] font-bold text-[#96731F]">
            {serial ? `Divya Desam ${serial} · ` : ''}{kshetram.region}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-1 font-display text-[44px]! leading-[1.02]! font-semibold text-[#7A2E00]! sm:text-[56px]!">
            {kshetram.name}
          </h1>
          <p className="font-display text-[28px] sm:text-[32px] font-bold leading-tight text-[#96731F]" lang="ta">
            {kshetram.tamilName}
          </p>
          {kshetram.temple ? (
            <p className="mt-1 font-display text-[24px] sm:text-[27px] font-semibold leading-tight text-[#7A2E00]">
              {kshetram.temple}
            </p>
          ) : null}
          <p className="mt-2 flex items-center gap-1.5 text-[15px] text-[#66523D]">
            <MapPin className="h-4 w-4 shrink-0 text-[#B34700]" aria-hidden="true" />
            <span>{kshetram.place}, {kshetram.state}</span>
          </p>
          {kshetram.significance ? (
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-[#332417]">
              {kshetram.significance}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2.5 items-center no-print">
            {!celestial ? (
              <>
                <TripControls id={kshetram.id} />
                <VisitedToggle id={kshetram.id} />
              </>
            ) : null}
            <PageActions />
          </div>
        </div>

        {/* Temple photo (Wikipedia lead image, gopuram fallback) */}
        <figure className="m-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#E3D2AE] bg-[#FAF2E3]">
            {photo.src ? (
              <img
                src={photo.src}
                alt={`${kshetram.name} temple`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 z-10 h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <img
                src={gopuramIllustration}
                alt=""
                className="h-full w-full object-cover opacity-45 [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
              />
            </div>
          </div>
          <figcaption className="mt-1.5 text-right text-[11px] text-[#8A7A5E]">
            Temple exterior · illustrative
          </figcaption>
        </figure>
      </section>

      {celestial ? (
        <p className="mt-4 text-sm text-[#66523D] bg-[#F6EBD6] border border-[#C99A2E]/40 rounded-xl px-4 py-3">
          {CELESTIAL_NOTE}
        </p>
      ) : null}

      {/* ============ SECTION TABS (azhwar-dossier idiom) ============ */}
      <div
        role="tablist"
        aria-label="Kshetram sections"
        onKeyDown={onTabKey}
        className="mt-6 flex items-center gap-2 overflow-x-auto border-b border-[#E3D2AE] sm:gap-7"
      >
        {tabs.map(({ id: tid, label }) => (
          <button
            key={tid}
            ref={(el) => { tabRefs.current[tid] = el; }}
            type="button"
            role="tab"
            id={`kshetram-tab-${tid}`}
            aria-selected={tab === tid}
            aria-controls={`kshetram-panel-${tid}`}
            tabIndex={tab === tid ? 0 : -1}
            onClick={() => setTab(tid)}
            className={`-mb-px whitespace-nowrap border-b-2 px-1 py-3 text-sm font-semibold transition-colors sm:px-2 ${
              tab === tid
                ? 'border-[#B34700] text-[#B34700]'
                : 'border-transparent text-[#66523D] hover:text-[#7A2E00]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`kshetram-panel-${tab}`}
        aria-labelledby={`kshetram-tab-${tab}`}
        className="min-h-[320px] pb-2 pt-7"
      >
        {tab === 'overview' ? (
          <div className={celestial ? '' : 'grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start'}>
            <div>
              <h2 className="font-display text-[28px]! sm:text-[32px]! leading-[1.1]! font-semibold text-[#5C1F00]!">
                About the temple
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-[1fr_1fr_1.4fr] sm:gap-0 sm:divide-x sm:divide-[#E3D2AE]">
                {moolavarName ? (
                  <div className="sm:pr-5">
                    <p className="text-[13px] font-semibold text-[#96731F]">Moolavar</p>
                    <p className="mt-0.5 font-display text-lg font-bold text-[#332417]" lang="ta">{moolavarName}</p>
                  </div>
                ) : null}
                {thaayarName ? (
                  <div className="sm:px-5">
                    <p className="text-[13px] font-semibold text-[#96731F]">Thaayar</p>
                    <p className="mt-0.5 font-display text-lg font-bold text-[#332417]" lang="ta">{thaayarName}</p>
                  </div>
                ) : null}
                {kshetram.pasuramCount > 0 ? (
                  <div className="flex items-start gap-3 sm:pl-5">
                    <BookOpen className="mt-1 h-6 w-6 shrink-0 text-[#96731F]" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-[#332417]">
                        <span className="font-bold">{kshetram.pasuramCount.toLocaleString('en-IN')} pasurams</span>
                        <span className="text-[#66523D]"> · {azhwarNames.length} Azhwars</span>
                      </p>
                      <button
                        type="button"
                        onClick={() => setTab('mangalasasanam')}
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-[#B34700] underline underline-offset-2 hover:text-[#7A2E00] transition-colors"
                      >
                        Explore the hymns
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="mt-8">
                <ShrineProfile kshetram={kshetram} />
              </div>
            </div>

            {/* Plan your visit sidebar */}
            {!celestial ? (
              <aside className="rounded-2xl border border-[#C99A2E]/40 bg-[#FBF3DF]/60 p-6">
                <h2 className="font-display text-[26px] font-semibold text-[#7A2E00]">Plan your visit</h2>
                {kshetram.timings ? (
                  <>
                    <dl className="mt-3">
                      <div className="flex items-baseline justify-between gap-4 border-b border-[#E9D9B8] py-2.5 text-sm">
                        <dt className="font-semibold text-[#332417]">Morning</dt>
                        <dd className="tabular-nums text-[#332417]">
                          {kshetram.timings.morning?.[0]} – {kshetram.timings.morning?.[1]}
                        </dd>
                      </div>
                      {kshetram.timings.evening ? (
                        <div className="flex items-baseline justify-between gap-4 border-b border-[#E9D9B8] py-2.5 text-sm">
                          <dt className="font-semibold text-[#332417]">Evening</dt>
                          <dd className="tabular-nums text-[#332417]">
                            {kshetram.timings.evening[0]} – {kshetram.timings.evening[1]}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                    {kshetram.timings.notes ? (
                      <p className="mt-2 text-xs text-[#66523D]">{kshetram.timings.notes}</p>
                    ) : null}
                    <p className="mt-2 text-xs italic text-[#66523D]">
                      Indicative timings. Confirm with the temple office.
                    </p>
                  </>
                ) : (
                  <NotDocumented />
                )}
                <div className="mt-4 flex flex-col items-center gap-2">
                  <DistanceFromMe coords={coords} mapQuery={kshetram.mapQuery} />
                </div>
                <p className="mt-3 text-center text-[11px] text-[#8A7A5E]">
                  Visits and trips are saved in this browser.
                </p>
              </aside>
            ) : null}
          </div>
        ) : null}

        {tab === 'deities' ? <DeityBreakdown kshetram={kshetram} onOpenPhoto={openPhoto} /> : null}
        {tab === 'history' ? <PuranamHistory kshetram={kshetram} /> : null}
        {tab === 'mangalasasanam' ? (
          <>
            <MangalasasanamSection kshetram={kshetram} />
            <section className="mt-6">
              <h3 className="font-display text-xl font-bold text-[#7A2E00]">Azhwars Who Glorified</h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {azhwarNames.map((a) => (
                  <Link key={a.id} to={`/azhwar/${a.id}`} className="chip-link" title={`View ${a.name} details`}>
                    {a.name}
                  </Link>
                ))}
              </div>
            </section>
          </>
        ) : null}
        {tab === 'visit' ? <VisitInfoSection kshetram={kshetram} /> : null}
        {tab === 'location' ? (
          <section id="location" className="scroll-mt-36">
            <h2 className="font-display text-[26px] font-semibold text-[#7A2E00] mb-4">Location</h2>
            <p className="text-sm text-[#66523D]">{kshetram.place} · {kshetram.state}</p>
            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3 no-print">
              {mapHref ? (
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B34700] hover:text-[#7A2E00] transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
            {coords ? (
              <div className="h-72 overflow-hidden rounded-2xl border border-[#C99A2E]/55 bg-[#F6EBD6] shadow-xs">
                <MiniMap coords={coords} label={kshetram.name} />
              </div>
            ) : null}
            <NearbyDesams coords={coords} kshetrams={getAllKshetramsEnriched()} />
          </section>
        ) : null}
        {tab === 'media' ? <VisualsMedia kshetram={kshetram} /> : null}
      </div>

      <GalleryLightbox
        photos={lightbox.photos}
        index={lightbox.index}
        onClose={() => setLightbox({ photos: null, index: null })}
        onNavigate={(delta) => setLightbox((prev) => ({
          photos: prev.photos,
          index: (prev.index + delta + prev.photos.length) % prev.photos.length,
        }))}
      />
    </>
  );
}
