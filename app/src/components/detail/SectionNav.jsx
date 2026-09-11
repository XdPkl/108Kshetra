/**
 * SectionNav — sticky in-page anchor chips for detail templates (FR-84),
 * with scroll-spy: the chip of the section currently in view fills with the
 * temple-gold gradient (UXD v2 mocks). Scroll/resize based so it works in
 * every environment.
 * @param {object} props
 * @param {{id: string, label: string}[]} props.sections - rendered sections in order
 */
import { useEffect, useState } from 'react';

export default function SectionNav({ sections }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);

  useEffect(() => {
    if (!sections?.length) return undefined;
    const onScroll = () => {
      const probe = window.scrollY + 170;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= probe) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = sections[sections.length - 1].id;
      }
      setActiveId(current);
    };
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sections]);

  if (!sections?.length) return null;
  return (
    <nav className="section-nav" aria-label="Page sections">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          className={`section-nav__chip${activeId === id ? ' is-active' : ''}`}
          href={`#${id}`}
          aria-current={activeId === id ? 'true' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
