/**
 * Header — persistent site identity and navigation (FR-50/52).
 */
import { NavLink, Link } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/kshetrams', label: 'Browse' },
  { to: '/azhwars', label: 'Azhwars' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <span aria-hidden="true">◆</span> 108 Divya Kshetrams
        </Link>
        <nav aria-label="Primary" className="site-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
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
