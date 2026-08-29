/**
 * Component tests for shared components (UT-BRW/NAV/…).
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Badge from '../Badge.jsx';
import SectionHeading from '../SectionHeading.jsx';
import EmptyState from '../EmptyState.jsx';
import KshetramCard from '../KshetramCard.jsx';
import SearchFilterBar from '../SearchFilterBar.jsx';
import Header from '../Header.jsx';
import { kshetrams } from '../../data/kshetrams.js';

const srirangam = kshetrams.find((k) => k.id === 'srirangam');

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>Chola Nadu</Badge>);
    expect(screen.getByText('Chola Nadu')).toBeInTheDocument();
  });
});

describe('SectionHeading', () => {
  it('renders the title at the requested level with optional lead', () => {
    const { container } = render(<SectionHeading title="Featured" level={2} lead="lead text" />);
    expect(screen.getByRole('heading', { level: 2, name: 'Featured' })).toBeInTheDocument();
    expect(screen.getByText('lead text')).toBeInTheDocument();
    expect(container.querySelectorAll('h2')).toHaveLength(1);
  });
});

describe('EmptyState', () => {
  it('renders title, message and action with role=status', () => {
    render(<EmptyState title="Nothing here" message="try again" action={<button type="button">Reset</button>} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});

describe('KshetramCard', () => {
  it('renders kshetram content and links to its detail page (UT-NAV link)', () => {
    render(<MemoryRouter><KshetramCard kshetram={srirangam} /></MemoryRouter>);
    const link = screen.getByRole('link', { name: /srirangam/i });
    expect(link).toHaveAttribute('href', '/kshetram/srirangam');
    expect(screen.getByText(srirangam.tamilName)).toBeInTheDocument();
    expect(screen.getByText(srirangam.temple)).toBeInTheDocument();
  });
});

describe('SearchFilterBar', () => {
  const baseProps = {
    filters: { search: '', state: '', deityForm: '', region: '', azhwar: '' },
    stateOptions: [{ value: 'Kerala', label: 'Kerala' }],
    deityFormOptions: [],
    regionOptions: [],
    azhwarOptions: [{ value: 'andal', label: 'Andal' }],
  };

  it('reports filter changes by name and value', async () => {
    const user = userEvent.setup();
    const onFilterChange = vi.fn();
    render(
      <SearchFilterBar {...baseProps} onFilterChange={onFilterChange} onReset={vi.fn()} />,
    );
    await user.type(screen.getByLabelText(/search kshetrams/i), 'ra');
    expect(onFilterChange).toHaveBeenCalledWith('search', 'r');
    expect(onFilterChange).toHaveBeenCalledWith('search', 'a');
  });

  it('invokes onReset when the clear button is clicked', async () => {
    const user = userEvent.setup();
    const onReset = vi.fn();
    render(
      <SearchFilterBar {...baseProps} onFilterChange={vi.fn()} onReset={onReset} />,
    );
    await user.click(screen.getByRole('button', { name: /clear all/i }));
    expect(onReset).toHaveBeenCalledOnce();
  });

  it('hides the reset action when showReset is false', () => {
    render(
      <SearchFilterBar {...baseProps} showReset={false}
        onFilterChange={vi.fn()} onReset={vi.fn()} />,
    );
    expect(screen.queryByRole('button', { name: /clear all/i })).not.toBeInTheDocument();
  });
});

describe('Header', () => {
  it('renders brand and nav links', () => {
    render(<MemoryRouter initialEntries={['/']}><Header /></MemoryRouter>);
    expect(screen.getByRole('link', { name: /108 divya kshetrams/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Browse' })).toHaveAttribute('href', '/kshetrams');
    expect(screen.getByRole('link', { name: 'Azhwars' })).toHaveAttribute('href', '/azhwars');
  });

  it('marks the active route (UT-NAV-03)', () => {
    render(<MemoryRouter initialEntries={['/kshetrams']}><Header /></MemoryRouter>);
    const browse = screen.getByRole('link', { name: 'Browse' });
    expect(browse.className).toMatch(/active/);
  });
});
