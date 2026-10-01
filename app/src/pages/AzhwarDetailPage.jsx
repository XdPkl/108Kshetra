/**
 * AzhwarDetailPage — the azhwar dossier at /azhwar/:id (US-AZW-02, FR-90),
 * restyled to the shared kxd theme (round 18, same paper/rust palette and
 * Source Serif 4 / DM Sans / Noto Serif Tamil stack as the kshetram detail
 * page): compact split hero with the portrait column, sticky hash-synced
 * five-tab rail (Life & tradition · Hymns & meaning · Sacred places ·
 * Media · Sources) with scroll-into-view activation, flat ruled panels
 * (article + Key-moments aside, verse card + glossary, ruled desam rows,
 * resource rows), the persistent opening-verse band as a visit card,
 * Birthplace/Sacred-places cards, a sources summary row and the
 * chronological prev/next nav.
 * Content is dataset-driven (azhwar-details.json) — the snap's condensed
 * phrases are NOT in the data, so nearest fields render instead (lifeHistory
 * heading, timeline when/event, verse significance).
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, BookOpen, ChevronLeft, ChevronRight, MapPin, Search, Star,
} from 'lucide-react';
import { getAzhwarById, getAzhwarNeighbours, getKshetramsByAzhwar } from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import { TempleGopuramIcon, ShankaIcon } from '../components/SacredIcons.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import SaintKeyMoments from '../components/saint/SaintKeyMoments.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintPortrait from '../components/saint/SaintPortrait.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';

const MUDHAL_ORDINALS = ['first', 'second', 'third'];
const TAB_IDS = ['life', 'hymns', 'places', 'media', 'sources'];

export default function AzhwarDetailPage() {
  const { id } = useParams();
  const azhwar = getAzhwarById(id);

  const [tab, setTab] = useState('life');
  const [storyExpanded, setStoryExpanded] = useState(false);
  const tabRefs = useRef({});
  const panelRef = useRef(null);

  // URL-hash deep links (#hymns etc.) — activate the hashed tab on load,
  // write the hash on every switch, follow hashchange (kxd round-16 idiom).
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.slice(1);
      if (!TAB_IDS.includes(hash)) return;
      setTab(hash);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  if (!azhwar) {
    return (
      <div className="max-w-xl mx-auto pt-8">
        <EmptyState
          title="This Azhwar was not found"
          message="The link may be outdated. Meet all twelve Azhwars instead."
          action={<Link className="btn btn--primary" to="/azhwars">All Azhwars</Link>}
        />
      </div>
    );
  }

  const { prev, next } = getAzhwarNeighbours(id);
  const desams = getKshetramsByAzhwar(id);
  const birthplaceLink = azhwar.birthplace?.kshetramId;
  const verse = azhwar.verse ?? null;
  const recitationHref = verse?.audio
    ?? (verse?.work ? `https://archive.org/search?query=${encodeURIComponent(`${verse.work} recitation`)}` : null);
  const heroEyebrow = azhwar.order && azhwar.order <= 3
    ? `The ${MUDHAL_ORDINALS[azhwar.order - 1]} of the Mudhal Azhwars`
    : `Sri Vaishnava Sampradaya${azhwar.order ? ` · Azhwar ${azhwar.order} of 12` : ''}`;
  const epithet = azhwar.epithets?.[0] ?? null;
  const moreEpithets = (azhwar.epithets ?? []).slice(1);
  const tabs = [
    { id: 'life', label: 'Life & tradition' },
    { id: 'hymns', label: 'Hymns & meaning' },
    { id: 'places', label: `Sacred places (${desams.length})` },
    { id: 'media', label: 'Media' },
    { id: 'sources', label: 'Sources' },
  ];

  // Switch the tab, sync the URL hash and — when the reader is below the
  // tab rail — reveal the panel just under the sticky header + rail.
  // rAF defers until the new panel has mounted.
  const activateTab = (tid, { scrollToPanel = false } = {}) => {
    setTab(tid);
    try {
      window.history.replaceState(null, '', `#${tid}`);
    } catch { /* jsdom / privacy modes */ }
    tabRefs.current[tid]?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
    if (scrollToPanel) {
      requestAnimationFrame(() => {
        const el = panelRef.current;
        if (el && el.getBoundingClientRect().top < 48) el.scrollIntoView?.({ block: 'start' });
      });
    }
  };

  const onTabKey = (e) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const idx = TAB_IDS.indexOf(tab);
    const nextTab = TAB_IDS[(idx + (e.key === 'ArrowRight' ? 1 : -1) + TAB_IDS.length) % TAB_IDS.length];
    activateTab(nextTab, { scrollToPanel: true });
    tabRefs.current[nextTab]?.focus();
  };

  const storyBlocks = Array.isArray(azhwar.lifeHistory) ? azhwar.lifeHistory : [];
  const [firstBlock, ...restBlocks] = storyBlocks;

  return (
    <div className="kxd">
      <a className="skip no-print" href="#azhwar-main">Skip to azhwar details</a>
      <nav className="breadcrumb no-print" aria-label="Breadcrumb">
        <Link to="/azhwars">← All Azhwars</Link>
        {azhwar.order ? <span>{azhwar.order} of 12 in chronological order</span> : null}
        {next ? (
          <Link to={`/azhwar/${next.id}`} className="btn azd-crumb-next">
            {next.name}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        ) : prev ? (
          <Link to={`/azhwar/${prev.id}`} className="btn azd-crumb-next">
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {prev.name}
          </Link>
        ) : null}
      </nav>

      {/* Hero: portrait column + identity, stats + birth facts */}
      <section className="hero azd-hero" aria-label={`${azhwar.name} profile`}>
        <SaintPortrait
          portrait={{
            src: azhwar.photos?.[0]?.src ?? null,
            wiki: null,
            alt: azhwar.photos?.[0]?.alt ?? `${azhwar.name} portrait`,
          }}
        />
        <div className="min-w-0">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1>{azhwar.name}</h1>
          <p className="tamil" lang="ta">{azhwar.tamilName}</p>
          {epithet ? <p className="azd-epithet">{epithet}</p> : null}
          {moreEpithets.length > 0 ? (
            <p className="azd-chips">
              {moreEpithets.map((alias) => (
                <span key={alias} className="pill">{alias}</span>
              ))}
            </p>
          ) : null}
          <p className="hero-summary">
            A life of devotion, remembered through {azhwar.pasuramCount.toLocaleString('en-IN')} sacred verses.
          </p>

          {/* Stat row */}
          <div className="azd-stats">
            <span className="azd-stat">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              {azhwar.pasuramCount.toLocaleString('en-IN')} pasurams
            </span>
            <span className="azd-stat">
              <TempleGopuramIcon className="h-5 w-5" />
              {desams.length} Divya Desams
            </span>
          </div>

          {/* Birth facts row */}
          <div className="azd-birth">
            {azhwar.birthplace ? (
              <div>
                <p className="eyebrow azd-birth-label">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Birthplace
                </p>
                <p className="azd-birth-value">{azhwar.birthplace.name}</p>
                {azhwar.birthplace.district ? (
                  <p className="note">{azhwar.birthplace.district}</p>
                ) : null}
              </div>
            ) : null}
            {azhwar.birthStar ? (
              <div>
                <p className="eyebrow azd-birth-label">
                  <Star className="h-4 w-4" aria-hidden="true" />
                  Birth star
                </p>
                <p className="azd-birth-value">{azhwar.birthStar}</p>
              </div>
            ) : null}
            {azhwar.amsam ? (
              <div>
                <p className="eyebrow azd-birth-label">
                  <ShankaIcon className="h-4 w-5" />
                  Divine amsam
                </p>
                <p className="azd-birth-value">{azhwar.amsam}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Sticky five-tab rail (kxd round-17 idiom) */}
      <div className="tabs-rail no-print">
        <div
          role="tablist"
          aria-label="Azhwar dossier sections"
          onKeyDown={onTabKey}
          className="tabs"
        >
          {tabs.map(({ id: tabId, label }) => (
            <button
              key={tabId}
              ref={(el) => { tabRefs.current[tabId] = el; }}
              type="button"
              role="tab"
              id={`azhwar-tab-${tabId}`}
              aria-selected={tab === tabId}
              aria-controls={`azhwar-panel-${tabId}`}
              tabIndex={tab === tabId ? 0 : -1}
              onClick={() => activateTab(tabId)}
              className="tab"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={`azhwar-panel-${tab}`}
        aria-labelledby={`azhwar-tab-${tab}`}
        aria-label="Azhwar dossier"
        tabIndex={-1}
        className="panel"
      >
        {tab === 'life' ? (
          <div className="article-grid">
            <article>
              <p className="eyebrow">Life &amp; tradition</p>
              {firstBlock ? (
                <div className="story">
                  <h2>{firstBlock.heading}</h2>
                  {firstBlock.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              ) : (
                <NotDocumented />
              )}

              {restBlocks.length > 0 && storyExpanded ? (
                <div className="azd-story-more">
                  {restBlocks.map((block) => (
                    <div key={block.heading} className="story">
                      <h3>{block.heading}</h3>
                      {block.paragraphs.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                  ))}
                  <SaintLegend legend={azhwar.legend} />
                </div>
              ) : null}

              {restBlocks.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setStoryExpanded((v) => !v)}
                  aria-expanded={storyExpanded}
                  className="text-btn"
                >
                  {storyExpanded ? 'Show less' : 'Read the complete life story'}
                  <ArrowRight className={`h-4 w-4${storyExpanded ? ' rotate-90' : ''}`} aria-hidden="true" />
                </button>
              ) : null}

              {(azhwar.bhaktiBhava || azhwar.preservation) ? (
                <div className="azd-callouts">
                  {azhwar.bhaktiBhava ? (
                    <div className="azd-callout">
                      <p className="eyebrow">
                        <SaintGlyph kind="bhakti" /> Role &amp; bhakti bhava
                      </p>
                      <p className="note">{azhwar.bhaktiBhava}</p>
                    </div>
                  ) : null}
                  {azhwar.preservation ? (
                    <div className="azd-callout">
                      <p className="eyebrow">
                        <SaintGlyph kind="preservation" /> Sampradaya preservation
                      </p>
                      <p className="note">{azhwar.preservation}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {azhwar.era || azhwar.period ? (
                <p className="note azd-era">
                  <span className="eyebrow">Era · </span>
                  {azhwar.period}
                  {azhwar.era?.academic ? <> (academic: {azhwar.era.academic})</> : null}
                  {azhwar.era?.contemporaries ? <> · contemporary with the {azhwar.era.contemporaries}</> : null}
                </p>
              ) : null}
            </article>
            <aside>
              <SaintKeyMoments timeline={azhwar.timeline} />
            </aside>
          </div>
        ) : null}

        {tab === 'hymns' ? (
          <div>
            {verse ? (
              <SaintVerse verse={verse} />
            ) : (
              <NotDocumented />
            )}
            {Array.isArray(azhwar.works) && azhwar.works.length > 0 ? (
              <div className="section-rule">
                <h3><SaintGlyph kind="works" /> Sacred works</h3>
                <ul className="disc-list">
                  {azhwar.works.map((w) => (
                    <li key={w.name}>
                      {w.name}{w.pasurams ? ` (${w.pasurams.toLocaleString('en-IN')} pasurams)` : ''}{w.language ? ` — ${w.language}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {tab === 'places' ? (
          <div>
            <h3>Divya Desams glorified by {azhwar.name} ({desams.length})</h3>
            <ul className="azd-desams">
              {desams.map((k) => (
                <li key={k.id}>
                  <Link to={`/kshetram/${k.id}`}>{k.name}</Link>
                </li>
              ))}
            </ul>
            <p className="explore">
              <Link className="text-btn" to={`/kshetrams?azhwar=${azhwar.id}`}>
                Browse all {desams.length} desams →
              </Link>
            </p>
          </div>
        ) : null}

        {tab === 'media' ? (
          <SaintMedia visuals={azhwar.visuals} />
        ) : null}

        {tab === 'sources' ? (
          <SaintSources sources={azhwar.sources} fallback={<NotDocumented />} />
        ) : null}
      </div>

      {/* Opening-verse band (persistent) */}
      {verse?.tamil ? (
        <section aria-label="Discover the opening verse" className="visit-card azd-verseband">
          <div className="min-w-0">
            <p className="eyebrow">Discover the opening verse</p>
            <p className="tamil" lang="ta">{verse.tamil}</p>
            {verse.work ? <p className="note">{verse.work}</p> : null}
          </div>
          <div className="azd-verseband-side">
            {verse.significance ? (
              <div>
                <p className="eyebrow">Meaning:</p>
                <p className="note">{verse.significance}</p>
              </div>
            ) : null}
            <div className="actions">
              <button
                type="button"
                onClick={() => activateTab('hymns')}
                className="btn primary"
              >
                Read verse &amp; meaning
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              {recitationHref ? (
                <a
                  href={recitationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-btn"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Find recitations
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Birthplace / Sacred places cards */}
      <div className="azd-cards">
        {azhwar.birthplace ? (
          <div className="visit-card">
            <p className="eyebrow">Birthplace</p>
            <h3>{azhwar.birthplace.name}</h3>
            <p className="note">
              {azhwar.birthplace.district ?? `Sacred birthplace of ${azhwar.name}.`}
            </p>
            {birthplaceLink ? (
              <Link to={`/kshetram/${birthplaceLink}`} className="text-btn">
                View kshetram
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        ) : null}
        <div className="visit-card">
          <p className="eyebrow">Sacred places</p>
          <h3>{desams.length} Divya Desams</h3>
          <p className="note">
            Explore the {desams.length} Divya Desams glorified by {azhwar.name}
            {verse?.work ? <> in the {verse.work}</> : null}.
          </p>
          <Link
            to={`/kshetrams?azhwar=${azhwar.id}`}
            className="text-btn"
          >
            Explore all {desams.length}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Sources summary row → opens the Sources tab */}
      <button
        type="button"
        onClick={() => activateTab('sources')}
        aria-haspopup="tab"
        className="azd-source-row"
      >
        <span className="azd-source-main">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
          <span className="min-w-0">
            <span className="azd-source-title">Sources &amp; Sampradaya Texts</span>
            <span className="note">Traditional texts, commentaries and references.</span>
          </span>
        </span>
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Bottom chronological navigation */}
      <nav className="explore azd-nav" aria-label="Chronological navigation">
        {prev
          ? (
            <Link to={`/azhwar/${prev.id}`} className="btn">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Previous: <strong>{prev.name}</strong></span>
            </Link>
          )
          : (
            <Link to="/azhwars" className="text-btn">← All Azhwars</Link>
          )}
        {next
          ? (
            <Link to={`/azhwar/${next.id}`} className="btn">
              <span>Next: <strong>{next.name}</strong></span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )
          : (
            <Link to="/azhwars" className="text-btn">All Azhwars →</Link>
          )}
      </nav>
    </div>
  );
}
