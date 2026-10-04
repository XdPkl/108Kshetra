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
  Rectangle: () => null,
}));

// The atlas matrix mounts ~108 cards; without this stub each photo-less
// card fires a real Wikipedia fetch (network-dependent, slow on CI).
vi.mock('../../utils/wikiImage.js', () => ({
  fetchWikiImage: vi.fn(() => Promise.resolve({ src: null, credit: null })),
  getCachedWikiImage: vi.fn(() => null),
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

/** PO round 10: the trip planner lives in a modal opened by the big
 * left-column button ("My Yatra — Trip Planner"). */
const openPlanner = async (user) => {
  await user.click(screen.getByRole('button', { name: /my trip/i }));
  return screen.getByRole('dialog', { name: /my yatra/i });
};

describe('Trip planner on the merged Yatra Atlas (UT-TRP-02/03, FR-80/81)', () => {
  it('shows the guiding empty state in the planner modal', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    const dialog = await openPlanner(user);
    expect(within(dialog).getByText(/your yatra starts here/i)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: /explore temples/i })).toHaveAttribute('href', '/kshetrams');
    // the "Open map" escape hatch is gone — the atlas IS the map now
    expect(screen.queryByText(/open map/i)).not.toBeInTheDocument();
    // Escape closes the modal
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('lists stops grouped by region with remove actions, reflecting live changes', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('uthamar-kovil');
    renderAt('/map', <MapPage />);
    const dialog = await openPlanner(user);
    expect(within(dialog).getByText(metaMatching(/2 stops/))).toBeInTheDocument();
    expect(within(dialog).getByRole('heading', { name: /chola nadu/i })).toBeInTheDocument();
    await user.click(within(dialog).getAllByRole('button', { name: /remove/i })[0]);
    expect(within(dialog).getByText(metaMatching(/1 stop ·/))).toBeInTheDocument();
    // removing inside the modal also updates the opener badge on the page
    expect(screen.getByRole('button', { name: /My trip — 1 stop/i })).toBeInTheDocument();
  });

  it('orders the route nearest-first and clears after confirmation', async () => {
    const user = userEvent.setup();
    addToTrip('srirangam');
    addToTrip('tirupati');
    addToTrip('uthamar-kovil');
    renderAt('/map', <MapPage />);
    const dialog = await openPlanner(user);
    await user.click(within(dialog).getByRole('button', { name: /order my route/i }));
    expect(within(dialog).getByText(/nearest-first/i)).toBeInTheDocument();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    await user.click(within(dialog).getByRole('button', { name: /^clear$/i }));
    expect(await within(dialog).findByText(/your yatra starts here/i)).toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('reflects trip adds from the page matrix inside the planner modal (PO round 10)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    // the opener badge counts 0 stops on a fresh atlas
    expect(screen.getByRole('button', { name: /My trip — 0 stops/i })).toBeInTheDocument();
    // add a temple from a matrix card on the page…
    await user.click(screen.getAllByRole('button', { name: /add to trip/i })[0]);
    expect(screen.getByRole('button', { name: /My trip — 1 stop/i })).toBeInTheDocument();
    // …and the modal shows it without any reload
    const dialog = await openPlanner(user);
    expect(within(dialog).getByText(metaMatching(/1 stop ·/))).toBeInTheDocument();
  });

  it('restores a trip from a shared ?t= link, auto-opening the planner (FR-81)', async () => {
    renderAt('/map?t=srirangam,tirupati', <MapPage />);
    const dialog = await screen.findByRole('dialog', { name: /my yatra/i });
    expect(within(dialog).getByText(/trip loaded from a shared link/i)).toBeInTheDocument();
    expect(within(dialog).getByText(metaMatching(/2 stops/))).toBeInTheDocument();
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
    const dialog = await openPlanner(user);
    expect(within(dialog).getByText(metaMatching(/1 stop/))).toBeInTheDocument();
    expect(screen.queryByTestId('map-polyline')).not.toBeInTheDocument();
  });
});

describe('MapPage (UT-MAP-01..03, FR-76..78)', () => {
  it('renders the map frame with markers for every plotted desam and a legend', () => {
    renderAt('/map', <MapPage />);
    expect(screen.getByRole('heading', { name: /plan your yatra/i })).toBeInTheDocument();
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
    await user.click(screen.getByRole('button', { name: /^my location$/i }));
    expect(screen.getByText(/location is not supported/i)).toBeInTheDocument();
  });

  it('lists temple cards without distances, then fills distances after locating (PO 2026-09-30)', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    // The matrix below the map lists every plotted desam BEFORE any location
    // is shared — cards without the "km away" line
    const matrix = screen.getByRole('region', { name: /temples in view/i });
    expect(within(matrix).getAllByRole('link', { name: /view temple/i }).length).toBeGreaterThan(100);
    expect(within(matrix).queryByText(/km away/)).not.toBeInTheDocument();

    Object.defineProperty(navigator, 'geolocation', {
      value: { getCurrentPosition: (ok) => ok({ coords: { latitude: 10.8624, longitude: 78.6901 } }) },
      configurable: true,
    });
    await user.click(screen.getByRole('button', { name: /^my location$/i }));
    // Same matrix now carries the straight-line distances, nearest first
    expect((await within(matrix).findAllByText(/km away/)).length).toBeGreaterThan(100);
    delete navigator.geolocation;
  }, 15_000);

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


describe('MapPage workspace (round-23)', () => {
  it('lists every temple in the results grid below the map (round 27)', () => {
    renderAt('/map', <MapPage />);
    // no Map/List switch — the grid renders on every viewport
    expect(screen.queryByRole('button', { name: 'List' })).not.toBeInTheDocument();
    expect(screen.getByRole('region', { name: /temples in view/i })).toBeInTheDocument();
    // all plotted temples are listed; each card carries the explicit
    // "Focus on map" action beside the shared tiers
    expect(screen.getAllByRole('button', { name: /focus on map/i }).length).toBeGreaterThan(100);
    expect(screen.getAllByRole('link', { name: /view temple/i }).length).toBeGreaterThan(100);
  });

  it('keeps the map controls inside the filter panel on narrow screens', () => {
    // matchMedia is unavailable in jsdom (desktop default); simulate mobile
    window.matchMedia = (q) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} });
    try {
      renderAt('/map', <MapPage />);
      expect(screen.getByRole('button', { name: /^my location$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /fit results/i })).toBeInTheDocument();
      expect(document.querySelector('.absolute.right-3.top-3')).toBeNull();
    } finally {
      delete window.matchMedia;
    }
  });

  it('shows Reset filters only while a filter is active and restores all temples', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    expect(screen.getByRole('button', { name: /fit results/i })).toBeInTheDocument();
    // nothing active yet — the reset action is hidden
    expect(screen.queryByRole('button', { name: /reset filters/i })).not.toBeInTheDocument();
    await user.type(screen.getByLabelText(/search kshetrams/i), 'kanchipuram');
    const narrowed = screen.getAllByTestId('map-marker').length;
    expect(narrowed).toBeLessThan(106);
    await user.click(screen.getByRole('button', { name: /reset filters/i }));
    expect(screen.getAllByTestId('map-marker').length).toBe(106);
    expect(screen.getByLabelText(/search kshetrams/i)).toHaveValue('');
    expect(screen.queryByRole('button', { name: /reset filters/i })).not.toBeInTheDocument();
  });

  it('synchronizes a selected result with its marker highlight', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    await user.click(screen.getAllByRole('button', { name: /focus .* on the map/i })[0]);
    // the selected row is outlined (selected styling applied)
    const selected = [...document.querySelectorAll('li')].find((el) => el.className.includes('ring-1'));
    expect(selected).not.toBeNull();
  });

  it('renders the Fit-results control as a safe no-op without a live map', async () => {
    const user = userEvent.setup();
    renderAt('/map', <MapPage />);
    await user.click(screen.getByRole('button', { name: /fit results/i }));
    expect(screen.getByRole('button', { name: /fit results/i })).toBeInTheDocument();
  });
});

describe('AboutPage (UT-ABT-01, FR-87)', () => {
  it('renders the option-1 hero, the six-link section nav and the purpose rows', () => {
    renderAt('/about', <AboutPage />);
    expect(screen.getByRole('heading', { name: /sacred places\. meaningful journeys\./i })).toBeInTheDocument();
    expect(screen.getByText(/about kshetra tours/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /browse the archive/i })).toHaveAttribute('href', '/kshetrams');
    // the section nav preserves the deep-linked ids in reading order
    const nav = screen.getByRole('navigation', { name: /about sections/i });
    const navLinks = within(nav).getAllByRole('link');
    expect(navLinks).toHaveLength(6);
    expect(navLinks.map((l) => l.getAttribute('href'))).toEqual([
      '#archive', '#guided-yatras', '#circuits', '#ceo-leadership', '#contact-desk', '#sanctum-etiquette',
    ]);
    // purpose rows derive from the dataset; the archive explanation survives
    expect(screen.getByRole('heading', { name: /explore the sacred archive/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /travel with devotional context/i })).toBeInTheDocument();
    expect(screen.getByText(/four-thousand-verse Tamil Veda/i)).toBeInTheDocument();
    expect(screen.getByText(/where a detail is not yet documented/i)).toBeInTheDocument();
    // contact values render verbatim; no placeholder markers leak
    expect(screen.getByText(/contact@kshetratours\.org/i)).toBeInTheDocument();
    expect(screen.queryByText(/\[to be provided\]/i)).not.toBeInTheDocument();
  });

  it('shows the first circuit row and reveals all six via the explore action', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    // ordinals are stripped from the dataset titles
    expect(screen.getByRole('heading', { name: 'Chola Nadu Heritage Yatra' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /nadu nadu mini yatra/i })).not.toBeInTheDocument();
    const expand = screen.getByRole('button', { name: /explore all regional circuits/i });
    expect(expand).toHaveAttribute('aria-expanded', 'false');
    await user.click(expand);
    expect(expand).toHaveAttribute('aria-expanded', 'true');
    const inquires = screen.getAllByRole('button', { name: /ask about this yatra/i });
    expect(inquires).toHaveLength(6);
    const regionLinks = screen.getAllByRole('link', { name: /view temples/i });
    expect(regionLinks).toHaveLength(6);
    expect(regionLinks[0]).toHaveAttribute('href', '/kshetrams?region=Chola%20Nadu');
    expect(regionLinks[5]).toHaveAttribute('href', '/kshetrams?region=Nadu%20Nadu');
    // dataset values verbatim (shrines / duration / base) + the duration caution
    expect(screen.getByText(/40 Divya Desams/)).toBeInTheDocument();
    expect(screen.getByText(/kumbakonam & srirangam \(trichy\)/i)).toBeInTheDocument();
    expect(screen.getByText(/may be operated as separate subcircuit runs/i)).toBeInTheDocument();
  });

  it('renders the founder desk with the full biography behind a disclosure', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    expect(screen.getByRole('heading', { name: /ram gopalan/i })).toBeInTheDocument();
    expect(screen.getByText(/founder & chief executive officer/i)).toBeInTheDocument();
    expect(screen.getByText(/a tradition of service/i)).toBeInTheDocument();
    // concise biography + quotation visible; verified pillars kept, folded away
    expect(screen.getByText(/ram gopalan founded kshetra tours/i)).toBeInTheDocument();
    expect(screen.getByText(/our sacred divya desams are not mere destinations/i)).toBeInTheDocument();
    expect(within(screen.getByText(/read the full biography/i).closest('details'))
      .getByText(/106 divya desams completed/i)).toBeInTheDocument();
    await user.click(screen.getByText(/read the full biography/i));
    expect(screen.getByText(/under his leadership/i)).toBeInTheDocument();
    expect(screen.getByText(/#315, creations manchester/i)).toBeInTheDocument();
    expect(screen.getAllByText(/yatra@kshetratours\.com/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('button', { name: /inquire us/i })).toBeInTheDocument();
  });

  it('presents sanctum etiquette and parayanam as accordions, guidance preserved', () => {
    renderAt('/about', <AboutPage />);
    expect(screen.getByRole('heading', { name: /temple sanctum etiquette/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /divya prabandham parayanam/i })).toBeInTheDocument();
    // closed accordions keep the guidance (and the Tamil) in the document
    expect(screen.getByText(/dhoti and angavastram/i)).toBeInTheDocument();
    expect(screen.getByText(/பல்லாண்டு/)).toBeInTheDocument();
  });

  it('opens the inquiry modal from a circuit, submits, and shows the booking reference', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    await user.click(screen.getAllByRole('button', { name: /ask about this yatra/i })[0]);
    const dialog = screen.getByRole('dialog', { name: /request yatra schedule/i });
    expect(within(dialog).getByLabelText(/devotee \/ pilgrim name/i)).toBeInTheDocument();
    await user.type(within(dialog).getByLabelText(/devotee \/ pilgrim name/i), 'Ramanuja Dasa');
    await user.type(within(dialog).getByLabelText(/phone \/ whatsapp/i), '+91 98765 43210');
    await user.type(within(dialog).getByLabelText(/email address/i), 'devotee@example.com');
    await user.click(within(dialog).getByRole('button', { name: /submit schedule inquiry/i }));
    expect(await within(dialog).findByText(/inquiry received/i)).toBeInTheDocument();
    expect(within(dialog).getByText(/YATRA-\d{4}/)).toBeInTheDocument();
    expect(within(dialog).getByText(/chola nadu heritage yatra/i)).toBeInTheDocument();
  });

  it('blocks submission without a name or a contact method; labels match the rule (round 29)', async () => {
    const user = userEvent.setup();
    renderAt('/about', <AboutPage />);
    await user.click(screen.getAllByRole('button', { name: /ask about this yatra/i })[0]);
    const dialog = screen.getByRole('dialog', { name: /request yatra schedule/i });
    // only the name carries the asterisk; the either/or hint stays on the fields
    expect(within(dialog).getByText('Devotee / Pilgrim Name *')).toBeInTheDocument();
    expect(within(dialog).queryByText('Phone / WhatsApp *')).not.toBeInTheDocument();
    expect(within(dialog).queryByText('Email Address *')).not.toBeInTheDocument();
    // empty name → inline error, entered values preserved
    await user.type(within(dialog).getByLabelText(/phone \/ whatsapp/i), '+91 98765 43210');
    await user.click(within(dialog).getByRole('button', { name: /submit schedule inquiry/i }));
    expect(within(dialog).getByRole('alert')).toHaveTextContent(/please share your name/i);
    expect(within(dialog).getByLabelText(/phone \/ whatsapp/i)).toHaveValue('+91 98765 43210');
    // name present but no contact method → the shared rule fires
    await user.type(within(dialog).getByLabelText(/devotee \/ pilgrim name/i), 'Ramanuja Dasa');
    await user.clear(within(dialog).getByLabelText(/phone \/ whatsapp/i));
    await user.click(within(dialog).getByRole('button', { name: /submit schedule inquiry/i }));
    expect(within(dialog).getByRole('alert')).toHaveTextContent(/share at least one contact method/i);
    expect(within(dialog).queryByText(/inquiry received/i)).not.toBeInTheDocument();
    // one method unblocks the confirmed-delivery success state
    await user.type(within(dialog).getByLabelText(/phone \/ whatsapp/i), '+91 98765 43210');
    await user.click(within(dialog).getByRole('button', { name: /submit schedule inquiry/i }));
    expect(await within(dialog).findByText(/inquiry received/i)).toBeInTheDocument();
  });
});
