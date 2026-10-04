/**
 * AboutPage — "About Kshetra Tours", option-1 restyle (PO round 29).
 * The page leaves the `.dir` directory theme for the /kshetrams design
 * system (Cormorant display headings, Mukta Malar body, gold #96731F
 * actions on #FFFDF7 cards with the #C99A2E/45 border, 300ms 4px lift).
 *
 * Structure: two-column hero (copy + the shared gopuram illustration and
 * the Browse header quote) → a sticky section navigation (lg+ only, so
 * mobile never carries two sticky bars; IntersectionObserver scroll-spy,
 * skipped in jsdom) → open editorial purpose section → guided-yatras
 * intro with the three service themes as compact rows → six regional
 * circuit cards in a 1/2/3-column grid (first row shown; "Explore all
 * regional circuits" reveals the rest, aria-expanded) → founder desk
 * (concise biography, full biography + verified pillars behind a
 * disclosure, quotation aside, admin-gated portrait unchanged) → the
 * single authoritative contact block → etiquette accordions. Section ids
 * are unchanged (archive / guided-yatras / circuits / ceo-leadership /
 * contact-desk / sanctum-etiquette) so the header dropdown deep links
 * keep working.
 *
 * The inquiry dialog keeps its integration (local reference, no server):
 * name + at least one contact method required — labels now say so (only
 * the name carries the asterisk). Circuit titles render without the
 * decorative ordinal prefix; dataset values render verbatim. Data-driven
 * from src/data/about.js + site-copy.
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Route as RouteIcon,
  Upload,
  Camera,
} from 'lucide-react';
import { ABOUT } from '../data/about.js';
import { SITE_COPY } from '../data/siteCopy.js';
import { assetUrl } from '../utils/assetUrl.js';
import { ThirumanIcon } from '../components/SacredIcons.jsx';
import Dialog from '../components/ui/Dialog.jsx';
import ContactDetails from '../components/ui/ContactDetails.jsx';
import { Button, ButtonLink } from '../components/ui/Button.jsx';
import { Field } from '../components/ui/fields.jsx';
import PortraitFallback from '../components/directory/PortraitFallback.jsx';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

const SECTION_IDS = ['archive', 'guided-yatras', 'circuits', 'ceo-leadership', 'contact-desk', 'sanctum-etiquette'];

// Sticky nav sits below the shared header (h-16) on lg+; anchors leave
// room for both bars on desktop, the header alone on mobile. The grid
// anchor (#circuits) sits deeper so the service-row line above it is
// never sliced by the nav's bottom edge.
const SECTION_ANCHOR = 'scroll-mt-[76px] lg:scroll-mt-[136px]';
const GRID_ANCHOR = 'scroll-mt-[76px] lg:scroll-mt-[168px]';

const navPillBase = 'whitespace-nowrap rounded-full px-4 py-2 text-[14px] transition-all';
const navPillActive = `${navPillBase} border border-[#C99A2E]/60 bg-[#F6EBD6] font-semibold text-[#7A2E00] shadow-xs`;
const navPillIdle = `${navPillBase} border border-[#E3D2AE] bg-[#FFFDF7] font-medium text-[#332417] hover:border-[#C99A2E]`;

// The Kshetrams gold action (KshetramCard "View temple" idiom) on the
// shared .ui-btn base for the 44px target and the gold focus ring.
const goldBtn = 'ui-btn rounded-lg! bg-[#96731F] text-[#FFFDF7]! shadow-xs transition-colors hover:bg-[#7A2E00]! group-hover:bg-[#7A2E00]!';

/** PO round 4: the CEO photo upload/URL controls are an admin affordance —
 * they render only while the kshetra_admin flag is set. Enable by visiting
 * /about?admin=1 once (persisted in localStorage); /about?admin=0 revokes. */
function isAdminSession() {
  try { return localStorage.getItem('kshetra_admin') === '1'; } catch { return false; }
}

/** Compact leadership portrait: restrained fallback tile until an
 * approved photograph exists; admin upload/URL controls when flagged.
 * The .dir wrapper keeps the directory.css portrait variables alive
 * now that the page itself is on the kshetrams system. */
function CeoPortrait({ photo, setPhoto }) {
  const [error, setError] = useState('');
  const [adminControls, setAdminControls] = useState(() => isAdminSession());
  useEffect(() => {
    try {
      const flag = new URLSearchParams(window.location.search).get('admin');
      if (flag === '1') localStorage.setItem('kshetra_admin', '1');
      if (flag === '0') localStorage.removeItem('kshetra_admin');
    } catch { /* storage unavailable */ }
    setAdminControls(isAdminSession());
  }, []);
  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.');
      return;
    }
    if (file.size > 1.5 * 1024 * 1024) {
      setError('Please choose an image under 1.5 MB.');
      return;
    }
    setError('');
    const reader = new FileReader();
    reader.onload = () => {
      try { localStorage.setItem('kshetra_ceo_photo', String(reader.result)); } catch { /* quota — session only */ }
      setPhoto(String(reader.result));
    };
    reader.readAsDataURL(file);
  };
  const onUrl = () => {
    const url = window.prompt('Enter an image URL for the CEO photo:', '');
    if (url && url.trim()) {
      try { localStorage.setItem('kshetra_ceo_photo', url.trim()); } catch { /* session only */ }
      setPhoto(url.trim());
    }
  };
  const onReset = () => {
    try { localStorage.removeItem('kshetra_ceo_photo'); } catch { /* nothing stored */ }
    setPhoto('');
  };
  const { ceo } = ABOUT;
  return (
    <div className="dir w-full max-w-[140px] shrink-0">
      <div className="dir-portrait">
        {photo ? (
          <img
            src={assetUrl(photo)}
            alt={`${ceo.name}, CEO of Kshetra Tours`}
            referrerPolicy="no-referrer"
          />
        ) : (
          <PortraitFallback icon={<ThirumanIcon className="w-10 h-14 opacity-70" />} />
        )}
      </div>
      <p className="mt-2 text-center text-[13px] font-semibold text-[#66523D]">{ceo.name}</p>
      {adminControls ? (
        <div className="mt-2 space-y-2 border-t border-[#E3D2AE] pt-2">
          <div className="flex items-center justify-between text-[13px] text-[#66523D]">
            <span className="flex items-center gap-1 font-semibold">
              <Camera className="h-3.5 w-3.5 text-[#7A2E00]" aria-hidden="true" />
              <span>Portrait</span>
            </span>
            {photo ? (
              <button type="button" onClick={onReset} className="ui-tertiary text-[12px]">Reset</button>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="ceo-photo-upload"
              className="ui-btn ui-btn--secondary ui-btn--small flex-1 cursor-pointer"
            >
              <Upload className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Upload</span>
              <input id="ceo-photo-upload" type="file" accept="image/*" onChange={onUpload} className="sr-only" />
            </label>
            <button type="button" onClick={onUrl} className="ui-btn ui-btn--secondary ui-btn--small" title="Provide image link URL">
              URL
            </button>
          </div>
          {error ? <p className="ui-field-error text-center text-[12px]">{error}</p> : null}
        </div>
      ) : null}
    </div>
  );
}

/** The Request-Yatra-Schedule inquiry dialog (local reference; no server).
 * Name + at least one contact method are required — labels match the rule
 * (asterisk on the name only, a shared hint covers the either/or contact
 * requirement). Inline errors keep entered values; a re-entrant submit is
 * locked while the current one records. Success renders only after the
 * inquiry is recorded with its local reference. */
function InquiryDialog({ open, onClose, initialCircuit }) {
  const emptyForm = {
    name: '', email: '', phone: '', circuit: initialCircuit,
    pilgrimsCount: '2', travelWindow: 'Next 60 Days', specialRequests: '',
  };
  const [formData, setFormData] = useState(emptyForm);
  const [bookingRef, setBookingRef] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const [nameError, setNameError] = useState('');
  const lockRef = useRef(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, circuit: initialCircuit }));
    setSubmitted(false);
    setBookingRef('');
    setContactError('');
    setNameError('');
    lockRef.current = false;
  }, [initialCircuit, open]);

  const modalCopy = SITE_COPY.about.scheduleModal;
  const circuitOptions = [
    ...ABOUT.circuits.map((c) => `${circuitTitle(c)} (${c.count.replace(' Divya Desams', ' Desams')})`),
    ...modalCopy.extraCircuitOptions,
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (lockRef.current) return;
    if (!formData.name.trim()) {
      setNameError(modalCopy.labels.nameRequired);
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setContactError(modalCopy.labels.contactNote);
      return;
    }
    lockRef.current = true;
    setNameError('');
    setContactError('');
    // Local delivery: the inquiry is recorded in this browser with a
    // reference — there is no server round-trip to await.
    const ref = `YATRA-${Math.floor(1000 + Math.random() * 9000)}`;
    try {
      const stored = JSON.parse(localStorage.getItem('kshetra_inquiries') ?? '[]');
      stored.push({ ref, ...formData, recordedAt: new Date().toISOString() });
      localStorage.setItem('kshetra_inquiries', JSON.stringify(stored));
    } catch { /* storage unavailable — reference still shown */ }
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onClose={onClose} title={modalCopy.title} eyebrow={modalCopy.deskEyebrow} className="max-w-[680px]">
      {submitted ? (
        <div className="space-y-4 py-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6EBD6] text-[#7A2E00]">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#96731F]">{modalCopy.success.eyebrow}</span>
            <h3 className="ui-heading mt-1 text-2xl font-bold text-[#5C1F00]">
              {modalCopy.success.greetingPrefix} {formData.name || modalCopy.success.greetingFallback}!
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-[14px] leading-[23px] text-[#66523D]">
              {modalCopy.success.bodyLead}{' '}
              <strong className="ui-heading rounded border border-[#E3D2AE] bg-[#F6EBD6] px-2 py-0.5 font-semibold text-[#5C1F00]">
                {bookingRef}
              </strong>
              {modalCopy.success.bodyTail}
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-1.5 rounded-xl border border-[#E3D2AE] bg-[#F6EBD6] p-4 text-left text-[14px] leading-[22px] text-[#332417]">
            <p><strong>{modalCopy.success.summaryLabels.circuit}</strong> {formData.circuit}</p>
            <p><strong>{modalCopy.success.summaryLabels.devotees}</strong> {formData.pilgrimsCount} {modalCopy.success.summaryLabels.pilgrimsSuffix}</p>
            <p><strong>{modalCopy.success.summaryLabels.window}</strong> {formData.travelWindow}</p>
            <p><strong>{modalCopy.success.summaryLabels.contact}</strong> {formData.phone || '—'} · {formData.email || '—'}</p>
          </div>
          <Button onClick={onClose}>{modalCopy.success.done}</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <Field id="inq-name" label={modalCopy.labels.name} error={nameError}>
            <input id="inq-name" type="text" required aria-required="true" placeholder={modalCopy.placeholders.name}
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (nameError) setNameError('');
              }}
              aria-invalid={nameError ? 'true' : undefined}
              className="ui-input" />
          </Field>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field id="inq-phone" label={modalCopy.labels.phone} hint={modalCopy.labels.contactNote}>
              <input id="inq-phone" type="tel" placeholder={modalCopy.placeholders.phone}
                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="ui-input" aria-invalid={Boolean(contactError)} />
            </Field>
            <Field id="inq-email" label={modalCopy.labels.email}>
              <input id="inq-email" type="email" placeholder={modalCopy.placeholders.email}
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="ui-input" aria-invalid={Boolean(contactError)} />
            </Field>
          </div>
          {contactError ? <p className="ui-field-error" role="alert">{contactError}</p> : null}
          <Field id="inq-circuit" label={modalCopy.labels.circuit}>
            <select id="inq-circuit" value={formData.circuit}
              onChange={(e) => setFormData({ ...formData, circuit: e.target.value })}
              className="ui-select">
              {circuitOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </Field>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field id="inq-count" label={`${modalCopy.labels.pilgrims} (optional)`}>
              <select id="inq-count" value={formData.pilgrimsCount}
                onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                className="ui-select">
                {modalCopy.pilgrimOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </Field>
            <Field id="inq-window" label={`${modalCopy.labels.window} (optional)`}>
              <select id="inq-window" value={formData.travelWindow}
                onChange={(e) => setFormData({ ...formData, travelWindow: e.target.value })}
                className="ui-select">
                {modalCopy.travelWindowOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </Field>
          </div>
          <Field id="inq-notes" label={modalCopy.labels.notes}>
            <textarea id="inq-notes" rows={2}
              placeholder={modalCopy.placeholders.notes}
              value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="ui-textarea" />
          </Field>
          <div className="pt-1">
            <Button type="submit" className="w-full">
              {modalCopy.submit}
            </Button>
            <p className="mt-2 text-center text-[13px] leading-[21px] text-[#66523D]">
              {modalCopy.privacyNote}
            </p>
          </div>
        </form>
      )}
    </Dialog>
  );
}

/** Circuit titles carry legacy "N." ordinal prefixes in the dataset —
 * they are decorative and dropped at render (PO round 29). */
function circuitTitle(circuit) {
  return circuit.title.replace(/^\d+\.\s*/, '');
}

/** Circuit card on the KshetramCard interaction rules: gold border at
 * 45%, hover strengthens the border, lifts 4px over 300ms (no clipping).
 * Rows: region eyebrow → title → count/duration/base → summary → key
 * shrines disclosure → actions pinned to the card foot. */
function CircuitCard({ circuit, onInquire }) {
  const { sections } = SITE_COPY.about;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-[#C99A2E]/45 bg-[#FFFDF7] p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A2E] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">{circuit.region}</p>
      <h3 className="mt-1 font-display text-[26px]! leading-[1.12]! font-semibold text-[#5C1F00]!">
        {circuitTitle(circuit)}
      </h3>
      <dl className="mt-3 space-y-1 text-[14px] leading-[22px]">
        <div className="flex gap-2">
          <dt className="shrink-0 font-semibold text-[#96731F]">{sections.circuitCountLabel ?? 'Shrines'}</dt>
          <dd className="text-[#332417]">{circuit.count}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 font-semibold text-[#96731F]">{sections.circuitDurationLabel ?? 'Indicative duration'}</dt>
          <dd className="text-[#332417]">{circuit.duration}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 font-semibold text-[#96731F]">{sections.circuitBaseLabel ?? 'Base location'}</dt>
          <dd className="text-[#332417]">{circuit.baseCamps}</dd>
        </div>
      </dl>
      <div className="mt-3 h-px bg-[#E3D2AE]" aria-hidden="true" />
      <p className="mt-3 text-[15px] leading-[1.6] text-[#332417]">{circuit.desc}</p>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
        <button
          type="button"
          onClick={() => onInquire(`${circuitTitle(circuit)} (${circuit.count.replace(' Divya Desams', ' Desams')})`)}
          className={goldBtn}
        >
          <span>{sections.inquireCircuit}</span>
        </button>
        <ButtonLink to={`/kshetrams?region=${encodeURIComponent(circuit.region)}`} variant="secondary" small>
          {sections.viewTemplesLabel ?? 'View temples'}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const { site, tours, contact, ceo, circuits, etiquette } = ABOUT;
  const { hash } = useLocation();
  const { hero, purpose, yatras, anchors, sections } = SITE_COPY.about;
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [allCircuits, setAllCircuits] = useState(false);
  const [modalCircuit, setModalCircuit] = useState(circuits[0] ? `${circuits[0].title.replace(/^\d+\.\s*/, '')} (${circuits[0].count.replace(' Divya Desams', ' Desams')})` : '');
  const [ceoPhoto, setCeoPhoto] = useState(() => {
    // A local upload/URL override wins; otherwise the CMS-managed portrait (about.json) shows.
    try { return localStorage.getItem('kshetra_ceo_photo') || ceo.photoUrl || ''; } catch { return ceo.photoUrl || ''; }
  });
  const [activeSection, setActiveSection] = useState('');

  // Scroll to the anchor the header's Kshetra Tours dropdown targeted
  // (smooth unless the visitor prefers reduced motion)
  useEffect(() => {
    if (!hash) return undefined;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      const reduce = typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
    return undefined;
  }, [hash]);

  // Scroll-spy: the topmost intersecting section wins (skipped where
  // IntersectionObserver is unavailable — jsdom).
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const topmost = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (topmost) setActiveSection(topmost.target.id);
    }, { rootMargin: '-140px 0px -55% 0px' });
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModalWithCircuit = (circuit) => {
    setModalCircuit(circuit);
    setScheduleOpen(true);
  };

  // Shortened leadership content (PO round 23, kept in round 29): the
  // quote's first sentence and the biography's opening paragraph — the
  // full dataset text stays reachable behind the disclosure.
  const shortQuote = `${ceo.quote.split('. ')[0]}.`;
  const shortBio = ceo.bio[0];
  const visibleCircuits = allCircuits ? circuits : circuits.slice(0, 3);

  return (
    <div className="space-y-10 pb-10 lg:space-y-16">
      {/* Hero — copy left, the shared gopuram illustration + quote right */}
      <div className="relative min-h-[240px] pt-2">
        <img
          src={gopuramIllustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 select-none object-contain object-[right_bottom] opacity-80 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)] lg:block"
        />
        <div className="relative max-w-[52%] max-lg:max-w-full">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B34700]">
            {hero.eyebrow}
          </p>
          {/* ! beats the unlayered legacy h1 rule in base.css */}
          <h1 className="mt-2 max-w-[14ch] font-display text-[34px]! leading-[1.06]! font-semibold text-[#5C1F00]! sm:max-w-[22ch] sm:text-[44px]! sm:leading-[1.04]! lg:text-[48px]!">
            {hero.title}
          </h1>
          <p className="mt-3 max-w-[52ch] text-[17px] text-[#66523D]">
            {hero.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#guided-yatras" className={`${goldBtn} group`}>
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4 opacity-85 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            </a>
            <ButtonLink to="/kshetrams" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <figure className="absolute right-0 top-2 z-10 hidden max-w-[240px] text-right lg:block">
          <blockquote className="font-display text-[17px] italic leading-snug text-[#7A2E00]">
            &ldquo;{SITE_COPY.browse.quote}&rdquo;
          </blockquote>
          <div className="mt-2 flex items-center justify-end gap-2" aria-hidden="true">
            <span className="h-px w-10 bg-[#C99A2E]/60" />
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#C99A2E]" fill="currentColor">
              <path d="M6 0l1.5 4.5L12 6 7.5 7.5 6 12 4.5 7.5 0 6l4.5-1.5L6 0z" />
            </svg>
          </div>
        </figure>
      </div>

      {/* Section navigation — sticky below the shared header on lg+, a
          scrollable single row with an overflow cue on mobile */}
      <nav
        aria-label="About sections"
        className="relative -mx-4 border-b border-[#E3D2AE] bg-[#FAF2E3] px-4 sm:mx-0 sm:rounded-2xl sm:border sm:px-3 lg:sticky lg:top-16 lg:z-30 lg:bg-[#FFFDF7]/95 lg:shadow-xs lg:backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_IDS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? 'true' : undefined}
              onClick={() => setActiveSection(id)}
              className={activeSection === id ? navPillActive : navPillIdle}
            >
              {anchors[i]}
            </a>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#FAF2E3] from-45% to-transparent sm:hidden" aria-hidden="true" />
      </nav>

      {/* Our purpose — open editorial section */}
      <section aria-labelledby="about-purpose" id="archive" className={SECTION_ANCHOR}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
              {anchors[0]}
            </p>
            <h2 id="about-purpose" className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]! sm:text-[36px]!">
              {purpose.title}
            </h2>
            {[site.paragraphs[0], site.paragraphs[2]].filter(Boolean).map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 max-w-[65ch] text-[16px] leading-[1.6] text-[#332417]">{p}</p>
            ))}
          </div>
          <div className="space-y-8 lg:border-l lg:border-[#E3D2AE] lg:pl-12 lg:pt-2">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F6EBD6] text-[#96731F]" aria-hidden="true">
                <BookOpen className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[20px]! font-semibold text-[#5C1F00]!">{purpose.archiveRowTitle}</h3>
                <p className="mt-1 text-[15px] leading-[1.6] text-[#66523D]">{site.features?.[0]?.text}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F6EBD6] text-[#96731F]" aria-hidden="true">
                <RouteIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-[20px]! font-semibold text-[#5C1F00]!">{purpose.travelRowTitle}</h3>
                <p className="mt-1 text-[15px] leading-[1.6] text-[#66523D]">{tours.intro}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided yatras + regional circuits — one flowing section; the
          grid anchor (#circuits) is a child so deep links keep working */}
      <section aria-labelledby="about-yatras" id="guided-yatras" className={SECTION_ANCHOR}>
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
          {sections.toursEyebrow}
        </p>
        <h2 id="about-yatras" className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]! sm:text-[36px]!">
          {yatras.title}
        </h2>
        <p className="mt-3 max-w-[65ch] text-[16px] leading-[1.6] text-[#332417]">{sections.circuitsNote}</p>
        <p className="mt-2 max-w-[72ch] text-[14px] leading-[23px] text-[#66523D]">{sections.circuitsDurationNote}</p>

        {/* The three service themes — compact rows before the grid */}
        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-6">
          {(tours.highlights ?? []).map((h) => (
            <div className="flex items-start gap-2.5" key={h.title ?? h.slice(0, 24)}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#96731F]" aria-hidden="true" />
              <p className="min-w-0 text-[14px] leading-[22px] text-[#332417]">
                <span className="font-semibold">{typeof h === 'string' ? h : h.title}</span>
                {typeof h === 'string' ? null : <span className="text-[#66523D]"> — {h.text}</span>}
              </p>
            </div>
          ))}
        </div>

        <div id="circuits" className={`${GRID_ANCHOR} pt-8`}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCircuits.map((c) => (
              <CircuitCard key={c.id} circuit={c} onInquire={openModalWithCircuit} />
            ))}
          </div>
          {circuits.length > 3 ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                aria-expanded={allCircuits}
                onClick={() => setAllCircuits(!allCircuits)}
                className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-bold text-[#96731F]! underline underline-offset-4 transition-colors hover:text-[#7A2E00]!"
              >
                <span>{yatras.exploreAllCta}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${allCircuits ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Founder — compact two-column desk */}
      <section aria-labelledby="about-ceo" id="ceo-leadership" className={SECTION_ANCHOR}>
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
          {sections.founderEyebrow}
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14">
          <div className="flex flex-col gap-4 min-[480px]:flex-row sm:gap-6">
            <CeoPortrait photo={ceoPhoto} setPhoto={setCeoPhoto} />
            <div className="min-w-0">
              <h2 id="about-ceo" className="font-display text-[30px]! leading-[1.1]! font-semibold text-[#5C1F00]! sm:text-[34px]!">
                {ceo.name}
              </h2>
              <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.12em] text-[#96731F]">{ceo.role}</p>
              <p className="mt-4 max-w-[65ch] text-[16px] leading-[1.6] text-[#332417]">{shortBio}</p>

              <details className="mt-4 max-w-[65ch] rounded-xl border border-[#E3D2AE] bg-[#FFFDF7] px-4 py-3">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-semibold text-[#96731F]! transition-colors hover:text-[#7A2E00]!">
                  <span>{sections.founderBioCta}</span>
                  <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                </summary>
                <div className="space-y-4 border-t border-[#E3D2AE] pt-4">
                  {ceo.bio.slice(1).map((p) => (
                    <p key={p.slice(0, 24)} className="text-[15px] leading-[1.6] text-[#332417]">{p}</p>
                  ))}
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {ceo.pillars.map((pillar) => (
                      <li key={pillar.title} className="flex items-start gap-2 text-[14px] font-semibold leading-[22px] text-[#332417]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#96731F]" aria-hidden="true" />
                        <span>{pillar.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 text-[14px] leading-[22px] text-[#332417]">
                    <span className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#96731F]" aria-hidden="true" />
                      <span>{ceo.base}</span>
                    </span>
                    <a href={`mailto:${ceo.email}`} className="ui-tertiary text-[14px]">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{ceo.email}</span>
                    </a>
                  </div>
                </div>
              </details>

              <Button variant="secondary" small className="mt-4" onClick={() => openModalWithCircuit('Executive Office / CEO Yatra Consultation')}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{sections.inquireCeo}</span>
              </Button>
            </div>
          </div>

          <blockquote className="h-fit rounded-2xl border border-[#E3D2AE] bg-[#F6EBD6] p-6 font-display text-[17px] italic leading-[1.6] text-[#7A2E00] lg:mt-6">
            {shortQuote}
            <footer className="mt-3 font-sans text-[13px] font-semibold not-italic text-[#332417]">
              — {ceo.name}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact — the one authoritative contact block */}
      <section aria-labelledby="about-contact" id="contact-desk" className={SECTION_ANCHOR}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-14">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
              {sections.contactEyebrow}
            </p>
            <h2 id="about-contact" className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]! sm:text-[36px]!">
              {contact.heading}
            </h2>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.6] text-[#332417]">{sections.contactIntro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="button" className={`${goldBtn} group`} onClick={() => openModalWithCircuit('Upcoming General Yatra Schedule')}>
                <span>{sections.requestSchedule}</span>
                <ArrowRight className="h-4 w-4 opacity-85 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </button>
              <ButtonLink to="#about-contact-details" variant="secondary">
                {sections.contactTeamCta}
              </ButtonLink>
            </div>
            <p className="mt-4 text-[14px] leading-[23px] text-[#66523D]">
              <strong className="text-[#5C1F00]">{sections.responseHoursLabel}</strong> {contact.note}
            </p>
          </div>
          <div id="about-contact-details" className="scroll-mt-[76px] lg:scroll-mt-[136px]">
            <ContactDetails
              rows={[
                { label: sections.generalEmailLabel, value: contact.email, href: `mailto:${contact.email}` },
                { label: sections.ceoEmailLabel, value: ceo.email, href: `mailto:${ceo.email}` },
                { label: sections.phoneLabel, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Temple etiquette — accessible accordions */}
      <section aria-labelledby="about-etiquette" id="sanctum-etiquette" className={SECTION_ANCHOR}>
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#96731F]">
          {sections.etiquetteEyebrow}
        </p>
        <h2 id="about-etiquette" className="mt-2 font-display text-[30px]! leading-[1.12]! font-semibold text-[#5C1F00]! sm:text-[36px]!">
          {sections.etiquetteTitle}
        </h2>
        <p className="mt-3 max-w-[65ch] text-[16px] leading-[1.6] text-[#332417]">{sections.etiquetteLead}</p>
        <div className="mt-6 space-y-4">
          {etiquette.map((card) => (
            <details key={card.id} className="rounded-2xl border border-[#C99A2E]/45 bg-[#FFFDF7] px-5 py-1.5 shadow-xs transition-colors hover:border-[#C99A2E]">
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-3">
                <span>
                  <h3 className="ui-heading inline text-[20px]! font-semibold text-[#5C1F00]!">{card.title}</h3>
                  <span className="ml-3 hidden text-[13px] text-[#66523D] sm:inline">{card.subtitle}</span>
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#96731F] transition-transform" aria-hidden="true" />
              </summary>
              <ul className="space-y-2.5 border-t border-[#E3D2AE] py-4 text-[15px] leading-[25px] text-[#332417]">
                {card.points.map(([lead, text]) => (
                  <li key={lead} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#96731F]" aria-hidden="true" />
                    <span><strong>{lead}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <InquiryDialog
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        initialCircuit={modalCircuit}
      />
    </div>
  );
}
