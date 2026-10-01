/**
 * Page-level component tests rendered with a MemoryRouter.
 */
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';

// Render helper mounting the full App at a given URL.
function renderAt(url) {
  return render(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
}

describe('HomePage (UT-HOME-01..03)', () => {
  it('shows the three-line hero and featured kshetrams', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: /108 divya kshetrams/i })).toBeInTheDocument();
    // 2026-09 refresh: the invocation stack top-right renders the phrase once
    // (it had been fully removed in PO round 3; the approved mockup brings it
    // back as a decorative hero element)
    expect(screen.getAllByText('Nalayira Divya Prabandham')).toHaveLength(1);
    // The yatra tracker counts only the 106 earthly kshetrams (PO 2026-09-25);
    // the 2026-09 refresh exposes the count via the progressbar contract
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '0');
    expect(progressbar).toHaveAttribute('aria-label', '0 of 106 kshetrams visited');
    // 4 featured kshetram links
    expect(screen.getAllByRole('link', { name: /srirangam|tirumala|kanchipuram|srivilliputhur/i }).length)
      .toBeGreaterThanOrEqual(4);
  });

  it('offers navigation to Browse and the darshan strips', () => {
    renderAt('/');
    // 2026-09 refresh: the CTA label is "Explore Kshetrams" (PO request)
    expect(screen.getByRole('link', { name: /explore kshetrams/i })).toHaveAttribute('href', '/kshetrams');
    // PO request 2026-09-10: darshan strips replace the hero "Azhwars" CTA
    expect(screen.getByRole('link', { name: /azhwar darshan - featured/i })).toHaveAttribute('href', '/azhwars');
    expect(screen.getByRole('link', { name: /acharya darshan - featured/i })).toHaveAttribute('href', '/acharyas');
    // PO round 4: one row of 4 tiles per strip
    expect(screen.getAllByRole('link', { name: /poigai azhwar|bhoothathazhwar/i }).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('link', { name: /thirumazhisai|peyazhwar/i }).length).toBeGreaterThanOrEqual(2);
    expect(screen.queryAllByRole('link', { name: /nammazhwar|andal/i })).toHaveLength(0);
    expect(screen.getAllByRole('link', { name: /nathamuni|yamunacharya|ramanujacharya|pillai lokacharya/i }).length)
      .toBe(4);
    expect(screen.queryAllByRole('link', { name: /manavala/i })).toHaveLength(0);
    expect(screen.queryByRole('link', { name: /meet the azhwars/i })).not.toBeInTheDocument();
  });
});

describe('BrowsePage (UT-BRW-01..04)', () => {
  it('shows all 108 kshetrams with the result count', () => {
    renderAt('/kshetrams');
    expect(screen.getByText('108 kshetrams')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(108);
  });

  it('narrows results as the user types and updates the count (UT-BRW-02)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams');
    await user.type(screen.getByLabelText(/search kshetrams/i), 'kanchipuram');
    // scope to .result-count — the nav also carries an "108 Kshetrams" label
    await vi.waitFor(() => {
      expect(document.querySelector('.result-count').textContent).not.toBe('108 kshetrams');
    });
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('sorts kshetrams by name via the sort control (UXD v2)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams');
    await user.selectOptions(screen.getByLabelText('Sort by'), 'az');
    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });

  it('shows the empty state and restores all 108 after reset (UT-BRW-03/04)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams');
    await user.type(screen.getByLabelText(/search kshetrams/i), 'atlantis');
    expect(await screen.findByText(/no kshetrams found/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /clear all filters/i }));
    expect(await screen.findByText('108 kshetrams')).toBeInTheDocument();
  });

  it('filters by azhwar via the ?azhwar= query param (FR-41)', async () => {
    renderAt('/kshetrams?azhwar=andal');
    expect((await screen.findAllByRole('article')).length).toBeGreaterThan(0);
    expect(screen.queryByText('108 kshetrams')).not.toBeInTheDocument();
  });
});

describe('KshetramDetailPage (UT-DTL-01..04, V3 UT-DTL-14..17)', () => {
  // Round 16: the mock syncs the active tab to the URL hash — clear it so
  // each test starts on the Overview tab.
  beforeEach(() => {
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('renders the mock hero, Plan-your-visit card and the Overview tab by default (round 16)', () => {
    renderAt('/kshetram/srirangam');
    expect(screen.getByRole('heading', { level: 1, name: /srirangam/i })).toBeInTheDocument();
    expect(screen.getByText('Sri Ranganathaswamy Temple')).toBeInTheDocument();
    expect(screen.getByText(/Divya Desam 1 · Chola Nadu/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /plan your visit/i })).toBeInTheDocument();
    expect(screen.getAllByText(/06:15/).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /get directions/i })).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByRole('heading', { name: /about the temple/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /shrine at a glance/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /overview/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('renders every shrine-template section behind its tab (round 16 headings)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /deities/i }));
    expect(screen.getByRole('heading', { name: /deities & consorts/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Ranganathan \/ Periya Perumal/).length).toBeGreaterThan(0);
    await user.click(screen.getByRole('tab', { name: /history/i }));
    expect(screen.getByRole('heading', { name: /sthala puranam & history/i })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /mangalasasanam/i }));
    expect(screen.getByRole('heading', { name: /^mangalasasanam$/i })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /visit info/i }));
    expect(screen.getByRole('heading', { name: /plan your darshan/i })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /location/i }));
    expect(screen.getByRole('heading', { name: /find the temple/i })).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /media/i }));
    expect(screen.getByRole('heading', { name: /sacred features & resources/i })).toBeInTheDocument();
  });

  it('shows deity cells, sidebar timings and share/print actions', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    expect(screen.getAllByText('Moolavar').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Thaayar').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /print/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /distance from me/i })).toBeInTheDocument();
    // Urchavar lives in the Deities tab panel
    await user.click(screen.getByRole('tab', { name: /deities/i }));
    expect(screen.getAllByText('Urchavar').length).toBeGreaterThan(0);
  });

  it('renders a safe external map link in the Location tab', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /location/i }));
    const mapLink = screen.getByRole('link', { name: /view on google maps/i });
    expect(mapLink).toHaveAttribute('href', expect.stringContaining('https://www.google.com/maps/search/'));
    expect(mapLink).toHaveAttribute('target', '_blank');
    expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('lists nearby desams within 50 km with links (FR-63)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /location/i }));
    const nearby = screen.getByRole('heading', { name: /nearby divya desams/i });
    expect(nearby).toBeInTheDocument();
    const links = screen.getAllByRole('link', { name: /uthamar koil|uraiyur|thiruvellarai/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toHaveAttribute('href', expect.stringContaining('/kshetram/'));
  });

  it('shows template pasuram excerpts with word-by-word meaning and listen links (FR-64/65/83)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /mangalasasanam/i }));
    // Full template (PO sample): two representative excerpts
    expect(screen.getByRole('heading', { name: /Thondaradippodi Azhwar · Thirumaalai/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Word-by-word meaning/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('link', { name: /listen/i }).length).toBeGreaterThanOrEqual(2);
    // Legacy single-pasuram display still works where no template exists
    cleanup();
    window.history.replaceState(null, '', window.location.pathname);
    renderAt('/kshetram/thiruvekka');
    await user.click(screen.getByRole('tab', { name: /mangalasasanam/i }));
    expect(screen.getAllByText(/sonna vannam seitha/i).length).toBeGreaterThan(0);
  });

  it('shows the pasuram count on the Mangalasasanam tab only when documented', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /mangalasasanam/i }));
    expect(screen.getAllByText(/247 pasurams/i).length).toBeGreaterThan(0);
  });

  it('links the Explore-the-Azhwars list to the per-Azhwar detail pages', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('tab', { name: /mangalasasanam/i }));
    const listSection = screen.getByRole('heading', { name: /explore the azhwars/i }).closest('section');
    const links = [...listSection.querySelectorAll('a')];
    expect(links.length).toBeGreaterThanOrEqual(10);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^\/azhwar\/[a-z-]+$/);
    }
  });

  it('hides timings/nearby/distance and the earthly tabs for celestial desams', () => {
    renderAt('/kshetram/paramapadam');
    expect(screen.getAllByText(/celestial realm/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByRole('heading', { name: /temple timings/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /plan your visit/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /distance from me/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: /location/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: /visit info/i })).not.toBeInTheDocument();
  });

  it('shows the not-found state for an unknown id', () => {
    renderAt('/kshetram/atlantis');
    expect(screen.getByText(/this kshetram was not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to browse/i })).toHaveAttribute('href', '/kshetrams');
  });

  it('activates a tab from the URL hash and follows hashchange (round 16 deep links)', async () => {
    window.history.replaceState(null, '', '#location');
    renderAt('/kshetram/srirangam');
    expect(screen.getByRole('tab', { name: /location/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: /find the temple/i })).toBeInTheDocument();
    window.history.replaceState(null, '', '#media');
    window.dispatchEvent(new Event('hashchange'));
    expect(await screen.findByRole('heading', { name: /sacred features & resources/i })).toBeInTheDocument();
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('ignores hashes that are not kshetram tabs', () => {
    window.history.replaceState(null, '', '#nonsense');
    renderAt('/kshetram/srirangam');
    expect(screen.getByRole('tab', { name: /overview/i })).toHaveAttribute('aria-selected', 'true');
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('celestial desams ignore visit/location hashes', () => {
    window.history.replaceState(null, '', '#visit');
    renderAt('/kshetram/paramapadam');
    expect(screen.getByRole('tab', { name: /overview/i })).toHaveAttribute('aria-selected', 'true');
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('announces trip and visited toggles in the status toast (round 16)', async () => {
    const user = userEvent.setup();
    const { container } = renderAt('/kshetram/srirangam');
    await user.click(screen.getByRole('button', { name: /add to trip/i }));
    expect(container.querySelector('.status').textContent).toMatch(/added to trip — saved in this browser\./i);
    await user.click(screen.getByRole('button', { name: /remove from trip/i }));
    expect(container.querySelector('.status').textContent).toMatch(/removed from trip/i);
    await user.click(screen.getByRole('button', { name: /mark as visited/i }));
    expect(container.querySelector('.status').textContent).toMatch(/^visited — saved in this browser\./i);
    await user.click(screen.getByRole('button', { name: /✓ visited/i }));
    expect(container.querySelector('.status').textContent).toMatch(/removed from visited/i);
  });

  it('supports Home/End roving focus on the tablist (round 16)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/srirangam');
    const overviewTab = screen.getByRole('tab', { name: /overview/i });
    await user.click(overviewTab);
    overviewTab.focus();
    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: /media/i })).toHaveAttribute('aria-selected', 'true');
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: /overview/i })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('AzhwarsPage (UT-AZW-01/02)', () => {
  it('lists all 12 azhwars in order with metadata and pasuram counts', () => {
    renderAt('/azhwars');
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('heading', { level: 2 })).toHaveLength(12);
    expect(screen.getByText('Nammazhwar')).toBeInTheDocument();
    expect(screen.getAllByText(/pasurams/i).length).toBeGreaterThan(0);
  });

  it('links each card to the dossier and the pre-filtered browse (PO round 12 snap)', () => {
    renderAt('/azhwars');
    // "N Divya Desams" CTA keeps the pre-filtered browse deep link
    const desamLinks = screen.getAllByRole('link', { name: /divya desams/i });
    expect(desamLinks.length).toBe(12);
    expect(desamLinks[0]).toHaveAttribute('href', expect.stringContaining('/kshetrams?azhwar='));
    // explicit "Explore profile" CTA + whole-card overlay both target the dossier
    expect(screen.getAllByRole('link', { name: /explore profile/i }).length).toBe(12);
    expect(screen.getAllByRole('link', { name: /saint dossier/i }).length).toBe(12);
  });
});

describe('unknown routes (UT-NAV)', () => {
  it('shows the not-found page', () => {
    renderAt('/nowhere');
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
