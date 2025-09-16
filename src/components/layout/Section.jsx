/**
 * Section - A foundational layout component for SPA pages
 * 
 * Provides consistent layout structure with:
 * - Content width constraints
 * - Vertical padding and spacing
 * - Optional section titles
 * - Rounded corners
 * - Purple background with white text
 * 
 * @component
 * @example
 * // Basic usage
 * <Section title="About" padding="large">
 *   <p>Content goes here...</p>
 * </Section>
 * 
 * // Custom width and rounded corners
 * <Section width="medium" roundTop roundBottom>
 *   <div>Custom content without title</div>
 * </Section>
 */

// Vertical padding for section content (legacy - kept for backward compatibility)
const paddingMap = {
  none: 'py-0',
  small: 'py-8 sm:py-10',
  medium: 'py-16 sm:py-20', 
  large: 'py-24 sm:py-32',
};

// Vertical padding for section content
const verticalPaddingMap = {
  none: 'py-0',
  small: 'py-8 sm:py-10',
  medium: 'py-16 sm:py-20', 
  large: 'py-24 sm:py-32',
  xlarge: 'py-32 sm:py-40',
};

// Horizontal padding for section content
const horizontalPaddingMap = {
  none: 'px-0',
  small: 'px-2 sm:px-3',
  medium: 'px-4 sm:px-6 lg:px-8',
  large: 'px-6 sm:px-8 lg:px-12',
  xlarge: 'px-8 sm:px-12 lg:px-16',
};

// Content width constraints
const widthMap = {
  full: 'w-full',
  wide: 'max-w-screen-xl',
  medium: 'max-w-5xl',
  narrow: 'max-w-3xl',
};

// Vertical spacing between sections
const stackSpacing = {
  none: 0,
  small: 32,
  medium: 64,
  large: 96,
  xlarge: 128,
};

// Inner content spacing
const contentSpacingMap = {
  none: '',
  tight: 'space-y-2',
  normal: 'space-y-4', 
  relaxed: 'space-y-6',
  loose: 'space-y-8',
};

/**
 * @param {Object} props - Component props
 * @param {string} [props.as='section'] - HTML element to render (section, div, main, etc.)
 * @param {string} [props.id] - HTML id attribute
 * @param {string} [props.title] - Optional section title (renders as h2)
 * @param {'none'|'small'|'medium'|'large'} [props.padding='none'] - Vertical padding size (legacy - use verticalPadding instead)
 * @param {'none'|'small'|'medium'|'large'|'xlarge'} [props.verticalPadding] - Vertical padding size (preferred)
 * @param {'none'|'small'|'medium'|'large'|'xlarge'} [props.horizontalPadding='medium'] - Horizontal padding size
 * @param {'full'|'wide'|'medium'|'narrow'} [props.width='full'] - Content width constraint
 * @param {'none'|'small'|'medium'|'large'|'xlarge'} [props.stack='none'] - Spacing from previous section
 * @param {'none'|'tight'|'normal'|'relaxed'|'loose'} [props.contentSpacing='none'] - Inner content spacing
 * @param {boolean} [props.roundTop=false] - Add rounded top corners
 * @param {boolean} [props.roundBottom=false] - Add rounded bottom corners
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content to render inside the section
 * @returns {JSX.Element} Section component
 */
export default function Section({
  as = 'section',
  id,
  title, // Optional section title (renders as h2)
  padding = 'none', // Legacy prop for backward compatibility
  verticalPadding, // New preferred prop
  horizontalPadding,
  width = 'full',
  stack = 'none',
  contentSpacing = 'none',
  roundTop = false,
  roundBottom = false,
  className = '',
  children,
}) {
  const Tag = as;
  // Use verticalPadding if provided, otherwise fall back to legacy padding prop
  const verticalPaddingClass = verticalPadding 
    ? (verticalPaddingMap[verticalPadding] || verticalPaddingMap.medium)
    : (paddingMap[padding] || paddingMap.medium);
  const horizontalPaddingClass = horizontalPaddingMap[horizontalPadding] || horizontalPaddingMap.none;
  const widthClass = widthMap[width] || widthMap.full;
  const spacerHeight = stackSpacing[stack] ?? stackSpacing.medium;
  const contentSpacingClass = contentSpacingMap[contentSpacing] || contentSpacingMap.none;

  // Build rounded corners style
  const roundedStyle = {};
  if (roundTop) {
    roundedStyle.borderTopLeftRadius = '20px';
    roundedStyle.borderTopRightRadius = '20px';
  }
  if (roundBottom) {
    roundedStyle.borderBottomLeftRadius = '20px';
    roundedStyle.borderBottomRightRadius = '20px';
  }

  return (
    <Tag id={id} className={`w-full ${className}`}>
      {/* Vertical spacing from previous section */}
      {spacerHeight > 0 && (
        <div
          aria-hidden="true"
          style={{ height: spacerHeight }}
        />
      )}
      
      {/* Section content with purple background and text styling */}
      <div
        className={`mx-auto ${widthClass} bg-brand-bg text-brand-text ${verticalPaddingClass} relative`}
        style={roundTop || roundBottom ? roundedStyle : undefined}
      >
        {/* Horizontal padding for content */}
        <div className={`${horizontalPaddingClass} ${contentSpacingClass}`}>
          {title && (
            <h2 className="mb-8 text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </Tag>
  );
}
