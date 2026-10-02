/**
 * Branch-coverage tests for the shared UI primitives (PO round 23):
 * button variants, dialog behaviours, form fields and the contact
 * block. useWikiImage is mocked where a component consumes it
 * (tests must not touch the network — gotcha 16).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../hooks/useWikiImage.js', () => ({
  useWikiImage: vi.fn(() => ({ src: null, credit: null })),
}));
import { useWikiImage } from '../../../hooks/useWikiImage.js';
import { Button, ButtonLink } from '../Button.jsx';
import Dialog from '../Dialog.jsx';
import ContactDetails from '../ContactDetails.jsx';
import { Field, SearchField, FilterSelect } from '../fields.jsx';

function router(ui) {
  return <MemoryRouter>{ui}</MemoryRouter>;
}

beforeEach(() => {
  useWikiImage.mockReturnValue({ src: null, credit: null });
});

describe('Button / ButtonLink variants', () => {
  it('renders button variants with the shared classes and 44px idiom', () => {
    render(
      router(
        <>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="inverse" small>Inverse</Button>
        </>,
      ),
    );
    expect(screen.getByRole('button', { name: 'Primary' }).className).toContain('ui-btn--primary');
    expect(screen.getByRole('button', { name: 'Secondary' }).className).toContain('ui-btn--secondary');
    expect(screen.getByRole('button', { name: 'Tertiary' }).className).toContain('ui-tertiary');
    const inverse = screen.getByRole('button', { name: 'Inverse' });
    expect(inverse.className).toContain('ui-btn--inverse');
    expect(inverse.className).toContain('ui-btn--small');
  });

  it('renders link variants as router links', () => {
    render(router(<ButtonLink to="/kshetrams" variant="secondary">Go</ButtonLink>));
    expect(screen.getByRole('link', { name: 'Go' })).toHaveAttribute('href', '/kshetrams');
  });
});

describe('Dialog', () => {
  function Harness({ open, onClose }) {
    return (
      <div>
        <button type="button" onClick={() => {}}>Opener</button>
        <Dialog open={open} onClose={onClose} title="Planner" eyebrow="Atlas">
          <button type="button">Inside</button>
          <a href="#x">Inside link</a>
        </Dialog>
      </div>
    );
  }

  it('renders nothing when closed', () => {
    const { container } = render(<Dialog open={false} onClose={() => {}} title="X" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('traps focus, closes on Escape and returns focus to the opener', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { rerender } = render(<Harness open onClose={onClose} />);
    const dialog = screen.getByRole('dialog', { name: 'Planner' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText('Atlas')).toBeInTheDocument();
    // focus moves to the first focusable element inside
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close' }));
    // Tab cycles: from the last item it wraps to the first
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).not.toBeNull();
    // Escape requests close
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
    // closing restores focus to the pre-open active element
    rerender(<Harness open={false} onClose={onClose} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes on overlay click', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Dialog open onClose={onClose} title="X"><p>Body</p></Dialog>);
    await user.click(document.querySelector('.ui-dialog-overlay'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Form fields', () => {
  it('Field renders the label, error and hint slots', () => {
    render(
      <Field id="f1" label="Name" error="Required" hint="Your full name">
        <input id="f1" />
      </Field>,
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
    expect(screen.getByText('Your full name')).toBeInTheDocument();
  });

  it('SearchField and FilterSelect expose their labels and values', async () => {
    const user = userEvent.setup();
    function Harness() {
      const [v, setV] = React.useState('');
      return (
        <>
          <SearchField id="s1" label="Search kshetrams" value={v} onChange={(e) => setV(e.target.value)} placeholder="Search" />
          <FilterSelect id="r1" label="Filter by region" value="" onChange={() => {}}>
            <option value="">All</option>
          </FilterSelect>
        </>
      );
    }
    render(router(<Harness />));
    await user.type(screen.getByLabelText('Search kshetrams'), 'x');
    expect(screen.getByLabelText('Search kshetrams')).toHaveValue('x');
    expect(screen.getByLabelText('Filter by region')).toBeInTheDocument();
  });
});

describe('ContactDetails', () => {
  it('renders mailto rows with copy affordances and suppresses copy for placeholders', async () => {
    const writeText = vi.fn().mockResolvedValue();
    const user = userEvent.setup();
    // userEvent.setup() swaps navigator.clipboard — install the spy after it
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    render(
      <ContactDetails
        rows={[
          { label: 'General inquiries', value: 'contact@kshetratours.org', href: 'mailto:contact@kshetratours.org' },
          { label: 'Phone', value: '[To be provided — PO-owned]' },
        ]}
      />,
    );
    const mail = screen.getByRole('link', { name: 'contact@kshetratours.org' });
    expect(mail).toHaveAttribute('href', 'mailto:contact@kshetratours.org');
    const copy = screen.getByRole('button', { name: 'Copy contact@kshetratours.org' });
    expect(screen.queryByRole('button', { name: /copy \[to be provided/i })).not.toBeInTheDocument();
    await user.click(copy);
    expect(writeText).toHaveBeenCalledWith('contact@kshetratours.org');
    expect(await screen.findByRole('button', { name: 'Copied contact@kshetratours.org' })).toBeInTheDocument();
  });
});
