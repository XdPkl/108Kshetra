/**
 * AboutPage — "About Us — Kshetra Tours" (FR-87) in the zip-parity
 * containers (UXD v3.0 Gate 11, extended per PO request): ruled banner with
 * quick-jump anchor chips, the digital-archive card with a 3-up feature
 * grid, the guided-yatras / contact split, the Founder & CEO desk (photo
 * frame with local upload/URL controls), the 7 regional pilgrimage
 * circuits, sanctum etiquette cards, and the Request-Yatra-Schedule inquiry
 * modal (local booking reference; no server). Entirely data-driven from
 * src/data/about.js.
 */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen, Route as RouteIcon, ShieldCheck, Copy, Check, X, MapPin, Mail,
  Upload, Camera, Quote, Award, Clock, CheckCircle2, User,
} from 'lucide-react';
import { ABOUT } from '../data/about.js';
import { SITE_COPY } from '../data/siteCopy.js';
import { assetUrl } from '../utils/assetUrl.js';
import { ThirumanIcon, DeepamIcon } from '../components/SacredIcons.jsx';

/** Copy-to-clipboard pill with a transient "Copied ✓" acknowledgement. */
function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return; // clipboard unavailable — the value remains visible to copy by hand
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border border-[#C99A2E]/60 text-[#7A2E00] hover:bg-[#C99A2E]/15 transition-colors bg-[#FFFDF7] shrink-0"
      onClick={onCopy}
    >
      {copied ? <Check className="w-3 h-3 text-[#B34700]" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
      <span>{copied ? 'Copied ✓' : 'Copy'}</span>
    </button>
  );
}

/** CEO portrait card: photo frame (uploaded, URL or Thiruman placeholder) + controls. */
function CeoPhotoCard({ photo, setPhoto }) {
  const [error, setError] = useState('');
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
    <div className="w-full max-w-xs bg-[#FAF2E3] p-3 rounded-2xl border-2 border-[#C99A2E]/50 shadow-sm relative group">
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#EFE4CC] border border-[#C99A2E]/40 shadow-inner">
        {photo ? (
          <img
            src={assetUrl(photo)}
            alt={`${ceo.name}, CEO of Kshetra Tours`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#7A2E00]">
            <ThirumanIcon className="w-12 h-16 opacity-70" />
            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">Portrait forthcoming</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#332417]/85 via-[#332417]/35 to-transparent flex flex-col justify-end p-3 text-white">
          <div className="flex items-center gap-1 text-[11px] font-semibold tracking-wide text-[#E2C47C]">
            <ThirumanIcon className="w-2.5 h-3.5 inline-block shrink-0" />
            <span>Kshetra Tours Leadership</span>
          </div>
          <p className="text-xs font-bold text-white leading-tight">{ceo.name}</p>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#EBDDBE] space-y-2">
        <div className="flex items-center justify-between text-[11px] text-[#66523D]">
          <span className="font-semibold flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>CEO Portrait Photo</span>
          </span>
          {photo ? (
            <button type="button" onClick={onReset} className="text-[10px] font-bold text-[#B34700] hover:underline">
              Reset Photo
            </button>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="ceo-photo-upload"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF7] hover:bg-[#C99A2E]/15 text-[#7A2E00] text-xs font-bold border border-[#C99A2E]/60 cursor-pointer transition-colors shadow-2xs"
          >
            <Upload className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>Upload Photo</span>
            <input id="ceo-photo-upload" type="file" accept="image/*" onChange={onUpload} className="sr-only" />
          </label>
          <button
            type="button"
            onClick={onUrl}
            className="px-2.5 py-1.5 rounded-lg bg-[#FFFDF7] hover:bg-[#C99A2E]/15 text-[#66523D] text-xs font-semibold border border-[#C99A2E]/60 transition-colors shadow-2xs"
            title="Provide image link URL"
          >
            URL
          </button>
        </div>
        {error ? <p className="text-[10px] text-red-600 font-medium text-center">{error}</p> : null}
      </div>
    </div>
  );
}

/** The Request-Yatra-Schedule inquiry modal (local reference; no server). */
function ScheduleModal({ open, onClose, initialCircuit }) {
  const emptyForm = {
    name: '', email: '', phone: '', circuit: initialCircuit,
    pilgrimsCount: '2', travelWindow: 'Next 60 Days', specialRequests: '',
  };
  const [formData, setFormData] = useState(emptyForm);
  const [bookingRef, setBookingRef] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, circuit: initialCircuit }));
    setSubmitted(false);
    setBookingRef('');
  }, [initialCircuit, open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const inputCls = 'w-full text-xs p-2.5 rounded-lg border border-[#C99A2E]/50 bg-[#FAF2E3] text-[#332417] focus:outline-hidden focus:border-[#B34700]';
  const onSubmit = (e) => {
    e.preventDefault();
    setBookingRef(`YATRA-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };
  const modalCopy = SITE_COPY.about.scheduleModal;
  const circuitOptions = [
    ...ABOUT.circuits.map((c) => `${c.title} (${c.count.replace(' Divya Desams', ' Desams')})`),
    ...modalCopy.extraCircuitOptions,
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#332417]/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Request yatra schedule"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#FFFDF7] w-full max-w-lg rounded-2xl border border-[#C99A2E]/60 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]" aria-hidden="true" />

        <div className="p-5 sm:p-6 pb-4 border-b border-[#F0E3C6] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B34700]">{modalCopy.deskEyebrow}</span>
            <h3 className="font-display text-2xl font-bold text-[#7A2E00]">{modalCopy.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF2E3] text-[#66523D] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C99A2E]/20 text-[#B34700] flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[2.5]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#96731F]">{modalCopy.success.eyebrow}</span>
                <h4 className="font-display text-2xl font-bold text-[#7A2E00] mt-1">
                  {modalCopy.success.greetingPrefix} {formData.name || modalCopy.success.greetingFallback}!
                </h4>
                <p className="text-xs text-[#66523D] max-w-sm mx-auto mt-2 leading-relaxed">
                  {modalCopy.success.bodyLead}{' '}
                  <strong className="text-[#7A2E00] font-mono bg-[#FAF2E3] px-2 py-0.5 rounded border border-[#C99A2E]/40">
                    {bookingRef}
                  </strong>
                  {modalCopy.success.bodyTail}
                </p>
              </div>
              <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <p><strong>{modalCopy.success.summaryLabels.circuit}</strong> {formData.circuit}</p>
                <p><strong>{modalCopy.success.summaryLabels.devotees}</strong> {formData.pilgrimsCount} {modalCopy.success.summaryLabels.pilgrimsSuffix}</p>
                <p><strong>{modalCopy.success.summaryLabels.window}</strong> {formData.travelWindow}</p>
                <p><strong>{modalCopy.success.summaryLabels.contact}</strong> {formData.phone} · {formData.email}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-[#4A3005] bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] hover:brightness-105 border border-[#96731F] shadow-xs"
              >
                {modalCopy.success.done}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="inq-name" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.name}</label>
                <input id="inq-name" type="text" required placeholder={modalCopy.placeholders.name}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="inq-phone" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.phone}</label>
                  <input id="inq-phone" type="tel" required placeholder={modalCopy.placeholders.phone}
                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputCls} />
                </div>
                <div>
                  <label htmlFor="inq-email" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.email}</label>
                  <input id="inq-email" type="email" required placeholder={modalCopy.placeholders.email}
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="inq-circuit" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.circuit}</label>
                <select id="inq-circuit" value={formData.circuit}
                  onChange={(e) => setFormData({ ...formData, circuit: e.target.value })}
                  className={inputCls}>
                  {circuitOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="inq-count" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.pilgrims}</label>
                  <select id="inq-count" value={formData.pilgrimsCount}
                    onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                    className={inputCls}>
                    {modalCopy.pilgrimOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="inq-window" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.window}</label>
                  <select id="inq-window" value={formData.travelWindow}
                    onChange={(e) => setFormData({ ...formData, travelWindow: e.target.value })}
                    className={inputCls}>
                    {modalCopy.travelWindowOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="inq-notes" className="block text-xs font-bold text-[#332417] mb-1">{modalCopy.labels.notes}</label>
                <textarea id="inq-notes" rows={2}
                  placeholder={modalCopy.placeholders.notes}
                  value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className={inputCls} />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-[#FFFDF7] bg-gradient-to-r from-[#D95F0E] via-[#B34700] to-[#7A2E00] hover:brightness-105 shadow-md transition-all"
                >
                  {modalCopy.submit}
                </button>
                <p className="text-[11px] text-[#66523D] text-center mt-2">
                  {modalCopy.privacyNote}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const cardShell = 'bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/40 shadow-xs p-6 sm:p-8 relative overflow-hidden scroll-mt-36';
const topStrip = 'absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]';
const sectionHead = 'border-b border-[#F0E3C6] pb-3 mb-6';
const anchorChip = 'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#B34700] hover:text-[#B34700] transition-colors shadow-2xs';

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

  return (
    <div className="space-y-6">
      {/* Banner with quick-jump anchors */}
      <header className="border-b border-[#E3D2AE] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
          {SITE_COPY.about.banner.eyebrow}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#7A2E00] tracking-tight mt-1">
          {SITE_COPY.about.banner.title}
        </h1>
        <p className="text-sm text-[#66523D] mt-1 max-w-2xl">
          {SITE_COPY.about.banner.tagline}
        </p>
        <nav className="flex flex-wrap gap-2 mt-4" aria-label="About sections">
          <a className={anchorChip} href="#archive"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> {SITE_COPY.about.anchors[0]}</a>
          <a className={anchorChip} href="#guided-yatras"><RouteIcon className="w-3.5 h-3.5" aria-hidden="true" /> {SITE_COPY.about.anchors[1]}</a>
          <a className={anchorChip} href="#ceo-leadership"><User className="w-3.5 h-3.5" aria-hidden="true" /> {SITE_COPY.about.anchors[2]}</a>
          <a className={anchorChip} href="#circuits"><MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {SITE_COPY.about.anchors[3]}</a>
          <a className={anchorChip} href="#contact-desk"><ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> {SITE_COPY.about.anchors[4]}</a>
          <a className={anchorChip} href="#sanctum-etiquette"><ThirumanIcon className="w-3 h-4" /> {SITE_COPY.about.anchors[5]}</a>
        </nav>
      </header>

      {/* The digital archive */}
      <section aria-labelledby="about-site" className={cardShell} id="archive">
        <div className={topStrip} aria-hidden="true" />
        <div className={sectionHead}>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.archiveEyebrow}</span>
          <h2 id="about-site" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
            {site.heading}
          </h2>
        </div>
        {site.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="text-sm text-[#66523D] leading-relaxed mb-3">{p}</p>
        ))}
        {Array.isArray(site.features) && site.features.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
            {site.features.map((f) => (
              <div key={f.label} className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B34700] block mb-1.5">
                  {f.label}
                </span>
                <p className="text-xs text-[#66523D] leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* Guided yatras | Contact split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <section aria-labelledby="about-tours" className={cardShell} id="guided-yatras">
          <div className={topStrip} aria-hidden="true" />
          <div className={sectionHead}>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.toursEyebrow}</span>
            <h2 id="about-tours" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
              {tours.heading}
            </h2>
          </div>
          <p className="text-sm text-[#66523D] leading-relaxed mb-4">{tours.intro}</p>
          <div className="space-y-4">
            {(tours.highlights ?? []).map((h, i) => (
              <div className="flex items-start gap-3.5" key={h.title ?? h.slice(0, 24)}>
                <span className="trip-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#7A2E00]">
                    {typeof h === 'string' ? h : h.title}
                  </h3>
                  {typeof h === 'string' ? null : (
                    <p className="text-xs text-[#66523D] leading-relaxed mt-0.5">{h.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#96731F] italic leading-relaxed mt-5 pt-4 border-t border-[#F0E3C6]">{tours.note}</p>
        </section>

        <section aria-labelledby="about-contact" className={cardShell} id="contact-desk">
          <div className={topStrip} aria-hidden="true" />
          <div className={sectionHead}>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.contactEyebrow}</span>
            <h2 id="about-contact" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
              {contact.heading}
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#96731F] block">{SITE_COPY.about.sections.emailLabel}</span>
                <span className="text-sm font-semibold text-[#7A2E00] break-all">{contact.email}</span>
              </div>
              {contact.email && !contact.email.includes('[To be provided') ? (
                <CopyButton value={contact.email} />
              ) : null}
            </div>
            <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#96731F] block">{SITE_COPY.about.sections.phoneLabel}</span>
                <span className="text-sm font-semibold text-[#7A2E00] break-all">{contact.phone}</span>
              </div>
              {contact.phone && !contact.phone.includes('[To be provided') ? (
                <CopyButton value={contact.phone} />
              ) : null}
            </div>
            <p className="text-xs text-[#66523D] leading-relaxed pt-1">
              <strong className="text-[#7A2E00]">{SITE_COPY.about.sections.responseHoursLabel}</strong> {contact.note}
            </p>
            <button
              type="button"
              onClick={() => openModalWithCircuit('Upcoming General Yatra Schedule')}
              className="w-full py-2.5 rounded-full text-xs font-bold text-[#FFFDF7] bg-gradient-to-r from-[#D95F0E] via-[#B34700] to-[#7A2E00] hover:brightness-105 shadow-md transition-all"
            >
              {SITE_COPY.about.sections.requestSchedule}
            </button>
          </div>
        </section>
      </div>

      {/* ============ Founder & CEO desk ============ */}
      <section aria-labelledby="about-ceo" className={cardShell} id="ceo-leadership">
        <div className={topStrip} aria-hidden="true" />
        <div className={`${sectionHead} flex items-center justify-between flex-wrap gap-2`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.ceoEyebrow}</span>
            <h2 id="about-ceo" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
              {SITE_COPY.about.sections.ceoTitle}
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF2E3] border border-[#C99A2E]/45 text-[#96731F] flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#B34700]" aria-hidden="true" />
            <span>{SITE_COPY.about.sections.ceoBadge}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Photo column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <CeoPhotoCard photo={ceoPhoto} setPhoto={setCeoPhoto} />
            <div className="w-full max-w-xs mt-3.5 bg-[#FAF2E3]/70 rounded-xl p-3 border border-[#EBDDBE] text-xs text-[#66523D] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B34700] shrink-0" aria-hidden="true" />
                <span className="truncate">{ceo.base}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B34700] shrink-0" aria-hidden="true" />
                <a href={`mailto:${ceo.email}`} className="text-[#7A2E00] hover:text-[#B34700] font-medium truncate">
                  {ceo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B34700] shrink-0" aria-hidden="true" />
                <span>{ceo.trustee}</span>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B34700] bg-[#C99A2E]/15 px-2.5 py-0.5 rounded-md border border-[#C99A2E]/30">
                  {ceo.role}
                </span>
                <span className="text-xs font-semibold text-[#96731F]">{ceo.org}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#7A2E00]">{ceo.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-[#96731F] mt-0.5">{ceo.title}</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF2E3] border-l-4 border-l-[#B34700] border border-[#C99A2E]/35 relative">
              <Quote className="w-6 h-6 text-[#C99A2E]/40 absolute top-3 right-3 pointer-events-none" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-[#332417] italic leading-relaxed">{ceo.quote}</p>
              <div className="mt-2.5 flex items-center justify-between text-xs font-bold text-[#7A2E00]">
                <span>— {ceo.name}</span>
                <span className="text-[11px] font-normal text-[#66523D]">{SITE_COPY.about.sections.quoteAttribution}</span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#66523D] leading-relaxed space-y-2.5">
              {ceo.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ceo.pillars.map((pillar) => (
                <div key={pillar.title} className="p-3.5 bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/35">
                  <div className="flex items-center gap-2 text-[#7A2E00] font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#B34700] shrink-0" aria-hidden="true" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-[11px] text-[#66523D] mt-1 leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openModalWithCircuit('Executive Office / CEO Yatra Consultation')}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#FFFDF7] bg-[#B34700] hover:bg-[#7A2E00] transition-colors shadow-2xs inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{SITE_COPY.about.sections.inquireCeo}</span>
              </button>
              <a
                href={`mailto:${ceo.email}?subject=${encodeURIComponent('Inquiry for Kshetra Tours CEO')}`}
                className="px-4 py-2 rounded-full text-xs font-bold text-[#7A2E00] bg-[#FAF2E3] hover:bg-[#C99A2E]/20 border border-[#C99A2E]/50 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{SITE_COPY.about.sections.directEmailLabel} {ceo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Regional pilgrimage circuits ============ */}
      <section aria-labelledby="about-circuits" className={cardShell} id="circuits">
        <div className={topStrip} aria-hidden="true" />
        <div className={`${sectionHead} flex items-center justify-between flex-wrap gap-2`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.circuitsEyebrow}</span>
            <h2 id="about-circuits" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
              {SITE_COPY.about.sections.circuitsTitle}
            </h2>
          </div>
          <p className="text-xs text-[#66523D] max-w-sm text-right hidden md:block">
            {SITE_COPY.about.sections.circuitsNote}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {circuits.map((c) => (
            <div
              key={c.id}
              className="bg-[#FAF2E3] rounded-xl border border-[#C99A2E]/40 p-5 flex flex-col justify-between hover:border-[#96731F] transition-all relative overflow-hidden group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C99A2E]/20 text-[#7A2E00] border border-[#C99A2E]/40">
                    {c.count}
                  </span>
                  <span className="text-xs font-bold text-[#B34700] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{c.duration}</span>
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#7A2E00] mt-2 group-hover:text-[#B34700] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs font-semibold text-[#96731F] mt-0.5">{c.subtitle}</p>
                <p className="text-xs text-[#66523D] leading-relaxed mt-2.5">{c.desc}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#332417]">
                  <MapPin className="w-3.5 h-3.5 text-[#B34700] shrink-0" aria-hidden="true" />
                  <span><strong>Base camps:</strong> {c.baseCamps}</span>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#EBDDBE]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#66523D] block mb-1">
                    {SITE_COPY.about.sections.keyShrinesLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.highlights.map((h) => (
                      <span key={h} className="px-2 py-0.5 rounded-md bg-[#FFFDF7] border border-[#C99A2E]/35 text-[11px] text-[#332417]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#EBDDBE] flex items-center justify-between gap-2">
                <Link
                  to={`/kshetrams?region=${encodeURIComponent(c.region)}`}
                  className="text-xs font-bold text-[#7A2E00] hover:text-[#B34700] transition-colors flex items-center gap-1 group/btn"
                >
                  <span>{SITE_COPY.about.sections.viewAllPrefix} {c.region === 'Celestial' ? 'Vinnulaga' : c.region} {SITE_COPY.about.sections.viewAllSuffix}</span>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                </Link>
                <button
                  type="button"
                  onClick={() => openModalWithCircuit(`${c.title} (${c.count.replace(' Divya Desams', ' Desams').replace(' Celestial Abodes', ' Celestial Abodes')})`)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-[#4A3005] bg-gradient-to-b from-[#E2C47C] to-[#C99A2E] hover:brightness-105 border border-[#96731F] shadow-2xs transition-all"
                >
                  {SITE_COPY.about.sections.inquireCircuit}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Sanctum etiquette ============ */}
      <section aria-labelledby="about-etiquette" className={cardShell} id="sanctum-etiquette">
        <div className={topStrip} aria-hidden="true" />
        <div className={sectionHead}>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">{SITE_COPY.about.sections.etiquetteEyebrow}</span>
          <h2 id="about-etiquette" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
            {SITE_COPY.about.sections.etiquetteTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#66523D] mt-1 max-w-2xl">
            {SITE_COPY.about.sections.etiquetteLead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {etiquette.map((card, i) => (
            <div key={card.id} className="p-5 sm:p-6 rounded-xl border border-[#C99A2E]/40 bg-[#FAF2E3] space-y-3.5">
              <div className="flex items-center gap-2.5 text-[#7A2E00] pb-2 border-b border-[#EBDDBE]">
                {i === 0 ? <ThirumanIcon className="w-5 h-7" /> : <DeepamIcon className="w-5 h-5" />}
                <div>
                  <h3 className="font-display text-xl font-bold">{card.title}</h3>
                  <span className="text-[11px] text-[#66523D]">{card.subtitle}</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-[#332417] leading-relaxed">
                {card.points.map(([lead, text]) => (
                  <li key={lead} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B34700] shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>{lead}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ScheduleModal
        open={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
        initialCircuit={modalCircuit}
      />
    </div>
  );
}
