/**
 * AcharyaPortrait tests (round 38, PO mockup): arched stage render,
 * missing-photo grace, and the enlarged view's focus contract (focus
 * starts inside, Escape closes, focus returns to the portrait trigger).
 */
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AcharyaPortrait from '../AcharyaPortrait.jsx';

const PHOTO = { src: 'photos/saint-nathamuni.webp', alt: 'Portrait of Nathamuni' };

describe('AcharyaPortrait (round 38)', () => {
  it('renders the arched stage with caption and enlarge trigger', () => {
    render(<AcharyaPortrait name="Nathamuni" photo={PHOTO} />);
    expect(screen.getByRole('img', { name: 'Portrait of Nathamuni' }))
      .toHaveAttribute('src', expect.stringContaining('photos/saint-nathamuni.webp'));
    expect(screen.getByRole('button', { name: 'Enlarge Nathamuni portrait' })).toHaveAttribute('aria-haspopup', 'dialog');
    expect(screen.getByText('Nathamuni')).toBeInTheDocument(); // figcaption
  });

  it('renders nothing without a photo — the text layout stands alone', () => {
    const { container } = render(<AcharyaPortrait name="X" photo={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('opens the enlarged view on click, closes on Escape and returns focus to the trigger', () => {
    const { container } = render(<AcharyaPortrait name="Nathamuni" photo={PHOTO} />);
    const trigger = screen.getByRole('button', { name: 'Enlarge Nathamuni portrait' });
    trigger.focus();
    fireEvent.click(trigger);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(container.querySelector('.lightbox img')).toHaveAttribute('src', expect.stringContaining('saint-nathamuni'));
    // focus starts inside the dialog (the close control)
    expect(dialog.contains(document.activeElement)).toBe(true);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.activeElement).toBe(trigger);
  });
});
