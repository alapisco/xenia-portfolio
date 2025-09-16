/**
 * @typedef {Object} SectionProps
 * @property {('section'|'main'|'article'|'div'|'aside')} [as='section'] - HTML element to render
 * @property {string} [id] - HTML id attribute for the section
 * @property {string} [title] - Optional section title that renders as an h2 element
 * @property {('none'|'small'|'medium'|'large')} [padding='none'] - Vertical padding size
 * @property {('full'|'wide'|'medium'|'narrow')} [width='full'] - Content width constraint
 * @property {('none'|'small'|'medium'|'large'|'xlarge')} [stack='none'] - Vertical spacing from previous section
 * @property {('none'|'tight'|'normal'|'relaxed'|'loose')} [contentSpacing='none'] - Inner content spacing between child elements
 * @property {boolean} [roundTop=false] - Whether to add rounded top corners (20px radius)
 * @property {boolean} [roundBottom=false] - Whether to add rounded bottom corners (20px radius)
 * @property {string} [className=''] - Additional CSS classes to apply to the wrapper
 * @property {import('react').ReactNode} children - Content to render inside the section
 */

/**
 * Section - Foundational layout component for SPA pages
 * 
 * A layout component that provides consistent structure, spacing, and styling
 * for page sections. Features purple background, responsive design, and
 * flexible content width options.
 * 
 * @param {SectionProps} props - The component props
 * @returns {import('react').JSX.Element} The rendered section component
 * 
 * @example
 * // Basic usage with title and content spacing
 * <Section title="About" padding="medium" width="wide" contentSpacing="normal">
 *   <p>First paragraph with automatic spacing</p>
 *   <p>Second paragraph with automatic spacing</p>
 * </Section>
 * 
 * @example
 * // Hero section without title
 * <Section as="main" id="hero" padding="small" width="full">
 *   <div className="min-h-screen">Hero content</div>
 * </Section>
 * 
 * @example
 * // Card-like section with rounded corners and loose spacing
 * <Section 
 *   title="Projects" 
 *   padding="large" 
 *   width="medium" 
 *   contentSpacing="loose"
 *   roundTop 
 *   roundBottom
 *   stack="large"
 * >
 *   <div>Project card 1</div>
 *   <div>Project card 2</div>
 *   <div>Project card 3</div>
 * </Section>
 */
