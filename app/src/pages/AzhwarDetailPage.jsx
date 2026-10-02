/**
 * AzhwarDetailPage — the azhwar dossier at /azhwar/:id (US-AZW-02, FR-90),
 * recreated to the 2026-10-01 poigai mock (round 19) on the shared kxd
 * theme: plain breadcrumb, compact profile shell (portrait column,
 * identity block with epithet + stats, birth-facts columns with vertical
 * rules), the sticky hash-synced five-tab rail, and per-tab layouts —
 * Life & tradition (narrative + Key-moments dot timeline), Hymns & meaning
 * (verse reader + glossary sidebar + commentary accordions via
 * SaintVerse), Sacred places (featured desam photo card + numbered
 * directory with the celestial pair grouped), Media (discourse rows +
 * iconography sidebar via SaintMedia) and Sources (repository rows +
 * Reading-this-archive note). The "The lamp of knowledge" opening-verse
 * band and the chronological prev/next nav stay persistent; the round-11
 * birthplace/sacred-places cards and sources summary row are retired
 * (absorbed into the Sacred-places and Sources tabs).
 * Content is dataset-driven (azhwar-details.json) — mock-authored
 * fragments ("The lamp of knowledge", "Reading this archive", section
 * display titles) are flagged in the TER. No data changes.
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, BookOpen, ChevronLeft, ChevronRight, MapPin, Star,
} from 'lucide-react';
import {
  getAzhwarById,
  getAzhwarNeighbours,
  getEnrichedKshetramById,
  getKshetramsByAzhwar,
} from '../data/api.js';
import EmptyState from '../components/EmptyState.jsx';
import NotDocumented from '../components/detail/NotDocumented.jsx';
import { LotusIcon, ShankaIcon, TempleGopuramIcon } from '../components/SacredIcons.jsx';
import SaintGlyph from '../components/saint/SaintGlyph.jsx';
import SaintKeyMoments from '../components/saint/SaintKeyMoments.jsx';
import SaintLegend from '../components/saint/SaintLegend.jsx';
import SaintMedia from '../components/saint/SaintMedia.jsx';
import SaintPortrait from '../components/saint/SaintPortrait.jsx';
import SaintSources from '../components/saint/SaintSources.jsx';
import SaintVerse from '../components/saint/SaintVerse.jsx';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';
import { useWikiImage } from '../hooks/useWikiImage.js';

const MUDHAL_ORDINALS = ['first', 'second', 'third'];
const TAB_IDS = ['life', 'hymns', 'places', 'media', 'sources'];

export default function AzhwarDetailPage() {
  const { id } = useParams();
  const azhwar = getAzhwarById(id);

  const [tab, setTab] = useState('life');
  const [storyExpanded, setStoryExpanded] = useState(false);
  const tabRefs = useRef({});
  const panelRef = useRef(null);
  // Hooks must run unconditionally — before the unknown-id early return
  const desams = getKshetramsByAzhwar(id ?? '');
  const featuredDesam = desams.find((k) => getEnrichedKshetramById(k.id)?.wiki) ?? desams[0] ?? null;
  const featuredPhoto = useWikiImage(
    featuredDesam ? (getEnrichedKshetramById(featuredDesam.id)?.wiki ?? null) : null,
    null,
  );

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
  const verse = azhwar.verse ?? null;
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
  // The mock groups the two Celestial desams apart from the earthly ones.
  const celestialDesams = desams.filter((k) => k.state === 'Celestial');
  const earthlyDesams = desams.filter((k) => k.state !== 'Celestial');

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
        <span className="azd-crumb-sep" aria-hidden="true">›</span>
        <span>{azhwar.name}</span>
      </nav>

      {/* Compact profile shell — portrait | identity | birth facts */}
      <section className="hero azd-hero" aria-label={`${azhwar.name} profile`}>
        <SaintPortrait
          portrait={{
            src: azhwar.photos?.[0]?.src ?? null,
            wiki: null,
            alt: azhwar.photos?.[0]?.alt ?? `${azhwar.name} portrait`,
          }}
        />
        <div className="azd-identity">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1>{azhwar.name}</h1>
          <p className="tamil" lang="ta">{azhwar.tamilName}</p>
          {epithet ? <p className="azd-epithet">{epithet}</p> : null}
          {moreEpithets.length > 0 ? (
            <p className="azd-aliases note">
              Also known as
              {moreEpithets.map((alias) => (
                <span key={alias}>{alias}</span>
              ))}
            </p>
          ) : null}
          <p className="hero-summary">
            A life of devotion, remembered through {azhwar.pasuramCount.toLocaleString('en-IN')} sacred verses.
          </p>
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
        </div>
        {/* Short hero values — the complete birthplace narrative and district
            render in the Life & tradition panel below. */}
        <div className="azd-facts">
          {azhwar.birthplace ? (
            <div>
              <p className="eyebrow azd-birth-label">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Birthplace
              </p>
              <p className="azd-birth-value">
                {typeof azhwar.birthplace.name === 'string' ? azhwar.birthplace.name.split(' — ')[0] : '—'}
              </p>
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
      </section>

      {/* Sticky five-tab rail (kxd idiom; hash behaviour per mock guidance) */}
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
          <div>
            <div className="article-grid">
              <article>
                <p className="eyebrow">Life &amp; tradition</p>
                {firstBlock ? (
                  <div className="story">
                    <h2>{firstBlock.heading}</h2>
                    {/* Concise summary: the block's opening paragraph; the rest
                        of the story sits behind the expander below. */}
                    <p>{firstBlock.paragraphs[0]}</p>
                  </div>
                ) : (
                  <NotDocumented />
                )}

                {azhwar.birthplace?.name ? (
                  <p className="note azd-birth-note">
                    <span className="eyebrow">Birthplace · </span>
                    {azhwar.birthplace.name}
                    {azhwar.birthplace.district ? <> · {azhwar.birthplace.district}</> : null}
                  </p>
                ) : null}

                {(() => {
                  const hasMoreStory = restBlocks.length > 0
                    || (firstBlock?.paragraphs.length ?? 0) > 1
                    || Boolean(azhwar.legend);
                  return hasMoreStory ? (
                    <button
                      type="button"
                      onClick={() => setStoryExpanded((v) => !v)}
                      aria-expanded={storyExpanded}
                      className="btn primary azd-story-toggle"
                    >
                      {storyExpanded ? 'Show less' : 'Read the complete life story'}
                      <ArrowRight className={`h-4 w-4${storyExpanded ? ' rotate-90' : ''}`} aria-hidden="true" />
                    </button>
                  ) : null;
                })()}

                {storyExpanded ? (
                  <div className="azd-story-more">
                    {firstBlock ? (
                      <div className="story">
                        {firstBlock.paragraphs.slice(1).map((p) => (
                          <p key={p.slice(0, 32)}>{p}</p>
                        ))}
                      </div>
                    ) : null}
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

            {/* The lamp-of-knowledge band renders on the Life tab only */}
            {verse?.tamil ? (
              <section aria-label="The lamp of knowledge" className="visit-card azd-verseband">
                <div className="azd-lamp" aria-hidden="true">
                  <LotusIcon className="h-10 w-10" />
                </div>
                <div className="min-w-0">
                  <p className="eyebrow">The lamp of knowledge</p>
                  <p className="tamil azd-band-tamil" lang="ta">{verse.tamil}</p>
                  {verse.work ? <p className="note">{verse.work}</p> : null}
                </div>
                <div className="azd-verseband-side">
                  {verse.significance ? (
                    <p className="azd-band-meaning">{verse.significance}</p>
                  ) : null}
                  <button type="button" onClick={() => activateTab('hymns')} className="azd-band-link">
                    Explore hymn &amp; meaning
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </section>
            ) : null}
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
            <h2>Divya Desams in his hymns</h2>
            <p className="azd-sub">
              {desams.length} sacred places glorified by {azhwar.name}.
            </p>
            <div className="azd-places">
              {featuredDesam ? (
                <figure className="azd-featured">
                  <div className="azd-featured-frame">
                    <img
                      className="azd-featured-img"
                      src={featuredPhoto.src ?? gopuramIllustration}
                      alt={featuredPhoto.src ? `${featuredDesam.name} temple` : ''}
                    />
                  </div>
                  <figcaption>
                    <h3>{featuredDesam.name}</h3>
                    <p className="note">One of the Divya Desams glorified by {azhwar.name}.</p>
                    <Link className="text-btn azd-featured-link" to={`/kshetram/${featuredDesam.id}`}>
                      View kshetram
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </figcaption>
                </figure>
              ) : null}
              <div>
                <ol className="azd-dir">
                  {earthlyDesams.map((k, i) => (
                    <li key={k.id}>
                      <Link to={`/kshetram/${k.id}`}>
                        <span className="azd-dir-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                        <span className="azd-dir-name">{k.name}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
                {celestialDesams.length > 0 ? (
                  <div className="visit-card azd-celestial">
                    <p className="eyebrow azd-celestial-h">
                      <LotusIcon className="h-4 w-4" />
                      Celestial Divya Desams
                    </p>
                    <ol className="azd-dir azd-dir--celestial">
                      {celestialDesams.map((k, i) => (
                        <li key={k.id}>
                          <Link to={`/kshetram/${k.id}`}>
                            <span className="azd-dir-num" aria-hidden="true">{String(earthlyDesams.length + i + 1).padStart(2, '0')}</span>
                            <span className="azd-dir-name">{k.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}
                <p className="azd-browse">
                  <Link className="btn primary" to={`/kshetrams?azhwar=${azhwar.id}`}>
                    Browse all {desams.length} desams
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {tab === 'media' ? (
          <SaintMedia
            visuals={azhwar.visuals}
            name={azhwar.name}
            photo={azhwar.photos?.[0] ?? null}
            onSeeSources={() => activateTab('sources')}
          />
        ) : null}

        {tab === 'sources' ? (
          <div className="azd-sources-grid">
            <div>
              <h2>Sources &amp; further reading</h2>
              <p className="azd-sub">Explore the repositories referenced in this archive.</p>
              <SaintSources sources={azhwar.sources} fallback={<NotDocumented />} />
            </div>
            <aside className="visit-card azd-reading">
              <p className="eyebrow azd-reading-h">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Reading this archive
              </p>
              <p>
                The Azhwars' story comes from traditional narratives and modern
                academic chronologies — this list offers further reading, not
                verified passage-level citations.
              </p>
              <details className="azd-reading-more">
                <summary>Read the full guidance</summary>
                <p>
                  The traditional narratives of the Azhwars, found in Guru Parampara,
                  Sthala Puranas and Sri Vaishnava sampradaya sources, and modern
                  academic chronologies should be distinguished. This source list
                  provides further reading and helpful repositories for exploring the
                  life, works and context of {azhwar.name}. They are not verified
                  passage-level citations for the content on this site.
                </p>
              </details>
            </aside>
          </div>
        ) : null}
      </div>

      {/* Bottom chronological navigation (after every panel) */}
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
