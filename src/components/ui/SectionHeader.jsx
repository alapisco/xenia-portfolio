/**
 * SectionHeader - A reusable header component for sections
 * 
 * Provides consistent typography and styling for section titles
 * with responsive design and clean semantic HTML structure.
 * 
 * @component
 * @example
 * <SectionHeader title="About Me" />
 * <SectionHeader title="Projects" as="h1" />
 */

/**
 * @param {Object} props - Component props
 * @param {string} props.title - The header title text
 * @param {string} [props.as='h2'] - HTML heading element to render (h1, h2, h3, etc.)
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} SectionHeader component
 */
export default function SectionHeader({
  title,
  as: Element = 'h2',
  className = '',
}) {
  const headerClasses = [
    'text-white',
    'font-["Inter"]',
    'text-xl',           // 20px mobile
    'md:text-2xl',       // 24px desktop (matches your specs)
    'font-semibold',     // 600 weight
    'leading-6',         // 24px line-height mobile
    'md:leading-9',      // 36px line-height desktop (matches your specs)
    'pt-2',              // Small vertical padding (8px)
    'pb-4',
    'pl-6',              // Small left padding (8px)
    className,
  ].filter(Boolean).join(' ');

  return (
    <header>
      <Element className={headerClasses}>
        {title}
      </Element>
    </header>
  );
}
