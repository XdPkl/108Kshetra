/**
 * MapPage — the merged Yatra Atlas as a practical planning workspace
 * (PO round 23): a left pane with the compact header, search, region +
 * visited/in-trip scope filters and the temple result list, beside a
 * large map. Result selection is synchronized with the markers (the
 * row's name focuses/highlights its marker; the selected row is
 * outlined). "Fit results" bounds the current filtered set while
 * "Reset filters" restores all temples. Mobile: compact search/region,
 * a labelled Map/List switch, an expandable Filters disclosure and an
 * accessible "Trip planner (N)" action; the trip planner itself opens
 * in the shared Dialog (focus containment, Escape, focus return).
 * Visited/in-trip states are distinguished by ring + flag shapes and
 * labels, not color alone; region colors stay inside the map
 * visualization. Distances appear only after the pilgrim optionally
 * shares their location (nearest-first). A tile-error notice and the
 * always-rendered result list keep the page usable when tiles fail.
 * Clusters stay hand-rolled (live map below zoom 9 only). /trip
 * redirects here (share links keep working via ?t=). Lazy-loaded route
 * chunk (NFR-11).
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Marker, Polyline, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import {
  ExternalLink, MapPin, Plus, Printer, RotateCcw, Route as RouteIcon,
  Share2, Trash2, Crosshair,
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
import Dialog from '../components/ui/Dialog.jsx';
import { Button } from '../components/ui/Button.jsx';
import { SearchField, FilterSelect } from '../components/ui/fields.jsx';
import { useVisited } from '../hooks/useVisited.js';
import { useTrip } from '../hooks/useTrip.js';
import { useWikiImage } from '../hooks/useWikiImage.js';
import { SITE_COPY } from '../data/siteCopy.js';

const CLUSTER_MAX_ZOOM = 8; // clusters form below zoom 9, dissolve above
const CLUSTER_CELL_PX = 70;

/** Saffron count bubble for a grid cluster (mockup idiom). */
function clusterIcon(count) {
  return L.divIcon({
    html: `<span class="map-cluster__bubble">${count}</span>`,
    className: 'map-cluster',
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

/** One result row in the pane's temple list: thumb + identity, then the
 * shared action tiers — View temple / Add to trip prominent, Mark as
 * visited, Focus and Directions below. Clicking the name focuses and
 * highlights the marker on the atlas. */
function ResultRow({ kshetram: k, km, mapApi, selected, onSelect }) {
  const { isVisited, toggleVisited } = useVisited();
  const visited = isVisited(k.id);
  const image = useWikiImage(k.wiki ?? null, k.photo ?? null);
  return (
    <li
      className={`rounded-xl border bg-[#FFFDF7] p-3.5 shadow-xs transition-colors ${
        selected ? 'border-[#922e0d] ring-1 ring-[#922e0d]/40' : 'border-[#e8cf9f]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#fbf0dc]">
          {image.src ? (
            <img src={image.src} alt="" aria-hidden="true" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover object-top" />
          ) : null}
        </div>
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => onSelect(k)}
            className="ui-heading block max-w-full text-left text-[19px] font-semibold leading-tight text-[#922e0d] hover:underline"
            aria-label={`Focus ${k.name} on the map`}
          >
            {k.name}
          </button>
          <p className="text-[14px] leading-[22px] text-[#333942]">{k.temple}</p>
          <p className="text-[14px] leading-[22px] text-[#74716b]">{k.place}</p>
          {km != null ? (
            <p className="text-[14px] font-bold leading-[22px] text-[#922e0d] tabular-nums">{km} km away</p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {/* ! beats the unlayered legacy `a { color }` rule in base.css */}
        <Link
          to={`/kshetram/${k.id}`}
          className="ui-btn ui-btn--primary ui-btn--small"
        >
          View temple
          <span aria-hidden="true">→</span>
        </Link>
        <TripControls id={k.id} />
        <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-1">
          <button
            type="button"
            onClick={() => toggleVisited(k.id)}
            aria-pressed={visited}
            className="ui-tertiary text-[13px]"
          >
            {visited ? '✓ Darshan done' : 'Mark as visited'}
          </button>
          <button
            type="button"
            onClick={() => onSelect(k)}
            className="ui-tertiary text-[13px]"
          >
            Focus on map
          </button>
          {k.mapQuery ? (
            <a
              href={`${MAPS_URL_TEMPLATE}${encodeURIComponent(`directions to ${k.mapQuery}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-tertiary text-[13px]"
            >
              <span>Directions</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
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
  const [me, setMe] = useState(null);
  const [geoMessage, setGeoMessage] = useState('');
  const [mapApi, setMapApi] = useState(null);
  const [clusterTick, setClusterTick] = useState(0);
  const [tileError, setTileError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [mobileView, setMobileView] = useState('map');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Trip planner state (merged from TripPage; the planner lives in the
  // shared dialog opened from the pane)
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

  // One result-count presentation (header line + on-map badge)
  const resultCount = `${shown.length} of ${plotted.length} terrestrial desams shown`;

  const resetFilters = () => {
    setSearch('');
    setRegion('');
    setScope('all');
  };

  // Result list: always listed (dataset order until the pilgrim shares
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
  // atlas itself (mirrors the selected view ordering).
  const mapStops = view === 'route' ? orderedStops : stops;
  const mapLegs = view === 'route' ? orderedLegs : legs;
  const routePoints = mapStops.filter((k) => Array.isArray(k.coords));
  const stopNumber = new Map(mapStops.map((k, i) => [k.id, i + 1]));

  // Bounds follow the intended result set — the CURRENT filtered results,
  // not the whole archive (the Reset-filters control restores all temples).
  const fitResults = () => {
    if (!mapApi || shown.length === 0) return;
    mapApi.fitBounds(L.latLngBounds(shown.map((k) => k.coords)), { padding: [28, 28], maxZoom: 12 });
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

  const railBtn = 'ui-btn ui-btn--secondary ui-btn--small no-print';

  return (
    <div className="dir">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
        {/* ---- Left pane: header, search, filters, trip access, results ---- */}
        <div className="space-y-4 lg:sticky lg:top-[76px] lg:max-h-[calc(100dvh-96px)] lg:overflow-y-auto lg:pb-2 lg:pr-1">
          <header>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#a77529]">
              {SITE_COPY.map.eyebrow}
            </p>
            {/* ! beats the unlayered legacy h1 rule in base.css */}
            <h1 className="ui-heading mt-1 text-[30px]! leading-[36px]! font-semibold text-[#922e0d]!">
              {SITE_COPY.map.title}
            </h1>
            <p className="mt-1.5 text-[14px] leading-[22px] text-[#74716b]" aria-live="polite">
              {geoMessage || resultCount}
            </p>
            <p className="mt-1 text-[14px] leading-[22px] text-[#74716b]">
              {SITE_COPY.progressScope} Visited desams carry a gold ring.
            </p>
          </header>

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

          {/* Mobile-only workspace controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex gap-2" role="group" aria-label="Map or list view">
              <button type="button" className="ui-pill" aria-pressed={mobileView === 'map'} onClick={() => setMobileView('map')}>
                Map
              </button>
              <button type="button" className="ui-pill" aria-pressed={mobileView === 'list'} onClick={() => setMobileView('list')}>
                List
              </button>
            </div>
            <button
              type="button"
              className="ui-pill"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((v) => !v)}
            >
              Filters
            </button>
          </div>

          {/* Filters disclosure — collapsed on mobile, always open on desktop */}
          <div className={`flex-col gap-4 ${filtersOpen ? 'flex' : 'hidden'} lg:flex`}>
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Showing">
              <button
                type="button"
                aria-pressed={scope === 'all'}
                onClick={() => setScope('all')}
                className="ui-pill"
              >
                All ({scopeCounts.all})
              </button>
              <button
                type="button"
                aria-pressed={scope === 'visited'}
                onClick={() => setScope(scope === 'visited' ? 'all' : 'visited')}
                className="ui-pill"
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
                className="ui-pill"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 21V4m0 1h12l-2.5 3.5L17 12H5" />
                </svg>
                In trip ({scopeCounts.trip})
              </button>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button type="button" onClick={locate} className="ui-btn ui-btn--secondary ui-btn--small">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Show my location</span>
              </button>
              {me ? (
                <button
                  type="button"
                  onClick={() => setMe(null)}
                  title="Clear my location marker"
                  aria-label="Clear my location"
                  className="ui-btn ui-btn--secondary ui-btn--small"
                >
                  <Crosshair className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
              <button type="button" onClick={resetFilters} className="ui-tertiary text-[13px]">
                Reset filters
              </button>
            </div>
          </div>

          {/* Trip access — a compact outlined action, not a dominating block */}
          <button
            type="button"
            onClick={() => setPlannerOpen(true)}
            aria-haspopup="dialog"
            aria-label={`Trip planner — ${stops.length} ${stops.length === 1 ? 'stop' : 'stops'}`}
            className="ui-btn ui-btn--secondary"
          >
            <RouteIcon className="h-4 w-4" aria-hidden="true" />
            <span>Trip planner</span>
            <span className="inline-flex min-w-[24px] items-center justify-center rounded-full bg-[#922e0d] px-1.5 text-[12px] font-bold leading-[20px] text-[#FFFDF7] tabular-nums">
              {stops.length}
            </span>
          </button>

          {/* Result list — the pane's temple results (accessible fallback
              when tiles fail; switchable with the map on mobile) */}
          <section
            aria-label="Temples in view"
            className={mobileView === 'list' ? 'block' : 'hidden lg:block'}
          >
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="ui-heading m-0 text-[22px] leading-[30px] font-semibold text-[#922e0d]">
                Temples in view
              </h2>
              <span className="text-[14px] font-medium text-[#74716b]">{cardList.length} results</span>
            </div>
            {cardList.length > 0 ? (
              <ul className="space-y-3">
                {cardList.map(({ kshetram: k, km }) => (
                  <ResultRow
                    key={k.id}
                    kshetram={k}
                    km={km}
                    mapApi={mapApi}
                    selected={selectedId === k.id}
                    onSelect={focusTemple}
                  />
                ))}
              </ul>
            ) : (
              <EmptyState
                title="No temples match the current filters"
                message="Try a different search term or region — or reset the filters to see all plotted temples."
                action={(
                  <button type="button" onClick={resetFilters} className="ui-btn ui-btn--secondary">
                    Reset filters
                  </button>
                )}
              />
            )}
            {me ? (
              <p className="mt-2.5 text-[14px] italic leading-[22px] text-[#74716b]">Distances are straight-line and approximate.</p>
            ) : null}
          </section>
        </div>

        {/* ---- Map frame (isolate keeps Leaflet pane z-indexes inside) ---- */}
        <div
          className={`relative isolate rounded-2xl overflow-hidden border border-[#e8cf9f] shadow-xs h-[420px] sm:h-[520px] lg:h-[680px] bg-[#F6EBD6] ${
            mobileView === 'map' ? '' : 'hidden lg:block'
          }`}
        >
          {!mapApi ? (
            <p className="absolute inset-x-0 top-3 z-[500] mx-auto w-fit rounded-full bg-[#FFFDF7]/95 px-4 py-1.5 text-[14px] font-medium text-[#74716b] shadow-xs" role="status">
              Loading map…
            </p>
          ) : null}
          {tileError ? (
            <p className="absolute inset-x-3 top-3 z-[500] rounded-xl border border-[#e8cf9f] bg-[#FFFDF7] px-4 py-2.5 text-[14px] leading-[22px] text-[#333942] shadow-md" role="alert">
              Map tiles could not load — the temple list in the pane remains fully usable.
            </p>
          ) : null}
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
              eventHandlers={{ tileerror: () => setTileError(true) }}
            />
            {scope === 'trip' && routePoints.length > 1 ? (
              <Polyline
                positions={routePoints.map((k) => k.coords)}
                pathOptions={{ color: '#922e0d', weight: 2.5, dashArray: '6 6', opacity: 0.8 }}
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
          {/* Fit results bounds the CURRENT filtered set; Reset filters (pane)
              is the distinct control that restores all temples */}
          <button
            type="button"
            onClick={fitResults}
            className="absolute right-3 top-3 z-[500] inline-flex items-center gap-2 rounded-lg bg-[#FFFDF7] px-3.5 py-2 text-[13px] font-semibold text-[#333942] shadow-md transition-colors hover:bg-[#fbf0dc]"
          >
            Fit results
          </button>
          <span className="absolute right-3 top-[52px] z-[500] rounded-full bg-[#571F00]/85 px-3 py-1 text-[12px] font-semibold text-[#FFFDF7] shadow-xs backdrop-blur-xs pointer-events-none">
            {resultCount}
          </span>
          <div className="absolute bottom-3 left-3 z-[500] flex items-center gap-4 rounded-lg bg-[#FFFDF7]/95 px-3.5 py-2 text-[13px] font-medium text-[#333942] shadow-md">
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
          </div>
        </div>
      </div>

      {/* Region-color legend card — colors stay inside the visualization */}
      <div className="mt-6 rounded-2xl border border-[#e8cf9f] bg-[#FFFDF7] p-4 sm:p-5 shadow-xs">
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
                <Link className="ui-btn ui-btn--primary" to="/kshetrams">Browse desams</Link>
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
              <p className="mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-[#e8cf9f] bg-[#fbf0dc] px-4 py-3 text-[14px] leading-[22px] text-[#333942]" role="status">
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
              <div className="mt-5 rounded-2xl border border-[#e8cf9f] bg-[#FFFDF7] p-4 sm:p-6 shadow-xs">
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
        <section className="rounded-2xl border border-[#e8cf9f] bg-[#FFFDF7] p-4 sm:p-6 shadow-xs" key={region}>
          <div className="mb-2 flex items-center gap-3 border-b border-[#f0e3c6] pb-3">
            <h3 className="ui-heading m-0 text-xl font-semibold text-[#922e0d]">{region}</h3>
            <span className="rounded-full border border-[#e8cf9f] bg-[#fbf0dc] px-2 py-0.5 text-[12px] font-bold text-[#96731F]">
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
          <span className="h-4 w-px bg-[#e8cf9f]" />
          <span>↓ {legKm} km</span>
          <span className="h-4 w-px bg-[#e8cf9f]" />
        </li>
      ) : null}
      <li className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[#f0e3c6] py-3 last:border-b-0">
        <span className="trip-index" aria-hidden="true">{index}</span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-medium text-[#96731F]" lang="ta">{kshetram.tamilName}</span>
          <Link to={`/kshetram/${kshetram.id}`} className="ui-heading text-lg font-semibold text-[#922e0d] hover:underline">
            {kshetram.name}
          </Link>
          <span className="block text-[14px] leading-[22px] text-[#74716b]">{kshetram.place} · {kshetram.state}</span>
        </span>
        <span className="flex items-center gap-2 no-print">
          <button
            type="button"
            aria-pressed={visited}
            onClick={() => toggleVisited(kshetram.id)}
            className={`ui-btn ui-btn--secondary ui-btn--small ${visited ? 'is-visited' : ''}`}
            style={visited ? { background: '#fbf0dc', borderColor: '#a77529', color: '#922e0d' } : undefined}
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
