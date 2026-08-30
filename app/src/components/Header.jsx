/**
 * Header — persistent site identity and navigation (FR-50/52). The Trip
 * entry carries a live count badge from the trip store (FR-79).
 */
import { NavLink, Link } from 'react-router-dom';
import { useTrip } from '../hooks/useTrip.js';

export default function Header() {
  const { count } = useTrip();
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/kshetrams', label: 'Browse' },
    { to: '/map', label: 'Map' },
    { to: '/trip', label: count > 0 ? `Trip · ${count}` : 'Trip' },
    { to: '/azhwars', label: 'Azhwars' },
    { to: '/about', label: 'Kshetra Tours' },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <span aria-hidden="true">◆</span> 108 Divya Kshetrams
        </Link>
        <nav aria-label="Primary" className="site-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
