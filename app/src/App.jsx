/**
 * App — router and page shell (FR-50). The map route (Leaflet) is
 * lazy-loaded so the initial bundle stays within the NFR-01 budget
 * (NFR-11 route-level code splitting).
 */
import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import BrowsePage from './pages/BrowsePage.jsx';
import KshetramDetailPage from './pages/KshetramDetailPage.jsx';
import AzhwarsPage from './pages/AzhwarsPage.jsx';
import TripPage from './pages/TripPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EmptyState from './components/EmptyState.jsx';

const MapPage = lazy(() => import('./pages/MapPage.jsx'));

function RouteFallback() {
  return (
    <div className="page route-fallback" role="status">
      Loading map…
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kshetrams" element={<BrowsePage />} />
          <Route path="/kshetram/:id" element={<KshetramDetailPage />} />
          <Route path="/azhwars" element={<AzhwarsPage />} />
          <Route
            path="/map"
            element={(
              <Suspense fallback={<RouteFallback />}>
                <MapPage />
              </Suspense>
            )}
          />
          <Route path="/trip" element={<TripPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={(
              <div className="page">
                <EmptyState
                  title="Page not found"
                  message="The page you are looking for does not exist."
                  action={<Link className="btn btn--primary" to="/">Go to Home</Link>}
                />
              </div>
            )}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
