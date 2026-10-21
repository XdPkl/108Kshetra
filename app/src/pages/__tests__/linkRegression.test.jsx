/**
 * Link-audit regression tests (round 35, link-audit.md L1–L3):
 * - L1: every "Skip to … details" link resolves to exactly one focusable
 *   target on every Azhwar (12) and Acharya (27) page, in every tab state.
 * - L3: "Get directions" opens the Maps directions API URL with an explicit
 *   destination (dataset coordinates), never a search with "directions to"
 *   embedded; "View on Google Maps" stays a search/pin URL; the two
 *   celestial desams keep omitting travel directions.
 * - L2: sources citing an unavailable repository domain render an honest
 *   "temporarily unavailable" note instead of a link.
 * - Route inventory: all kshetram/azhwar/acharya ids stay unique kebab route
 *   segments (the page-coverage.csv inventory reconciles against these).
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';
import { mapsSearchUrl, mapsDirectionsUrl } from '../../data/config.js';
import kshetrams from '../../data/content/kshetrams.json';
import coords from '../../data/content/coords.json';
import azhwars from '../../data/content/azhwars.json';
import acharyas from '../../data/content/acharyas.json';

function renderAt(url) {
  return render(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
}

beforeEach(() => {
  window.history.replaceState(null, '', window.location.pathname);
});

describe('URL builders (link-audit L3)', () => {
  it('separates search and directions actions', () => {
    expect(mapsSearchUrl('Parthasarathy Temple Chennai'))
      .toBe('https://www.google.com/maps/search/Parthasarathy%20Temple%20Chennai');
    expect(mapsDirectionsUrl('13.053,80.265'))
      .toBe('https://www.google.com/maps/dir/?api=1&destination=13.053%2C80.265');
    expect(mapsDirectionsUrl('Parthasarathy Temple Chennai'))
      .not.toContain('directions%20to');
  });

  it('gives every terrestrial desam a coordinate destination; celestial none', () => {
    const terrestrial = kshetrams.filter((k) => k.mapQuery);
    const celestial = kshetrams.filter((k) => !k.mapQuery);
    expect(terrestrial).toHaveLength(106);
    expect(celestial.map((k) => k.id)).toEqual(['thirupparkadal', 'paramapadam']);
    for (const k of terrestrial) {
      expect(Array.isArray(coords[k.id])).toBe(true);
    }
  });
});

describe('KshetramDetailPage maps actions (link-audit L3)', () => {
  it('Overview, Visit info and Location directions all use the directions API URL', async () => {
    const user = userEvent.setup();
    renderAt('/kshetram/parthanpalli');
    const expectDirections = (link) => {
      expect(link).toHaveAttribute('href', expect.stringMatching(/^https:\/\/www\.google\.com\/maps\/dir\/\?api=1&destination=/));
      expect(link.getAttribute('href')).not.toContain('directions%20to');
      expect(link.getAttribute('href')).not.toContain('maps/search');
    };
    expectDirections(screen.getByRole('link', { name: /get directions/i }));
    await user.click(screen.getByRole('tab', { name: 'Visit info' }));
    expectDirections(screen.getByRole('link', { name: /get directions/i }));
    await user.click(screen.getByRole('tab', { name: 'Location' }));
    expectDirections(screen.getByRole('link', { name: /get directions/i }));
    // the pin/search action stays separate
    expect(screen.getByRole('link', { name: /view on google maps/i }))
      .toHaveAttribute('href', expect.stringContaining('https://www.google.com/maps/search/'));
  });

  it('keeps travel directions omitted for the celestial desams', () => {
    renderAt('/kshetram/paramapadam');
    expect(screen.queryByRole('link', { name: /get directions/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /view on google maps/i })).not.toBeInTheDocument();
  });
});

describe('Skip-link targets (link-audit L1)', () => {
  it('every Azhwar page has exactly one focusable #azhwar-main across tab states', async () => {
    const user = userEvent.setup();
    for (const a of azhwars) {
      renderAt(`/azhwar/${a.id}`);
      const target = document.getElementById('azhwar-main');
      expect(target, a.id).not.toBeNull();
      expect(target.tabIndex, a.id).toBe(-1);
      expect(target.querySelector('[role="tablist"]'), a.id).not.toBeNull();
      expect(screen.getByRole('link', { name: /skip to azhwar details/i }))
        .toHaveAttribute('href', '#azhwar-main');
      // the target survives tab switches (it wraps the rail + panels)
      await user.click(screen.getByRole('tab', { name: 'Media' }));
      expect(document.getElementById('azhwar-main')).not.toBeNull();
      cleanup();
    }
  });

  it('every Acharya page has a focusable #acharya-main with section IDs intact', () => {
    for (const a of acharyas) {
      renderAt(`/acharya/${a.id}`);
      const target = document.getElementById('acharya-main');
      expect(target, a.id).not.toBeNull();
      expect(target.tabIndex, a.id).toBe(-1);
      const identification = document.getElementById('identification');
      expect(identification, a.id).not.toBeNull();
      expect(target.contains(identification), a.id).toBe(true);
      expect(screen.getByRole('link', { name: /skip to acharya details/i }))
        .toHaveAttribute('href', '#acharya-main');
      cleanup();
    }
  });
});

describe('Unavailable repository domain (link-audit L2)', () => {
  it('Sources rows cite dravidaveda.org without an active link', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    await user.click(screen.getByRole('tab', { name: 'Sources' }));
    const row = screen.getByText('Dravida Veda Repository');
    expect(row.closest('.azd-source-row').textContent).toContain('dravidaveda.org');
    expect(screen.getByText(/temporarily unavailable/i)).toBeInTheDocument();
    expect(document.querySelector('a[href*="dravidaveda.org"]')).toBeNull();
    // working repositories keep their links
    expect(screen.getAllByRole('link', { name: /open repository/i }).length)
      .toBeGreaterThanOrEqual(1);
    cleanup();
  });

  it('Media digital-texts rows cite the domain without an active link', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    await user.click(screen.getByRole('tab', { name: 'Media' }));
    expect(screen.getAllByText(/temporarily unavailable/i).length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('a[href*="dravidaveda.org"]')).toBeNull();
    cleanup();
  });
});

describe('Route id inventory (page-coverage reconciliation)', () => {
  const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

  it('all kshetram, azhwar and acharya ids are unique kebab route segments', () => {
    for (const [name, rows] of [['kshetram', kshetrams], ['azhwar', azhwars], ['acharya', acharyas]]) {
      const ids = rows.map((r) => r.id);
      expect(ids, name).toHaveLength(new Set(ids).size);
      for (const id of ids) expect(id, `${name}:${id}`).toMatch(KEBAB);
    }
    expect(kshetrams).toHaveLength(108);
    expect(azhwars).toHaveLength(12);
    expect(acharyas).toHaveLength(27);
  });

  it('renders the audit\u2019s long-name and celestial detail routes', () => {
    for (const id of ['pavalavannam', 'vanpurushothamam', 'thetriyambalam', 'parthanpalli',
      'nanguneri', 'thiruvaragunamangai', 'tholaivillimangalam', 'paramapadam', 'srirangam']) {
      renderAt(`/kshetram/${id}`);
      expect(screen.getByRole('heading', { level: 1 }), id).toBeInTheDocument();
      cleanup();
    }
  });
});
