/**
 * Branch-coverage tests for the detail-page components extended for the
 * Divya Desam dossier population: multi-Thaayar deity entries, direct
 * `src` photos, the Prathyaksham subsection and legacy fallbacks.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DeityBreakdown from '../DeityBreakdown.jsx';
import PuranamHistory from '../PuranamHistory.jsx';
import WikiThumb from '../../WikiThumb.jsx';

const noop = () => {};

describe('DeityBreakdown — multiple Thaayars (dossier format)', () => {
  it('renders a Thaayars list when the deity carries several consorts', () => {
    render(
      <DeityBreakdown
        kshetram={{
          deities: {
            moolavar: {
              names: { tamil: 'மூலவர்', translit: 'Moolavar' },
              thaayar: [
                { name: 'Sridevi', legend: 'First consort legend.' },
                { name: 'Bhoodevi', legend: 'Second consort legend.' },
              ],
            },
          },
        }}
        onOpenPhoto={noop}
      />,
    );
    expect(screen.getByRole('heading', { name: /thaayars/i })).toBeInTheDocument();
    expect(screen.getByText('Sridevi')).toBeInTheDocument();
    expect(screen.getByText(/first consort legend/i)).toBeInTheDocument();
    expect(screen.getByText('Bhoodevi')).toBeInTheDocument();
  });

  it('renders the singular legacy Thaayar block when only a name exists', () => {
    render(
      <DeityBreakdown
        kshetram={{ moolavar: { name: 'Govindan' }, thaayar: { name: 'Padmavathi', tamilName: 'பத்மாவதி' } }}
        onOpenPhoto={noop}
      />,
    );
    expect(screen.getByRole('heading', { name: /thaayar/i })).toBeInTheDocument();
    expect(screen.getByText(/Padmavathi/)).toBeInTheDocument();
  });
});

describe('WikiThumb — direct src photos (dossier-embedded images)', () => {
  it('renders the supplied src without a wiki fetch', () => {
    render(<WikiThumb src="/photos/temple.png" alt="Temple photo" />);
    const img = screen.getByRole('img', { name: /temple photo/i });
    expect(img).toHaveAttribute('src', '/photos/temple.png');
  });
  it('renders the placeholder when neither src nor title exists', () => {
    render(<WikiThumb title={null} alt="Nothing here" />);
    expect(screen.getByText('◆')).toBeInTheDocument();
  });
});

describe('PuranamHistory — Prathyaksham subsection (dossier field)', () => {
  it('renders Prathyaksham when present and keeps legacy fallbacks', () => {
    render(
      <PuranamHistory
        kshetram={{ puranam: { legend: ['Origin story.'], prathyaksham: 'Manifested for Sage Sutapa and Brahma.' } }}
      />,
    );
    expect(screen.getByRole('heading', { name: /prathyaksham/i })).toBeInTheDocument();
    expect(screen.getByText(/manifested for sage sutapa/i)).toBeInTheDocument();
    expect(screen.getByText('Origin story.')).toBeInTheDocument();
  });
  it('still shows the documented fallback when nothing exists', () => {
    render(<PuranamHistory kshetram={{}} />);
    expect(screen.getByText(/not yet documented/i)).toBeInTheDocument();
  });
});
