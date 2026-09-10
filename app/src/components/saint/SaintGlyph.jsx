/**
 * SaintGlyph — small decorative inline SVG glyphs for the Contributions
 * block (UXD v1.5 §27). Purely presentational; hidden from assistive tech.
 * @param {object} props
 * @param {'works'|'preservation'|'bhakti'|'desams'} props.kind - which glyph
 */
const GLYPHS = {
  works: (
    <>
      <path d="M3 4.5c2.2-1 4.3-1 6.3.3v10c-2-1.3-4.1-1.3-6.3-.3v-10z" />
      <path d="M14.7 4.5c-2.2-1-4.3-1-6.3.3v10c2-1.3 4.1-1.3 6.3-.3v-10z" />
      <path d="M9 5v9.6" />
    </>
  ),
  preservation: (
    <>
      <path d="M10 1.8l6.5 2.4v4.6c0 4-2.7 6.9-6.5 8.4-3.8-1.5-6.5-4.4-6.5-8.4V4.2L10 1.8z" />
      <path d="M6.8 9.4l2.2 2.2 4.2-4.4" />
    </>
  ),
  bhakti: (
    <>
      <path d="M10 2.6c2.6 2.5 4.4 4.7 4.4 7.3a4.4 4.4 0 11-8.8 0c0-2.6 1.8-4.8 4.4-7.3z" />
      <path d="M10 16.8v1.4" />
    </>
  ),
  desams: (
    <>
      <path d="M10 18s-5.8-5.2-5.8-9.4a5.8 5.8 0 1111.6 0C15.8 12.8 10 18 10 18z" />
      <circle cx="10" cy="8.4" r="2.1" />
    </>
  ),
};

export default function SaintGlyph({ kind }) {
  return (
    <svg
      className="saint-glyph"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {GLYPHS[kind] ?? GLYPHS.desams}
    </svg>
  );
}
