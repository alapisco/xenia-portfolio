import Section from '../../components/layout/Section';

// This file demonstrates Section component usage patterns
// Can be used with Storybook or as a reference guide

export const SectionExamples = {
  // Basic section with title and content spacing
  Basic: () => (
    <Section title="Basic Section" padding="medium" contentSpacing="normal">
      <p>This is a basic section with medium padding and a title.</p>
      <p>Notice how content spacing is handled automatically by the Section component.</p>
      <p>No need for manual space-y-* classes!</p>
    </Section>
  ),

  // Hero section pattern (matches actual Hero component)
  Hero: () => (
    <Section as="main" id="hero" padding="small" width="full" roundBottom>
      <div className="min-h-screen flex flex-col -my-8 sm:-my-10">
        <header>
          <div className="w-full md:w-1/3 md:ml-auto">
            <nav>Navigation placeholder</nav>
          </div>
        </header>
        <main className="flex-1 flex items-center">
          <div className="w-full max-w-4xl">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl">Hi, I'm</p>
              <h1 className="font-serif text-6xl md:text-8xl leading-tight md:leading-[1.1]">
                Xenia.
              </h1>
              <div>
                <p className="text-lg md:text-2xl leading-relaxed max-w-3xl">
                  Portfolio hero section example with proper Section usage.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex justify-center">
          <a href="#projects" className="text-sm font-medium">See My Projects</a>
        </footer>
      </div>
    </Section>
  ),

  // Content section with different widths and spacing
  ContentNarrow: () => (
    <Section title="Narrow Content" padding="medium" width="narrow" contentSpacing="relaxed">
      <p>This section uses narrow width for better readability of long text content.</p>
      <p>Content spacing is set to 'relaxed' for better visual hierarchy.</p>
    </Section>
  ),

  ContentWide: () => (
    <Section title="Wide Content" padding="medium" width="wide" contentSpacing="loose">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 p-4 rounded">Column 1</div>
        <div className="bg-white/10 p-4 rounded">Column 2</div>
        <div className="bg-white/10 p-4 rounded">Column 3</div>
      </div>
      <p>Grid layouts work great with loose content spacing.</p>
    </Section>
  ),

  // Content spacing demonstration
  ContentSpacingDemo: () => (
    <>
      <Section title="Tight Spacing" padding="medium" width="medium" contentSpacing="tight">
        <p>Line 1 with tight spacing</p>
        <p>Line 2 with tight spacing</p>
        <p>Line 3 with tight spacing</p>
      </Section>
      
      <Section title="Normal Spacing" padding="medium" width="medium" contentSpacing="normal" stack="medium">
        <p>Line 1 with normal spacing</p>
        <p>Line 2 with normal spacing</p>
        <p>Line 3 with normal spacing</p>
      </Section>
      
      <Section title="Relaxed Spacing" padding="medium" width="medium" contentSpacing="relaxed" stack="medium">
        <p>Line 1 with relaxed spacing</p>
        <p>Line 2 with relaxed spacing</p>
        <p>Line 3 with relaxed spacing</p>
      </Section>
      
      <Section title="Loose Spacing" padding="medium" width="medium" contentSpacing="loose" stack="medium">
        <p>Line 1 with loose spacing</p>
        <p>Line 2 with loose spacing</p>
        <p>Line 3 with loose spacing</p>
      </Section>
    </>
  ),

  // Card-like sections with rounded corners
  CardSection: () => (
    <Section 
      title="Card Section" 
      padding="large" 
      width="medium" 
      contentSpacing="normal"
      roundTop 
      roundBottom
      stack="large"
    >
      <div className="bg-white/10 rounded-lg p-6">
        <p>Content inside a card-like section with rounded corners.</p>
      </div>
      <p>Additional content with automatic spacing.</p>
    </Section>
  ),

  // Stack spacing examples
  StackedSections: () => (
    <>
      <Section title="First Section" padding="medium" stack="none" contentSpacing="normal">
        <p>First section with no top spacing.</p>
        <p>Multiple paragraphs with consistent spacing.</p>
      </Section>
      <Section title="Second Section" padding="medium" stack="medium" contentSpacing="normal">
        <p>Second section with medium spacing from previous.</p>
        <p>Content spacing is independent of stack spacing.</p>
      </Section>
      <Section title="Third Section" padding="medium" stack="large" contentSpacing="normal">
        <p>Third section with large spacing from previous.</p>
        <p>Notice the different stack vs content spacing.</p>
      </Section>
    </>
  ),

  // Different padding sizes
  PaddingSizes: () => (
    <>
      <Section title="Small Padding" padding="small" contentSpacing="normal">
        <p>Section with small padding.</p>
        <p>Content spacing remains consistent.</p>
      </Section>
      <Section title="Medium Padding" padding="medium" stack="small" contentSpacing="normal">
        <p>Section with medium padding.</p>
        <p>Content spacing is independent of section padding.</p>
      </Section>
      <Section title="Large Padding" padding="large" stack="small" contentSpacing="normal">
        <p>Section with large padding.</p>
        <p>Large padding gives more breathing room.</p>
      </Section>
    </>
  ),

  // Custom element types
  ArticleSection: () => (
    <Section as="article" title="Article Section" padding="medium" contentSpacing="relaxed">
      <p>This section renders as an article element instead of section.</p>
      <p>Using relaxed spacing for better readability in article format.</p>
    </Section>
  ),

  // No title section
  NoTitle: () => (
    <Section padding="medium" width="narrow" contentSpacing="normal">
      <h3 className="text-lg font-semibold">Custom Heading</h3>
      <p>Section without the built-in title, using custom heading instead.</p>
      <p>Content spacing still works perfectly.</p>
    </Section>
  ),

  // Real portfolio examples (matches actual components)
  AboutMeExample: () => (
    <Section id="about-me" title="About Me" width="wide" padding="medium" stack="xlarge" roundTop roundBottom contentSpacing="normal">
      <p className="text-sm opacity-80 max-w-prose">
        This matches the actual AboutMe component structure.
      </p>
    </Section>
  ),

  ContactExample: () => (
    <Section id="contact" title="Contact" width="full" padding="medium" stack="xlarge" roundTop contentSpacing="normal">
      <p className="text-sm opacity-80 max-w-prose">
        This matches the actual Contact component structure.
      </p>
    </Section>
  ),
};

// Usage patterns documentation
export const UsagePatterns = {
  // Typical page structure (matches actual portfolio)
  PageStructure: () => (
    <>
      {/* Hero */}
      <Section as="main" id="hero" padding="small" width="full" roundBottom>
        <div className="min-h-screen">Hero content with proper Section usage</div>
      </Section>
      
      {/* About */}
      <Section id="about" title="About Me" padding="medium" width="wide" stack="xlarge" roundTop roundBottom contentSpacing="normal">
        <p>About content with consistent spacing</p>
      </Section>
      
      {/* Projects */}
      <Section id="projects" title="Projects" padding="medium" width="wide" stack="xlarge" roundTop roundBottom contentSpacing="loose">
        <div>Projects grid with loose spacing</div>
      </Section>
      
      {/* Contact */}
      <Section id="contact" title="Contact" padding="medium" width="full" stack="xlarge" roundTop contentSpacing="normal">
        <p>Contact form with normal content spacing</p>
      </Section>
    </>
  ),
  
  // Best practices examples
  BestPractices: () => (
    <>
      {/* ✅ Good: Use contentSpacing instead of manual classes */}
      <Section title="Good Practice" padding="medium" contentSpacing="normal">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Automatic spacing handled by Section</p>
      </Section>
      
      {/* ❌ Avoid: Manual spacing classes */}
      <Section title="Avoid This" padding="medium">
        <div className="space-y-4">
          <p>Manual space-y-4 wrapper</p>
          <p>Inconsistent with Section's design</p>
        </div>
      </Section>
    </>
  ),
};

export default SectionExamples;
