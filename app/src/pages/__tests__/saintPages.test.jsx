/**
 * Page tests for the R2 saint pages (UT-AZW-03, UT-ACH-02/03, TC-18/19):
 * Azhwar detail, Acharyas index and Acharya detail.
 */
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';

function renderAt(url) {
  return render(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
}

describe('AzhwarDetailPage (UT-AZW-03, FR-90)', () => {
  it('renders the full saint template for Poigai Azhwar (PO sample)', () => {
    renderAt('/azhwar/poigai');
    expect(screen.getByRole('heading', { name: /poigai azhwar/i })).toBeInTheDocument();
    expect(screen.getByText(/1 of 12 in chronological order/i)).toBeInTheDocument();
    expect(screen.getByText(/Sarovara Yogi · Kasara Yogi/i)).toBeInTheDocument();
    expect(screen.getByText(/Aippasi \(Ashvin\/Kartika\)/i)).toBeInTheDocument();
    const birthplace = screen.getByText(/Thiruvekka \(Kanchipuram\)/i);
    expect(birthplace).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view kshetram/i })).toHaveAttribute('href', '/kshetram/thiruvekka');
    expect(screen.getByText(/Panchajanya/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /life history & miracles/i })).toBeInTheDocument();
    expect(screen.getByText(/Thirukkovilur/)).toBeInTheDocument();
    expect(screen.getByText(/Mudhal Thiruvanthathi \(100 pasurams\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Word-by-word meaning/i)).toBeInTheDocument();
  });

  it('shows derived desam links and chronological prev/next navigation', () => {
    renderAt('/azhwar/poigai');
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('link', { name: /browse all \d+ desams/i }).length).toBe(1);
    expect(screen.getByRole('link', { name: /next: bhoothathazhwar/i })).toHaveAttribute('href', '/azhwar/bhoothath');
    expect(screen.getByText(/← All Azhwars/i)).toBeInTheDocument();
  });

  it('shows not-documented fallbacks and prev navigation mid-list', () => {
    renderAt('/azhwar/nammazhwar');
    expect(screen.getByRole('heading', { name: /nammazhwar/i })).toBeInTheDocument();
    expect(screen.getAllByText(/not yet documented yet\./i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('link', { name: /previous: thirumazhisai azhwar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next: madhurakavi azhwar/i })).toBeInTheDocument();
  });

  it('handles unknown azhwar ids gracefully (FR-33 pattern)', () => {
    renderAt('/azhwar/unknown-saint');
    expect(screen.getByText(/this azhwar was not found/i)).toBeInTheDocument();
  });
});

describe('AcharyasPage (UT-ACH-02, FR-93)', () => {
  it('lists acharyas grouped by parampara era with links', () => {
    renderAt('/acharyas');
    expect(screen.getByRole('heading', { name: /the acharyas/i })).toBeInTheDocument();
    expect(screen.getByText(/Purvacharyas — the early masters/i)).toBeInTheDocument();
    expect(screen.getByText(/The age of Ramanuja/i)).toBeInTheDocument();
    expect(screen.getByText(/Later acharyas/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /Sri Manavala Mamunigal/i });
    expect(link).toHaveAttribute('href', '/acharya/manavala-mamunigal');
  });
});

describe('AcharyaDetailPage (UT-ACH-03, FR-94)', () => {
  it('renders the Manavala Mamunigal PO sample: identification, history, verse', () => {
    renderAt('/acharya/manavala-mamunigal');
    expect(screen.getByRole('heading', { name: /sri manavala mamunigal/i })).toBeInTheDocument();
    expect(screen.getByText(/Yatheendra Pravana/i)).toBeInTheDocument();
    expect(screen.getByText(/Alwarthirunagari \(Thoothukudi District, Tamil Nadu\)/i)).toBeInTheDocument();
    const amsamLink = screen.getByRole('link', { name: /Sri Ramanujacharya/i });
    expect(amsamLink).toHaveAttribute('href', '/acharya/ramanuja');
    expect(screen.getByText(/Eedu 36000 Padi/i)).toBeInTheDocument();
    expect(screen.getByText(/19 works/i)).toBeInTheDocument();
    expect(screen.getByText(/Sreesailesa-dayaapaatram/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Koyil\.org — Sri Manavala Mamunigal/i).length).toBeGreaterThanOrEqual(2);
  });

  it('shows guru and sishya cross-links where present', () => {
    renderAt('/acharya/ramanuja');
    expect(screen.getByText(/Guru:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Yamunacharya' })).toHaveAttribute('href', '/acharya/yamunacharya');
    expect(screen.getByText(/Sishyas:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Koorathazhwan' })).toHaveAttribute('href', '/acharya/koorathazhwan');
  });

  it('renders visible pending markers for scaffolded acharyas (FR-94)', () => {
    renderAt('/acharya/nathamuni');
    expect(screen.getAllByText(/\[Content pending — to be provided\]/i).length).toBeGreaterThanOrEqual(3);
  });

  it('handles unknown acharya ids gracefully', () => {
    renderAt('/acharya/unknown-acharya');
    expect(screen.getByText(/this acharya was not found/i)).toBeInTheDocument();
  });
});
