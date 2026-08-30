/**
 * Page-level component tests rendered with a MemoryRouter.
 */
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';

// Render helper mounting the full App at a given URL.
function renderAt(url) {
  return render(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
}

describe('HomePage (UT-HOME-01..03)', () => {
  it('shows title, intro, stats and featured kshetrams', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: /108 divya kshetrams/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Nalayira Divya Prabandham/i).length).toBeGreaterThan(0);
    expect(screen.getByText('108')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('4,000+')).toBeInTheDocument();
    // 4 featured kshetram links
    expect(screen.getAllByRole('link', { name: /srirangam|tirumala|kanchipuram|srivilliputhur/i }).length)
      .toBeGreaterThanOrEqual(4);
  });

  it('offers navigation to Browse and Azhwars', () => {
    renderAt('/');
    expect(screen.getByRole('link', { name: /explore the 108/i })).toHaveAttribute('href', '/kshetrams');
    // FR-86: the hero CTA reads "Azhwars" (header nav + teaser also link there)
    expect(screen.getAllByRole('link', { name: /^azhwars$/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('link', { name: /meet the azhwars/i })).not.toBeInTheDocument();
  });
});

describe('BrowsePage (UT-BRW-01..04)', () => {
  it('shows all 108 kshetrams with the result count', () => {
    renderAt('/kshetrams');
    expect(screen.getByText(/showing 108 of 108 kshetrams/i)).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(108);
  });

  it('narrows results as the user types and updates the count (UT-BRW-02)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams');
    await user.type(screen.getByLabelText(/search kshetrams/i), 'kanchipuram');
    const countText = await screen.findByText(/showing \d+ of 108 kshetrams/i);
    expect(countText.textContent).not.toMatch(/showing 108/);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('shows the empty state and restores all 108 after reset (UT-BRW-03/04)', async () => {
    const user = userEvent.setup();
    renderAt('/kshetrams');
    await user.type(screen.getByLabelText(/search kshetrams/i), 'atlantis');
    expect(await screen.findByText(/no kshetrams found/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /clear all filters/i }));
    expect(await screen.findByText(/showing 108 of 108 kshetrams/i)).toBeInTheDocument();
  });

  it('filters by azhwar via the ?azhwar= query param (FR-41)', async () => {
    renderAt('/kshetrams?azhwar=andal');
    expect((await screen.findAllByRole('article')).length).toBeGreaterThan(0);
    expect(screen.queryByText(/showing 108 of 108 kshetrams/i)).not.toBeInTheDocument();
  });
});

describe('KshetramDetailPage (UT-DTL-01..04, V3 UT-DTL-14..17)', () => {
  it('renders all shrine-template sections of the kshetram record', () => {
    renderAt('/kshetram/srirangam');
    expect(screen.getByRole('heading', { name: /srirangam/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /basic shrine profile/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /deities & consorts/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sthala puranam & history/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^mangalasasanam$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /visit info/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^location$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /visuals & media/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Ranganathan/).length).toBeGreaterThan(0);
  });

  it('shows deity cards, timings and share/print actions', () => {
    renderAt('/kshetram/srirangam');
    expect(screen.getAllByText('Moolavar').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Thaayar').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Urchavar').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/06:15/).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /print/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /distance from me/i })).toBeInTheDocument();
  });

  it('renders a safe external map link', () => {
    renderAt('/kshetram/srirangam');
    const mapLink = screen.getByRole('link', { name: /view on google maps/i });
    expect(mapLink).toHaveAttribute('href', expect.stringContaining('https://www.google.com/maps/search/'));
    expect(mapLink).toHaveAttribute('target', '_blank');
    expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('lists nearby desams within 50 km with links (FR-63)', () => {
    renderAt('/kshetram/srirangam');
    const nearby = screen.getByRole('heading', { name: /nearby divya desams/i });
    expect(nearby).toBeInTheDocument();
    const links = screen.getAllByRole('link', { name: /uthamar koil|uraiyur|thiruvellarai/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) expect(link).toHaveAttribute('href', expect.stringContaining('/kshetram/'));
  });

  it('shows template pasuram excerpts with word-by-word meaning and listen links (FR-64/65/83)', () => {
    renderAt('/kshetram/srirangam');
    // Full template (PO sample): two representative excerpts
    expect(screen.getByRole('heading', { name: /Thondaradippodi Azhwar — Thirumaalai/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Word-by-word meaning/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByRole('link', { name: /listen/i }).length).toBeGreaterThanOrEqual(2);
    // Legacy single-pasuram display still works where no template exists
    renderAt('/kshetram/thiruvekka');
    expect(screen.getAllByText(/sonna vannam seitha/i).length).toBeGreaterThan(0);
  });

  it('shows the pasuram count badge only when documented', () => {
    renderAt('/kshetram/srirangam');
    expect(screen.getAllByText(/247 pasurams/i).length).toBeGreaterThan(0);
  });

  it('links the Azhwars-Who-Glorified list to the per-Azhwar detail pages', () => {
    renderAt('/kshetram/srirangam');
    const listSection = screen.getByRole('heading', { name: /azhwars who glorified/i }).closest('section');
    const links = [...listSection.querySelectorAll('a')];
    expect(links.length).toBeGreaterThanOrEqual(10);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^\/azhwar\/[a-z-]+$/);
    }
  });

  it('hides timings/nearby/distance for celestial desams', () => {
    renderAt('/kshetram/paramapadam');
    expect(screen.getAllByText(/celestial realm/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByRole('heading', { name: /temple timings/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /distance from me/i })).not.toBeInTheDocument();
  });

  it('shows the not-found state for an unknown id', () => {
    renderAt('/kshetram/atlantis');
    expect(screen.getByText(/this kshetram was not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to browse/i })).toHaveAttribute('href', '/kshetrams');
  });
});

describe('AzhwarsPage (UT-AZW-01/02)', () => {
  it('lists all 12 azhwars in order with metadata and desam counts', () => {
    renderAt('/azhwars');
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('heading', { level: 2 })).toHaveLength(12);
    expect(screen.getByText('Nammazhwar')).toBeInTheDocument();
    expect(screen.getAllByText(/desams/i).length).toBeGreaterThan(0);
  });

  it('links desam chips to detail pages and the pre-filtered browse', () => {
    renderAt('/azhwars');
    expect(screen.getAllByRole('link', { name: /\+\d+ more/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /\+\d+ more/i })[0])
      .toHaveAttribute('href', expect.stringContaining('/kshetrams?azhwar='));
  });
});

describe('unknown routes (UT-NAV)', () => {
  it('shows the not-found page', () => {
    renderAt('/nowhere');
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
