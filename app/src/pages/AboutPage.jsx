/**
 * AboutPage — "About Us — Kshetra Tours" (FR-87) in the zip-parity
 * containers (UXD v3.0 Gate 11): ruled banner with quick-jump anchor chips
 * (matching the header's Kshetra Tours dropdown), the digital-archive card
 * with a 3-up feature grid, and the guided-yatras / contact two-column
 * split with copy-to-clipboard actions. Entirely data-driven from
 * src/data/about.js; zip-only business sections (CEO desk, circuits,
 * etiquette, calendar) are out of layout-only scope.
 */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, Route as RouteIcon, ShieldCheck, Copy, Check } from 'lucide-react';
import { ABOUT } from '../data/about.js';

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

const cardShell = 'bg-[#FFFDF7] rounded-2xl border border-[#C99A2E]/40 shadow-xs p-6 sm:p-8 relative overflow-hidden';
const topStrip = 'absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E2C47C] via-[#C99A2E] to-[#96731F]';
const sectionHead = 'border-b border-[#F0E3C6] pb-3 mb-6';
const anchorChip = 'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFDF7] border border-[#C99A2E]/50 text-[#7A2E00] text-xs font-semibold hover:border-[#B34700] hover:text-[#B34700] transition-colors shadow-2xs';

export default function AboutPage() {
  const { site, tours, contact } = ABOUT;
  const { hash } = useLocation();

  // Scroll to the anchor the header's Kshetra Tours dropdown targeted
  useEffect(() => {
    if (!hash) return undefined;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return undefined;
  }, [hash]);

  return (
    <div className="space-y-6">
      {/* Banner with quick-jump anchors */}
      <header className="border-b border-[#E3D2AE] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">
          Nalayira Divya Prabandham Series
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#7A2E00] tracking-tight mt-1">
          About Us — Kshetra Tours
        </h1>
        <p className="text-sm text-[#66523D] mt-1 max-w-2xl">
          A dedicated devotional resource and guided pilgrimage initiative celebrating the 108 Divya Desams
          glorified in the Tamil Veda.
        </p>
        <nav className="flex flex-wrap gap-2 mt-4" aria-label="About sections">
          <a className={anchorChip} href="#archive"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Digital Archive</a>
          <a className={anchorChip} href="#guided-yatras"><RouteIcon className="w-3.5 h-3.5" aria-hidden="true" /> Guided Yatras</a>
          <a className={anchorChip} href="#contact-desk"><ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Contact</a>
        </nav>
      </header>

      {/* The digital archive */}
      <section aria-labelledby="about-site" className={`${cardShell} scroll-mt-36`} id="archive">
        <div className={topStrip} aria-hidden="true" />
        <div className={sectionHead}>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">The digital archive</span>
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
        <section aria-labelledby="about-tours" className={`${cardShell} scroll-mt-36`} id="guided-yatras">
          <div className={topStrip} aria-hidden="true" />
          <div className={sectionHead}>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">Guided yatras</span>
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

        <section aria-labelledby="about-contact" className={`${cardShell} scroll-mt-36`} id="contact-desk">
          <div className={topStrip} aria-hidden="true" />
          <div className={sectionHead}>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#B34700]">Pilgrim inquiries</span>
            <h2 id="about-contact" className="font-display text-2xl sm:text-3xl font-semibold text-[#7A2E00] mt-0.5">
              {contact.heading}
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#96731F] block">Email us</span>
                <span className="text-sm font-semibold text-[#7A2E00] break-all">{contact.email}</span>
              </div>
              {contact.email && !contact.email.includes('[To be provided') ? (
                <CopyButton value={contact.email} />
              ) : null}
            </div>
            <div className="bg-[#FAF2E3] p-4 rounded-xl border border-[#C99A2E]/40 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#96731F] block">Phone / WhatsApp</span>
                <span className="text-sm font-semibold text-[#7A2E00] break-all">{contact.phone}</span>
              </div>
              {contact.phone && !contact.phone.includes('[To be provided') ? (
                <CopyButton value={contact.phone} />
              ) : null}
            </div>
            <p className="text-xs text-[#66523D] leading-relaxed pt-1">
              <strong className="text-[#7A2E00]">Response hours:</strong> {contact.note}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
