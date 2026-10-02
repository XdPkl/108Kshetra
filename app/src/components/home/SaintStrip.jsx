/**
 * SaintStrip — coordinated restyle (PO round 23): full-width darshan
 * band with a left text column (gold small-caps eyebrow, serif display
 * title, lead, outlined "View all …" CTA) and a 4-tile row of shared
 * PersonPreview components — directory portrait framing, English name
 * followed by the Tamil name, unique "View profile" links. `tone`
 * switches the band background (azhwars = ivory, acharyas = sandal).
 * @param {object} props
 * @param {string} props.eyebrow - small-caps section label
 * @param {string} props.title - display heading
 * @param {string} props.lead - supporting line
 * @param {Array} props.saints - azhwar/acharya records
 * @param {string} props.base - detail route base ('/azhwar' | '/acharya')
 * @param {string} props.ctaLabel - outline CTA text
 * @param {string} props.ctaTo - outline CTA destination
 * @param {'ivory'|'sandal'} [props.tone] - band background (default ivory)
 */
import { ButtonLink } from '../ui/Button.jsx';
import PersonPreview from '../directory/PersonPreview.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function SaintStrip({
  eyebrow, title, lead, saints, base, ctaLabel, ctaTo, tone = 'ivory',
}) {
  const bandBg = tone === 'sandal' ? 'bg-[#EEDCC0]' : 'bg-[#FAF2E3]';
  return (
    <section className={`w-full ${bandBg}`}>
      <div className="mx-auto grid max-w-site items-start gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[340px_1fr]">
        <div className="lg:sticky lg:top-24">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          <ButtonLink to={ctaTo} variant="secondary" className="-mt-2">
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        {/* Person previews — shared directory framing + unique profile links */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {saints.map((saint) => (
            <PersonPreview key={saint.id} person={saint} base={base} />
          ))}
        </div>
      </div>
    </section>
  );
}
