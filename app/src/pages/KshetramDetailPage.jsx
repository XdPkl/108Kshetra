/**
 * KshetramDetailPage — Detail template for one kshetram at /kshetram/:id
 * (FR-30..33, FR-60..87), recreated to the PO mock (2026-10-01, PO round
 * 16, triplicane reference): paper/rust palette scoped under `.kxd`
 * (kshetram-detail.css), "Kshetras / name" breadcrumb, split hero
 * (Divya-Desam eyebrow, serif name, Tamil, temple name, pin row,
 * significance, trip/visited/share/print actions | temple photo), an
 * accessible seven-tab switcher with URL-hash deep links wrapping the
 * mock-styled sections, a status toast for the yatra toggles and a
 * "Plan your visit" card beside the Overview tab. Celestial desams keep
 * hiding the earthly features (no visit/location tabs, no sidebar,
 * celestial note). No data changes.
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ExternalLink, MapPin } from 'lucide-react';
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

const TAB_IDS = new Set(BASE_TABS.map(({ id: tid }) => tid));

export default function KshetramDetailPage() {
  const { id } = useParams();
  const kshetram = getEnrichedKshetramById(id);
  const [lightbox, setLightbox] = useState({ photos: null, index: null });
  // Hooks must run unconditionally — before the unknown-id early return
  const photo = useWikiImage(kshetram?.wiki ?? null, kshetram?.photos?.[0]?.src ?? null);
  const [tab, setTab] = useState('overview');
  const tabRefs = useRef({});
  const [notice, setNotice] = useState('');
  const noticeTimer = useRef(null);
  // Celestial gating is needed by the hash effect, so compute it pre-return
  const celestial = !kshetram?.coords && !kshetram?.timings && kshetram?.state === 'Celestial';

  // URL-hash deep links (#location etc.) — mock behaviour: activate the
  // hashed tab on load, write the hash on every switch, follow hashchange.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.slice(1);
      if (!TAB_IDS.has(hash)) return;
      if (celestial && (hash === 'visit' || hash === 'location')) return;
      setTab(hash);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, [celestial]);

  useEffect(() => () => clearTimeout(noticeTimer.current), []);

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
  const serial = kshetram.serial;
  const azhwarNames = kshetram.azhwars
    .map((azhwarId) => getAzhwarById(azhwarId))
    .filter(Boolean);
  const mapHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(kshetram.mapQuery)}`
    : '';
  const directionsHref = kshetram.mapQuery
    ? `${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${kshetram.mapQuery}`)}`
    : '';
  const gpsText = kshetram.profile?.gps
    ?? (coords ? `${coords[0]}° N, ${coords[1]}° E` : null);
  // Mock Overview intro: the first puranam paragraph (dataset-mapped)
  const intro = Array.isArray(kshetram.puranam?.legend)
    ? kshetram.puranam.legend[0] ?? null
    : typeof kshetram.puranam === 'string' ? kshetram.puranam : null;
  const moolavarName = kshetram.deities?.moolavar?.name
    ?? kshetram.moolavar?.name
    ?? kshetram.deities?.moolavar?.names?.translit
    ?? null;
  const thaayarName = kshetram.deities?.thaayars?.[0]?.name
    ?? kshetram.thaayar?.name
    ?? kshetram.deities?.moolavar?.thaayar?.name
    ?? null;
  const tabs = celestial
    ? BASE_TABS.filter(({ id: tid }) => tid !== 'visit' && tid !== 'location')
    : BASE_TABS;

  const notify = (message) => {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), 4500);
  };

  const activateTab = (tid) => {
    setTab(tid);
    try {
      window.history.replaceState(null, '', `#${tid}`);
    } catch { /* jsdom / privacy modes */ }
  };

  const onTabKey = (e) => {
    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      const nextTab = e.key === 'Home' ? tabs[0] : tabs[tabs.length - 1];
      activateTab(nextTab.id);
      tabRefs.current[nextTab.id]?.focus();
      return;
    }
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const idx = tabs.findIndex(({ id: tid }) => tid === tab);
    const nextTab = tabs[(idx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    activateTab(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  const openPhoto = (photos, index) => setLightbox({ photos, index });

  return (
    <div className="kxd">
      <a className="skip" href="#kshetram-main">Skip to temple details</a>

      {/* Breadcrumb */}
      <nav className="breadcrumb no-print" aria-label="Breadcrumb">
        <Link to="/kshetrams">Kshetras</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{kshetram.name}</span>
      </nav>

      {/* ============ SPLIT HERO ============ */}
      <section className="hero" aria-labelledby="kshetram-title">
        <div>
          <p className="eyebrow">
            {serial ? `Divya Desam ${serial} · ` : ''}{kshetram.region}
          </p>
          <h1 id="kshetram-title">{kshetram.name}</h1>
          <p className="tamil" lang="ta">{kshetram.tamilName}</p>
          {kshetram.temple ? <p className="temple-name">{kshetram.temple}</p> : null}
          <p className="place">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{kshetram.place} · {kshetram.state}</span>
          </p>
          {kshetram.significance ? <p className="hero-summary">{kshetram.significance}</p> : null}
          <div className="actions no-print">
            {!celestial ? (
              <>
                <TripControls id={kshetram.id} variant="kxd" onNotify={notify} />
                <VisitedToggle id={kshetram.id} variant="kxd" onNotify={notify} />
              </>
            ) : null}
            <PageActions variant="kxd" />
          </div>
        </div>

        {/* Temple photo (Wikipedia lead image, gopuram fallback) */}
        <figure>
          <div className="hero-photo-frame">
            {photo.src ? (
              <img
                src={photo.src}
                alt={`${kshetram.name} temple`}
                referrerPolicy="no-referrer"
                className="hero-photo"
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
          <figcaption className="photo-caption">Temple exterior · illustrative</figcaption>
        </figure>
      </section>

      {celestial ? <p className="celestial-note">{CELESTIAL_NOTE}</p> : null}

      {/* ============ SECTION TABS ============ */}
      <div
        role="tablist"
        aria-label="Kshetram sections"
        onKeyDown={onTabKey}
        className="tabs no-print"
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
            onClick={() => activateTab(tid)}
            className="tab"
          >
            {label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`kshetram-panel-${tab}`}
        aria-labelledby={`kshetram-tab-${tab}`}
        className="panel"
        /* anchor target for the skip link (sits after the tabs) */
        tabIndex={-1}
      >
        <div id="kshetram-main">
          {tab === 'overview' ? (
            <>
              <div className="overview-grid">
                <div>
                  <h2>About the temple</h2>
                  {intro ? <p className="intro">{intro}</p> : null}
                  {moolavarName || thaayarName ? (
                    <div className="deity-pair">
                      {moolavarName ? (
                        <div>
                          <div className="label">Moolavar</div>
                          <div className="value">{moolavarName}</div>
                        </div>
                      ) : null}
                      {thaayarName ? (
                        <div>
                          <div className="label">Thaayar</div>
                          <div className="value">{thaayarName}</div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* Plan your visit card */}
                {!celestial ? (
                  <aside className="visit-card">
                    <h3>Plan your visit</h3>
                    {kshetram.timings ? (
                      <>
                        <div className="times">
                          <strong>Morning</strong>
                          <span>{kshetram.timings.morning?.[0]} – {kshetram.timings.morning?.[1]}</span>
                        </div>
                        {kshetram.timings.evening ? (
                          <div className="times">
                            <strong>Evening</strong>
                            <span>{kshetram.timings.evening[0]} – {kshetram.timings.evening[1]}</span>
                          </div>
                        ) : null}
                        {kshetram.timings.notes ? (
                          <div className="times"><span>{kshetram.timings.notes}</span></div>
                        ) : null}
                        <small>Indicative timings. Confirm with the temple office.</small>
                      </>
                    ) : (
                      <NotDocumented />
                    )}
                    <DistanceFromMe coords={coords} mapQuery={kshetram.mapQuery} variant="kxd" />
                    <p className="note">Visits and trips are saved in this browser.</p>
                  </aside>
                ) : null}
              </div>
              <div className="section-rule">
                <ShrineProfile kshetram={kshetram} />
              </div>
            </>
          ) : null}

          {tab === 'deities' ? <DeityBreakdown kshetram={kshetram} onOpenPhoto={openPhoto} /> : null}
          {tab === 'history' ? <PuranamHistory kshetram={kshetram} /> : null}
          {tab === 'mangalasasanam' ? (
            <>
              <MangalasasanamSection kshetram={kshetram} />
              <section className="section-rule">
                <h3>Explore the Azhwars</h3>
                <div className="explore">
                  {azhwarNames.map((a) => (
                    <Link key={a.id} to={`/azhwar/${a.id}`} title={`View ${a.name} details`}>
                      {a.name}
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            </>
          ) : null}
          {tab === 'visit' ? <VisitInfoSection kshetram={kshetram} /> : null}
          {tab === 'location' ? (
            <section id="location" className="scroll-mt-36">
              <h2>Find the temple</h2>
              <p>{kshetram.place} · {kshetram.state}</p>
              <div className="location-grid">
                <div>
                  {coords ? (
                    <div className="kxd-map no-print">
                      <MiniMap coords={coords} label={kshetram.name} />
                    </div>
                  ) : null}
                  <small>Map © OpenStreetMap contributors</small>
                </div>
                <div className="location-details">
                  <h3>Location details</h3>
                  <div className="label">Address</div>
                  <p>{kshetram.place} · {kshetram.state}</p>
                  {gpsText ? (
                    <>
                      <div className="label">GPS coordinates</div>
                      <p>{gpsText}</p>
                    </>
                  ) : null}
                  {directionsHref ? (
                    <a
                      className="btn primary directions"
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      Get directions
                    </a>
                  ) : null}
                  {mapHref ? (
                    <p>
                      <a href={mapHref} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                        <ExternalLink className="inline h-4 w-4" aria-hidden="true" />
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
              <NearbyDesams coords={coords} kshetrams={getAllKshetramsEnriched()} />
            </section>
          ) : null}
          {tab === 'media' ? <VisualsMedia kshetram={kshetram} /> : null}
        </div>
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

      {/* Status toast (mock behaviour) */}
      <div className="status no-print" role="status" aria-live="polite">{notice}</div>
    </div>
  );
}
