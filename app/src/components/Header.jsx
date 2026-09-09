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
    { to: '/acharyas', label: 'Acharyas' },
    { to: '/about', label: 'Kshetra Tours' },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <svg className="site-header__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="2.2" r="1.3" />
            <path d="M9.6 4.7h4.8l-.5 3H10.1l-.5-3z" />
            <path d="M7.4 8.3h9.2l-.6 3.6H8l-.6-3.6z" />
            <path d="M5 12.5h14l-.8 4.1H5.8L5 12.5z" />
            <path d="M3.4 17.2h17.2v3.6H3.4z" />
            <path className="mark-door" d="M11.2 17.9h1.6v2.9h-1.6z" />
          </svg>
          108 Divya Kshetrams
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
