/**
 * Branch-coverage tests for the shared directory components
 * (PO round 22 — /acharyas + /azhwars consistency): header slots,
 * entry fields and fallbacks, portrait fallback tile and the shared
 * profile link. useWikiImage is mocked — tests must not touch the
 * network (gotcha 16).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../hooks/useWikiImage.js', () => ({
  useWikiImage: vi.fn(() => ({ src: null, credit: null })),
}));
import { useWikiImage } from '../../../hooks/useWikiImage.js';
import DirectoryHeader from '../../../components/directory/DirectoryHeader.jsx';
import PersonEntry from '../../../components/directory/PersonEntry.jsx';
import PortraitFallback from '../../../components/directory/PortraitFallback.jsx';
import ProfileLink from '../../../components/directory/ProfileLink.jsx';
import TempleCard from '../../../components/directory/TempleCard.jsx';
import PersonPreview from '../../../components/directory/PersonPreview.jsx';

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

beforeEach(() => {
  useWikiImage.mockReturnValue({ src: null, credit: null });
});

describe('DirectoryHeader', () => {
  it('renders eyebrow, title, optional Tamil title and lead', () => {
    render(
      <DirectoryHeader
        eyebrow="The Guru Parampara"
        title="The Acharyas"
        tamilTitle="ஆசார்யர்கள்"
        lead="Intro copy."
      />,
    );
    expect(screen.getByText('The Guru Parampara')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'The Acharyas' })).toBeInTheDocument();
    expect(screen.getByText('ஆசார்யர்கள்')).toHaveAttribute('lang', 'ta');
    expect(screen.getByText('Intro copy.')).toBeInTheDocument();
  });

  it('omits the Tamil title and lead when absent and renders media + children slots', () => {
    render(
      <DirectoryHeader
        eyebrow="Eyebrow"
        title="Title"
        media={<img src="deco.png" alt="" data-testid="deco" />}
      >
        <nav aria-label="Era sections">
          <a href="#era">Jump</a>
        </nav>
      </DirectoryHeader>,
    );
    expect(screen.queryByText('ஆசார்யர்கள்')).not.toBeInTheDocument();
    expect(screen.getByTestId('deco').closest('.dir-head__media')).not.toBeNull();
    expect(screen.getByRole('navigation', { name: /era sections/i })).toBeInTheDocument();
  });
});

describe('PortraitFallback', () => {
  it('renders a decorative tile with the given glyph and no image', () => {
    const { container } = render(<PortraitFallback icon={<span data-testid="glyph" />} />);
    expect(container.querySelector('.dir-portrait__fallback')).not.toBeNull();
    expect(screen.getByTestId('glyph')).toBeInTheDocument();
    expect(container.querySelector('.dir-portrait__fallback')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('img')).toBeNull();
  });

  it('renders empty (still restrained) without a glyph', () => {
    const { container } = render(<PortraitFallback />);
    expect(container.querySelector('.dir-portrait__fallback').children).toHaveLength(0);
  });
});

describe('ProfileLink', () => {
  it('links with the unique accessible name and the visible label hidden from AT', () => {
    renderWithRouter(
      <ProfileLink to="/acharya/ramanuja" accessibleName="View profile — Sri Ramanujacharya">
        View profile
      </ProfileLink>,
    );
    const link = screen.getByRole('link', { name: 'View profile — Sri Ramanujacharya' });
    expect(link).toHaveAttribute('href', '/acharya/ramanuja');
    expect(link).toHaveClass('dir-profile-link');
    expect(link.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
  });
});

describe('PersonEntry', () => {
  const base = {
    name: 'Sri Ramanujacharya',
    tamilName: 'ராமானுஜர்',
    summary: 'The systematiser of Vishishtadvaita.',
    meta: [
      { label: 'Period', value: '1017–1137 CE' },
      { label: 'Guru', value: 'Yamunacharya' },
    ],
    portrait: { src: null, wiki: null, alt: 'Sri Ramanujacharya portrait' },
    profileTo: '/acharya/ramanuja',
  };

  it('renders the standardized fields: name, Tamil name, summary, meta, profile link', () => {
    renderWithRouter(<PersonEntry {...base} />);
    expect(screen.getByRole('heading', { name: 'Sri Ramanujacharya' })).toBeInTheDocument();
    expect(screen.getByText('ராமானுஜர்')).toHaveAttribute('lang', 'ta');
    expect(screen.getByText('The systematiser of Vishishtadvaita.')).toBeInTheDocument();
    expect(screen.getByText('Period')).toBeInTheDocument();
    expect(screen.getByText('1017–1137 CE')).toBeInTheDocument();
    expect(screen.getByText('Guru')).toBeInTheDocument();
    expect(screen.getByText('Yamunacharya')).toBeInTheDocument();
    // One keyboard stop for the profile destination, uniquely named
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'View profile — Sri Ramanujacharya' })).toBeInTheDocument();
  });

  it('shows the restrained fallback tile when no portrait resolves', () => {
    const { container } = renderWithRouter(<PersonEntry {...base} />);
    expect(container.querySelector('.dir-portrait__fallback')).not.toBeNull();
    expect(container.querySelector('img')).toBeNull();
  });

  it('renders the portrait image with the shared framing when a source resolves', () => {
    useWikiImage.mockReturnValue({ src: 'https://upload.wikimedia.org/x.jpg', credit: null });
    const { container } = renderWithRouter(
      <PersonEntry {...base} portrait={{ src: null, wiki: 'Ramanuja', alt: 'Ramanuja portrait' }} />,
    );
    const img = container.querySelector('.dir-portrait img');
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('alt', 'Ramanuja portrait');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(container.querySelector('.dir-portrait__fallback')).toBeNull();
  });

  it('omits the Tamil name, summary and metadata blocks when absent', () => {
    const { container } = renderWithRouter(
      <PersonEntry name="Nathamuni" profileTo="/acharya/nathamuni" />,
    );
    expect(container.querySelector('.dir-entry__tamil')).toBeNull();
    expect(container.querySelector('.dir-entry__summary')).toBeNull();
    expect(container.querySelector('.dir-entry__meta')).toBeNull();
    expect(screen.getByRole('link', { name: 'View profile — Nathamuni' })).toBeInTheDocument();
  });

  it('supports a custom profile label in the accessible name', () => {
    renderWithRouter(
      <PersonEntry {...base} profileLabel="Explore profile" />,
    );
    expect(
      screen.getByRole('link', { name: 'Explore profile — Sri Ramanujacharya' }),
    ).toBeInTheDocument();
  });
});

describe('TempleCard', () => {
  const kshetram = {
    id: 'srirangam',
    name: 'Srirangam',
    tamilName: 'திருவரங்கம்',
    temple: 'Sri Ranganathaswamy Temple',
    place: 'Srirangam',
    state: 'Tamil Nadu',
    deity: 'Ranganathan',
  };

  it('renders the identity block and the shared action set', () => {
    renderWithRouter(<TempleCard kshetram={kshetram} />);
    expect(screen.getByRole('heading', { name: 'Srirangam' })).toBeInTheDocument();
    expect(screen.getByText('திருவரங்கம்')).toHaveAttribute('lang', 'ta');
    expect(screen.getByText('Sri Ranganathaswamy Temple')).toBeInTheDocument();
    expect(screen.getByText('Ranganathan')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view temple/i })).toHaveAttribute('href', '/kshetram/srirangam');
    expect(screen.getByRole('button', { name: /add to trip/i })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: /mark as visited/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('shows the fallback tile without a photo and flips the toggles on click', async () => {
    const user = userEvent.setup();
    const { container } = renderWithRouter(<TempleCard kshetram={{ ...kshetram, deity: null }} />);
    expect(container.querySelector('.dir-portrait__fallback')).not.toBeNull();
    expect(container.querySelector('.dir-portrait img')).toBeNull();
    await user.click(screen.getByRole('button', { name: /add to trip/i }));
    expect(screen.getByRole('button', { name: '✓ In trip' })).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: /mark as visited/i }));
    expect(screen.getByRole('button', { name: '✓ Visited' })).toHaveAttribute('aria-pressed', 'true');
    // badge + pressed toggle both announce the visited state
    expect(screen.getAllByText(/visited/i).length).toBeGreaterThanOrEqual(2);
  });

  it('renders the photo with alt text when a source resolves', () => {
    useWikiImage.mockReturnValue({ src: 'https://upload.wikimedia.org/temple.jpg', credit: null });
    const { container } = renderWithRouter(<TempleCard kshetram={kshetram} />);
    expect(container.querySelector('.dir-portrait__fallback')).toBeNull();
    expect(container.querySelector('img')).toHaveAttribute('alt', 'Srirangam Temple');
  });
});

describe('PersonPreview', () => {
  const person = { id: 'poigai', name: 'Poigai Azhwar', tamilName: 'பொய்கையார்' };

  it('renders English name, Tamil name and a unique profile link', () => {
    renderWithRouter(<PersonPreview person={person} base="/azhwar" />);
    expect(screen.getByRole('heading', { name: 'Poigai Azhwar' })).toBeInTheDocument();
    expect(screen.getByText('பொய்கையார்')).toHaveAttribute('lang', 'ta');
    expect(screen.getByRole('link', { name: 'View profile — Poigai Azhwar' })).toHaveAttribute('href', '/azhwar/poigai');
  });

  it('shows the fallback tile without a photo and omits a missing Tamil name', () => {
    const { container } = renderWithRouter(<PersonPreview person={{ id: 'x', name: 'X' }} base="/azhwar" />);
    expect(container.querySelector('.dir-portrait__fallback')).not.toBeNull();
    expect(container.querySelector('.dir-entry__tamil')).toBeNull();
  });
});
