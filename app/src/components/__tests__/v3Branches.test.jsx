/**
 * Branch-coverage tests for the UXD v3.0 zip-parity components (rollout
 * close-out): conditional paths of the tracker, section nav, header shell,
 * browse filters, map extras, about desk/modal, and the small shared pieces.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react-leaflet', () => ({
  MapContainer: ({ children, 'aria-label': label }) => (
    <div data-testid="map-container" aria-label={label}>{children}</div>
  ),
  TileLayer: () => null,
  CircleMarker: ({ children }) => <div data-testid="map-marker">{children}</div>,
  Popup: ({ children }) => <div>{children}</div>,
  Tooltip: ({ children }) => <div data-testid="map-tooltip">{children}</div>,
  Polyline: () => <div data-testid="map-polyline" />,
}));

import YatraProgressTracker from '../home/YatraProgressTracker.jsx';
import SectionNav from '../detail/SectionNav.jsx';
import Header from '../Header.jsx';
import EmptyState from '../EmptyState.jsx';
import PageActions from '../PageActions.jsx';
import SaintGlyph from '../saint/SaintGlyph.jsx';
import VisitInfoSection from '../detail/VisitInfoSection.jsx';
import BrowsePage from '../../pages/BrowsePage.jsx';
import MapPage from '../../pages/MapPage.jsx';
import AboutPage from '../../pages/AboutPage.jsx';
import { resetVisited, markVisited } from '../../state/visited.js';
import { clearTrip, addToTrip } from '../../state/trip.js';
import { getAllKshetrams } from '../../data/api.js';

const renderAt = (url, node) => render(<MemoryRouter initialEntries={[url]}>{node}</MemoryRouter>);

/** The Browse result-count line is multi-node JSX — match on its class. */
const countText = (pattern) => screen.getAllByText(
  (content, el) => el?.classList?.contains('result-count') && pattern.test(el.textContent),
)[0];

beforeEach(() => {
  window.localStorage.clear();
  resetVisited();
  clearTrip();
  vi.restoreAllMocks();
});

describe('YatraProgressTracker (2026-09 refresh)', () => {
  it('keeps an empty bar at zero and confirms before reset', async () => {
    const user = userEvent.setup();
    const { rerender } = renderAt('/', <YatraProgressTracker total={108} />);
    expect(screen.queryByText('0%')).not.toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    await user.click(screen.getByRole('button', { name: /reset progress/i }));
    expect(confirmSpy).toHaveBeenCalledTimes(1);
    markVisited('srirangam', true);
    markVisited('tirupati', true);
    markVisited('srivilliputhur', true);
    rerender(
      <MemoryRouter initialEntries={['/']}>
        <YatraProgressTracker total={108} />
      </MemoryRouter>,
    );
    // 2026-09 refresh: the slim bar carries the count via the progressbar
    // contract (no inline percentage label)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '3');
    confirmSpy.mockReturnValue(true);
    await user.click(screen.getByRole('button', { name: /reset progress/i }));
    rerender(
      <MemoryRouter initialEntries={['/']}>
        <YatraProgressTracker total={108} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', '0 of 108 kshetrams visited');
  });

  it('scopes the yatra to the 106 earthly kshetrams, ignoring celestial marks (PO 2026-09-25)', () => {
    markVisited('srirangam', true);
    markVisited('thiruparkadal', true); // celestial abode — beyond earthly travel
    const earthlyIds = new Set(
      getAllKshetrams().filter((k) => k.region !== 'Celestial').map((k) => k.id),
    );
    expect(earthlyIds.size).toBe(106);
    renderAt('/', <YatraProgressTracker total={earthlyIds.size} eligibleIds={earthlyIds} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', '1 of 106 kshetrams visited');
  });
});

describe('SectionNav (UXD v3.0)', () => {
  it('activates the last section at the bottom of the page', () => {
    render(
      <SectionNav sections={[
        { id: 'alpha', label: 'Alpha' }, { id: 'beta', label: 'Beta' }, { id: 'gamma', label: 'Gamma' },
      ]} />,
    );
    const chips = screen.getAllByRole('link');
    expect(chips[0]).toHaveAttribute('aria-current', 'true');
    fireEvent.scroll(window);
    expect(chips[2]).toHaveAttribute('aria-current', 'true');
  });
});

describe('Header shell branches (UXD v3.0)', () => {
  it('shows the darshan counter and trip badge only when non-zero', () => {
    const empty = render(<MemoryRouter><Header /></MemoryRouter>);
    expect(empty.queryByText(/darshans/i)).not.toBeInTheDocument();
    empty.unmount();
    markVisited('srirangam', true);
    markVisited('tirupati', true);
    addToTrip('srirangam');
    addToTrip('tirupati');
    addToTrip('srivilliputhur');
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getAllByText((_, el) => /2\/108 darshans/i.test(el?.textContent ?? '')).length)
      .toBeGreaterThan(0);
    expect(screen.getAllByText('3').length).toBeGreaterThan(0);
  });

  it('opens the region mega-dropdown and the mobile drawer, Escape closes them', () => {
    // jsdom-safe: hover-driven dropdowns toggle via fireEvent (userEvent's
    // pointer sequence re-trips the mouse-leave handler)
    render(<MemoryRouter><Header /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /toggle regional temples dropdown/i }));
    expect(screen.getByText('Browse All 108 Kshetras')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /chola nadu/i }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText('Browse All 108 Kshetras')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /toggle navigation menu/i }));
    expect(screen.getByText('Home Sanctuary')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText('Home Sanctuary')).not.toBeInTheDocument();
  });

  it('opens the Kshetra Tours dropdown with the desk and circuit rows', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', { name: /toggle kshetra tours menu/i }));
    expect(screen.getByText(/kshetra tours & pilgrimage trust/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /founder & ceo desk/i })).toHaveAttribute('href', '/about#ceo-leadership');
    expect(screen.getByRole('link', { name: /6 regional pilgrimage circuits/i })).toHaveAttribute('href', '/about#circuits');
  });
});

describe('Small shared pieces (UXD v3.0)', () => {
  it('EmptyState renders without an action', () => {
    render(<EmptyState title="Nothing" message="Try later" />);
    expect(screen.getByText('Nothing')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('SaintGlyph renders every glyph kind', () => {
    const { container } = render(
      <>
        <SaintGlyph kind="works" /><SaintGlyph kind="preservation" />
        <SaintGlyph kind="bhakti" /><SaintGlyph kind="desams" />
      </>,
    );
    expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(4);
  });

  it('PageActions prefers the Web Share sheet when available', async () => {
    const user = userEvent.setup();
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', { value: share, configurable: true });
    render(<PageActions />);
    await user.click(screen.getByRole('button', { name: /share/i }));
    expect(share).toHaveBeenCalled();
    expect(screen.queryByText(/link copied/i)).not.toBeInTheDocument();
    delete navigator.share;
  });
});

describe('VisitInfoSection branches (UXD v3.0)', () => {
  it('renders morning-only timings, road access and documented fallbacks', () => {
    render(
      <VisitInfoSection
        kshetram={{
          timings: { morning: ['06:00', '12:00'], notes: 'Note.' },
          access: { town: 'Town', road: 'By road' },
        }}
      />,
    );
    expect(screen.getByText(/morning 06:00 – 12:00/i)).toBeInTheDocument();
    expect(screen.queryByText(/evening/i)).not.toBeInTheDocument();
    expect(screen.getByText('By road')).toBeInTheDocument();
    expect(screen.getAllByText(/not yet documented yet\./i).length).toBeGreaterThanOrEqual(3);
  });
});

describe('BrowsePage status filters (UXD v3.0)', () => {
  // Each click re-renders up to 108 cards; CI's 2-core runners need >5s
  // (local ~1.3s), so these carry an explicit timeout (CI failure 334a6cd).
  it('narrows via the visited and trip scope pills and toggles a region pill off', async () => {
    const user = userEvent.setup({ delay: null });
    markVisited('srirangam', true);
    addToTrip('srirangam');
    addToTrip('tirupati');
    renderAt('/kshetrams', <BrowsePage />);
    await user.click(screen.getByRole('button', { name: /visited \(1\)/i }));
    expect(countText(/^1 kshetram$/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /all temples/i }));
    await user.click(screen.getByRole('button', { name: /in my trip \(2\)/i }));
    expect(countText(/^2 kshetrams$/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /all temples/i }));

    const group = screen.getByRole('group', { name: /quick filter by region/i });
    const chola = within(group).getByRole('button', { name: /chola nadu/i });
    await user.click(chola);
    expect(countText(/^40 kshetrams$/i)).toBeInTheDocument();
    await user.click(chola);
    expect(countText(/^108 kshetrams$/i)).toBeInTheDocument();
  }, 15_000);

  it('sorts Z–A and filters by deity form and azhwar', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams?azhwar=andal', <BrowsePage />);
    expect(countText(/^\d+ kshetrams?$/i)).not.toHaveTextContent('108 kshetrams');
    await user.click(screen.getByRole('button', { name: /more filters/i }));
    await user.selectOptions(screen.getByLabelText('Azhwar'), '');
    expect(countText(/^108 kshetrams$/i)).toBeInTheDocument();
    const deitySelect = screen.getByLabelText('Deity form');
    const firstValue = deitySelect.querySelector('option:nth-child(2)').value;
    await user.selectOptions(deitySelect, firstValue);
    expect(countText(/^\d+ kshetrams?$/i)).not.toHaveTextContent('108 kshetrams');
    await user.selectOptions(screen.getByLabelText('Sort by'), 'za');
    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    const desc = [...names].sort((a, b) => b.localeCompare(a));
    expect(names).toEqual(desc);
  }, 15_000);
});

describe('MapPage extras (UXD v3.0)', () => {
  it('shows the location card, nearest list and focus actions after locating', async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, 'geolocation', {
      value: { getCurrentPosition: (ok) => ok({ coords: { latitude: 10.8624, longitude: 78.6901 } }) },
      configurable: true,
    });
    renderAt('/map', <MapPage />);
    await user.click(screen.getByRole('button', { name: /show my location/i }));
    expect(await screen.findByText(/your darshan distances are live below/i)).toBeInTheDocument();
    expect(screen.getByText(/nearest divya desams from you/i)).toBeInTheDocument();
    await user.click(screen.getAllByRole('button', { name: /^focus$/i })[0]);
    await user.click(screen.getByRole('button', { name: /clear my location/i }));
    expect(screen.queryByText(/nearest divya desams from you/i)).not.toBeInTheDocument();
    delete navigator.geolocation;
  });
});

describe('AboutPage desk branches (UXD v3.0)', () => {
  it('sets and resets the CEO photo via the URL prompt', async () => {
    const user = userEvent.setup();
    // PO round 4: upload/URL controls are admin-gated — enable the flag
    localStorage.setItem('kshetra_admin', '1');
    const prompt = vi.spyOn(window, 'prompt').mockReturnValue('https://example.com/ceo.jpg');
    renderAt('/about', <AboutPage />);
    await user.click(screen.getByRole('button', { name: /^url$/i }));
    expect(prompt).toHaveBeenCalled();
    expect(screen.getByRole('img', { name: /ceo of kshetra tours/i })).toHaveAttribute('src', 'https://example.com/ceo.jpg');
    await user.click(screen.getByRole('button', { name: /reset photo/i }));
    expect(screen.queryByRole('img', { name: /ceo of kshetra tours/i })).not.toBeInTheDocument();
  });

  it('opens the modal from the CEO desk and closes with Escape', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    await user.click(screen.getByRole('button', { name: /inquire us/i }));
    const dialog = screen.getByRole('dialog', { name: /request yatra schedule/i });
    expect(within(dialog).getByDisplayValue(/executive office \/ ceo yatra consultation/i)).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens and dismisses the modal from the contact card', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    await user.click(screen.getByRole('button', { name: /request yatra schedule/i }));
    const dialog = screen.getByRole('dialog', { name: /request yatra schedule/i });
    await user.click(within(dialog).getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
