/**
 * Page tests for the Trip, Map and About pages (US-TRP-02/03, US-MAP-01..03,
 * US-ABT-01). react-leaflet is mocked so the Map page renders in jsdom.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react-leaflet', () => ({
  MapContainer: ({ children, 'aria-label': label }) => (
    <div data-testid="map-container" aria-label={label}>{children}</div>
  ),
  TileLayer: () => null,
  CircleMarker: ({ children }) => <div data-testid="map-marker">{children}</div>,
  Marker: ({ children }) => <div data-testid="map-marker">{children}</div>,
  Popup: ({ children }) => <div>{children}</div>,
  Tooltip: ({ children }) => <div data-testid="map-tooltip">{children}</div>,
  Polyline: () => <div data-testid="map-polyline" />,
}));

import MapPage from '../../pages/MapPage.jsx';
import AboutPage from '../../pages/AboutPage.jsx';
import MiniMapInner from '../../components/MiniMapInner.jsx';
import { resetVisited, markVisited } from '../../state/visited.js';
import { clearTrip, addToTrip } from '../../state/trip.js';

function renderAt(url, page) {
  return render(<MemoryRouter initialEntries={[url]}>{page}</MemoryRouter>);
}

beforeEach(() => {
  window.localStorage.clear();
  resetVisited();
  clearTrip();
});

const metaMatching = (pattern) => (content, el) =>
  el?.classList?.contains('trip-page__meta') && pattern.test(el.textContent);

describe('Trip planner on the merged Yatra Atlas (UT-TRP-02/03, FR-80/81)', () => {
  it('shows the guiding empty state in the trip section', () => {
    renderAt('/map', <MapPage />);
    expect(screen.getByText(/your trip is empty/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse desams/i })).toHaveAttribute('href', '/kshetrams');
    // the "Open map" escape hatch is gone — the atlas IS the map now
    expect(screen.queryByText(/open map/i)).not.toBeInTheDocument();
  });

  it('lists stops grouped by region with remove actions', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('uthamar-kovil');
    renderAt('/map', <MapPage />);
    expect(screen.getByText(metaMatching(/2 stops/))).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chola nadu/i })).toBeInTheDocument();
    await user.click(screen.getAllByRole('button', { name: /remove/i })[0]);
    expect(screen.getByText(metaMatching(/1 stop ·/))).toBeInTheDocument();
  });

  it('orders the route nearest-first and clears after confirmation', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('tirupati');
    addToTrip('uthamar-kovil');
    renderAt('/map', <MapPage />);
    await user.click(screen.getByRole('button', { name: /order my route/i }));
    expect(screen.getByText(/nearest-first/i)).toBeInTheDocument();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    await user.click(screen.getByRole('button', { name: /^clear$/i }));
    expect(await screen.findByText(/your trip is empty/i)).toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('restores a trip from a shared ?t= link (FR-81)', async () => {
    renderAt('/map?t=srirangam,tirupati', <MapPage />);
    expect(await screen.findByText(/trip loaded from a shared link/i)).toBeInTheDocument();
    expect(screen.getByText(metaMatching(/2 stops/))).toBeInTheDocument();
  });

  it('draws the route polyline with numbered tooltips in the In-trip scope (US-TRP-04)', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('tirupati');
    addToTrip('uthamar-kovil');
    renderAt('/map', <MapPage />);
    await user.click(screen.getByRole('button', { name: 'In trip (3)' }));
    expect(screen.getAllByTestId('map-marker')).toHaveLength(3);
    expect(screen.getByTestId('map-polyline')).toBeInTheDocument();
    const tooltips = screen.getAllByTestId('map-tooltip');
    expect(tooltips).toHaveLength(3);
    expect(tooltips.map((t) => t.textContent).join(' ')).toMatch(/^1\. .*2\. .*3\. /);
  });

  it('renders no route polyline for a celestial-only trip', async () => {
    const user = userEvent.setup();
    addToTrip('paramapadam');
    renderAt('/map', <MapPage />);
    // the celestial stop has no coords, so the plotted-trip count is 0
    await user.click(screen.getByRole('button', { name: 'In trip (0)' }));
    expect(screen.getByText(metaMatching(/1 stop/))).toBeInTheDocument();
    expect(screen.queryByTestId('map-polyline')).not.toBeInTheDocument();
  });
});

describe('MapPage (UT-MAP-01..03, FR-76..78)', () => {
  it('renders the map frame with markers for every plotted desam and a legend', () => {
    renderAt('/map', <MapPage />);
    expect(screen.getByRole('heading', { name: /map of the divya desams/i })).toBeInTheDocument();
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('map-marker').length).toBeGreaterThan(100);
    expect(screen.getAllByText('Chola Nadu').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/visited desams carry a gold ring/i)).toBeInTheDocument();
  });

  it('narrows markers through the region dropdown and the search box (FR-78, 2026-09-30 merge)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    const before = screen.getAllByTestId('map-marker').length;

    const select = screen.getByLabelText('Filter by region');
    await user.selectOptions(select, 'Chola Nadu');
    const afterRegion = screen.getAllByTestId('map-marker').length;
    expect(afterRegion).toBeLessThan(before);
    expect(afterRegion).toBeGreaterThan(0);

    await user.selectOptions(select, '');
    await user.type(screen.getByLabelText(/search kshetrams/i), 'kanchipuram');
    const afterSearch = screen.getAllByTestId('map-marker').length;
    expect(afterSearch).toBeLessThan(before);
    expect(afterSearch).toBeGreaterThan(0);
  });

  it('narrows markers through the All/Visited/In-trip scope pills (2026-09-30 refresh)', async () => {
    const user = userEvent.setup();
    markVisited('srirangam', true);
    addToTrip('tirupati');
    renderAt('/map', <MapPage />);
    const all = screen.getAllByTestId('map-marker').length;
    expect(screen.getByRole('button', { name: `All (${all})` })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Visited (1)' }));
    expect(screen.getAllByTestId('map-marker')).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: 'In trip (1)' }));
    expect(screen.getAllByTestId('map-marker')).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: `All (${all})` }));
    expect(screen.getAllByTestId('map-marker')).toHaveLength(all);
  });

  it('offers the Fit-all-temples control (2026-09-30 refresh)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    // with the react-leaflet mock there is no real map instance; the click
    // must be a safe no-op rather than a crash
    await user.click(screen.getByRole('button', { name: /fit all temples/i }));
    expect(screen.getByRole('button', { name: /fit all temples/i })).toBeInTheDocument();
  });

  it('shows a hover tooltip for every plotted marker (US-MAP-04)', () => {
    renderAt('/map', <MapPage />);
    const markers = screen.getAllByTestId('map-marker');
    const tooltips = screen.getAllByTestId('map-tooltip');
    expect(tooltips.length).toBe(markers.length);
    expect(tooltips.some((t) => /Srirangam/.test(t.textContent))).toBe(true);
    // nothing is marked visited yet, so no tooltip carries the visited note
    expect(tooltips.every((t) => !/visited/.test(t.textContent))).toBe(true);
  });

  it('handles missing geolocation gracefully (FR-78)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    await user.click(screen.getByRole('button', { name: /show my location/i }));
    expect(screen.getByText(/location is not supported/i)).toBeInTheDocument();
  });

  it('renders the lazy mini-map inside the mocked Leaflet frame (FR-82, NFR-11)', () => {
    render(
      <MemoryRouter>
        <MiniMapInner coords={[10.86, 78.69]} label="Srirangam" />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
    expect(screen.getByText(/Srirangam/)).toBeInTheDocument();
  });
});

describe('AboutPage (UT-ABT-01, FR-87)', () => {
  it('renders site, tours and contact sections from the approved PO content', () => {
    renderAt('/about', <AboutPage />);
    expect(screen.getByRole('heading', { name: /about us — kshetra tours/i })).toBeInTheDocument();
    expect(screen.getByText(/about this site/i)).toBeInTheDocument();
    // PO-approved mock content (docs/03-design/mockups/about.html)
    expect(screen.getByText(/kshetra insights/i)).toBeInTheDocument();
    expect(screen.getByText(/interactive yatra planner/i)).toBeInTheDocument();
    expect(screen.getByText(/regional circuit itineraries/i)).toBeInTheDocument();
    expect(screen.getByText(/contact@kshetratours\.org/i)).toBeInTheDocument();
    expect(screen.getByText(/email us/i)).toBeInTheDocument();
    expect(screen.queryByText(/\[to be provided\]/i)).not.toBeInTheDocument();
  });

  it('renders the CEO desk, 7 circuits and sanctum etiquette (UXD v3.0 Gate 11 addendum)', () => {
    renderAt('/about', <AboutPage />);
    // CEO desk — corrected PO content (2026-09-25 fix list)
    expect(screen.getByRole('heading', { name: /founder & chief executive officer/i })).toBeInTheDocument();
    expect(screen.getAllByText(/ram gopalan/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/yatra@kshetratours\.com/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/106 divya desams completed/i)).toBeInTheDocument();
    expect(screen.getByText(/1000\+ pilgrims guided/i)).toBeInTheDocument();
    expect(screen.getByText(/#315, creations manchester/i)).toBeInTheDocument();
    expect(screen.queryByText(/sampradaya yatra trustee/i)).not.toBeInTheDocument();
    // PO round 4: the celestial (Vinnulaga) circuit is removed — 6 remain
    expect(screen.getByRole('heading', { name: /popular divya desam pilgrimage circuits/i })).toBeInTheDocument();
    const inquires = screen.getAllByRole('button', { name: /inquire circuit/i });
    expect(inquires).toHaveLength(6);
    const regionLinks = screen.getAllByRole('link', { name: /view all .* temples/i });
    expect(regionLinks).toHaveLength(6);
    expect(regionLinks[0]).toHaveAttribute('href', '/kshetrams?region=Chola%20Nadu');
    expect(regionLinks[5]).toHaveAttribute('href', '/kshetrams?region=Nadu%20Nadu');
    // Etiquette cards
    expect(screen.getByRole('heading', { name: /sanctum etiquette & parayanam protocols/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /temple sanctum etiquette/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /divya prabandham parayanam/i })).toBeInTheDocument();
  });

  it('opens the inquiry modal from a circuit, submits, and shows the booking reference', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    await user.click(screen.getAllByRole('button', { name: /inquire circuit/i })[0]);
    const dialog = screen.getByRole('dialog', { name: /request yatra schedule/i });
    expect(within(dialog).getByLabelText(/devotee \/ pilgrim name/i)).toBeInTheDocument();
    await user.type(within(dialog).getByLabelText(/devotee \/ pilgrim name/i), 'Ramanuja Dasa');
    await user.type(within(dialog).getByLabelText(/phone \/ whatsapp/i), '+91 98765 43210');
    await user.type(within(dialog).getByLabelText(/email address/i), 'devotee@example.com');
    await user.click(within(dialog).getByRole('button', { name: /submit schedule inquiry/i }));
    expect(await within(dialog).findByText(/inquiry received/i)).toBeInTheDocument();
    expect(within(dialog).getByText(/YATRA-\d{4}/)).toBeInTheDocument();
    expect(within(dialog).getByText(/1\. chola nadu heritage yatra/i)).toBeInTheDocument();
  });
});
