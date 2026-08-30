/**
 * MiniMap — small lazy-loaded location map on the detail page (FR-82).
 * The Leaflet chunk loads only when a detail page is opened (NFR-11).
 * @param {object} props
 * @param {[number, number]} props.coords - [lat, lng]
 * @param {string} props.label            - accessible label (kshetram name)
 */
import { Suspense, lazy } from 'react';

const MiniMapInner = lazy(() => import('./MiniMapInner.jsx'));

export default function MiniMap({ coords, label }) {
  return (
    <Suspense fallback={<div className="mini-map mini-map--loading" role="status">Loading map…</div>}>
      <MiniMapInner coords={coords} label={label} />
    </Suspense>
  );
}
