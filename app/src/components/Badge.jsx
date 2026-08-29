/**
 * Badge — small pill label for metadata (region, deity form, pasuram count).
 * @param {object} props
 * @param {React.ReactNode} props.children - badge content
 */
export default function Badge({ children }) {
  return <span className="badge">{children}</span>;
}
