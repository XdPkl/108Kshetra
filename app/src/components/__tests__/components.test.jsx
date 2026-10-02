/**
 * Component tests for shared components (UT-BRW/NAV/…).
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmptyState from '../EmptyState.jsx';
import KshetramCard from '../KshetramCard.jsx';
import Header from '../Header.jsx';
import { kshetrams } from '../../data/kshetrams.js';

const srirangam = kshetrams.find((k) => k.id === 'srirangam');

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

describe('Header', () => {
  it('renders brand and nav links', () => {
    render(<MemoryRouter initialEntries={['/']}><Header /></MemoryRouter>);
    expect(screen.getByRole('link', { name: /108 divya kshetrams/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: '108 Kshetras' })).toHaveAttribute('href', '/kshetrams');
    expect(screen.getByRole('link', { name: 'Azhwars' })).toHaveAttribute('href', '/azhwars');
  });

  it('marks the active route (UT-NAV-03)', () => {
    render(<MemoryRouter initialEntries={['/kshetrams']}><Header /></MemoryRouter>);
    const browse = screen.getByRole('link', { name: '108 Kshetras' });
    expect(browse.className).toMatch(/active/);
  });
});
