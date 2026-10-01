/**
 * Component tests for the Detail V3 shrine template (US-DTL-14..17,
 * FR-82..85): profile grid, deity breakdown with photo strips, puranam
 * history, mangalasasanam excerpts, visit info, visuals & media, section
 * nav and the gallery lightbox.
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { getEnrichedKshetramById } from '../../data/api.js';
import ShrineProfile from '../../components/detail/ShrineProfile.jsx';
import DeityBreakdown from '../../components/detail/DeityBreakdown.jsx';
import PuranamHistory from '../../components/detail/PuranamHistory.jsx';
import MangalasasanamSection from '../../components/detail/MangalasasanamSection.jsx';
import VisitInfoSection from '../../components/detail/VisitInfoSection.jsx';
import VisualsMedia from '../../components/detail/VisualsMedia.jsx';
import SectionNav from '../../components/detail/SectionNav.jsx';
import GalleryLightbox from '../../components/detail/GalleryLightbox.jsx';

const srirangam = getEnrichedKshetramById('srirangam');
const thiruvekka = getEnrichedKshetramById('thiruvekka'); // legacy V2 data only (no dossier template)

describe('ShrineProfile (UT-DTL-06, FR-83)', () => {
  it('renders the full profile grid for templated shrines', () => {
    render(<ShrineProfile kshetram={srirangam} />);
    expect(screen.getByRole('heading', { name: /shrine at a glance/i })).toBeInTheDocument();
    expect(screen.getByText(/Sriranga Vimanam/)).toBeInTheDocument();
    expect(screen.getByText(/Chandra Pushkarini/)).toBeInTheDocument();
    expect(screen.getByText(/Punnai tree/)).toBeInTheDocument();
    expect(screen.getByText(/Facing South/)).toBeInTheDocument();
  });

  it('falls back to base record rows and hides the serial chip when absent', () => {
    render(<ShrineProfile kshetram={thiruvekka} />);
    expect(screen.queryByText(/Divya Desam #/)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Yathothakari|Kanchipuram/).length).toBeGreaterThan(0);
  });
});

describe('DeityBreakdown (UT-DTL-06, FR-83/85)', () => {
  it('renders two text-first columns with names, etymology, Thaayar legend and labels', () => {
    render(<DeityBreakdown kshetram={srirangam} onOpenPhoto={vi.fn()} />);
    expect(screen.getByRole('heading', { name: /deities & consorts/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Ranganathan \/ Periya Perumal/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Master of the sacred stage/i)).toBeInTheDocument();
    expect(screen.getByText(/never steps past the threshold/i)).toBeInTheDocument();
    expect(screen.getByText(/Garbhagriha/i)).toBeInTheDocument(); // sanctum callout
    // Round 17 audit: the shared temple lead image is NOT reused as a
    // "deity" photo — a not-available note appears instead
    expect(screen.getAllByText(/deity photo not available\./i).length).toBe(2);
    expect(screen.queryAllByRole('button', { name: /photo/i })).toHaveLength(0);
  });

  it('falls back to legacy V2 deity fields and shows placeholders when no photos exist', () => {
    render(<DeityBreakdown kshetram={thiruvekka} onOpenPhoto={() => {}} />);
    expect(screen.getAllByText(/Yathothakari|Sonna Vannam/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Komala Valli/i)).toBeInTheDocument();
  });

  it('opens the lightbox via a curated src photo button', async () => {
    const user = userEvent.setup();
    const onOpenPhoto = vi.fn();
    const withCuratedPhoto = {
      ...srirangam,
      deities: {
        ...srirangam.deities,
        moolavar: {
          ...srirangam.deities.moolavar,
          photos: [{ src: 'moolavar.png', alt: 'Moolavar at the sanctum' }],
        },
      },
    };
    render(<DeityBreakdown kshetram={withCuratedPhoto} onOpenPhoto={onOpenPhoto} />);
    await user.click(screen.getByRole('button', { name: /photo/i }));
    expect(onOpenPhoto).toHaveBeenCalled();
  });
});

describe('PuranamHistory (FR-83)', () => {
  it('renders the templated subsections and literature list', () => {
    render(<PuranamHistory kshetram={srirangam} />);
    expect(screen.getByRole('heading', { name: /sthala puranam & history/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /invasions & preservation/i })).toBeInTheDocument();
    expect(screen.getByText(/Pillai Lokacharya/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /literary references/i })).toBeInTheDocument();
    expect(screen.getByText(/Koyil Olugu/)).toBeInTheDocument();
  });

  it('falls back to the legacy puranam paragraph and the significance blockquote', () => {
    render(<PuranamHistory kshetram={thiruvekka} />);
    expect(screen.getAllByText(/Saraswati/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(thiruvekka.significance)).toBeInTheDocument();
  });
});

describe('MangalasasanamSection (FR-83/64/65)', () => {
  it('shows the summary line with per-Azhwar count pills and verse cards', () => {
    render(<MemoryRouter><MangalasasanamSection kshetram={srirangam} /></MemoryRouter>);
    expect(screen.getByText(/247 pasurams/i)).toBeInTheDocument();
    expect(screen.getByText(/11 Azhwars:/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Thirumangai Azhwar\s*·\s*73/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Thirumaalai/i })).toBeInTheDocument();
    expect(screen.getByText(/Bhagavat-Anubhava/i)).toBeInTheDocument();
  });

  it('falls back to the legacy pasuram blockquote', () => {
    render(<MangalasasanamSection kshetram={thiruvekka} />);
    expect(screen.getAllByText(/sonna vannam seitha/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('VisitInfoSection (FR-83)', () => {
  it('shows timings plus the collapsed not-yet-documented note for missing blocks', () => {
    render(<VisitInfoSection kshetram={srirangam} />);
    expect(screen.getAllByText(/06:15/).length).toBeGreaterThanOrEqual(1);
    // Round 17 audit: srirangam documents no festivals/access/tips/references,
    // so the four rows collapse into one short note
    expect(screen.getByText(/additional travel and darshan details are not yet documented\./i)).toBeInTheDocument();
    // srirangam's daily Vishwaroopa darshan sits under its own heading…
    expect(screen.getByRole('heading', { name: /special darshan timings/i })).toBeInTheDocument();
    // …while the Ekadasi reference becomes a separately labelled festival note
    expect(screen.getByRole('heading', { name: /festival note/i })).toBeInTheDocument();
    expect(screen.getByText('Ekadasi special')).toBeInTheDocument();
  });

  it('renders festivals, access, tips and references when documented', () => {
    const rich = {
      ...thiruvekka,
      timings: { morning: ['07:00', '12:00'], evening: ['16:00', '20:00'], notes: 'Brahmotsavam special' },
      festivals: [{ name: 'Panguni Brahmotsavam', month: 'Mar/Apr' }],
      access: { town: 'Chennai', rail: 'Triplicane', airport: 'MAA', road: 'Off Anna Salai' },
      tips: ['Arrive early for Vishwaroopa darshan'],
      references: ['Temple trust website'],
    };
    render(<VisitInfoSection kshetram={rich} />);
    expect(screen.getByText(/Panguni Brahmotsavam — Mar\/Apr/)).toBeInTheDocument();
    expect(screen.getByText(/Brahmotsavam special/)).toBeInTheDocument();
    expect(screen.getByText('Chennai')).toBeInTheDocument();
    expect(screen.getByText(/Arrive early/)).toBeInTheDocument();
    expect(screen.getByText('Temple trust website')).toBeInTheDocument();
  });
});

describe('MangalasasanamSection branches', () => {
  it('omits the total when undocumented and renders excerpts without audio links', () => {
    const minimal = {
      ...thiruvekka,
      pasuramCount: 0,
      pasuram: null,
      mangalasasanam: {
        perAzhwar: [['pey', 2]],
        excerpts: [{
          azhwarId: 'pey', work: null, tamil: 'தமிழ்', transliteration: 'Tamil verse',
          meaning: 'A verse of praise', wordMeanings: [['word', 'meaning']],
        }],
      },
    };
    render(<MemoryRouter><MangalasasanamSection kshetram={minimal} /></MemoryRouter>);
    expect(screen.queryByText(/pasurams ·/)).not.toBeInTheDocument();
    expect(screen.getByText(/1 Azhwars:/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /listen/i })).not.toBeInTheDocument();
  });

  it('renders a bare excerpt without tamil, meaning, glossary or commentary', () => {
    const bare = { mangalasasanam: { excerpts: [{ azhwarId: 'pey' }] } };
    render(<MemoryRouter><MangalasasanamSection kshetram={bare} /></MemoryRouter>);
    expect(screen.getByText(/representative pasuram/i)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /commentary/i })).not.toBeInTheDocument();
  });
});

describe('VisualsMedia (FR-83)', () => {
  it('renders visual markers and video-search cards safely', () => {
    render(<VisualsMedia kshetram={srirangam} />);
    expect(screen.getByText(/236-foot/i)).toBeInTheDocument();
    const chip = screen.getAllByRole('link', { name: /search videos/i })[0];
    expect(chip).toHaveAttribute('href', expect.stringContaining('youtube.com'));
    expect(chip).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows the fallback when no media exists', () => {
    render(<VisualsMedia kshetram={{ ...thiruvekka, visuals: undefined }} />);
    expect(screen.getByText(/not yet documented yet\./i)).toBeInTheDocument();
  });
});

describe('SectionNav & GalleryLightbox (FR-84/85)', () => {
  it('renders anchor chips for the available sections', () => {
    render(<SectionNav sections={[{ id: 'profile', label: 'Profile' }, { id: 'media', label: 'Media' }]} />);
    expect(screen.getByRole('link', { name: 'Profile' })).toHaveAttribute('href', '#profile');
    expect(screen.getByRole('link', { name: 'Media' })).toHaveAttribute('href', '#media');
  });

  it('closes the lightbox on Escape and renders credits', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const photos = [{ src: 'x.png', alt: 'Moolavar photo', credit: 'Photo: someone' }];
    const { rerender } = render(<GalleryLightbox photos={photos} index={0} onClose={onClose} />);
    expect(screen.getByRole('dialog', { name: /moolavar photo/i })).toBeInTheDocument();
    expect(screen.getByText('Photo: someone')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
    rerender(<GalleryLightbox photos={null} index={null} onClose={onClose} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('navigates multiple photos with buttons and arrow keys (FR-85)', async () => {
    const user = userEvent.setup();
    const photos = [
      { src: 'a.png', alt: 'First' },
      { src: 'b.png', alt: 'Second' },
    ];
    let index = 0;
    const onNavigate = (delta) => { index = (index + delta + photos.length) % photos.length; };
    const { rerender } = render(
      <GalleryLightbox photos={photos} index={index} onClose={() => {}} onNavigate={onNavigate} />,
    );
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /next photo/i }));
    rerender(<GalleryLightbox photos={photos} index={index} onClose={() => {}} onNavigate={onNavigate} />);
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
    await user.keyboard('{ArrowRight}');
    rerender(<GalleryLightbox photos={photos} index={index} onClose={() => {}} onNavigate={onNavigate} />);
    expect(screen.getByText('1 / 2')).toBeInTheDocument(); // wrap-around
    await user.keyboard('{ArrowLeft}');
    rerender(<GalleryLightbox photos={photos} index={index} onClose={() => {}} onNavigate={onNavigate} />);
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });
});
