/**
 * SaintLegend — the Sthala Puranam & legend highlight callout shared by the
 * saint templates (dossier §2.2 closing block). Renders nothing when absent.
 * @param {object} props
 * @param {{title?: string, text: string}} [props.legend]
 */
export default function SaintLegend({ legend }) {
  if (!legend?.text) return null;
  return (
    <aside className="saint-legend">
      <h3>{legend.title ?? 'Legend highlight'}</h3>
      <p>{legend.text}</p>
    </aside>
  );
}
