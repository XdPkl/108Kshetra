/**
 * Component tests for the Detail V2 additions (US-DTL-03..13).
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import WikiThumb from '../WikiThumb.jsx';
import DistanceFromMe from '../DistanceFromMe.jsx';
import PageActions from '../PageActions.jsx';
import PasuramSection from '../PasuramSection.jsx';
import NearbyDesams from '../NearbyDesams.jsx';
import { kshetrams } from '../../data/kshetrams.js';

afterEach(() => vi.unstubAllGlobals());

describe('WikiThumb', () => {
  it('renders the placeholder when no article title exists', () => {
    render(<WikiThumb title={null} alt="placeholder" />);
    expect(screen.getByLabelText('placeholder')).toBeInTheDocument();
  });

  it('renders the sourced photo with credit when the article has one', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ thumbnail: { source: 'https://upload.wikimedia.org/x.jpg' }, description: 'temple' }),
    }));
    render(<WikiThumb title="Some Temple" alt="photo" />);
    await waitFor(() => expect(screen.getByRole('img')).toHaveAttribute('src', 'https://upload.wikimedia.org/x.jpg'));
    expect(screen.getByText(/Wikipedia \(CC BY-SA\)/)).toBeInTheDocument();
  });

  it('keeps the placeholder when the fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    render(<WikiThumb title="Missing Temple" alt="fallback" />);
    await waitFor(() => expect(screen.getByLabelText('fallback')).toBeInTheDocument());
  });
});

describe('DistanceFromMe', () => {
  const coords = [10.863, 78.69];

  it('shows nothing without coordinates (celestial desams)', () => {
    const { container } = render(<DistanceFromMe coords={null} mapQuery="x" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('computes the straight-line distance on geolocation success', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('navigator', { geolocation: { getCurrentPosition: (ok) => ok({ coords: { latitude: 10.9, longitude: 78.75 } }) } });
    render(<DistanceFromMe coords={coords} mapQuery="x" />);
    await user.click(screen.getByRole('button', { name: /distance from me/i }));
    expect(await screen.findByText(/km away/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get directions/i })).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows a graceful message when permission is denied', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('navigator', { geolocation: { getCurrentPosition: (ok, err) => err(new Error('denied')) } });
    render(<DistanceFromMe coords={coords} mapQuery="x" />);
    await user.click(screen.getByRole('button', { name: /distance from me/i }));
    expect(await screen.findByText(/permission was denied/i)).toBeInTheDocument();
  });

  it('handles unsupported browsers', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('navigator', {});
    render(<DistanceFromMe coords={coords} mapQuery="x" />);
    await user.click(screen.getByRole('button', { name: /distance from me/i }));
    expect(await screen.findByText(/does not support location/i)).toBeInTheDocument();
  });
});

describe('PageActions', () => {
  it('copies the URL when the Share API is unavailable and shows confirmation', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue();
    vi.stubGlobal('navigator', { clipboard: { writeText } });
    render(<PageActions />);
    await user.click(screen.getByRole('button', { name: /share/i }));
    await waitFor(() => expect(screen.getByText(/link copied/i)).toBeInTheDocument());
    expect(writeText).toHaveBeenCalled();
  });
});

describe('PasuramSection', () => {
  it('renders nothing without a pasuram', () => {
    const { container } = render(<PasuramSection pasuram={null} azhwarName="x" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders tamil, transliteration, meaning and attribution', () => {
    render(
      <PasuramSection
        pasuram={{ azhwarId: 'nammazhwar', reference: 'TVM 5-8-11', work: 'Thiruvoimozhi', tamil: 'இடவாழி', transliteration: 'Idavaazhi', meaning: 'The Lord of Kudanthai' }}
      />,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('இடவாழி')).toBeInTheDocument();
    expect(screen.getByText('Idavaazhi')).toBeInTheDocument();
    expect(screen.getByText(/TVM 5-8-11/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /listen/i })).toHaveAttribute('href', expect.stringContaining('archive.org'));
  });
});

describe('NearbyDesams', () => {
  it('renders nothing without coordinates', () => {
    const { container } = render(<MemoryRouter><NearbyDesams coords={null} kshetrams={kshetrams} /></MemoryRouter>);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when no desam is within 50 km', () => {
    const { container } = render(
      <MemoryRouter><NearbyDesams coords={[30.7, 79.49]} kshetrams={kshetrams} /></MemoryRouter>,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
