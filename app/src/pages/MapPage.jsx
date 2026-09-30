/**
 * MapPage — the merged Yatra Atlas (2026-09-30 PO decision: Map + Trip are
 * one page). The approved atlas look (display header, sidebar search +
 * region dropdown + All/Visited/In-trip scope pills) carries the temple
 * matrix BELOW the map: every filtered desam as a card in a responsive
 * grid — listed without distances until the pilgrim shares their location,
 * then nearest-first with live straight-line km (PO 2026-09-30 round).
 * The trip planner opens in a MODAL (PO 2026-09-30 round 10) via the big
 * gradient button spanning the left column: notice strip, By region/Route
 * order views, "Order my route — nearest first", Share/Print/Clear rail and
 * the numbered stop lists. It renders from the same live trip state, so
 * adds/removes anywhere on the page reflect in it instantly, and a shared
 * ?t= link auto-opens it. When the In-trip scope is active the dashed
 * route polyline + numbered stop tooltips render on the atlas itself.
 * Clusters are hand-rolled (grid in layer space, no plugin): they only form
 * with a live map instance below zoom 9, so jsdom/unit tests and e2e zoomed
 * views see plain CircleMarkers. /trip redirects here (share links keep
 * working via ?t=). Lazy-loaded route chunk (NFR-11).
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Marker, Polyline, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import {
  Navigation, ExternalLink, MapPin, Crosshair, Maximize,
  Plus, Printer, RotateCcw, Route as RouteIcon, Share2, Trash2, X,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { getAllKshetramsEnriched, getAllAzhwars } from '../data/api.js';
import { MAPS_URL_TEMPLATE } from '../data/config.js';
import { buildRegionColors } from '../utils/regionColors.js';
import { distanceKm } from '../utils/geo.js';
import { matchesSearch } from '../utils/filter.js';
import { orderNearestFirst, legsFor, sumLegs } from '../utils/route.js';
import { decodeTrip, encodeTrip } from '../state/trip.js';
import RegionLegend from '../components/RegionLegend.jsx';
import TripControls from '../components/TripControls.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { SITE_COPY } from '../data/siteCopy.js';

const CLUSTER_MAX_ZOOM = 8; // clusters form below zoom 9, dissolve above
const CLUSTER_CELL_PX = 70;

const scopeBase = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition-all';
const scopeActive = `${scopeBase} bg-[#B34700] font-semibold text-[#FFFDF7] shadow-xs`;
const scopeIdle = `${scopeBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#7A2E00] hover:border-[#C99A2E]`;

const selectClass = 'rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] px-3 py-2 text-[13px] font-semibold text-[#7A2E00] focus:border-[#C99A2E] focus:outline-hidden';

/** Saffron count bubble for a grid cluster (mockup idiom). */
function clusterIcon(count) {
  return L.divIcon({
    html: `<span class="map-cluster__bubble">${count}</span>`,
    className: 'map-cluster',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

/** Desam card for the matrix below the atlas — photo thumb and the same
 * action set as the browse cards (View temple / Add to trip / Mark visited)
 * plus the map-specific Focus and Directions actions. `km` is null until
 * the pilgrim shares their location (PO 2026-09-30: cards list without
 * distances first, distances fill in after "Show my location"). */
function NearestCard({ kshetram: k, km, mapApi }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(k.id);
  const image = useWikiImage(k.wiki ?? null, k.photo ?? null);
  return (
    <li className="rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] p-3.5 shadow-xs">
      <div className="flex items-start gap-3">
        <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#F6EBD6]">
          {image.src ? (
            <img src={image.src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div className="min-w-0">
          <Link to={`/kshetram/${k.id}`} className="font-display text-[19px] font-semibold leading-tight text-[#7A2E00] hover:text-[#B34700] transition-colors">
            {k.name}
          </Link>
          <p className="truncate text-[12px] text-[#332417]">{k.temple}</p>
          <p className="truncate text-[12px] text-[#66523D]">{k.place}</p>
          {km != null ? (
            <p className="text-[12px] font-bold text-[#B34700] tabular-nums">{km} km away</p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
        <Link
          to={`/kshetram/${k.id}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#7A2E00] px-3.5 py-2 text-[13px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors hover:bg-[#5C1F00]"
        >
          View temple
          <span aria-hidden="true">→</span>
        </Link>
        <TripControls id={k.id} />
        <button
          type="button"
          onClick={() => toggleVisited(k.id)}
          aria-pressed={visited}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-semibold transition-colors ${
            visited
              ? 'border-[#C99A2E] bg-[#FAF2E3] text-[#7A2E00]'
              : 'border-[#E3D2AE] bg-[#FFFDF7] text-[#332417] hover:border-[#C99A2E]'
          }`}
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {visited ? (
              <><circle cx="10" cy="10" r="7.5" /><path d="M6.7 10.3l2.2 2.2 4.4-4.8" /></>
            ) : (
              <circle cx="10" cy="10" r="7.5" />
            )}
          </svg>
          {visited ? 'Darshan Done' : 'Mark visited'}
        </button>
        <span className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => mapApi?.flyTo(k.coords, 12)}
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#7A2E00] underline decoration-[#C99A2E]/70 underline-offset-4 hover:decoration-[#7A2E00]"
          >
            Focus
          </button>
          {k.mapQuery ? (
            <a
              href={`${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${k.mapQuery}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B34700]! hover:underline"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          ) : null}
        </span>
      </div>
    </li>
  );
}

export default function MapPage() {
  const { visitedIds, isVisited, toggleVisited } = useVisited();
  const { tripIds, removeFromTrip, setTrip, clearTrip } = useTrip();
  const azhwars = useMemo(() => getAllAzhwars(), []);
  const plotted = useMemo(
    () => getAllKshetramsEnriched().filter((k) => Array.isArray(k.coords)),
    [],
  );
  const kshetramIndex = useMemo(() => {
    const map = new Map();
    for (const k of getAllKshetramsEnriched()) map.set(k.id, k);
    return map;
  }, []);
  const regions = useMemo(() => [...new Set(plotted.map((k) => k.region))], [plotted]);
  const colors = useMemo(() => buildRegionColors(regions), [regions]);
  const counts = useMemo(() => {
    const c = {};
    plotted.forEach((k) => { c[k.region] = (c[k.region] ?? 0) + 1; });
    return c;
  }, [plotted]);

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [scope, setScope] = useState('all');
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');
  const [mapApi, setMapApi] = useState(null);
  const [clusterTick, setClusterTick] = useState(0);

  // Trip planner state (merged from TripPage; PO round 10: planner lives in
  // a modal opened by the big left-column button)
  const [view, setView] = useState('region');
  const [notice, setNotice] = useState('');
  const [plannerOpen, setPlannerOpen] = useState(false);
  const appliedShare = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();

  // Escape closes the planner modal
  useEffect(() => {
    if (!plannerOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setPlannerOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [plannerOpen]);

  const regionShown = useMemo(() => plotted.filter((k) => (
    matchesSearch(k, search, azhwars) && (!region || k.region === region)
  )), [plotted, search, region, azhwars]);

  const scopeCounts = useMemo(() => ({
    all: regionShown.length,
    visited: regionShown.filter((k) => visitedIds.includes(k.id)).length,
    trip: regionShown.filter((k) => tripIds.includes(k.id)).length,
  }), [regionShown, visitedIds, tripIds]);

  const shown = useMemo(() => {
    if (scope === 'visited') return regionShown.filter((k) => visitedIds.includes(k.id));
    if (scope === 'trip') return regionShown.filter((k) => tripIds.includes(k.id));
    return regionShown;
  }, [regionShown, scope, visitedIds, tripIds]);

  // Temple matrix below the atlas: always listed (dataset order until the
  // pilgrim shares their location, then nearest-first with live distances)
  const cardList = useMemo(() => {
    const list = shown.map((k) => ({ kshetram: k, km: me ? distanceKm(me, k.coords) : null }));
    if (me) list.sort((a, b) => a.km - b.km);
    return list;
  }, [shown, me]);

  // ---- trip planner (merged from TripPage) ----
  const stops = tripIds.map((id) => kshetramIndex.get(id)).filter(Boolean);
  const route = useMemo(() => orderNearestFirst(stops), [stops]); // eslint-disable-line react-hooks/exhaustive-deps
  const legs = useMemo(() => legsFor(stops), [stops]); // eslint-disable-line react-hooks/exhaustive-deps
  const orderedStops = route.ordered;
  const orderedLegs = route.legs;

  const shareParam = searchParams.get('t') ?? '';
  useEffect(() => {
    if (!shareParam || appliedShare.current === shareParam) return;
    appliedShare.current = shareParam;
    const ids = decodeTrip(shareParam);
    if (ids.length > 0) {
      setTrip(ids);
      setScope('trip');
      setView('route');
      setNotice('Trip loaded from a shared link — now saved in your browser.');
      setPlannerOpen(true); // the pilgrim came to see their trip — show it
    }
    setSearchParams({}, { replace: true });
  }, [shareParam, setTrip, setSearchParams]);

  const onOrder = () => {
    setTrip(orderedStops.map((k) => k.id));
    setView('route');
    setNotice(`Route ordered nearest-first — about ${sumLegs(orderedLegs)} km in a straight line.`);
  };

  const onShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?t=${encodeTrip(tripIds)}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Divya Desam yatra plan', url });
        return;
      } catch {
        return; // user dismissed the share sheet
      }
    }
    await navigator.clipboard.writeText(url);
    setNotice('Trip link copied to the clipboard.');
  };

  const onClear = () => {
    if (window.confirm(`Remove all ${tripIds.length} stops from your trip?`)) {
      clearTrip();
      setNotice('');
    }
  };

  // ---- cluster computation (live map instance only) ----
  useEffect(() => {
    if (!mapApi) return undefined;
    const bump = () => setClusterTick((t) => t + 1);
    mapApi.on('zoomend moveend', bump);
    return () => mapApi.off('zoomend moveend', bump);
  }, [mapApi]);

  const clusters = useMemo(() => {
    if (!mapApi || scope === 'trip' || mapApi.getZoom() > CLUSTER_MAX_ZOOM || shown.length < 2) return [];
    const groups = new Map();
    for (const k of shown) {
      const p = mapApi.latLngToLayerPoint(k.coords);
      const key = `${Math.floor(p.x / CLUSTER_CELL_PX)}:${Math.floor(p.y / CLUSTER_CELL_PX)}`;
      const bucket = groups.get(key);
      if (bucket) bucket.push(k);
      else groups.set(key, [k]);
    }
    return [...groups.values()]
      .filter((members) => members.length > 1)
      .map((members) => ({
        key: `cluster-${members[0].id}`,
        count: members.length,
        center: L.latLngBounds(members.map((m) => m.coords)).getCenter(),
        bounds: L.latLngBounds(members.map((m) => m.coords)),
        ids: members.map((m) => m.id),
      }));
    // clusterTick re-runs this after every pan/zoom (its value is unused)
  }, [mapApi, shown, scope, clusterTick]); // eslint-disable-line react-hooks/exhaustive-deps

  const clusteredIds = useMemo(
    () => new Set(clusters.flatMap((c) => c.ids)),
    [clusters],
  );

  // Route overlay: dashed polyline + numbered tooltips for the trip on the
  // atlas itself (mirrors the selected view ordering, like TripMap did).
  const mapStops = view === 'route' ? orderedStops : stops;
  const mapLegs = view === 'route' ? orderedLegs : legs;
  const routePoints = mapStops.filter((k) => Array.isArray(k.coords));
  const stopNumber = new Map(mapStops.map((k, i) => [k.id, i + 1]));

  const fitAll = () => {
    if (!mapApi || shown.length === 0) return;
    mapApi.fitBounds(L.latLngBounds(shown.map((k) => k.coords)), { padding: [28, 28], maxZoom: 12 });
  };

  const locate = () => {
    if (!navigator.geolocation) {
      setGeoMessage('Location is not supported on this device.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoMessage('');
        setMe([pos.coords.latitude, pos.coords.longitude]);
      },
      () => setGeoMessage('Location permission was denied — showing the desams only.'),
      { timeout: 10000 },
    );
  };

  const railBtn = 'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#B34700]/60 text-[#7A2E00] hover:bg-[#B34700]/10 transition-colors bg-[#FFFDF7] no-print';

  return (
    <div>
      {/* PO round-9 arrangement: the whole yatra stack (eyebrow, title,
          status, Show my location, search, region, scope pills) lives in
          the left column BESIDE the atlas, like the approved snap */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="space-y-5">
          <header className="relative">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
              {SITE_COPY.map.eyebrow}
            </p>
            {/* ! beats the unlayered legacy h1 rule in base.css */}
            <h1 className="mt-2 font-display text-[36px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[40px]!">
              {SITE_COPY.map.title}
            </h1>
            <p className="mt-2 text-[14px] text-[#66523D]" aria-live="polite">
              {geoMessage || `${shown.length} of ${plotted.length} desams shown · visited desams carry a gold ring`}
            </p>
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={locate}
                className="inline-flex items-center gap-2 rounded-full border border-[#E3D2AE] bg-[#FFFDF7] px-4 py-2 text-[13px] font-semibold text-[#332417] shadow-xs transition-colors hover:border-[#C99A2E]"
              >
                <MapPin className="h-4 w-4 text-[#B34700]" aria-hidden="true" />
                <span>Show my location</span>
                {me ? <span className="text-[10px] opacity-80">(GPS active)</span> : null}
              </button>
              {me ? (
                <button
                  type="button"
                  onClick={() => setMe(null)}
                  title="Clear my location marker"
                  aria-label="Clear my location"
                  className="rounded-full border border-[#E3D2AE] bg-[#FFFDF7] p-2 text-[#7A2E00] transition-colors hover:border-[#C99A2E]"
                >
                  <Crosshair className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </header>

          {/* Location status card */}
          {me ? (
            <div className="rounded-2xl border border-[#C99A2E]/60 bg-[#FFFDF7] p-4 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF2E3] border border-[#C99A2E] flex items-center justify-center shrink-0 text-[#B34700]">
                  <Navigation className="w-5 h-5 animate-pulse" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B34700]/10 text-[#B34700]">
                    You are here
                  </span>
                  <h2 className="font-display text-lg font-bold text-[#7A2E00] mt-1">
                    Your darshan distances are live below
                  </h2>
                  <p className="text-xs text-[#66523D] mt-0.5">
                    Approximate position <strong className="text-[#B34700]">{me[0].toFixed(3)}° N, {me[1].toFixed(3)}° E</strong> — distances are straight-line.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Sidebar search */}
          <div className="relative">
            <svg viewBox="0 0 24 24" className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#96731F]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search kshetrams"
              placeholder="Search temple or place"
              className="w-full rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] py-2.5 pl-11 pr-4 text-[14px] text-[#332417] placeholder-[#66523D]/60 focus:border-[#C99A2E] focus:outline-hidden"
            />
          </div>

          {/* Region dropdown (replaces the chip row, 2026-09-30 merge) */}
          <div>
            <select
              aria-label="Filter by region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className={`${selectClass} w-full`}
            >
              <option value="">All regions ({plotted.length})</option>
              {regions.map((r) => <option key={r} value={r}>{r} ({counts[r]})</option>)}
            </select>
          </div>

          {/* Scope pills — All / Visited / In trip (exclusive) */}
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Showing">
            <button
              type="button"
              aria-pressed={scope === 'all'}
              onClick={() => setScope('all')}
              className={scope === 'all' ? scopeActive : scopeIdle}
            >
              All ({scopeCounts.all})
            </button>
            <button
              type="button"
              aria-pressed={scope === 'visited'}
              onClick={() => setScope(scope === 'visited' ? 'all' : 'visited')}
              className={scope === 'visited' ? scopeActive : scopeIdle}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#C99A2E]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5" />
              </svg>
              Visited ({scopeCounts.visited})
            </button>
            <button
              type="button"
              aria-pressed={scope === 'trip'}
              onClick={() => setScope(scope === 'trip' ? 'all' : 'trip')}
              className={scope === 'trip' ? scopeActive : scopeIdle}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#B34700]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
              </svg>
              In trip ({scopeCounts.trip})
            </button>
          </div>

          {/* PO round 10: big planner opener spanning the left column —
              the trip planner itself lives in a modal */}
          <button
            type="button"
            onClick={() => setPlannerOpen(true)}
            aria-haspopup="dialog"
            className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#D95F0E] to-[#B34700] text-[#FFFDF7] text-[15px] font-bold shadow-sm hover:opacity-95 transition-opacity"
          >
            <RouteIcon className="h-5 w-5" aria-hidden="true" />
            <span>My Yatra — Trip Planner</span>
            <span className="inline-flex items-center justify-center min-w-[1.5rem] h-[1.5rem] px-1.5 text-[0.8rem] font-bold rounded-full bg-[#FFFDF7]/25 tabular-nums">
              {stops.length}
            </span>
          </button>
        </div>

        {/* Map frame with fit-all control + on-map legend (`isolate` keeps
            Leaflet's pane z-indexes inside this frame so the sticky header
            stays on top when the page scrolls) */}
        <div className="relative isolate rounded-2xl overflow-hidden border border-[#C99A2E]/55 shadow-xs h-[520px] lg:h-[640px] bg-[#F6EBD6]">
          <MapContainer
            center={[11.4, 78.7]}
            zoom={6}
            scrollWheelZoom={false}
            className="map-page__leaflet w-full h-full"
            aria-label="Map of the Divya Desams"
            ref={setMapApi}
          >
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {scope === 'trip' && routePoints.length > 1 ? (
              <Polyline
                positions={routePoints.map((k) => k.coords)}
                pathOptions={{ color: '#B34700', weight: 2.5, dashArray: '6 6', opacity: 0.8 }}
              />
            ) : null}
            {/* Cluster bubbles (live map, zoomed out) — clicking zooms to the group */}
            {clusters.map((c) => (
              <Marker
                key={c.key}
                position={c.center}
                icon={clusterIcon(c.count)}
                eventHandlers={{ click: () => mapApi?.flyToBounds(c.bounds, { padding: [28, 28], maxZoom: CLUSTER_MAX_ZOOM + 1 }) }}
              />
            ))}
            {[...(scope === 'trip' ? mapStops : shown)]
              .filter((k) => Array.isArray(k.coords) && !(scope !== 'trip' && clusteredIds.has(k.id)))
              .map((k) => {
                const visited = visitedIds.includes(k.id);
                const number = scope === 'trip' ? stopNumber.get(k.id) : null;
                return (
                  <CircleMarker
                    key={k.id}
                    center={k.coords}
                    radius={visited ? 8 : 6}
                    pathOptions={{
                      color: visited ? '#C99A2E' : '#FFFFFF',
                      weight: visited ? 3 : 1.5,
                      fillColor: colors[k.region],
                      fillOpacity: 0.9,
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -6]} interactive={false}>
                      {number ? <span>{number}. </span> : null}
                      <span className="map-tooltip__tamil" lang="ta">{k.tamilName}</span>
                      <span className="map-tooltip__name">
                        {k.name}
                        {visited ? ' · ✓ visited' : ''}
                        {number && mapLegs[number - 1] != null ? ` · ${mapLegs[number - 1]} km from previous` : ''}
                      </span>
                    </Tooltip>
                    <Popup>
                      <div className="map-popup">
                        <p className="map-popup__tamil" lang="ta">{k.tamilName}</p>
                        <p className="map-popup__name">{k.name}</p>
                        <div className="map-popup__actions">
                          {/* Gold text link (PO 2026-09-30); the ! bangs beat
                              the unlayered legacy `a { color }` rule */}
                          <Link
                            to={`/kshetram/${k.id}`}
                            className="text-[13px] font-bold text-[#96731F]! underline decoration-[#C99A2E]/70 underline-offset-4 transition-colors hover:text-[#7A2E00]!"
                          >
                            Show Temple
                          </Link>
                          <TripControls id={k.id} />
                        </div>
                      </div>
                    </Popup>
                  </CircleMarker>
                );
              })}
            {me ? (
              <CircleMarker
                center={me}
                radius={7}
                pathOptions={{ color: '#1F4E79', fillColor: '#3E7CB1', fillOpacity: 0.9 }}
              >
                <Popup>You are here (approximate)</Popup>
              </CircleMarker>
            ) : null}
          </MapContainer>
          <button
            type="button"
            onClick={fitAll}
            className="absolute right-3 top-3 z-[500] inline-flex items-center gap-2 rounded-lg bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#332417] shadow-md transition-colors hover:bg-[#FAF2E3]"
          >
            <Maximize className="h-4 w-4 text-[#7A2E00]" aria-hidden="true" />
            Fit all temples
          </button>
          <span className="absolute right-3 top-[52px] z-[500] rounded-full bg-[#571F00]/85 px-3 py-1 text-[11px] font-semibold text-[#FFFDF7] shadow-xs backdrop-blur-xs pointer-events-none">
            {shown.length} of {plotted.length} desams plotted
          </span>
          <div className="absolute bottom-3 left-3 z-[500] flex items-center gap-4 rounded-lg bg-[#FFFDF7]/95 px-3.5 py-2 text-[12px] font-medium text-[#332417] shadow-md">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#B34700' }} aria-hidden="true" />
              Temple
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#C99A2E', boxShadow: '0 0 0 2px #FFFDF7, 0 0 0 3.5px #C99A2E' }} aria-hidden="true" />
              Visited
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#B34700]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
              </svg>
              In trip
            </span>
          </div>
        </div>
      </div>

      {/* Temple matrix — every filtered desam as a card, in rows and
          columns (PO 2026-09-30); distances appear once GPS is shared */}
      <section aria-label="Temples in view" className="mt-8">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 className="font-display text-[22px] font-semibold text-[#5C1F00]">
            Temples in view
          </h2>
          <span className="text-[12px] font-medium text-[#66523D]">{cardList.length} results</span>
        </div>
        {cardList.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cardList.map(({ kshetram: k, km }) => (
              <NearestCard key={k.id} kshetram={k} km={km} mapApi={mapApi} />
            ))}
          </ul>
        ) : (
          <p className="rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] p-4 text-sm text-[#66523D]">
            No temples match the current filters — clear the search or pick another region.
          </p>
        )}
        {me ? (
          <p className="text-[11px] text-[#66523D] italic mt-2.5">Distances are straight-line and approximate.</p>
        ) : null}
      </section>

      {/* Region-color legend card */}
      <div className="mt-6 rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-5 shadow-xs">
        <RegionLegend colors={colors} regions={regions} />
      </div>

      {/* ---- Trip planner modal (PO round 10) — opened by the big
          left-column button; renders from the same live trip state, so any
          add/remove anywhere on the page is reflected here ---- */}
      {plannerOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#332417]/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="My Yatra — Trip Planner"
          onClick={(e) => { if (e.target === e.currentTarget) setPlannerOpen(false); }}
        >
          <div className="bg-[#FFFDF7] w-full max-w-3xl rounded-2xl border border-[#C99A2E]/60 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />

            <div className="p-5 sm:p-6 pb-4 border-b border-[#F0E3C6] flex items-center justify-between shrink-0">
              <h2 className="font-display text-2xl sm:text-[26px] font-semibold text-[#5C1F00]">
                {SITE_COPY.trip.title}
              </h2>
              <button
                type="button"
                onClick={() => setPlannerOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#FAF2E3] text-[#66523D] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {stops.length === 0 ? (
                <EmptyState
                  title={SITE_COPY.trip.emptyTitle}
                  message={SITE_COPY.trip.emptyMessage}
                  action={(
                    <div className="flex flex-wrap justify-center gap-3 mt-1">
                      <Link className="btn btn--primary" to="/kshetrams">Browse desams</Link>
                    </div>
                  )}
                />
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5">
                    <p className="trip-page__meta text-sm text-[#66523D]" aria-live="polite">
                      {stops.length} {stops.length === 1 ? 'stop' : 'stops'} · about {sumLegs(legs)} km in
                      current order (straight-line) · Distances are straight-line — road distance varies.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 no-print shrink-0">
                      <button type="button" className={railBtn} onClick={onShare}>
                        <Share2 className="w-3.5 h-3.5" aria-hidden="true" /> Share
                      </button>
                      <button type="button" className={railBtn} onClick={() => window.print()}>
                        <Printer className="w-3.5 h-3.5" aria-hidden="true" /> Print
                      </button>
                      <Link to="/kshetrams" className={railBtn}>
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" /> Add temples
                      </Link>
                      <button type="button" className={railBtn} onClick={onClear}>
                        <Trash2 className="w-3.5 h-3.5" aria-hidden="true" /> Clear
                      </button>
                    </div>
                  </div>

                  {notice ? (
                    <p className="role-status mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-[#C99A2E]/50 bg-[#F6EBD6] px-4 py-3 text-sm text-[#332417]" role="status">
                      <RotateCcw className="w-4 h-4 text-[#B34700] shrink-0" aria-hidden="true" />
                      <span className="flex-1">{notice}</span>
                      <button
                        type="button"
                        className="text-xs font-bold uppercase tracking-wider text-[#96731F] hover:text-[#7A2E00] px-2 py-1 rounded transition-colors no-print"
                        onClick={() => setNotice('')}
                      >
                        Dismiss
                      </button>
                    </p>
                  ) : null}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print" role="group" aria-label="Trip view">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        className={view === 'region' ? 'region-chip is-active' : 'region-chip'}
                        aria-pressed={view === 'region'}
                        onClick={() => setView('region')}
                      >
                        By region
                      </button>
                      <button
                        type="button"
                        className={view === 'route' ? 'region-chip is-active' : 'region-chip'}
                        aria-pressed={view === 'route'}
                        onClick={() => setView('route')}
                      >
                        Route order
                      </button>
                    </div>
                    <button
                      type="button"
                      className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D95F0E] to-[#B34700] text-[#FFFDF7] text-sm font-semibold shadow-xs hover:opacity-95 transition-opacity"
                      onClick={onOrder}
                    >
                      <span aria-hidden="true">⤓</span>
                      <span>Order my route — nearest first</span>
                    </button>
                  </div>

                  {view === 'region' ? (
                    <div className="mt-5">
                      <RegionGroups stops={stops} onRemove={removeFromTrip} isVisited={isVisited} toggleVisited={toggleVisited} />
                    </div>
                  ) : (
                    <div className="mt-5 rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-6 shadow-xs">
                      <ol>
                        {orderedStops.map((k, i) => (
                          <TripStop
                            key={k.id}
                            kshetram={k}
                            index={i + 1}
                            legKm={orderedLegs[i]}
                            onRemove={removeFromTrip}
                            isVisited={isVisited}
                            toggleVisited={toggleVisited}
                          />
                        ))}
                      </ol>
                    </div>
                  )}

                  <p className="mt-5 text-xs text-[#66523D] italic no-print">
                    🖨 This itinerary is print-ready — the print stylesheet hides buttons and maps.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/** Region-grouped view: groups keep first-seen region order (FR-80). */
function RegionGroups({ stops, onRemove, isVisited, toggleVisited }) {
  const groups = new Map();
  for (const stop of stops) {
    const bucket = groups.get(stop.region);
    if (bucket) bucket.push(stop);
    else groups.set(stop.region, [stop]);
  }
  let globalIndex = 0;
  return (
    <div className="space-y-6">
      {[...groups.entries()].map(([region, group]) => (
        <section className="rounded-2xl border border-[#C99A2E]/40 bg-[#FFFDF7] p-4 sm:p-6 shadow-xs" key={region}>
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-[#F0E3C6]">
            <span className="region-dot" style={{ background: '#C99A2E' }} aria-hidden="true" />
            <h3 className="font-display text-xl font-semibold text-[#7A2E00]">{region}</h3>
            <span className="text-[10px] font-bold bg-[#FAF2E3] text-[#96731F] px-2 py-0.5 rounded-full border border-[#C99A2E]/30">
              {group.length} {group.length === 1 ? 'stop' : 'stops'}
            </span>
          </div>
          <ol>
            {group.map((k) => {
              globalIndex += 1;
              return (
                <TripStop
                  key={k.id}
                  kshetram={k}
                  index={globalIndex}
                  legKm={null}
                  onRemove={onRemove}
                  isVisited={isVisited}
                  toggleVisited={toggleVisited}
                />
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

/** One stop row: gold trip-index medallion, name block, Darshan Done toggle, remove pill. */
function TripStop({ kshetram, index, legKm, onRemove, isVisited, toggleVisited }) {
  const visited = isVisited(kshetram.id);
  return (
    <>
      {legKm != null ? (
        <li className="flex justify-center items-center gap-2 py-1 text-[11px] text-[#96731F]" aria-hidden="true">
          <span className="h-4 w-px bg-[#E3D2AE]" />
          <span>↓ {legKm} km</span>
          <span className="h-4 w-px bg-[#E3D2AE]" />
        </li>
      ) : null}
      <li className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-b border-[#F0E3C6] last:border-b-0">
        <span className="trip-index" aria-hidden="true">{index}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-[#96731F] font-medium" lang="ta">{kshetram.tamilName}</span>
          <Link to={`/kshetram/${kshetram.id}`} className="font-display text-lg font-semibold text-[#7A2E00] hover:text-[#B34700] transition-colors">
            {kshetram.name}
          </Link>
          <span className="block text-xs text-[#66523D]">{kshetram.place} · {kshetram.state}</span>
        </span>
        <span className="flex items-center gap-2 no-print">
          <button
            type="button"
            aria-pressed={visited}
            onClick={() => toggleVisited(kshetram.id)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-colors ${
              visited
                ? 'bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] text-[#4A3005] border-[#96731F]'
                : 'border-[#B34700]/50 text-[#7A2E00] hover:bg-[#B34700]/10 bg-[#FFFDF7]'
            }`}
          >
            {visited ? 'Darshan Done' : 'Mark Visited'}
          </button>
          <button
            type="button"
            className="text-sm font-bold text-[#A32020] hover:bg-[#A32020]/10 rounded-full px-3 py-1.5 transition-colors shrink-0"
            title={`Remove ${kshetram.name} from trip`}
            aria-label={`Remove ${kshetram.name} from trip`}
            onClick={() => onRemove(kshetram.id)}
          >
            Remove ✕
          </button>
        </span>
      </li>
    </>
  );
}
