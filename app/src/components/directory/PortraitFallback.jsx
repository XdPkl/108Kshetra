/**
 * PortraitFallback — the restrained tile shown when a directory entry
 * has no portrait (no dataset photo and no Wikipedia image): tinted
 * surface, hairline border and a single sacred glyph in gold. No
 * historical portrait is ever generated or invented (PO round 22, item 5).
 * `icon` lets a directory keep its own glyph (e.g. the Thiruman on
 * /azhwars) while sharing the framing and fallback treatment.
 */
export default function PortraitFallback({ icon = null }) {
  return (
    <div className="dir-portrait__fallback" aria-hidden="true">
      {icon}
    </div>
  );
}
