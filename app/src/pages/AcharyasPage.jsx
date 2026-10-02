/**
 * AcharyasPage — the guru parampara index at /acharyas (US-ACH-02, FR-93),
 * restyled for consistency (PO round 22) on the shared `.dir` directory
 * theme: DirectoryHeader intro (full-width mobile text; the gopuram
 * illustration stays a right-hand desktop watermark in an absolutely-
 * positioned slot with no mobile column), in-page era jump links, and a
 * two-column (one on mobile) roster of PersonEntry components — English
 * name, Tamil name, contribution summary, Period | Guru metadata and a
 * single shared "View profile" link per entry (the old whole-row overlay
 * + "Read story" duplicate keyboard stop is retired). Entries separate
 * with subtle horizontal hairlines only — the central vertical divider
 * and the repeated lotus junctions are removed. Portraits keep one
 * 3/4 top-anchored framing: Wikipedia images via `useWikiImage` where
 * the dataset has a wiki slug, the restrained PortraitFallback tile
 * otherwise (no historical portrait is ever invented).
 */
import { getAllAcharyas, getAcharyaById } from '../data/api.js';
import { groupBy } from '../utils/group.js';
import DirectoryHeader from '../components/directory/DirectoryHeader.jsx';
import PersonEntry from '../components/directory/PersonEntry.jsx';
import { ArrowDown } from 'lucide-react';
import { SITE_COPY } from '../data/siteCopy.js';
import gopuramIllustration from '../assets/gopuram-illustration.jpg';

/**
 * Era-group jump anchors — explicit mapping so the section ids are
 * stable; an unmapped future era group falls back to a slugged id and
 * uses its own label (no data is invented).
 */
const ERA_ANCHORS = {
  'Purvacharyas — the early masters': { id: 'early-masters', jump: 'Early masters' },
  'The age of Ramanuja': { id: 'age-of-ramanuja', jump: 'Age of Ramanuja' },
  'Later acharyas': { id: 'later-acharyas', jump: 'Later acharyas' },
};

const anchorFor = (eraGroup) => ERA_ANCHORS[eraGroup]
  ?? { id: eraGroup.toLowerCase().replace(/[^a-z0-9]+/g, '-'), jump: eraGroup };

export default function AcharyasPage() {
  const acharyas = getAllAcharyas();
  const groups = groupBy(acharyas, (a) => a.eraGroup);

  return (
    <div className="dir">
      <DirectoryHeader
        eyebrow={SITE_COPY.acharyasPage.eyebrow}
        title={SITE_COPY.acharyasPage.title}
        lead={SITE_COPY.acharyasPage.lead}
        media={(
          <img
            src={gopuramIllustration}
            alt=""
            className="h-full w-full object-contain object-[right_bottom] opacity-80 [mask-composite:intersect] [mask-image:linear-gradient(to_left,black_72%,transparent),linear-gradient(to_bottom,black_72%,transparent)]"
          />
        )}
      >
        {/* Era jump links — anchor scroll, all groups stay rendered */}
        <nav className="dir-jumps" aria-label="Era sections">
          {[...groups.keys()].map((eraGroup) => {
            const { id, jump } = anchorFor(eraGroup);
            return (
              <a key={id} href={`#${id}`}>
                {jump}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </nav>
      </DirectoryHeader>

      {[...groups.entries()].map(([eraGroup, list]) => {
        const { id } = anchorFor(eraGroup);
        return (
          <section key={eraGroup} id={id} aria-labelledby={`era-${id}`} className="dir-section">
            <div className="dir-section-head">
              <h2 id={`era-${id}`}>{eraGroup}</h2>
              <span className="dir-section-rule" aria-hidden="true" />
              <span className="dir-section-count">
                {list.length} {list.length === 1 ? 'acharya' : 'acharyas'}
              </span>
            </div>
            <div className="dir-list">
              {list.map((acharya) => {
                const guru = acharya.guru ? getAcharyaById(acharya.guru) : null;
                return (
                  <PersonEntry
                    key={acharya.id}
                    name={acharya.name}
                    tamilName={acharya.tamilName}
                    summary={acharya.role}
                    meta={[
                      { label: 'Period', value: acharya.era },
                      { label: 'Guru', value: guru ? guru.name : 'Not specified' },
                    ]}
                    portrait={{
                      src: acharya.photos?.[0]?.src ?? null,
                      wiki: acharya.wiki ?? null,
                      alt: `${acharya.name} portrait`,
                    }}
                    profileTo={`/acharya/${acharya.id}`}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
