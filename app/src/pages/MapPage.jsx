/**
 * MapPage — the merged Yatra Atlas, restyled to the /kshetrams design
 * system with the PO's "option 3" layout (round 26): a compact title
 * strip ("Plan your Yatra" + results summary + the My-trip opener), a
 * full-width map with the search/region/scope panel floating over its
 * upper-left corner, "Fit results" and "My location" in the upper
 * right, Leaflet's zoom control at the lower left (never under the
 * panel), the marker legend at the lower right above the attribution,
 * and the temple results as a wrapping 1/2/3-column grid below the map
 * listing every matching temple (PO round 27: no horizontal scrolling,
 * no Map/List switch — the grid renders on every viewport). Cards and
 * markers select each other (the selected card is outlined and its
 * marker carries the heavier gold stroke);
 * clicking a card's name focuses the map, actions act only on
 * themselves. Clusters, tooltips, popups, the trip polyline, ?t= share
 * restore, tile-error fallback and the shared planner dialog (focus
 * containment, Escape, focus return) are unchanged. /trip redirects
 * here. Lazy-loaded route chunk (NFR-11).
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Marker, Polyline, Rectangle, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import {
  MapPin, Plus, Printer, RotateCcw, Route as RouteIcon,
  Share2, Trash2, Crosshair,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { getAllKshetramsEnriched, getAllAzhwars } from '../data/api.js';
import { buildRegionColors } from '../utils/regionColors.js';
import { clusterByDistanceKm, distanceKm } from '../utils/geo.js';
import { matchesSearch } from '../utils/filter.js';
import { orderNearestFirst, legsFor, sumLegs } from '../utils/route.js';
import { decodeTrip, encodeTrip } from '../state/trip.js';
import RegionLegend from '../components/RegionLegend.jsx';
import TripControls from '../components/TripControls.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Dialog from '../components/ui/Dialog.jsx';
import { Button } from '../components/ui/Button.jsx';
import { SearchField, FilterSelect } from '../components/ui/fields.jsx';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

const CLUSTER_MAX_ZOOM = 8; // clusters form below zoom 9, dissolve above

/** Saffron count bubble for a grid cluster (mockup idiom); the focused
 * cluster gets the gold ring so its bubble reads as selected. */
function clusterIcon(count, active = false) {
  return L.divIcon({
    html: `<span class="map-cluster__bubble${active ? ' map-cluster__bubble--active' : ''}" aria-label="Cluster of ${count} temples — show the group's area and filter the list below">${count}</span>`,
    className: active ? 'map-cluster map-cluster--active' : 'map-cluster',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

/** Flag marker for temples currently in the trip (shape + label, not
 * color alone — PO round 23). */
function tripFlagIcon() {
  return L.divIcon({
    html: '<span class="map-trip-flag" aria-hidden="true">⚑</span>',
    className: 'map-trip-flag-wrap',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
}

/* Scope-pill idiom shared with /kshetrams (round 25/26) */
const pillBase = 'flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] transition-all';
const pillActive = `${pillBase} border border-[#C99A2E]/60 bg-[#F6EBD6] font-semibold text-[#7A2E00] shadow-xs`;
const pillIdle = `${pillBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#332417] hover:border-[#C99A2E]`;

/** One temple card in the results dock: photo band, Tamil over English
 * name, temple/place lines, region pill, then the action tiers —
 * Add to trip / View temple / Mark as visited. Clicking the name
 * selects the temple and focuses its marker (the card itself is NOT a
 * link, so actions never nest). The visible "Focus on map" action
 * (PO round 27) sits beside the other actions; hover is border + shadow
 * only — no card lift, so the grid rows stay aligned.
 */
function MapResultCard({ kshetram: k, km, selected, onSelect }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(k.id);
  const image = useWikiImage(k.wiki ?? null, k.photo ?? null);
  return (
    <li
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-[#FFFDF7] shadow-xs transition-all duration-300 ${
        selected ? 'border-[#C99A2E] ring-1 ring-[#C99A2E]/50' : 'border-[#C99A2E]/45'
      }`}
    >
      <div className="relative h-36 shrink-0 overflow-hidden border-b border-[#E3D2AE] bg-[#F6EBD6]">
        {image.src ? (
          <img
            src={image.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-top"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <>
            <img src={gopuramIllustration} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <p className="absolute inset-x-0 bottom-3 text-center text-[13px] font-medium text-[#66523D]/90">Photo unavailable</p>
          </>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4">
        <button
          type="button"
          onClick={() => onSelect(k)}
          aria-label={`Focus ${k.name} on the map`}
          className="block max-w-full text-left"
        >
          <span className="block text-[14px] font-medium text-[#96731F]" lang="ta">{k.tamilName}</span>
          {/* ! beats the unlayered legacy h1-h3 rules in base.css */}
          <span className="mt-0.5 block font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]! group-hover:underline">
            {k.name}
          </span>
        </button>
        <p className="mt-1 text-[14px] font-semibold leading-snug text-[#332417]">{k.temple}</p>
        <p className="text-[13px] text-[#66523D]">{k.place} · {k.state}</p>
        {km != null ? (
          <p className="mt-0.5 text-[13px] font-bold text-[#96731F] tabular-nums">{km} km away</p>
        ) : null}
        <span className="mt-2 inline-flex self-start rounded-md border border-[#C99A2E]/50 bg-[#FAF2E3] px-2 py-0.5 text-[11px] font-medium text-[#7A2E00]">
          {k.region}
        </span>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
          <TripControls id={k.id} />
          <button
            type="button"
            onClick={() => onSelect(k)}
            className="ui-tertiary text-[13px]"
          >
            Focus on map
          </button>
          {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
          <Link to={`/kshetram/${k.id}`} className="ui-btn ui-btn--primary ui-btn--small">
            View temple
            <span aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            onClick={() => toggleVisited(k.id)}
            aria-pressed={visited}
            className="ui-tertiary text-[13px]"
          >
            {visited ? '✓ Visited' : 'Mark as visited'}
          </button>
        </div>
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
  const [clusterKm, setClusterKm] = useState(10);
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');
  const [mapApi, setMapApi] = useState(null);
  const [clusterTick, setClusterTick] = useState(0);
  const [tileError, setTileError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // Focused cluster (round 31): the bubble the visitor clicked — a dashed
  // bounds outline on the map + the results grid filtered to its member
  // temples. Cleared by Escape, the chip's Clear, Reset filters, a scope
  // change, or any filter that removes a member temple. Zoom is
  // deliberately NOT a clear trigger: flying to the bounds dissolves the
  // cluster (zoom 9) so the member markers show while the focus stands.
  const [focusedCluster, setFocusedCluster] = useState(null);

  // Desktop gets the corner control stack; below lg the same buttons live
  // inside the filter panel (the full-width panel would collide with an
  // upper-right absolute stack). matchMedia is unavailable in jsdom, which
  // keeps the desktop rendering for tests.
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Trip planner state (merged from TripPage; the planner lives in the
  // shared dialog opened from the title strip)
  const [view, setView] = useState('region');
  const [notice, setNotice] = useState('');
  const [plannerOpen, setPlannerOpen] = useState(false);
  const appliedShare = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();

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

  // One result-count presentation (title-strip summary + dock header)
  const resultCount = `${shown.length} of ${plotted.length} terrestrial desams shown`;
  const filtersActive = search !== '' || region !== '' || scope !== 'all';

  const resetFilters = () => {
    setSearch('');
    setRegion('');
    setScope('all');
    setFocusedCluster(null);
  };

  // Click a cluster bubble: keep the standing fly-to-bounds behavior AND
  // focus the group (dashed outline + the results grid filtered to its
  // member temples). Clicking another bubble switches the focus.
  const selectCluster = (c) => {
    setFocusedCluster({ key: c.key, count: c.count, ids: new Set(c.ids), bounds: c.bounds });
    mapApi?.flyToBounds(c.bounds, { padding: [28, 28], maxZoom: CLUSTER_MAX_ZOOM + 1 });
  };

  // Result dock: always listed (dataset order until the pilgrim shares
  // their location, then nearest-first with live distances)
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

  // Zoom control at the lower left — the floating filter panel owns the
  // upper-left corner, so the default topleft position would overlap it.
  useEffect(() => {
    if (!mapApi) return undefined;
    const zoom = L.control.zoom({ position: 'bottomleft' });
    mapApi.addControl(zoom);
    return () => mapApi.removeControl(zoom);
  }, [mapApi]);

  const clusters = useMemo(() => {
    if (!mapApi || scope === 'trip' || mapApi.getZoom() > CLUSTER_MAX_ZOOM || shown.length < 2) return [];
    return clusterByDistanceKm(shown.map((k) => k.coords), clusterKm)
      .map((indices) => indices.map((i) => shown[i]))
      .filter((members) => members.length > 1)
      .map((members) => ({
        key: `cluster-${members[0].id}`,
        count: members.length,
        center: L.latLngBounds(members.map((m) => m.coords)).getCenter(),
        bounds: L.latLngBounds(members.map((m) => m.coords)),
        ids: members.map((m) => m.id),
      }));
    // clusterTick re-runs this after every pan/zoom (its value is unused)
  }, [mapApi, shown, scope, clusterKm, clusterTick]); // eslint-disable-line react-hooks/exhaustive-deps


  const clusteredIds = useMemo(
    () => new Set(clusters.flatMap((c) => c.ids)),
    [clusters],
  );

  // Focused-cluster lifecycle: the focus dies when the trip scope hides
  // the bubbles, or a filter change removes one of the member temples
  // from the result set. (clusterTick rides along so a zoom that
  // regroups the atlas re-validates too.)
  useEffect(() => {
    if (!focusedCluster) return undefined;
    const invalid = scope === 'trip'
      || shown.filter((k) => focusedCluster.ids.has(k.id)).length !== focusedCluster.ids.size;
    if (invalid) setFocusedCluster(null);
    return undefined;
  }, [focusedCluster, scope, shown, clusterTick]);

  // Escape clears the cluster focus (the Dialog idiom, map flavor).
  useEffect(() => {
    if (!focusedCluster) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setFocusedCluster(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [focusedCluster]);

  // The results grid honors the cluster focus (region/search/scope still
  // apply first — this is one more filter layer, never the only one).
  const listed = useMemo(() => (
    focusedCluster
      ? cardList.filter((entry) => focusedCluster.ids.has(entry.kshetram.id))
      : cardList
  ), [cardList, focusedCluster]);

  // Route overlay: dashed polyline + numbered tooltips for the trip on the
  // atlas itself (mirrors the selected view ordering).
  const mapStops = view === 'route' ? orderedStops : stops;
  const mapLegs = view === 'route' ? orderedLegs : legs;
  const routePoints = mapStops.filter((k) => Array.isArray(k.coords));
  const stopNumber = new Map(mapStops.map((k, i) => [k.id, i + 1]));

  // Bounds follow the intended result set — the CURRENT filtered results,
  // not the whole archive (the Reset-filters control restores all temples).
  // Left padding clears the floating filter panel.
  const fitResults = () => {
    if (!mapApi || shown.length === 0) return;
    mapApi.fitBounds(L.latLngBounds(shown.map((k) => k.coords)), {
      paddingTopLeft: [340, 24],
      paddingBottomRight: [24, 24],
      maxZoom: 12,
    });
  };

  const focusTemple = (k) => {
    setSelectedId(k.id);
    mapApi?.flyTo?.(k.coords, 12);
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

  /** The search/region/scope controls — rendered floating over the map's
   * upper-left corner (single instance; the results grid below lists every
   * matching temple on every viewport). */
  const filterControls = (
    <>
      <SearchField
        id="map-search"
        label="Search kshetrams"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search temple or place"
      />
      <FilterSelect
        id="map-region"
        label="Filter by region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full"
      >
        <option value="">All regions ({plotted.length})</option>
        {regions.map((r) => <option key={r} value={r}>{r} ({counts[r]})</option>)}
      </FilterSelect>
      <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Showing">
        <button
          type="button"
          aria-pressed={scope === 'all'}
          onClick={() => setScope('all')}
          className={scope === 'all' ? pillActive : pillIdle}
        >
          All ({scopeCounts.all})
        </button>
        <button
          type="button"
          aria-pressed={scope === 'visited'}
          onClick={() => setScope(scope === 'visited' ? 'all' : 'visited')}
          className={scope === 'visited' ? pillActive : pillIdle}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" /><path d="M8.5 12.2l2.4 2.4 4.6-5" />
          </svg>
          Visited ({scopeCounts.visited})
        </button>
        <button
          type="button"
          aria-pressed={scope === 'trip'}
          onClick={() => setScope(scope === 'trip' ? 'all' : 'trip')}
          className={scope === 'trip' ? pillActive : pillIdle}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
          </svg>
          In trip ({scopeCounts.trip})
        </button>
        {filtersActive ? (
          <button type="button" onClick={resetFilters} className="ui-tertiary text-[13px]">
            Reset filters
          </button>
        ) : null}
        {/* Cluster-distance slider (PO round 28): governs which temples
            share a bubble below zoom 9; changing it never moves the map. */}
        <div className="flex items-center justify-between gap-3 text-[13px] font-medium text-[#332417]">
          <label htmlFor="map-cluster-km" className="min-w-0 shrink-0">
            Cluster temples within
          </label>
          <span className="flex items-center gap-2">
            <input
              id="map-cluster-km"
              type="range"
              min={1}
              max={50}
              step={1}
              value={clusterKm}
              onChange={(e) => setClusterKm(Number(e.target.value))}
              aria-label="Cluster distance in kilometres — temples within this distance share a bubble"
              className="h-11 w-28 cursor-pointer accent-[#96731F]"
            />
            <span className="w-[52px] text-right font-semibold text-[#7A2E00] tabular-nums" aria-hidden="true">
              {clusterKm} km
            </span>
          </span>
        </div>
      </div>
    </>
  );

  const railBtn = 'ui-btn ui-btn--secondary ui-btn--small no-print';

  /* Fit results + My location (+ the clear-location affordance) — rendered
     in the map's upper-right corner on desktop, inside the filter panel on
     narrow screens (one instance per breakpoint). */
  const mapActions = (
    <>
      <button
        type="button"
        onClick={fitResults}
        className="inline-flex items-center gap-2 rounded-lg border border-[#E3D2AE] bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#332417] shadow-md transition-colors hover:border-[#C99A2E] hover:bg-[#FAF2E3]"
      >
        Fit results
      </button>
      <button
        type="button"
        onClick={locate}
        className="inline-flex items-center gap-2 rounded-lg border border-[#E3D2AE] bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#332417] shadow-md transition-colors hover:border-[#C99A2E] hover:bg-[#FAF2E3]"
      >
        <MapPin className="h-4 w-4 text-[#96731F]" aria-hidden="true" />
        <span>My location</span>
      </button>
      {me ? (
        <button
          type="button"
          onClick={() => setMe(null)}
          title="Clear my location marker"
          aria-label="Clear my location"
          className="inline-flex items-center rounded-lg border border-[#E3D2AE] bg-[#FFFDF7] p-2 shadow-md transition-colors hover:border-[#C99A2E]"
        >
          <Crosshair className="h-4 w-4 text-[#96731F]" aria-hidden="true" />
        </button>
      ) : null}
    </>
  );

  return (
    <div>
      {/* ---- Title strip: heading + results summary + the My-trip opener ---- */}
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pb-5 pt-8">
        <div className="min-w-0">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {SITE_COPY.map.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 font-display text-[44px]! leading-[1.04]! font-semibold text-[#5C1F00]! sm:text-[48px]!">
            {SITE_COPY.map.title}
          </h1>
          <p className="mt-2 text-[15px] text-[#66523D]" aria-live="polite">
            {geoMessage || resultCount} · Visited desams carry a gold ring.
          </p>
          <p className="mt-1 text-[14px] text-[#66523D]">{SITE_COPY.progressScope}</p>
        </div>
        <button
          type="button"
          onClick={() => setPlannerOpen(true)}
          aria-haspopup="dialog"
          aria-label={`My trip — ${stops.length} ${stops.length === 1 ? 'stop' : 'stops'}`}
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#96731F] px-5 py-2.5 text-[14px] font-semibold text-[#FFFDF7]! shadow-xs transition-colors duration-150 hover:bg-[#7A2E00]"
        >
          <RouteIcon className="h-4 w-4" aria-hidden="true" />
          <span>My trip</span>
          <span className="inline-flex min-w-[24px] items-center justify-center rounded-full bg-[#FFFDF7] px-1.5 text-[12px] font-bold leading-[20px] text-[#7A2E00] tabular-nums">
            {stops.length}
          </span>
        </button>
      </div>

      {/* ---- Full-width map with floating controls ---- */}
      <div
        className={`relative isolate overflow-hidden rounded-2xl border border-[#E3D2AE] shadow-xs h-[440px] sm:h-[540px] lg:h-[620px] bg-[#F6EBD6]`}
      >
        {!mapApi ? (
          <p className="absolute inset-x-0 top-3 z-[500] mx-auto w-fit rounded-full bg-[#FFFDF7]/95 px-4 py-1.5 text-[14px] font-medium text-[#74716b] shadow-xs" role="status">
            Loading map…
          </p>
        ) : null}
        {tileError ? (
          <p className="absolute inset-x-3 top-3 z-[500] rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] px-4 py-2.5 text-[14px] leading-[22px] text-[#333942] shadow-md" role="alert">
            Map tiles could not load — the temple dock below remains fully usable.
          </p>
        ) : null}
        <MapContainer
          center={[11.4, 78.7]}
          zoom={6}
          scrollWheelZoom={false}
          zoomControl={false}
          className="map-page__leaflet w-full h-full"
          aria-label="Map of the Divya Desams"
          ref={setMapApi}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            eventHandlers={{ tileerror: () => setTileError(true) }}
          />
          {scope === 'trip' && routePoints.length > 1 ? (
            <Polyline
              positions={routePoints.map((k) => k.coords)}
              pathOptions={{ color: '#922e0d', weight: 2.5, dashArray: '6 6', opacity: 0.8 }}
            />
          ) : null}
          {/* Cluster bubbles (live map, zoomed out) — clicking focuses the
              group: dashed bounds outline + the list filtered to members */}
          {clusters.map((c) => (
            <Marker
              key={c.key}
              position={c.center}
              icon={clusterIcon(c.count, focusedCluster?.key === c.key)}
              eventHandlers={{ click: () => selectCluster(c) }}
            />
          ))}
          {/* Focused-cluster outline — a dashed snapshot of the group's
              bounds; decorative (the chip + grid carry the state) */}
          {focusedCluster ? (
            <Rectangle
              bounds={focusedCluster.bounds}
              interactive={false}
              pathOptions={{ color: '#B34700', weight: 2, dashArray: '6 6', fillColor: '#B34700', fillOpacity: 0.06 }}
            />
          ) : null}
          {[...(scope === 'trip' ? mapStops : shown)]
            .filter((k) => Array.isArray(k.coords) && !(scope !== 'trip' && clusteredIds.has(k.id)))
            .map((k) => {
              const visited = visitedIds.includes(k.id);
              const inTrip = tripIds.includes(k.id);
              const selected = selectedId === k.id;
              const number = scope === 'trip' ? stopNumber.get(k.id) : null;
              // Visited = gold ring; in-trip (outside trip scope) = flag
              // marker — shape + label distinguish states, not color alone
              if (scope !== 'trip' && inTrip && !visited) {
                return (
                  <Marker
                    key={k.id}
                    position={k.coords}
                    icon={tripFlagIcon()}
                    eventHandlers={{ click: () => focusTemple(k) }}
                  >
                    <Tooltip direction="top" offset={[0, -6]} interactive={false}>
                      <span className="map-tooltip__tamil" lang="ta">{k.tamilName}</span>
                      <span className="map-tooltip__name">{k.name} · in trip</span>
                    </Tooltip>
                  </Marker>
                );
              }
              return (
                <CircleMarker
                  key={k.id}
                  center={k.coords}
                  radius={selected ? 10 : visited ? 8 : 6}
                  pathOptions={{
                    color: visited || selected ? '#C99A2E' : '#FFFFFF',
                    weight: selected ? 4 : visited ? 3 : 1.5,
                    fillColor: selected ? '#922e0d' : colors[k.region],
                    fillOpacity: 0.9,
                  }}
                >
                  <Tooltip direction="top" offset={[0, -6]} interactive={false}>
                    {number ? <span>{number}. </span> : null}
                    <span className="map-tooltip__tamil" lang="ta">{k.tamilName}</span>
                    <span className="map-tooltip__name">
                      {k.name}
                      {visited ? ' · ✓ visited' : ''}
                      {inTrip && scope === 'trip' ? ' · in trip' : ''}
                      {number && mapLegs[number - 1] != null ? ` · ${mapLegs[number - 1]} km from previous` : ''}
                    </span>
                  </Tooltip>
                  <Popup>
                    <div className="map-popup">
                      <p className="map-popup__tamil" lang="ta">{k.tamilName}</p>
                      <p className="map-popup__name">{k.name}</p>
                      <div className="map-popup__actions">
                        <Link
                          to={`/kshetram/${k.id}`}
                          className="text-[13px] font-bold text-[#922e0d]! underline decoration-[#C99A2E]/70 underline-offset-4 transition-colors hover:text-[#7a2e00]!"
                        >
                          View temple
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

        {/* Floating search/filter panel — upper left. Below lg it also
            carries the map controls, which would collide with a full-width
            panel if absolutely positioned in the corner. */}
        <div className="absolute left-3 top-3 z-[500] flex w-[min(340px,calc(100%-24px))] flex-col gap-3 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7]/95 p-4 shadow-md backdrop-blur-xs">
          {filterControls}
          {!isDesktop ? (
            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[#E3D2AE] pt-3">
              {mapActions}
            </div>
          ) : null}
        </div>

        {/* Map corner controls — upper right (desktop only) */}
        {isDesktop ? (
          <div className="absolute right-3 top-3 z-[500] flex flex-col items-end gap-2">{mapActions}</div>
        ) : null}

        {/* Marker legend — lower right, above the attribution line. Hidden
            on mobile: the tall filter panel leaves no quiet corner, and the
            tooltips already label every marker state. */}
        <div className="absolute bottom-9 right-3 z-[500] hidden flex-col gap-1.5 rounded-lg bg-[#FFFDF7]/95 px-3.5 py-2.5 text-[13px] font-medium text-[#333942] shadow-md sm:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#922e0d' }} aria-hidden="true" />
            Temple
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[regions[0]] ?? '#922e0d', boxShadow: '0 0 0 2px #FFFDF7, 0 0 0 3.5px #C99A2E' }} aria-hidden="true" />
            Visited
          </span>
          <span className="flex items-center gap-1.5">
            <span className="map-trip-flag static" aria-hidden="true">⚑</span>
            In trip
          </span>
          <span className="flex items-center gap-1.5">
            <span className="map-cluster__bubble static flex h-[18px] w-[18px] items-center justify-center text-[10px]">9</span>
            Cluster
          </span>
        </div>
      </div>

      {/* ---- Results grid below the map: every matching temple, wrapping
           1/2/3 across (PO round 27: no scroll needed); the tile-failure
           fallback everywhere. A focused cluster narrows the grid to its
           member temples (round 31), announced by the chip. ---- */}
      <section
        aria-label="Temples in view"
        className="pt-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
              Temples in view
            </h2>
            {focusedCluster ? (
              <p
                role="status"
                className="flex items-center gap-2 rounded-full border border-[#C99A2E]/60 bg-[#F6EBD6] px-3.5 py-1.5 text-[13px] font-semibold text-[#7A2E00]"
              >
                <span className="map-cluster__bubble static flex h-[18px] w-[18px] items-center justify-center text-[10px]" aria-hidden="true">
                  {focusedCluster.count}
                </span>
                <span>
                  {listed.length} temple{listed.length === 1 ? '' : 's'} from the selected cluster
                </span>
                <button
                  type="button"
                  onClick={() => setFocusedCluster(null)}
                  className="rounded-md px-1.5 py-0.5 text-[12px] font-bold text-[#7A2E00]! underline underline-offset-2 transition-colors hover:text-[#5C1F00]!"
                >
                  Clear
                </button>
              </p>
            ) : null}
          </div>
          <span className="text-[14px] font-medium text-[#66523D]">{listed.length} results</span>
        </div>
        {listed.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listed.map(({ kshetram: k, km }) => (
              <MapResultCard
                key={k.id}
                kshetram={k}
                km={km}
                selected={selectedId === k.id}
                onSelect={focusTemple}
              />
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No temples match these filters."
            message="Try another name or reset your filters."
            action={(
              <button type="button" onClick={resetFilters} className="ui-btn ui-btn--secondary">
                Reset filters
              </button>
            )}
          />
        )}
        {me ? (
          <p className="mt-2.5 text-[14px] italic text-[#66523D]">Distances are straight-line and approximate.</p>
        ) : null}
      </section>

      {/* Region-color legend card — colors stay inside the visualization */}
      <div className="mt-6 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-4 shadow-xs sm:p-5">
        <RegionLegend colors={colors} regions={regions} />
      </div>

      {/* ---- Trip planner in the shared dialog; renders from the same live
          trip state, so adds/removes anywhere on the page reflect here ---- */}
      <Dialog
        open={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        title={SITE_COPY.trip.title}
        eyebrow={SITE_COPY.map.eyebrow}
      >
        {stops.length === 0 ? (
          <EmptyState
            title={SITE_COPY.trip.emptyTitle}
            message={SITE_COPY.trip.emptyMessage}
            action={(
              <div className="mt-1 flex flex-wrap justify-center gap-3">
                <Link className="ui-btn ui-btn--primary" to="/kshetrams">Explore temples</Link>
              </div>
            )}
          />
        ) : (
          <>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5">
              <p className="trip-page__meta text-[14px] leading-[22px] text-[#74716b]" aria-live="polite">
                {stops.length} {stops.length === 1 ? 'stop' : 'stops'} · about {sumLegs(legs)} km in
                current order (straight-line) · Distances are straight-line — road distance varies.
              </p>
              <div className="flex flex-wrap items-center gap-2 no-print shrink-0">
                <button type="button" className={railBtn} onClick={onShare}>
                  <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Share
                </button>
                <button type="button" className={railBtn} onClick={() => window.print()}>
                  <Printer className="h-3.5 w-3.5" aria-hidden="true" /> Print
                </button>
                <Link to="/kshetrams" className={railBtn}>
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Add temples
                </Link>
                <button type="button" className={railBtn} onClick={onClear}>
                  <Trash2 className="h-3.5 w-3.5" aria-hidden="true" /> Clear
                </button>
              </div>
            </div>

            {notice ? (
              <p className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-[#E3D2AE] bg-[#FAF2E3] px-4 py-3 text-[14px] leading-[22px] text-[#332417]" role="status">
                <RotateCcw className="h-4 w-4 shrink-0 text-[#922e0d]" aria-hidden="true" />
                <span className="flex-1">{notice}</span>
                <button
                  type="button"
                  className="ui-tertiary text-[12px] uppercase tracking-wider no-print"
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
                  className="ui-pill"
                  aria-pressed={view === 'region'}
                  onClick={() => setView('region')}
                >
                  By region
                </button>
                <button
                  type="button"
                  className="ui-pill"
                  aria-pressed={view === 'route'}
                  onClick={() => setView('route')}
                >
                  Route order
                </button>
              </div>
              <Button small onClick={onOrder} className="self-start sm:self-auto">
                <span aria-hidden="true">⤓</span>
                <span>Order my route — nearest first</span>
              </Button>
            </div>

            {view === 'region' ? (
              <div className="mt-5">
                <RegionGroups stops={stops} onRemove={removeFromTrip} isVisited={isVisited} toggleVisited={toggleVisited} />
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-4 shadow-xs sm:p-6">
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

            <p className="mt-5 text-[13px] leading-[21px] text-[#74716b] italic no-print">
              🖨 This itinerary is print-ready — the print stylesheet hides buttons and maps.
            </p>
          </>
        )}
      </Dialog>
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
        <section className="rounded-2xl border border-[#E3D2AE] bg-[#FFFDF7] p-4 shadow-xs sm:p-6" key={region}>
          <div className="mb-2 flex items-center gap-3 border-b border-[#E3D2AE]/70 pb-3">
            <h3 className="font-display text-xl font-semibold text-[#5C1F00]">{region}</h3>
            <span className="rounded-full border border-[#E3D2AE] bg-[#FAF2E3] px-2 py-0.5 text-[12px] font-bold text-[#96731F]">
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

/** One stop row: gold trip-index medallion, name block, visited toggle, remove pill. */
function TripStop({ kshetram, index, legKm, onRemove, isVisited, toggleVisited }) {
  const visited = isVisited(kshetram.id);
  return (
    <>
      {legKm != null ? (
        <li className="flex items-center justify-center gap-2 py-1 text-[12px] text-[#96731F]" aria-hidden="true">
          <span className="h-4 w-px bg-[#E3D2AE]" />
          <span>↓ {legKm} km</span>
          <span className="h-4 w-px bg-[#E3D2AE]" />
        </li>
      ) : null}
      <li className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[#E3D2AE]/70 py-3 last:border-b-0">
        <span className="trip-index" aria-hidden="true">{index}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-medium text-[#96731F]" lang="ta">{kshetram.tamilName}</span>
          <Link to={`/kshetram/${kshetram.id}`} className="font-display text-lg font-semibold text-[#5C1F00] hover:underline">
            {kshetram.name}
          </Link>
          <span className="block text-[14px] leading-[22px] text-[#66523D]">{kshetram.place} · {kshetram.state}</span>
        </span>
        <span className="flex items-center gap-2 no-print">
          <button
            type="button"
            aria-pressed={visited}
            onClick={() => toggleVisited(kshetram.id)}
            className={`ui-btn ui-btn--secondary ui-btn--small ${visited ? 'is-visited' : ''}`}
            style={visited ? { background: '#FAF2E3', borderColor: '#a77529', color: '#5C1F00' } : undefined}
          >
            {visited ? '✓ Darshan done' : 'Mark as visited'}
          </button>
          <button
            type="button"
            className="rounded-full px-3 py-1.5 text-[14px] font-bold text-[#a32020] transition-colors hover:bg-[#a32020]/10"
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
