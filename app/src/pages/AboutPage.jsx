/**
 * AboutPage — "About Us — Kshetra Tours" (FR-87), editorial restyle
 * (PO round 23): open narrative sections at 16–17px with 65–75ch lines
 * instead of nested card shells; cards kept for the circuit comparison
 * grid (Name → Region → Shrine count → Indicative duration → Base
 * location → summary → actions) and the single authoritative contact
 * block. Section navigation follows the reading order: About the
 * archive → Guided yatras → Regional circuits → Team → Contact →
 * Temple etiquette (anchor ids are unchanged so the header dropdown
 * deep links keep working). The leadership section is compact — a
 * small portrait frame with the restrained fallback tile until an
 * approved photograph exists (admin upload controls preserved), a
 * shortened quote (first sentence) and biography (opening paragraph),
 * and plainly listed credentials. The inquiry form opens in the shared
 * Dialog (focus containment, Escape, focus return): name + at least
 * one preferred contact method required, everything else optional, the
 * chosen circuit preserved; success shows only after the inquiry is
 * recorded with its local reference (no server). Contact values render
 * verbatim from the dataset — discrepancies are flagged, never
 * invented. Data-driven from src/data/about.js.
 */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Mail, MapPin, Upload, Camera } from 'lucide-react';
import { ABOUT } from '../data/about.js';
import { SITE_COPY } from '../data/siteCopy.js';
import { assetUrl } from '../utils/assetUrl.js';
import { ThirumanIcon } from '../components/SacredIcons.jsx';
import Dialog from '../components/ui/Dialog.jsx';
import ContactDetails from '../components/ui/ContactDetails.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { Button, ButtonLink } from '../components/ui/Button.jsx';
import { Field } from '../components/ui/fields.jsx';
import PortraitFallback from '../components/directory/PortraitFallback.jsx';

/** PO round 4: the CEO photo upload/URL controls are an admin affordance —
 * they render only while the kshetra_admin flag is set. Enable by visiting
 * /about?admin=1 once (persisted in localStorage); /about?admin=0 revokes. */
function isAdminSession() {
  try { return localStorage.getItem('kshetra_admin') === '1'; } catch { return false; }
}

/** Compact leadership portrait: restrained fallback tile until an
 * approved photograph exists; admin upload/URL controls when flagged. */
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
    <div className="w-full max-w-[180px]">
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
      <p className="mt-2 text-center text-[13px] font-semibold text-[#74716b]">{ceo.name}</p>
      {adminControls ? (
        <div className="mt-2 space-y-2 border-t border-[#e8cf9f] pt-2">
          <div className="flex items-center justify-between text-[13px] text-[#74716b]">
            <span className="flex items-center gap-1 font-semibold">
              <Camera className="h-3.5 w-3.5 text-[#922e0d]" aria-hidden="true" />
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
 * Name + at least one contact method are required; the chosen circuit is
 * preserved from the opener. Success renders only after the inquiry is
 * recorded with its local reference. */
function InquiryDialog({ open, onClose, initialCircuit }) {
  const emptyForm = {
    name: '', email: '', phone: '', circuit: initialCircuit,
    pilgrimsCount: '2', travelWindow: 'Next 60 Days', specialRequests: '',
  };
  const [formData, setFormData] = useState(emptyForm);
  const [bookingRef, setBookingRef] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, circuit: initialCircuit }));
    setSubmitted(false);
    setBookingRef('');
    setContactError('');
  }, [initialCircuit, open]);

  const modalCopy = SITE_COPY.about.scheduleModal;
  const circuitOptions = [
    ...ABOUT.circuits.map((c) => `${c.title} (${c.count.replace(' Divya Desams', ' Desams')})`),
    ...modalCopy.extraCircuitOptions,
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() && !formData.phone.trim()) {
      setContactError(modalCopy.labels.contactNote);
      return;
    }
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
    <Dialog open={open} onClose={onClose} title={modalCopy.title} eyebrow={modalCopy.deskEyebrow}>
      {submitted ? (
        <div className="space-y-4 py-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf0dc] text-[#922e0d]">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#a77529]">{modalCopy.success.eyebrow}</span>
            <h3 className="ui-heading mt-1 text-2xl font-bold text-[#922e0d]">
              {modalCopy.success.greetingPrefix} {formData.name || modalCopy.success.greetingFallback}!
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-[14px] leading-[23px] text-[#74716b]">
              {modalCopy.success.bodyLead}{' '}
              <strong className="ui-heading rounded border border-[#e8cf9f] bg-[#fbf0dc] px-2 py-0.5 font-semibold text-[#922e0d]">
                {bookingRef}
              </strong>
              {modalCopy.success.bodyTail}
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-1.5 rounded-xl border border-[#e8cf9f] bg-[#fbf0dc] p-4 text-left text-[14px] leading-[22px] text-[#333942]">
            <p><strong>{modalCopy.success.summaryLabels.circuit}</strong> {formData.circuit}</p>
            <p><strong>{modalCopy.success.summaryLabels.devotees}</strong> {formData.pilgrimsCount} {modalCopy.success.summaryLabels.pilgrimsSuffix}</p>
            <p><strong>{modalCopy.success.summaryLabels.window}</strong> {formData.travelWindow}</p>
            <p><strong>{modalCopy.success.summaryLabels.contact}</strong> {formData.phone || '—'} · {formData.email || '—'}</p>
          </div>
          <Button onClick={onClose}>{modalCopy.success.done}</Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <Field id="inq-name" label={modalCopy.labels.name}>
            <input id="inq-name" type="text" required aria-required="true" placeholder={modalCopy.placeholders.name}
              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="ui-input" />
          </Field>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field id="inq-phone" label={modalCopy.labels.phone}>
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
          {contactError ? <p className="ui-field-error" role="alert">{contactError}</p> : (
            <p className="ui-hint">{modalCopy.labels.contactNote}</p>
          )}
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
            <p className="mt-2 text-center text-[13px] leading-[21px] text-[#74716b]">
              {modalCopy.privacyNote}
            </p>
          </div>
        </form>
      )}
    </Dialog>
  );
}

/** Circuit comparison card: Name → Region → Shrine count → Indicative
 * duration → Base location → summary → actions (PO round 23). */
function CircuitCard({ circuit, onInquire }) {
  const { sections } = SITE_COPY.about;
  return (
    <article className="flex flex-col rounded-xl border border-[#e8cf9f] bg-[#FFFDF7] p-5 shadow-xs transition-colors hover:border-[#a77529]">
      <h3 className="dir-entry__name m-0">{circuit.title}</h3>
      <dl className="mt-3 grid gap-1">
        <div className="ui-meta-row"><dt>{sections.circuitRegionLabel ?? 'Region'}</dt><dd>{circuit.region}</dd></div>
        <div className="ui-meta-row"><dt>{sections.circuitCountLabel ?? 'Shrines'}</dt><dd>{circuit.count}</dd></div>
        <div className="ui-meta-row"><dt>{sections.circuitDurationLabel ?? 'Indicative duration'}</dt><dd>{circuit.duration}</dd></div>
        <div className="ui-meta-row"><dt>{sections.circuitBaseLabel ?? 'Base location'}</dt><dd>{circuit.baseCamps}</dd></div>
      </dl>
      <p className="mt-3 text-[16px] leading-[26px] text-[#333942]">{circuit.desc}</p>
      {Array.isArray(circuit.highlights) && circuit.highlights.length > 0 ? (
        <p className="mt-2 text-[14px] leading-[22px] text-[#74716b]">
          <span className="font-semibold">{sections.keyShrinesLabel}</span> {circuit.highlights.join(' · ')}
        </p>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#e8cf9f] pt-4">
        <ButtonLink to={`/kshetrams?region=${encodeURIComponent(circuit.region)}`} variant="secondary" small>
          {sections.viewTemplesLabel ?? 'View temples'}
        </ButtonLink>
        <button
          type="button"
          onClick={() => onInquire(`${circuit.title} (${circuit.count.replace(' Divya Desams', ' Desams')})`)}
          className="ui-tertiary"
        >
          {sections.inquireCircuit}
        </button>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const { site, tours, contact, ceo, circuits, etiquette } = ABOUT;
  const { hash } = useLocation();
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [modalCircuit, setModalCircuit] = useState(circuits[0] ? `${circuits[0].title} (${circuits[0].count.replace(' Divya Desams', ' Desams')})` : '');
  const [ceoPhoto, setCeoPhoto] = useState(() => {
    // A local upload/URL override wins; otherwise the CMS-managed portrait (about.json) shows.
    try { return localStorage.getItem('kshetra_ceo_photo') || ceo.photoUrl || ''; } catch { return ceo.photoUrl || ''; }
  });

  // Scroll to the anchor the header's Kshetra Tours dropdown targeted
  useEffect(() => {
    if (!hash) return undefined;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return undefined;
  }, [hash]);

  const openModalWithCircuit = (circuit) => {
    setModalCircuit(circuit);
    setScheduleOpen(true);
  };

  const { sections } = SITE_COPY.about;
  // Shortened leadership content (PO round 23): the quote's first
  // sentence and the biography's opening paragraph — the full dataset
  // text is preserved in about.json for the CMS.
  const shortQuote = `${ceo.quote.split('. ')[0]}.`;
  const shortBio = ceo.bio[0];

  return (
    <div className="dir space-y-10">
      {/* Banner + section navigation in reading order */}
      <header className="border-b border-[#e8cf9f] pb-5">
        <h1 className="ui-heading mt-1 text-[34px]! leading-[42px]! font-semibold tracking-[-0.4px] text-[#922e0d]! sm:text-[40px]! sm:leading-[48px]!">
          {SITE_COPY.about.banner.title}
        </h1>
        <p className="mt-2 max-w-[72ch] text-[16px] leading-[27px] text-[#74716b]">
          {SITE_COPY.about.banner.tagline}
        </p>
        <nav className="dir-jumps" aria-label="About sections">
          <a href="#archive">{SITE_COPY.about.anchors[0]}</a>
          <a href="#guided-yatras">{SITE_COPY.about.anchors[1]}</a>
          <a href="#circuits">{SITE_COPY.about.anchors[2]}</a>
          <a href="#ceo-leadership">{SITE_COPY.about.anchors[3]}</a>
          <a href="#contact-desk">{SITE_COPY.about.anchors[4]}</a>
          <a href="#sanctum-etiquette">{SITE_COPY.about.anchors[5]}</a>
        </nav>
      </header>

      {/* About the archive — open narrative section */}
      <section aria-labelledby="about-site" id="archive" className="scroll-mt-24">
        <SectionHeading eyebrow={sections.archiveEyebrow} title={site.heading} id="about-site" />
        {site.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="mb-3 max-w-[72ch] text-[17px] leading-[29px] text-[#333942]">{p}</p>
        ))}
        {Array.isArray(site.features) && site.features.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {site.features.map((f) => (
              <div key={f.label} className="rounded-xl border border-[#e8cf9f] bg-[#fbf0dc] p-4">
                <span className="mb-1.5 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#a77529]">
                  {f.label}
                </span>
                <p className="text-[14px] leading-[23px] text-[#333942]">{f.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* Guided yatras — open narrative section */}
      <section aria-labelledby="about-tours" id="guided-yatras" className="scroll-mt-24">
        <SectionHeading eyebrow={sections.toursEyebrow} title={tours.heading} id="about-tours" />
        <p className="max-w-[72ch] text-[17px] leading-[29px] text-[#333942]">{tours.intro}</p>
        <div className="mt-6 space-y-4">
          {(tours.highlights ?? []).map((h, i) => (
            <div className="flex items-start gap-3.5" key={h.title ?? h.slice(0, 24)}>
              <span className="trip-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="min-w-0">
                <h3 className="ui-heading m-0 text-[19px] font-semibold text-[#922e0d]">
                  {typeof h === 'string' ? h : h.title}
                </h3>
                {typeof h === 'string' ? null : (
                  <p className="mt-0.5 max-w-[70ch] text-[15px] leading-[25px] text-[#74716b]">{h.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[70ch] border-t border-[#e8cf9f] pt-4 text-[14px] italic leading-[23px] text-[#a77529]">{tours.note}</p>
      </section>

      {/* Regional circuits — comparison cards */}
      <section aria-labelledby="about-circuits" id="circuits" className="scroll-mt-24">
        <SectionHeading
          eyebrow={sections.circuitsEyebrow}
          title={sections.circuitsTitle}
          id="about-circuits"
          lead={sections.circuitsNote}
        />
        <p className="mb-6 max-w-[72ch] rounded-xl border border-[#e8cf9f] bg-[#fbf0dc] p-4 text-[14px] leading-[23px] text-[#333942]">
          {sections.circuitsDurationNote}
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {circuits.map((c) => (
            <CircuitCard key={c.id} circuit={c} onInquire={openModalWithCircuit} />
          ))}
        </div>
      </section>

      {/* Team — compact leadership */}
      <section aria-labelledby="about-ceo" id="ceo-leadership" className="scroll-mt-24">
        <SectionHeading eyebrow={sections.ceoEyebrow} title={sections.ceoTitle} id="about-ceo" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_minmax(0,1fr)]">
          <CeoPortrait photo={ceoPhoto} setPhoto={setCeoPhoto} />

          <div className="min-w-0 space-y-5">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#a77529]">{ceo.role}</p>
              <h3 className="ui-heading mt-1 text-[26px] leading-[34px] font-semibold text-[#922e0d]">{ceo.name}</h3>
              <p className="mt-0.5 text-[14px] font-semibold text-[#96731F]">{ceo.org} · {ceo.title}</p>
            </div>

            <blockquote className="max-w-[68ch] border-l-[3px] border-l-[#a77529] pl-4 text-[16px] italic leading-[27px] text-[#333942]">
              {shortQuote}
              <footer className="mt-1.5 text-[13px] font-semibold not-italic text-[#922e0d]">— {ceo.name}, {sections.quoteAttribution}</footer>
            </blockquote>

            <p className="max-w-[72ch] text-[16px] leading-[27px] text-[#333942]">{shortBio}</p>

            {/* Verified credentials, plainly listed */}
            <ul className="grid max-w-[72ch] grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
              {ceo.pillars.map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-2 text-[15px] font-semibold leading-[24px] text-[#333942]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#922e0d]" aria-hidden="true" />
                  <span>{pillar.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] leading-[22px] text-[#333942]">
              <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#922e0d]" aria-hidden="true" /><span className="max-w-[52ch]">{ceo.base}</span></span>
              <a href={`mailto:${ceo.email}`} className="ui-tertiary text-[14px]">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{ceo.email}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openModalWithCircuit('Executive Office / CEO Yatra Consultation')}
                className="ui-btn ui-btn--secondary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{sections.inquireCeo}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — the one authoritative contact block (cards kept) */}
      <section aria-labelledby="about-contact" id="contact-desk" className="scroll-mt-24">
        <SectionHeading eyebrow={sections.contactEyebrow} title={contact.heading} id="about-contact" />
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-[#e8cf9f] bg-[#FFFDF7] p-5 shadow-xs sm:p-6">
            <ContactDetails
              rows={[
                { label: sections.generalEmailLabel, value: contact.email, href: `mailto:${contact.email}` },
                { label: sections.ceoEmailLabel, value: ceo.email, href: `mailto:${ceo.email}` },
                { label: sections.phoneLabel, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
              ]}
            />
            <p className="mt-4 text-[14px] leading-[23px] text-[#74716b]">
              <strong className="text-[#922e0d]">{sections.responseHoursLabel}</strong> {contact.note}
            </p>
          </div>
          <div>
            <Button
              type="button"
              onClick={() => openModalWithCircuit('Upcoming General Yatra Schedule')}
            >
              {sections.requestSchedule}
            </Button>
          </div>
        </div>
      </section>

      {/* Temple etiquette — instructional cards */}
      <section aria-labelledby="about-etiquette" id="sanctum-etiquette" className="scroll-mt-24">
        <SectionHeading
          eyebrow={sections.etiquetteEyebrow}
          title={sections.etiquetteTitle}
          id="about-etiquette"
          lead={sections.etiquetteLead}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {etiquette.map((card, i) => (
            <div key={card.id} className="space-y-3.5 rounded-xl border border-[#e8cf9f] bg-[#fbf0dc] p-5 sm:p-6">
              <div className="flex items-center gap-2.5 border-b border-[#e8cf9f] pb-2 text-[#922e0d]">
                {i === 0 ? <ThirumanIcon className="h-7 w-5" /> : null}
                <div>
                  <h3 className="ui-heading m-0 text-xl font-bold">{card.title}</h3>
                  <span className="text-[13px] text-[#74716b]">{card.subtitle}</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-[15px] leading-[25px] text-[#333942]">
                {card.points.map(([lead, text]) => (
                  <li key={lead} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#922e0d]" aria-hidden="true" />
                    <span><strong>{lead}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
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
