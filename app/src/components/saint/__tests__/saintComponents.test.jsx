/**
 * Branch-coverage tests for the shared saint template components
 * (saint template v3.1): fallbacks, optional fields and pending slots.
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SaintLegend from '../../../components/saint/SaintLegend.jsx';
import SaintMedia from '../../../components/saint/SaintMedia.jsx';
import SaintNarrative from '../../../components/saint/SaintNarrative.jsx';
import SaintSources from '../../../components/saint/SaintSources.jsx';
import SaintTimeline from '../../../components/saint/SaintTimeline.jsx';
import SaintVerse from '../../../components/saint/SaintVerse.jsx';
import Identification from '../../../components/saint/Identification.jsx';

describe('SaintLegend', () => {
  it('renders nothing without a legend or text', () => {
    const { container } = render(<SaintLegend legend={undefined} />);
    expect(container).toBeEmptyDOMElement();
    expect(render(<SaintLegend legend={{ title: 'T' }} />).container).toBeEmptyDOMElement();
  });
  it('falls back to the default title when absent', () => {
    render(<SaintLegend legend={{ text: 'A legend body.' }} />);
    expect(screen.getByRole('heading', { name: /legend highlight/i })).toBeInTheDocument();
    expect(screen.getByText('A legend body.')).toBeInTheDocument();
  });
});

describe('SaintTimeline', () => {
  it('renders nothing without entries and skips missing "when" labels', () => {
    expect(render(<SaintTimeline timeline={undefined} />).container).toBeEmptyDOMElement();
    expect(render(<SaintTimeline timeline={[]} />).container).toBeEmptyDOMElement();
    render(<SaintTimeline timeline={[{ event: 'An undated event' }]} />);
    expect(screen.getByText(/undated event/i)).toBeInTheDocument();
    expect(screen.queryByText('undefined:')).not.toBeInTheDocument();
  });
});

describe('SaintNarrative', () => {
  it('renders legacy plain paragraphs and headed blocks together', () => {
    render(<SaintNarrative items={[
      'A plain legacy paragraph.',
      { heading: 'A headed block', paragraphs: ['First.', 'Second.'] },
    ]} />);
    expect(screen.getByText('A plain legacy paragraph.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /headed block/i })).toBeInTheDocument();
    expect(screen.getByText('First.')).toBeInTheDocument();
  });
});

describe('SaintSources', () => {
  it('renders the fallback when sources are missing or empty', () => {
    render(<SaintSources sources={undefined} fallback={<p>No sources yet.</p>} />);
    expect(screen.getByText('No sources yet.')).toBeInTheDocument();
    render(<SaintSources sources={[]} fallback={<p>Empty fallback.</p>} />);
    expect(screen.getByText('Empty fallback.')).toBeInTheDocument();
  });
  it('lists sources when present', () => {
    render(<SaintSources sources={['Source A', 'Source B']} fallback={<p>x</p>} />);
    expect(screen.getByText('Source A')).toBeInTheDocument();
  });
});

describe('SaintVerse branches', () => {
  it('renders the pending slot when the original script is absent (B2 saints)', () => {
    render(<SaintVerse verse={{ work: 'A work', transliteration: 'Some translit' }} />);
    expect(screen.getByText(/original verse text pending/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /listen/i })).toHaveAttribute('href', expect.stringContaining('archive.org'));
  });
  it('renders meaning, significance and a curated audio link when present', () => {
    render(<SaintVerse verse={{
      tamil: 'தமிழ்', transliteration: 'Translit', meaning: 'A plain meaning.',
      significance: 'Why it matters', audio: 'https://example.org/recitation',
    }} />);
    expect(screen.getByText('A plain meaning.')).toBeInTheDocument();
    expect(screen.getByText(/why it matters/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /listen/i })).toHaveAttribute('href', 'https://example.org/recitation');
  });
  it('renders the theological commentary blocks', () => {
    render(<SaintVerse verse={{ transliteration: 'T', commentary: [{ heading: 'H1', text: 'C1' }] }} />);
    expect(screen.getByRole('heading', { name: /theological commentary/i })).toBeInTheDocument();
    expect(screen.getByText(/C1/)).toBeInTheDocument();
  });
  it('omits the listen link when no work or audio is given', () => {
    render(<SaintVerse verse={{ transliteration: 'T' }} />);
    expect(screen.queryByRole('link', { name: /listen/i })).not.toBeInTheDocument();
  });
});

describe('SaintMedia branches', () => {
  it('renders NotDocumented when visuals are absent or empty', () => {
    render(<SaintMedia visuals={undefined} />);
    expect(screen.getByText(/not yet documented/i)).toBeInTheDocument();
    render(<SaintMedia visuals={{ videoSearches: [], digitalTexts: [] }} />);
    expect(screen.getAllByText(/not yet documented/i).length).toBeGreaterThanOrEqual(1);
  });
  it('renders string iconography and skips empty structured sub-fields', () => {
    render(<SaintMedia visuals={{ iconography: 'A single description string.' }} />);
    expect(screen.getByText(/single description string/i)).toBeInTheDocument();
    render(<SaintMedia visuals={{ iconography: { posture: 'Seated.', idol: 'Idol text.' } }} />);
    expect(screen.getByText('Seated.')).toBeInTheDocument();
    expect(screen.getByText('Idol text.')).toBeInTheDocument();
    expect(screen.queryByText(/hand gestures/i)).not.toBeInTheDocument();
  });
});

describe('Identification', () => {
  it('renders nothing when every row is falsy', () => {
    const { container } = render(<Identification rows={[{ label: 'A', value: null }, { label: 'B', value: '' }]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
