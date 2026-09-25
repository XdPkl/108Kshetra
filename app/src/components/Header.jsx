/**
 * Header — zip-parity global shell (UXD v3.0 Gate 1). Brand tile with micro-
 * eyebrow, icon pill nav with the "108 Temples" region mega-dropdown and the
 * Kshetra Tours split pill, darshan counter, and a mobile drawer. Navigation
 * is real router links; region entries deep-link Browse via ?region=.
 */
import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Compass,
  MapPin,
  Route as RouteIcon,
  GraduationCap,
  Award,
  ChevronDown,
  CheckCircle2,
  Calendar,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  User,
} from 'lucide-react';
import { kshetrams } from '../data/kshetrams.js';
import { ABOUT } from '../data/about.js';
import { SITE_COPY } from '../data/siteCopy.js';
import { TempleGopuramIcon, ThirumanIcon, LotusIcon } from './SacredIcons.jsx';
import { useTrip } from '../hooks/useTrip.js';
import { useVisited } from '../hooks/useVisited.js';

const CEO_NAME = ABOUT.ceo.name;

/** Region dropdown rows — names/highlights from site copy, counts computed from the live dataset. */
const REGION_ROWS = SITE_COPY.header.regionRows;

const pillBase = 'px-2.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5';
const pillIdle = 'hover:bg-[#B34700]/10 hover:text-[#B34700] text-[#332417]';
const pillActive = 'bg-[#B34700]/12 text-[#7A2E00] font-bold ring-1 ring-[#B34700]/30 shadow-2xs';

export default function Header() {
  const { count: tripCount } = useTrip();
  const { visitedIds } = useVisited();
  const visitedCount = visitedIds.length;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [templeDropdownOpen, setTempleDropdownOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);

  const templeDropdownRef = useRef(null);
  const toursDropdownRef = useRef(null);

  const regionCounts = useMemo(() => {
    const counts = {};
    kshetrams.forEach((k) => {
      counts[k.region] = (counts[k.region] ?? 0) + 1;
    });
    return counts;
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (templeDropdownRef.current && !templeDropdownRef.current.contains(e.target)) {
        setTempleDropdownOpen(false);
      }
      if (toursDropdownRef.current && !toursDropdownRef.current.contains(e.target)) {
        setToursDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setTempleDropdownOpen(false);
        setToursDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeAll = () => {
    setTempleDropdownOpen(false);
    setToursDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const goRegion = (region) => {
    closeAll();
    navigate(`/kshetrams?region=${encodeURIComponent(region)}`);
  };

  const isHomeActive = pathname === '/';
  const isBrowseActive = pathname.startsWith('/kshetram');
  const isMapActive = pathname.startsWith('/map');
  const isTripActive = pathname.startsWith('/trip');
  const isAzhwarsActive = pathname.startsWith('/azhwar');
  const isAcharyasActive = pathname.startsWith('/acharya');
  const isAboutActive = pathname.startsWith('/about');

  const drawerItem = 'w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium';
  const drawerIdle = 'text-[#332417] hover:bg-[#FAF2E3]';
  const drawerActive = 'bg-[#B34700]/15 text-[#B34700] font-bold';

  return (
    <header className="site-header sticky top-0 z-50 bg-[#FAF2E3]/95 backdrop-blur-md border-b border-[#E3D2AE] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2 lg:gap-4">

        {/* ================= 1. BRAND LOGO & SACRED TITLE ================= */}
        <Link
          to="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 shrink-0 text-left group"
          title="108 Divya Kshetrams — Sanctuary Home"
        >
          <div className="p-1 rounded-lg bg-[#FAF2E3] border border-[#C99A2E]/50 group-hover:border-[#C99A2E] shadow-2xs group-hover:shadow-xs transition-all">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#C99A2E" aria-hidden="true" focusable="false">
              <circle cx="12" cy="2.2" r="1.3" />
              <path d="M9.6 4.7h4.8l-.5 3H10.1l-.5-3z" />
              <path d="M7.4 8.3h9.2l-.6 3.6H8l-.6-3.6z" />
              <path d="M5 12.5h14l-.8 4.1H5.8L5 12.5z" />
              <path d="M3.4 17.2h17.2v3.6H3.4z" />
              <path fill="#96731F" d="M11.2 17.9h1.6v2.9h-1.6z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[1.28rem] sm:text-[1.38rem] font-bold text-[#7A2E00] leading-none whitespace-nowrap group-hover:text-[#B34700] transition-colors">
                108 Divya Kshetrams
              </span>
              <ThirumanIcon className="w-3.5 h-4.5 hidden sm:inline-block opacity-85 shrink-0" />
            </div>
            <span className="text-[9.5px] uppercase font-bold tracking-widest text-[#B34700]/90">
              Nalayira Divya Prabandham
            </span>
          </div>
        </Link>

        {/* ================= 2. DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px] text-[#332417]" aria-label="Primary">

          {/* A. HOME */}
          <NavLink
            to="/"
            end
            onClick={closeAll}
            className={`${pillBase} ${isHomeActive ? pillActive : pillIdle}`}
            title="Overview & Sanctuary"
          >
            <TempleGopuramIcon className="w-3.5 h-3.5" />
            <span>Home</span>
          </NavLink>

          {/* B. 108 TEMPLES (REGION MEGA-DROPDOWN) */}
          <div
            ref={templeDropdownRef}
            className="relative"
            onMouseEnter={() => setTempleDropdownOpen(true)}
            onMouseLeave={() => setTempleDropdownOpen(false)}
          >
            <div className="flex items-center">
              <NavLink
                to="/kshetrams"
                onClick={closeAll}
                className={`pl-2.5 pr-1 py-1.5 rounded-l-full font-medium transition-all flex items-center gap-1.5 ${isBrowseActive ? pillActive : pillIdle}`}
                title="Browse All 108 Divya Desams"
              >
                <Compass className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                <span>108 Temples</span>
              </NavLink>

              <button
                type="button"
                onClick={() => setTempleDropdownOpen((prev) => !prev)}
                className={`pr-2 py-1.5 rounded-r-full font-medium transition-all ${isBrowseActive ? 'bg-[#B34700]/12 text-[#7A2E00] ring-1 ring-[#B34700]/30' : 'hover:bg-[#B34700]/10 hover:text-[#B34700] text-[#332417]'}`}
                aria-label="Toggle Regional Temples Dropdown"
                aria-expanded={templeDropdownOpen}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${templeDropdownOpen ? 'rotate-180 text-[#B34700]' : 'text-[#66523D]'}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Temples Dropdown Menu */}
            {templeDropdownOpen && (
              <div className="absolute left-0 mt-1 w-72 rounded-2xl bg-[#FFFDF7] border border-[#C99A2E]/40 shadow-xl py-2.5 z-50 text-left">
                <div className="px-3.5 py-1.5 border-b border-[#F0E3C6] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A2E00]">
                    <Compass className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                    <span>{SITE_COPY.header.templesDropdown.heading}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#FAF2E3] text-[#96731F] px-2 py-0.5 rounded-full border border-[#C99A2E]/30">
                    {SITE_COPY.header.templesDropdown.regionsBadge}
                  </span>
                </div>

                <div className="py-1">
                  <Link
                    to="/kshetrams"
                    onClick={closeAll}
                    className="w-full px-3.5 py-2 text-xs flex items-center justify-between text-[#332417] hover:bg-[#FAF2E3] transition-colors font-bold group"
                  >
                    <span className="group-hover:text-[#B34700] flex items-center gap-1.5">
                      <span>{SITE_COPY.header.templesDropdown.browseAll}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-[#96731F] bg-[#FAF2E3] group-hover:bg-[#C99A2E]/20 px-2 py-0.5 rounded-md">
                      {SITE_COPY.header.templesDropdown.totalBadge}
                    </span>
                  </Link>

                  <div className="h-[1px] bg-[#F0E3C6] my-1 mx-2" />

                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#96731F]">
                    {SITE_COPY.header.templesDropdown.filterBy}
                  </div>

                  {REGION_ROWS.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => goRegion(r.value)}
                      className="w-full px-3.5 py-1.5 text-xs flex items-center justify-between text-[#57422E] hover:bg-[#FAF2E3] hover:text-[#7A2E00] transition-colors group"
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-semibold group-hover:text-[#B34700]">
                          {r.name}
                        </span>
                        <span className="text-[10px] text-[#8C765C]">
                          {r.highlight}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#96731F] bg-[#FAF2E3] px-1.5 py-0.5 rounded-md border border-[#EBDDBE]">
                        {regionCounts[r.value] ?? 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* C. SACRED MAP */}
          <NavLink
            to="/map"
            onClick={closeAll}
            className={`${pillBase} ${isMapActive ? pillActive : pillIdle}`}
            title="Interactive Map of all 108 Shrines"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>Map</span>
          </NavLink>

          {/* D. MY YATRA (LIVE COUNT BADGE) */}
          <NavLink
            to="/trip"
            onClick={closeAll}
            className={`${pillBase} ${isTripActive ? pillActive : pillIdle}`}
            title="My Personal Yatra Itinerary"
          >
            <RouteIcon className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>My Yatra</span>
            {tripCount > 0 && (
              <span
                className={`inline-flex items-center justify-center min-w-[1.2rem] h-[1.2rem] px-1 text-[0.7rem] font-bold rounded-full transition-transform ${
                  isTripActive ? 'bg-[#B34700] text-[#FFFDF7]' : 'bg-[#C99A2E] text-[#4A3005]'
                }`}
              >
                {tripCount}
              </span>
            )}
          </NavLink>

          {/* GURU PARAMPARA DIVIDER */}
          <div className="h-4 w-[1px] bg-[#E3D2AE] mx-1" />

          {/* E. 12 AZHWARS */}
          <NavLink
            to="/azhwars"
            onClick={closeAll}
            className={`${pillBase} ${isAzhwarsActive ? pillActive : pillIdle}`}
            title="12 Holy Azhwars & Divya Prabandham"
          >
            <LotusIcon className="w-3.5 h-3.5" />
            <span>Azhwars</span>
          </NavLink>

          {/* F. ACHARYAS */}
          <NavLink
            to="/acharyas"
            onClick={closeAll}
            className={`${pillBase} ${isAcharyasActive ? pillActive : pillIdle}`}
            title="Sri Vaishnava Guru Parampara"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>Acharyas</span>
          </NavLink>

          {/* G. KSHETRA TOURS (FLAGSHIP PILL) */}
          <div
            ref={toursDropdownRef}
            className="relative ml-1"
            onMouseEnter={() => setToursDropdownOpen(true)}
            onMouseLeave={() => setToursDropdownOpen(false)}
          >
            <div
              className={`flex items-center rounded-full border transition-all ${
                isAboutActive
                  ? 'bg-gradient-to-r from-[#B34700] via-[#963700] to-[#7A2E00] text-[#FFFDF7] border-[#C99A2E] shadow-sm'
                  : 'bg-gradient-to-r from-[#FAF2E3] to-[#FFFDF7] hover:border-[#C99A2E] border-[#C99A2E]/50 text-[#7A2E00] shadow-2xs'
              }`}
            >
              <NavLink
                to="/about"
                onClick={closeAll}
                className="pl-3 pr-1.5 py-1.5 font-bold flex items-center gap-1.5"
                title="Kshetra Tours — About the digital archive & pilgrimage trust"
              >
                <Award
                  className={`w-3.5 h-3.5 ${isAboutActive ? 'text-[#E2C47C]' : 'text-[#B34700]'}`}
                  aria-hidden="true"
                />
                <span>Kshetra Tours</span>
                <span
                  className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-full tracking-wider ${
                    isAboutActive ? 'bg-[#FFFDF7]/20 text-[#FFFDF7]' : 'bg-[#C99A2E]/20 text-[#7A2E00]'
                  }`}
                >
                  Guided Yatras
                </span>
              </NavLink>

              <button
                type="button"
                onClick={() => setToursDropdownOpen((prev) => !prev)}
                className="pr-2.5 py-1.5"
                aria-label="Toggle Kshetra Tours Menu"
                aria-expanded={toursDropdownOpen}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${toursDropdownOpen ? 'rotate-180' : ''} ${isAboutActive ? 'text-[#E2C47C]' : 'text-[#7A2E00]'}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Kshetra Tours Dropdown Menu */}
            {toursDropdownOpen && (
              <div className="absolute right-0 mt-1 w-80 rounded-2xl bg-[#FFFDF7] border border-[#C99A2E]/40 shadow-xl py-2.5 z-50 text-left">
                <div className="px-4 py-2 border-b border-[#F0E3C6]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A2E00]">
                    <Award className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                    <span>{SITE_COPY.header.toursDropdown.heading}</span>
                  </div>
                  <p className="text-[11px] text-[#66523D] mt-0.5">
                    {SITE_COPY.header.toursDropdown.subtitle}
                  </p>
                </div>

                <div className="py-1">
                  <Link
                    to="/about#ceo-leadership"
                    onClick={closeAll}
                    className="w-full px-4 py-2 text-xs flex items-start gap-2.5 text-[#332417] hover:bg-[#FAF2E3] transition-colors group"
                  >
                    <div className="p-1 rounded-md bg-[#FAF2E3] border border-[#C99A2E]/40 group-hover:border-[#B34700] text-[#B34700] mt-0.5">
                      <User className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-[#7A2E00] group-hover:text-[#B34700] flex items-center gap-1.5">
                        <span>{SITE_COPY.header.toursDropdown.items[0].title}</span>
                        <span className="text-[9.5px] bg-[#C99A2E]/20 text-[#7A2E00] px-1.5 py-0.2 rounded font-semibold">
                          {CEO_NAME}
                        </span>
                      </span>
                      <span className="text-[11px] text-[#66523D]">
                        {SITE_COPY.header.toursDropdown.items[0].subtitle}
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/about#guided-yatras"
                    onClick={closeAll}
                    className="w-full px-4 py-2 text-xs flex items-start gap-2.5 text-[#332417] hover:bg-[#FAF2E3] transition-colors group"
                  >
                    <div className="p-1 rounded-md bg-[#FAF2E3] border border-[#C99A2E]/40 group-hover:border-[#B34700] text-[#B34700] mt-0.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-[#7A2E00] group-hover:text-[#B34700]">
                        {SITE_COPY.header.toursDropdown.items[1].title}
                      </span>
                      <span className="text-[11px] text-[#66523D]">
                        {SITE_COPY.header.toursDropdown.items[1].subtitle}
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/about#circuits"
                    onClick={closeAll}
                    className="w-full px-4 py-2 text-xs flex items-start gap-2.5 text-[#332417] hover:bg-[#FAF2E3] transition-colors group"
                  >
                    <div className="p-1 rounded-md bg-[#FAF2E3] border border-[#C99A2E]/40 group-hover:border-[#B34700] text-[#B34700] mt-0.5">
                      <RouteIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-[#7A2E00] group-hover:text-[#B34700]">
                        {SITE_COPY.header.toursDropdown.items[2].title}
                      </span>
                      <span className="text-[11px] text-[#66523D]">
                        {SITE_COPY.header.toursDropdown.items[2].subtitle}
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/about#archive"
                    onClick={closeAll}
                    className="w-full px-4 py-2 text-xs flex items-start gap-2.5 text-[#332417] hover:bg-[#FAF2E3] transition-colors group"
                  >
                    <div className="p-1 rounded-md bg-[#FAF2E3] border border-[#C99A2E]/40 group-hover:border-[#B34700] text-[#B34700] mt-0.5">
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-[#7A2E00] group-hover:text-[#B34700]">
                        {SITE_COPY.header.toursDropdown.items[3].title}
                      </span>
                      <span className="text-[11px] text-[#66523D]">
                        {SITE_COPY.header.toursDropdown.items[3].subtitle}
                      </span>
                    </div>
                  </Link>

                  <div className="h-[1px] bg-[#F0E3C6] my-1 mx-3" />

                  {/* Inquire Desk */}
                  <Link
                    to="/about#contact-desk"
                    onClick={closeAll}
                    className="w-full px-4 py-2 text-xs flex items-center justify-between text-[#7A2E00] hover:bg-[#FAF2E3] font-bold group"
                  >
                    <span className="flex items-center gap-1.5 group-hover:text-[#B34700]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                      <span>{SITE_COPY.header.toursDropdown.inquire}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B34700] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ================= 3. RIGHT UTILITIES ================= */}
        <div className="flex items-center gap-2">

          {/* Darshan Counter Pill (md+) */}
          {visitedCount > 0 && (
            <Link
              to="/"
              onClick={closeAll}
              className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF2E3] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#C99A2E] shadow-2xs transition-all"
              title={`${visitedCount} of 108 Divya Desams Visited`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
              <span>
                <strong>{visitedCount}</strong>/108 Darshans
              </span>
            </Link>
          )}

          {/* Quick Trip button on mobile */}
          <Link
            to="/trip"
            onClick={closeAll}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#B34700]/10 text-[#7A2E00] text-xs font-semibold lg:hidden"
            title="View Itinerary"
          >
            <RouteIcon className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>Trip</span>
            <span className="min-w-[1.1rem] h-[1.1rem] px-1 inline-flex items-center justify-center text-[0.65rem] font-bold bg-[#C99A2E] text-[#4A3005] rounded-full">
              {tripCount}
            </span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#7A2E00] hover:bg-[#B34700]/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Decorative Gold Border Gradient */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent"></div>

      {/* ================= 4. MOBILE NAVIGATION DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b border-[#E3D2AE] px-4 py-4 shadow-xl space-y-4 max-h-[85vh] overflow-y-auto">

          {/* Mobile Summary Status Card */}
          <div className="p-3 rounded-xl bg-[#FAF2E3] border border-[#C99A2E]/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ThirumanIcon className="w-3.5 h-4.5" />
              <div>
                <p className="font-bold text-[#7A2E00] leading-tight">{SITE_COPY.header.drawer.summaryTitle}</p>
                <p className="text-[10px] text-[#66523D]">{SITE_COPY.header.drawer.summarySubtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold">
              <span className="px-2 py-0.5 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/30 text-[#7A2E00]">
                {visitedCount}{SITE_COPY.header.drawer.visitedLabel}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#B34700] text-[#FFFDF7]">
                {tripCount} {SITE_COPY.header.drawer.tripLabel}
              </span>
            </div>
          </div>

          {/* Group 1: Sacred Shrines */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#96731F] px-2 mb-1">
              {SITE_COPY.header.drawer.shrinesGroup}
            </div>

            <Link to="/" onClick={closeAll} className={`${drawerItem} ${isHomeActive ? drawerActive : drawerIdle}`}>
              <TempleGopuramIcon className="w-4 h-4" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">Home Sanctuary</span>
                <span className="text-[10px] text-[#66523D]">Overview, stats &amp; featured temples</span>
              </div>
            </Link>

            <Link to="/kshetrams" onClick={closeAll} className={`${drawerItem} ${isBrowseActive ? drawerActive : drawerIdle}`}>
              <Compass className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">108 Temples (Browse All)</span>
                <span className="text-[10px] text-[#66523D]">Filter by 7 regions, deity &amp; posture</span>
              </div>
            </Link>

            {/* Quick Regional Chips for Mobile */}
            <div className="pl-6 pt-1 pb-1.5 flex flex-wrap gap-1.5">
              {REGION_ROWS.slice(0, 6).map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => goRegion(r.value)}
                  className="px-2.5 py-1 text-[11px] rounded-lg bg-[#FAF2E3] hover:bg-[#C99A2E]/20 text-[#7A2E00] border border-[#C99A2E]/40 font-medium"
                >
                  {r.name}
                </button>
              ))}
            </div>

            <Link to="/map" onClick={closeAll} className={`${drawerItem} ${isMapActive ? drawerActive : drawerIdle}`}>
              <MapPin className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">Sacred Map</span>
                <span className="text-[10px] text-[#66523D]">Geographical shrine routing</span>
              </div>
            </Link>
          </div>

          {/* Group 2: Personal Yatra Itinerary */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#96731F] px-2 mb-1">
              {SITE_COPY.header.drawer.plannerGroup}
            </div>

            <Link
              to="/trip"
              onClick={closeAll}
              className={`${drawerItem} justify-between ${isTripActive ? drawerActive : drawerIdle}`}
            >
              <div className="flex items-center gap-2.5">
                <RouteIcon className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold">My Yatra Route</span>
                  <span className="text-[10px] text-[#66523D]">Personal checklist &amp; distances</span>
                </div>
              </div>
              <span className="min-w-[1.2rem] h-[1.2rem] px-1.5 inline-flex items-center justify-center text-[0.7rem] font-bold bg-[#C99A2E] text-[#4A3005] rounded-full">
                {tripCount}
              </span>
            </Link>
          </div>

          {/* Group 3: Guru Parampara */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#96731F] px-2 mb-1">
              {SITE_COPY.header.drawer.lineageGroup}
            </div>

            <Link to="/azhwars" onClick={closeAll} className={`${drawerItem} ${isAzhwarsActive ? drawerActive : drawerIdle}`}>
              <LotusIcon className="w-4 h-4" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">12 Azhwars</span>
                <span className="text-[10px] text-[#66523D]">Divya Prabandham mystic saints</span>
              </div>
            </Link>

            <Link to="/acharyas" onClick={closeAll} className={`${drawerItem} ${isAcharyasActive ? drawerActive : drawerIdle}`}>
              <GraduationCap className="w-4 h-4 text-[#B34700]" aria-hidden="true" />
              <div className="flex flex-col text-left">
                <span className="font-semibold">Revered Acharyas</span>
                <span className="text-[10px] text-[#66523D]">Sri Ramanuja, Desika &amp; Sampradaya preceptors</span>
              </div>
            </Link>
          </div>

          {/* Group 4: Kshetra Tours */}
          <div className="space-y-1 p-2.5 rounded-2xl bg-gradient-to-br from-[#FAF2E3] to-[#FFFDF7] border-2 border-[#C99A2E]/50">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B34700]">
                {SITE_COPY.header.drawer.toursGroup}
              </span>
              <span className="text-[10px] font-bold bg-[#C99A2E]/25 text-[#7A2E00] px-2 py-0.5 rounded-full">
                {SITE_COPY.header.drawer.toursBadge}
              </span>
            </div>

            <Link
              to="/about"
              onClick={closeAll}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-bold ${isAboutActive ? 'bg-[#B34700] text-[#FFFDF7]' : 'text-[#7A2E00] hover:bg-[#C99A2E]/15'}`}
            >
              <Award className="w-4 h-4 shrink-0 text-[#B34700]" aria-hidden="true" />
              <div className="flex flex-col text-left">
                <span>{SITE_COPY.header.drawer.toursOverview}</span>
                <span className="text-[10px] opacity-85">{SITE_COPY.header.drawer.toursOverviewSub}</span>
              </div>
            </Link>

            <div className="pt-1 space-y-1">
              <Link
                to="/about#ceo-leadership"
                onClick={closeAll}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#7A2E00] hover:bg-[#FAF2E3]"
              >
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                  <span>{SITE_COPY.header.toursDropdown.items[0].title}</span>
                </div>
                <span className="text-[10px] text-[#96731F]">{CEO_NAME}</span>
              </Link>

              <Link
                to="/about#guided-yatras"
                onClick={closeAll}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#7A2E00] hover:bg-[#FAF2E3]"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                  <span>{SITE_COPY.header.drawer.departures}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#B34700]" aria-hidden="true" />
              </Link>

              <Link
                to="/about#circuits"
                onClick={closeAll}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#7A2E00] hover:bg-[#FAF2E3]"
              >
                <div className="flex items-center gap-2">
                  <RouteIcon className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                  <span>{SITE_COPY.header.drawer.circuits}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#B34700]" aria-hidden="true" />
              </Link>

              <Link
                to="/about#sanctum-etiquette"
                onClick={closeAll}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#7A2E00] hover:bg-[#FAF2E3]"
              >
                <div className="flex items-center gap-2">
                  <ThirumanIcon className="w-3 h-4" />
                  <span>{SITE_COPY.header.drawer.etiquette}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#B34700]" aria-hidden="true" />
              </Link>

              <Link
                to="/about#contact-desk"
                onClick={closeAll}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#B34700] hover:bg-[#FAF2E3]"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
                  <span>{SITE_COPY.header.drawer.inquireDesk}</span>
                </div>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
