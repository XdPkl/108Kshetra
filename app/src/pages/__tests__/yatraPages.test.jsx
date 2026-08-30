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
  Popup: ({ children }) => <div>{children}</div>,
}));

import MapPage from '../../pages/MapPage.jsx';
import TripPage from '../../pages/TripPage.jsx';
import AboutPage from '../../pages/AboutPage.jsx';
import MiniMapInner from '../../components/MiniMapInner.jsx';
import { resetVisited } from '../../state/visited.js';
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

describe('TripPage (UT-TRP-02/03, FR-80/81)', () => {
  it('shows the guiding empty state', () => {
    renderAt('/trip', <TripPage />);
    expect(screen.getByText(/your trip is empty/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse desams/i })).toHaveAttribute('href', '/kshetrams');
    expect(screen.getByRole('link', { name: /open map/i })).toHaveAttribute('href', '/map');
  });

  it('lists stops grouped by region with remove actions', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('uthamar-kovil');
    renderAt('/trip', <TripPage />);
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
    renderAt('/trip', <TripPage />);
    await user.click(screen.getByRole('button', { name: /order my route/i }));
    expect(screen.getByText(/nearest-first/i)).toBeInTheDocument();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    await user.click(screen.getByRole('button', { name: /^clear$/i }));
    expect(await screen.findByText(/your trip is empty/i)).toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('restores a trip from a shared ?t= link (FR-81)', async () => {
    renderAt('/trip?t=srirangam,tirupati', <TripPage />);
    expect(await screen.findByText(/trip loaded from a shared link/i)).toBeInTheDocument();
    expect(screen.getByText(metaMatching(/2 stops/))).toBeInTheDocument();
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

  it('filters markers through region chips (FR-78)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    const before = screen.getAllByTestId('map-marker').length;
    const group = screen.getByRole('group', { name: /filter by region/i });
    const chip = within(group).getAllByRole('button')[0];
    const chipLabel = chip.textContent;
    await user.click(chip);
    const after = screen.getAllByTestId('map-marker').length;
    expect(after).toBeLessThan(before);
    expect(after).toBeGreaterThan(0);
    expect(screen.getAllByText(chipLabel).length).toBeGreaterThanOrEqual(1);
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
  it('renders site, tours and contact sections with pending markers', () => {
    renderAt('/about', <AboutPage />);
    expect(screen.getByRole('heading', { name: /about us — kshetra tours/i })).toBeInTheDocument();
    expect(screen.getByText(/about this site/i)).toBeInTheDocument();
    expect(screen.getAllByText(/\[to be provided\]/i).length).toBeGreaterThanOrEqual(4);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
