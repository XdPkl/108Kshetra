/**
 * App — router and page shell (FR-50).
 */
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import BrowsePage from './pages/BrowsePage.jsx';
import KshetramDetailPage from './pages/KshetramDetailPage.jsx';
import AzhwarsPage from './pages/AzhwarsPage.jsx';
import EmptyState from './components/EmptyState.jsx';

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
