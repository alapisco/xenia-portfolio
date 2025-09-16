/**
 * SectionV2 - A clean, flexible layout component for page sections
 * 
 * Provides:
 * - Purple background with consistent styling
 * - Configurable width constraints
 * - Stack spacing between sections
 * - Unified padding/margin control
 * - Clean, semantic HTML structure
 * 
 * @component
 * @example
 * <SectionV2 width="medium" padding="large" stack="large">
 *   <p>Your content here</p>
 * </SectionV2>
 */

// Width constraints for section content
const WIDTH_OPTIONS = {
  narrow: 'max-w-3xl',    // 768px - for text content
  medium: 'max-w-5xl',    // 1024px - for balanced layouts
  wide: 'max-w-7xl',      // 1280px - for wide content
  full: 'w-full',         // 100% - for full-width layouts
};

// Padding options for internal spacing
const PADDING_OPTIONS = {
  none: '',
  xsmall: 'p-2 sm:p-4',             // 8px mobile, 16px desktop
  small: 'p-6 sm:p-8',              // 24px mobile, 32px desktop
  medium: 'p-8 sm:p-12 lg:p-16',    // 32px mobile, 48px tablet, 64px desktop
  large: 'p-12 sm:p-16 lg:p-20',    // 48px mobile, 64px tablet, 80px desktop
  xlarge: 'p-16 sm:p-20 lg:p-24',   // 64px mobile, 80px tablet, 96px desktop
  xxlarge: 'p-20 sm:p-24 lg:p-32',  // 80px mobile, 96px tablet, 128px desktop
};

// Horizontal padding options
const HORIZONTAL_PADDING_OPTIONS = {
  none: '',
  xsmall: 'px-2 sm:px-4',           // 8px mobile, 16px desktop
  small: 'px-6 sm:px-8',            // 24px mobile, 32px desktop
  medium: 'px-8 sm:px-12 lg:px-16', // 32px mobile, 48px tablet, 64px desktop
  large: 'px-12 sm:px-16 lg:px-20', // 48px mobile, 64px tablet, 80px desktop
  xlarge: 'px-16 sm:px-20 lg:px-24', // 64px mobile, 80px tablet, 96px desktop
  xxlarge: 'px-4 lg:px-32 sm:px-4', // 0px mobile/tablet, 128px desktop
};

// Vertical padding options
const VERTICAL_PADDING_OPTIONS = {
  none: '',
  xsmall: 'py-2 sm:py-4',           // 8px mobile, 16px desktop
  small: 'py-6 sm:py-8',            // 24px mobile, 32px desktop
  medium: 'py-8 sm:py-12 lg:py-16', // 32px mobile, 48px tablet, 64px desktop
  large: 'py-12 sm:py-16 lg:py-20', // 48px mobile, 64px tablet, 80px desktop
  xlarge: 'py-16 sm:py-20 lg:py-24', // 64px mobile, 80px tablet, 96px desktop
  xxlarge: 'py-20 sm:py-24 lg:py-32', // 80px mobile, 96px tablet, 128px desktop
};

// Stack spacing between sections (margin-top)
const STACK_OPTIONS = {
  none: 'mt-0',
  small: 'mt-8 sm:mt-12',     // 32px mobile, 48px desktop
  medium: 'mt-12 sm:mt-16',   // 48px mobile, 64px desktop
  large: 'mt-16 sm:mt-20',    // 64px mobile, 80px desktop
  xlarge: 'mt-20 sm:mt-24',   // 80px mobile, 96px desktop
  xxlarge: 'mt-80',           // 320px - maximum default Tailwind class
  xxxlarge: 'mt-[24rem]',     // 384px - using arbitrary value
  huge: 'mt-[32rem]',         // 512px - using arbitrary value
  massive: 'mt-[40rem]',      // 640px - using arbitrary value
};

/**
 * @param {Object} props - Component props
 * @param {string} [props.as='section'] - HTML element to render
 * @param {string} [props.id] - HTML id attribute
 * @param {'narrow'|'medium'|'wide'|'full'} [props.width='medium'] - Content width constraint
 * @param {'none'|'xsmall'|'small'|'medium'|'large'|'xlarge'|'xxlarge'} [props.padding='none'] - General internal padding (overridden by specific padding)
 * @param {'none'|'xsmall'|'small'|'medium'|'large'|'xlarge'|'xxlarge'} [props.horizontalPadding='none'] - Horizontal padding (takes precedence over general padding)
 * @param {'none'|'xsmall'|'small'|'medium'|'large'|'xlarge'|'xxlarge'} [props.verticalPadding='none'] - Vertical padding (takes precedence over general padding)
 * @param {'none'|'small'|'medium'|'large'|'xlarge'|'xxlarge'|'xxxlarge'|'huge'|'massive'} [props.stack='none'] - Spacing from previous section
 * @param {boolean} [props.rounded=false] - Apply rounded corners to all sides
 * @param {boolean} [props.roundTop=false] - Apply rounded corners to top only
 * @param {boolean} [props.roundBottom=false] - Apply rounded corners to bottom only
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 * @returns {JSX.Element} SectionV2 component
 */
export default function SectionV2({
  as: Element = 'section',
  id,
  width = 'medium',
  padding = 'none',
  horizontalPadding = 'none',
  verticalPadding = 'none',
  stack = 'none',
  rounded = false,
  roundTop = false,
  roundBottom = false,
  className = '',
  children,
}) {
  // Resolve CSS classes from props
  const widthClass = WIDTH_OPTIONS[width] || WIDTH_OPTIONS.medium;
  const stackClass = STACK_OPTIONS[stack] || STACK_OPTIONS.none;
  
  // Handle padding precedence: specific padding takes precedence over general padding
  // If specific horizontal/vertical padding is provided, use it; otherwise fall back to general padding
  const useGeneralPadding = horizontalPadding === 'none' && verticalPadding === 'none' && padding !== 'none';
  const finalHorizontalPadding = horizontalPadding !== 'none' ? horizontalPadding : (useGeneralPadding ? padding : 'none');
  const finalVerticalPadding = verticalPadding !== 'none' ? verticalPadding : (useGeneralPadding ? padding : 'none');
  
  const horizontalPaddingClass = HORIZONTAL_PADDING_OPTIONS[finalHorizontalPadding] ?? HORIZONTAL_PADDING_OPTIONS.none;
  const verticalPaddingClass = VERTICAL_PADDING_OPTIONS[finalVerticalPadding] ?? VERTICAL_PADDING_OPTIONS.none;
  
  // Build rounded corner classes
  const roundedClasses = [];
  if (rounded) {
    roundedClasses.push('rounded-2xl');
  } else {
    if (roundTop) roundedClasses.push('rounded-t-2xl');
    if (roundBottom) roundedClasses.push('rounded-b-2xl');
  }
  
  // Build component classes
  const sectionClasses = [
    width === 'full' ? 'w-full' : 'mx-auto',
    width === 'full' ? 'w-full' : widthClass,
    'bg-brand-bg',
    'text-brand-text',
    stackClass,
    ...roundedClasses,
    className,
  ].filter(Boolean).join(' ');

  const containerClasses = [
    'w-full',
    horizontalPaddingClass,
    verticalPaddingClass,
  ].filter(Boolean).join(' ');

  return (
    <Element id={id} className={sectionClasses}>
      <div className={containerClasses}>
        {children}
      </div>
    </Element>
  );
}
