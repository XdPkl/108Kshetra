import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import GalleryLightbox from '../detail/GalleryLightbox.jsx';
import { useWikiImage } from '../../hooks/useWikiImage.js';

function Photo({ title, src }) {
  const image = useWikiImage(title, src);
  return image.src ? <img src={image.src} alt="Temple" /> : <span>No local photo</span>;
}

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe('local-only photo policy', () => {
  it('never fetches Wikipedia photos, including in the lightbox', () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    render(<><Photo title="Srirangam" /><GalleryLightbox photos={[{ wiki: 'Srirangam', alt: 'Temple' }]} index={0} onClose={() => {}} /></>);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('updates local photos immediately and clears them for remote or missing sources', () => {
    const { rerender } = render(<Photo src="photos/desam-6.jpg" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', `${import.meta.env.BASE_URL}photos/desam-6.jpg`);
    rerender(<Photo src="photos/desam-86.jpg" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', `${import.meta.env.BASE_URL}photos/desam-86.jpg`);
    rerender(<Photo src="https://cdn.sanity.io/external.jpg" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    rerender(<Photo title="Srirangam" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
