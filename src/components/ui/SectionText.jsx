/**
 * SectionText - A simple text container component for displaying paragraphs
 * 
 * Similar to ProjectCarousel but designed specifically for text content.
 * Takes a list of text strings and renders each as a paragraph with consistent styling.
 * 
 * @component
 * @example
 * <SectionText paragraphs={[
 *   "First paragraph of text content here.",
 *   "Second paragraph with more information.",
 *   "Third paragraph to complete the section."
 * ]} />
 */

/**
 * @param {Object} props - Component props
 * @param {string[]} props.paragraphs - Array of text strings, each rendered as a paragraph
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} SectionText component
 */
export default function SectionText({ 
  paragraphs = [], 
  className = '' 
}) {
  return (
    <div className={`flex flex-col bg-white rounded-xl p-6 pr-28 gap-4 overflow-x-auto ${className}`}>
      {paragraphs.map((text, index) => (
        <p 
          key={index}
          className="font-['Inter'] text-lg font-normal leading-[27px]"
          style={{ color: '#4A4A4A' }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
