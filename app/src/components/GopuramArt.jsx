/**
 * GopuramArt — decorative gold line-art of a gopuram complex with palms,
 * drawn once as inline SVG and reused by the Explore page header and the
 * browse-card "photo coming soon" placeholder. Purely decorative (aria
 * hidden); sizes and colors via className (currentColor strokes).
 * @param {object} props
 * @param {string} [props.className] - size + color classes (e.g. text-gold)
 */
export default function GopuramArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 220 130"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* main gopuram */}
      <path d="M110 122V62h46v60" />
      <path d="M116 62v-9h34v9M119 53v-10h28v10M123 43v-11h20v11M128 32v-10h10v10M131 22v-9h4v9" />
      <path d="M133 13V6m0 0l-3 3m3-3l3 3" />
      <path d="M116 72h34m-34 10h34m-34 10h34m-34 10h34m-34 10h34" />
      {/* small gopuram */}
      <path d="M70 122V80h28v42" />
      <path d="M74 80v-8h20v8M77 72v-9h14v9M82 63v-9h4v9" />
      <path d="M74 88h20m-20 10h20m-20 10h20" />
      {/* palms */}
      <path d="M36 122c2-18 1-32-4-44m4 44c-2-18-6-30-12-38m12 38c0-16 3-30 10-40m-10 40c2-14 8-26 16-32" />
      <path d="M32 78c-6-6-12-8-18-6m18 6c-2-8-6-13-12-15m12 15c2-8 7-12 14-13m-14 13c6-4 12-5 18-2" />
      <path d="M182 122c1-14 0-25-4-34m4 34c-1-12-4-22-9-28m9 28c0-12 2-22 8-30m-8 30c2-10 6-19 12-24" />
      {/* ground */}
      <path d="M10 122h200" strokeWidth="2.5" />
    </svg>
  );
}
