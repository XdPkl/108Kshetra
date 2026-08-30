/**
 * Footer — attribution and content disclaimer (FR-51), plus the
 * local-storage privacy note for the yatra toolkit (FR-71).
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Compiled with reverence from the Nalayira Divya Prabandham tradition and
        standard published lists of the 108 Divya Desams.
      </p>
      <p>
        Content is provided in good faith for devotional and educational purposes.
      </p>
      <p className="site-footer__privacy">
        Your visited marks and trip are stored only in your browser — never sent
        to any server.
      </p>
    </footer>
  );
}
