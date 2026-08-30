/**
 * Component tests for the yatra toolkit UI (US-TRK-02/03, US-TRP-01/02,
 * US-MAP-02): progress banner, visited badge/toggle, trip controls, card
 * integration and the region legend.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ProgressBanner from '../../components/ProgressBanner.jsx';
import VisitedToggle from '../../components/VisitedToggle.jsx';
import TripControls from '../../components/TripControls.jsx';
import RegionLegend from '../../components/RegionLegend.jsx';
import KshetramCard from '../../components/KshetramCard.jsx';
import { resetVisited, toggleVisited } from '../../state/visited.js';
import { clearTrip, addToTrip } from '../../state/trip.js';

beforeEach(() => {
  window.localStorage.clear();
  resetVisited();
  clearTrip();
});

describe('ProgressBanner (UT-TRK-03/04)', () => {
  const labelMatching = (pattern) => (content, el) =>
    el?.classList?.contains('progress-banner__label') && pattern.test(el.textContent);

  it('shows count and progressbar semantics', () => {
    render(<ProgressBanner total={108} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    expect(screen.getByText(labelMatching(/0 of 108 kshetrams visited/))).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reset progress/i })).not.toBeInTheDocument();
  });

  it('resets after confirmation and keeps marks when dismissed', async () => {
    const user = userEvent.setup();
    toggleVisited('srirangam');
    render(<ProgressBanner total={108} />);
    expect(screen.getByText(labelMatching(/1 of 108 kshetrams visited/))).toBeInTheDocument();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    await user.click(screen.getByRole('button', { name: /reset progress/i }));
    expect(screen.getByText(labelMatching(/1 of 108 kshetrams visited/))).toBeInTheDocument();
    confirmSpy.mockReturnValue(true);
    await user.click(screen.getByRole('button', { name: /reset progress/i }));
    expect(screen.getByText(labelMatching(/0 of 108 kshetrams visited/))).toBeInTheDocument();
    confirmSpy.mockRestore();
  });
});

describe('VisitedToggle (UT-TRK-02)', () => {
  it('toggles with aria-pressed state', async () => {
    const user = userEvent.setup();
    render(<VisitedToggle id="srirangam" />);
    const button = screen.getByRole('button', { name: /mark as visited/i });
    expect(button).toHaveAttribute('aria-pressed', 'false');
    await user.click(button);
    expect(screen.getByRole('button', { name: /visited/i })).toHaveAttribute('aria-pressed', 'true');
  });
});

describe('TripControls (UT-TRP-01)', () => {
  it('toggles add/remove without duplicates', async () => {
    const user = userEvent.setup();
    render(<TripControls id="srirangam" />);
    await user.click(screen.getByRole('button', { name: /add to trip/i }));
    expect(screen.getByRole('button', { name: /remove from trip/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /remove from trip/i }));
    expect(screen.getByRole('button', { name: /add to trip/i })).toBeInTheDocument();
  });
});

describe('KshetramCard integration (FR-72/79)', () => {
  const k = {
    id: 'srirangam', name: 'Srirangam', tamilName: 'திருவரங்கம்',
    temple: 'Sri Ranganathaswamy Temple', place: 'Srirangam, Trichy', state: 'Tamil Nadu',
    deity: 'Ranganatha', region: 'Chola Nadu',
  };

  it('shows the visited badge and a trip button outside the card link', async () => {
    const user = userEvent.setup();
    toggleVisited('srirangam');
    render(<MemoryRouter><KshetramCard kshetram={k} /></MemoryRouter>);
    expect(screen.getByText(/visited/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /srirangam/i }))
      .toHaveAttribute('href', '/kshetram/srirangam');
    await user.click(screen.getByRole('button', { name: /add to trip/i }));
    expect(screen.getByRole('button', { name: /remove from trip/i })).toBeInTheDocument();
  });
});

describe('RegionLegend (UT-MAP-02)', () => {
  it('lists every region with a visited sample', () => {
    render(
      <RegionLegend
        colors={{ 'Chola Nadu': '#B34700', 'Pandya Nadu': '#1F6E43' }}
        regions={['Chola Nadu', 'Pandya Nadu']}
      />,
    );
    expect(screen.getByText('Chola Nadu')).toBeInTheDocument();
    expect(screen.getByText('Pandya Nadu')).toBeInTheDocument();
    expect(screen.getByText('Visited')).toBeInTheDocument();
  });
});

describe('PageActions share fallback (FR-69)', () => {
  it('copies the link to the clipboard when the share sheet is unavailable', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    const PageActions = (await import('../PageActions.jsx')).default;
    render(<PageActions />);
    await user.click(screen.getByRole('button', { name: /share/i }));
    expect(writeText).toHaveBeenCalledWith(window.location.href);
    expect(await screen.findByText(/link copied/i)).toBeInTheDocument();
  });
});
