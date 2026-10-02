/**
 * Page tests for the R2 saint pages (UT-AZW-03, UT-ACH-02/03, TC-18/19):
 * Azhwar detail, Acharyas index and Acharya detail.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App.jsx';

function renderAt(url) {
  return render(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
}

// Round 18: the azhwar tabs sync to the URL hash — the jsdom window is
// shared across tests in this file, so clear it before each one (gotcha
// from the round-16 kshetram hash tests).
beforeEach(() => {
  window.history.replaceState(null, '', window.location.pathname);
});

describe('AzhwarDetailPage (UT-AZW-03, FR-90; 2026-10-01 poigai mock restyle)', () => {
  it('renders the compact mock hero for Poigai Azhwar: stats, birth facts, key moments', () => {
    renderAt('/azhwar/poigai');
    expect(screen.getByRole('heading', { name: /poigai azhwar/i })).toBeInTheDocument();
    expect(screen.getByText(/the first of the mudhal azhwars/i)).toBeInTheDocument();
    expect(screen.getByText('Sarovara Yogi')).toBeInTheDocument();
    expect(screen.getByText('Kasara Yogi')).toBeInTheDocument(); // remaining epithets stay as chips
    expect(screen.getByText(/100 pasurams/i)).toBeInTheDocument();
    // stat row carries the derived count (the places card moved into its tab)
    expect(screen.getAllByText(/12 Divya Desams/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Thiruvekka \(Kanchipuram\)/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Kanchipuram District, Tamil Nadu/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Panchajanya/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /key moments/i })).toBeInTheDocument();
    expect(screen.getAllByText(/golden lotus/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('heading', { name: /early years & spiritual awakening/i })).toBeInTheDocument();
    expect(screen.getByText(/Sampradaya preservation/i)).toBeInTheDocument();
    expect(screen.getAllByText(/the lamp of knowledge/i).length).toBeGreaterThanOrEqual(1);
  });

  it('switches tabs: hymns shows the verse reader, places the desam directory, media and sources the rows', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    await user.click(screen.getByRole('tab', { name: /hymns & meaning/i }));
    expect(screen.getByText(/Word-by-word meaning/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /commentary & anubhavam/i })).toBeInTheDocument();
    expect(screen.getByText(/Mudhal Thiruvanthathi \(100 pasurams\)/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /find recitations/i })).toHaveAttribute('href', expect.stringContaining('archive.org'));
    await user.click(screen.getByRole('tab', { name: 'Media' }));
    expect(screen.getAllByRole('link', { name: /search on youtube/i }).length).toBeGreaterThanOrEqual(1);
    await user.click(screen.getByRole('tab', { name: 'Sources' }));
    expect(screen.getAllByText(/Project Madurai Texts/i).length).toBeGreaterThanOrEqual(1);
    await user.click(screen.getByRole('tab', { name: /sacred places \(12\)/i }));
    expect(screen.getByRole('link', { name: /browse all 12 desams/i })).toHaveAttribute('href', '/kshetrams?azhwar=poigai');
    // featured desam card (first desam with a wiki photo) + celestial grouping
    expect(screen.getByRole('link', { name: /view kshetram/i })).toHaveAttribute('href', '/kshetram/kanchi-varadaraja');
    expect(screen.getByText(/celestial divya desams/i)).toBeInTheDocument();
  });

  it('expands the complete life story from the Life & tradition tab', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    expect(screen.queryByText(/Dehali of Thirukoilur/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /read the complete life story/i }));
    expect(screen.getByText(/Dehali of Thirukoilur/i)).toBeInTheDocument();
  });

  it('jumps to the hymns tab from the lamp-of-knowledge band', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    await user.click(screen.getByRole('button', { name: /explore hymn & meaning/i }));
    expect(screen.getByText(/Word-by-word meaning/i)).toBeInTheDocument();
  });

  it('shows the portrait and chronological navigation', () => {
    renderAt('/azhwar/poigai');
    // PO-supplied painting as the hero portrait
    expect(screen.getByAltText(/painting of poigai azhwar/i)).toHaveAttribute('src', expect.stringContaining('photos/saint-poigai.jpg'));
    expect(screen.getByRole('link', { name: /next: bhoothathazhwar/i })).toHaveAttribute('href', '/azhwar/bhoothath');
    expect(screen.getAllByText(/← All Azhwars/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders the placeholder portrait for saints without a supplied photo', () => {
    renderAt('/azhwar/nammazhwar');
    // UXD v3.0: the placeholder became the Thiruman watermark behind the labelled frame
    expect(screen.getByLabelText(/nammazhwar portrait/i)).toBeInTheDocument();
  });

  it('renders the dossier-populated Nammazhwar with prev/next navigation', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/nammazhwar');
    expect(screen.getByRole('heading', { name: /nammazhwar/i })).toBeInTheDocument();
    // Prapanna Jana Kootastha lives in a later life-story block — expand it
    await user.click(screen.getByRole('button', { name: /read the complete life story/i }));
    expect(screen.getAllByText(/Prapanna Jana Kootastha/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/not yet documented yet\./i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /previous: thirumazhisai azhwar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next: madhurakavi azhwar/i })).toBeInTheDocument();
  });

  it('hides the divine-amsam cell for azhwars without one in the dataset', () => {
    renderAt('/azhwar/madhurakavi');
    expect(screen.queryByText(/divine amsam/i)).not.toBeInTheDocument();
  });

  it('renders Philosophy & legacy and the Era & contemporaries aside (round 21, pey)', () => {
    renderAt('/azhwar/pey');
    expect(screen.getByRole('heading', { name: /philosophy & legacy/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /role & bhakti bhava/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sampradaya preservation/i })).toBeInTheDocument();
    expect(screen.getByText(/Saksatkara Bhakti/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /era & contemporaries/i })).toBeInTheDocument();
    expect(screen.getByText(/Academic chronology/i)).toBeInTheDocument();
    expect(screen.getByText(/Early Sangam \/ Post-Sangam/i)).toBeInTheDocument();
    expect(screen.getByText(/his illustrious disciple/i)).toBeInTheDocument();
  });

  it('handles unknown azhwar ids gracefully (FR-33 pattern)', () => {
    renderAt('/azhwar/unknown-saint');
    expect(screen.getByText(/this azhwar was not found/i)).toBeInTheDocument();
  });

  it('activates a tab from the URL hash and follows hashchange (round 18 deep links)', async () => {
    window.history.replaceState(null, '', '#hymns');
    renderAt('/azhwar/poigai');
    expect(screen.getByRole('tab', { name: /hymns & meaning/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Word-by-word meaning/i)).toBeInTheDocument();
    window.history.replaceState(null, '', '#sources');
    window.dispatchEvent(new Event('hashchange'));
    expect(await screen.findAllByText(/Project Madurai Texts/i).then((els) => els.length)).toBeGreaterThanOrEqual(1);
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('ignores hashes that are not azhwar tabs', () => {
    window.history.replaceState(null, '', '#nonsense');
    renderAt('/azhwar/poigai');
    expect(screen.getByRole('heading', { name: /early years & spiritual awakening/i })).toBeInTheDocument();
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('writes the hash on tab clicks and moves tabs with the arrow keys', async () => {
    const user = userEvent.setup();
    renderAt('/azhwar/poigai');
    await user.click(screen.getByRole('tab', { name: /hymns & meaning/i }));
    expect(window.location.hash).toBe('#hymns');
    fireEvent.keyDown(screen.getByRole('tab', { name: /hymns & meaning/i }), { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: /sacred places \(12\)/i })).toHaveAttribute('aria-selected', 'true');
    expect(window.location.hash).toBe('#places');
  });
});

describe('AcharyasPage (UT-ACH-02, FR-93; round-22 directory consistency)', () => {
  it('lists all 27 acharyas grouped by parampara era with unique profile links', () => {
    renderAt('/acharyas');
    expect(screen.getByRole('heading', { name: /the acharyas/i })).toBeInTheDocument();
    // Era sections keep the dataset labels; the jump links carry the
    // short PO labels ("Early masters", "Age of Ramanuja", …)
    expect(screen.getByRole('heading', { name: 'Purvacharyas — the early masters' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The age of Ramanuja' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Later acharyas' })).toBeInTheDocument();
    // All 27 entries render as standardized PersonEntry articles
    expect(screen.getAllByRole('article')).toHaveLength(27);
    // In-page jump links target the era anchors (sections stay visible)
    expect(screen.getByRole('link', { name: 'Early masters' })).toHaveAttribute('href', '#early-masters');
    expect(screen.getByRole('link', { name: 'Age of Ramanuja' })).toHaveAttribute('href', '#age-of-ramanuja');
    expect(screen.getByRole('link', { name: 'Later acharyas' })).toHaveAttribute('href', '#later-acharyas');
    expect(document.getElementById('early-masters')).not.toBeNull();
    // Consistent Period/Guru metadata on every entry
    expect(screen.getAllByText('Period')).toHaveLength(27);
    expect(screen.getAllByText('Guru')).toHaveLength(27);
    // gurus without a dataset link render the neutral value, never inferred
    expect(screen.getAllByText('Not specified').length).toBeGreaterThanOrEqual(2);
    // One unique-named profile link per acharya (no whole-row overlay stop)
    const profile = screen.getByRole('link', { name: 'View profile — Sri Manavala Mamunigal' });
    expect(profile).toHaveAttribute('href', '/acharya/manavala-mamunigal');
    expect(screen.getAllByRole('link', { name: /view profile — /i })).toHaveLength(27);
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
    expect(screen.getByRole('heading', { name: /chronology of life events/i })).toBeInTheDocument();
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
    expect(screen.getByRole('heading', { name: /chronology of life events/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Na Dharma Nishto/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Theological commentary/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Nathamuni' })).toHaveAttribute('href', '/acharya/nathamuni');
    expect(screen.queryByText(/\[Content pending — to be provided\]/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Project Madurai Texts/i).length).toBeGreaterThanOrEqual(2);
  });

  it('renders resolving guru/sishya chips for the CR-18 acharyas', () => {
    renderAt('/acharya/engalazhwan');
    expect(screen.getByText(/Guru:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Thirukkurugai Piran Pillan' })).toHaveAttribute('href', '/acharya/thirukkurugai-piran-pillan');
    expect(screen.getByRole('link', { name: 'Nadadur Ammal' })).toHaveAttribute('href', '/acharya/nadadur-ammal');
    expect(screen.queryByText(/\[Content pending — to be provided\]/i)).not.toBeInTheDocument();
    renderAt('/acharya/vedanta-desika');
    expect(screen.getByRole('link', { name: 'Kidambi Appullar' })).toHaveAttribute('href', '/acharya/kidambi-appullar');
    renderAt('/acharya/manavala-mamunigal');
    expect(screen.getByRole('link', { name: 'Thiruvaimozhi Pillai' })).toHaveAttribute('href', '/acharya/thiruvaimozhi-pillai');
  });

  it('renders a scaffolded lineage acharya with the pending-dossier marker', () => {
    renderAt('/acharya/nadadur-ammal');
    expect(screen.getByRole('heading', { level: 1, name: /nadadur ammal/i })).toBeInTheDocument();
    expect(screen.getByText(/Guru:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Engalazhwan' })).toHaveAttribute('href', '/acharya/engalazhwan');
    expect(screen.getAllByText(/\[Content pending — to be provided\]/i).length).toBeGreaterThanOrEqual(1);
  });

  it('handles unknown acharya ids gracefully', () => {
    renderAt('/acharya/unknown-acharya');
    expect(screen.getByText(/this acharya was not found/i)).toBeInTheDocument();
  });
});
