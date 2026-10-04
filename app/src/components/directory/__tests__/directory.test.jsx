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
