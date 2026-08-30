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
    expect(screen.getByText(/Aippasi \(Ashvin\/Kartika transition\)/i)).toBeInTheDocument();
    const birthplace = screen.getByText(/Thiruvekka \(Kanchipuram\)/i);
    expect(birthplace).toBeInTheDocument();
    expect(screen.getByText(/Kanchipuram District, Tamil Nadu/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view kshetram/i })).toHaveAttribute('href', '/kshetram/thiruvekka');
    expect(screen.getByText(/Panchajanya/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /life history & miracles/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chronological life timeline/i })).toBeInTheDocument();
    expect(screen.getByText(/Dehali of Thirukoilur/i)).toBeInTheDocument();
    expect(screen.getByText(/Mudhal Thiruvanthathi \(100 pasurams\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Word-by-word meaning/i)).toBeInTheDocument();
    expect(screen.getByText(/Theological commentary/i)).toBeInTheDocument();
    expect(screen.getByText(/Sampradaya preservation/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sources/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Project Madurai Texts/i).length).toBeGreaterThanOrEqual(2);
  });

  it('shows derived desam links and chronological prev/next navigation', () => {
    renderAt('/azhwar/poigai');
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('link', { name: /browse all \d+ desams/i }).length).toBe(1);
    expect(screen.getByRole('link', { name: /next: bhoothathazhwar/i })).toHaveAttribute('href', '/azhwar/bhoothath');
    expect(screen.getByText(/← All Azhwars/i)).toBeInTheDocument();
  });

  it('renders the dossier-populated Nammazhwar with prev/next navigation', () => {
    renderAt('/azhwar/nammazhwar');
    expect(screen.getByRole('heading', { name: /nammazhwar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chronological life timeline/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Prapanna Jana Kootastha/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Theological commentary/i)).toBeInTheDocument();
    expect(screen.queryByText(/not yet documented yet\./i)).not.toBeInTheDocument();
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
    expect(screen.getByText(/Azhwar Thirunagari \(Thirukkurugur\)/i)).toBeInTheDocument();
    const amsamLink = screen.getByRole('link', { name: /Sri Ramanujacharya/i });
    expect(amsamLink).toHaveAttribute('href', '/acharya/ramanuja');
    expect(screen.getAllByText(/Eedu 36000 Padi/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/19 works/i)).toBeInTheDocument();
    expect(screen.getByText(/Sreesailesa-dayaapaatram/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Koyil\.org — Sri Manavala Mamunigal/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Koyil Archival Library/i)).toBeInTheDocument();
  });

  it('shows guru and sishya cross-links where present', () => {
    renderAt('/acharya/ramanuja');
    expect(screen.getByText(/Guru:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Yamunacharya' })).toHaveAttribute('href', '/acharya/yamunacharya');
    expect(screen.getByText(/Sishyas:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Koorathazhwan' })).toHaveAttribute('href', '/acharya/koorathazhwan');
  });

  it('renders the Nathamuni dossier with Sanskrit-thanivan verse in Tamil script', () => {
    renderAt('/acharya/nathamuni');
    expect(screen.getByRole('heading', { level: 1, name: /nathamuni/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chronological life timeline/i })).toBeInTheDocument();
    expect(screen.getByText(/Cuddalore District, Tamil Nadu/i)).toBeInTheDocument();
    expect(screen.getByText(/Re-discovery of Dravida Vedam/i)).toBeInTheDocument();
    expect(screen.getByText(/Theological commentary/i)).toBeInTheDocument();
    expect(screen.getByText(/நமோऽசிந்த்யாத்புதாத்புடாக்லிஷ்டஜ்ஞானவைராக்யராசயே/i)).toBeInTheDocument();
    expect(screen.queryByText(/\[Content pending — to be provided\]/i)).not.toBeInTheDocument();
    const guruSection = screen.getByText(/Sishyas:/i);
    expect(guruSection).toBeInTheDocument();
  });

  it('renders the dossier-populated Yamunacharya without pending markers (FR-94)', () => {
    renderAt('/acharya/yamunacharya');
    expect(screen.getByRole('heading', { level: 1, name: /yamunacharya/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chronological life timeline/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Na Dharma Nishto/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Theological commentary/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Nathamuni' })).toHaveAttribute('href', '/acharya/nathamuni');
    expect(screen.queryByText(/\[Content pending — to be provided\]/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Project Madurai Texts/i).length).toBeGreaterThanOrEqual(2);
  });

  it('handles unknown acharya ids gracefully', () => {
    renderAt('/acharya/unknown-acharya');
    expect(screen.getByText(/this acharya was not found/i)).toBeInTheDocument();
  });
});
