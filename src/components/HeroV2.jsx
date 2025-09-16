import Section from './layout/Section';
import Nav from './navigation/Nav';
import { navItems } from '../data/navigation';
import SectionV2 from './layout/SectionV2';

export default function HeroV2() {
  return (
    <SectionV2 id="hero" width="full" roundBottom horizontalPadding='xxlarge' className='min-h-screen'>
      <div className="min-h-screen flex flex-col pt-8 sm:pt-12 lg:pt-16">
        {/* Navigation */}
        <header>
          <div className="w-full md:w-1/3 md:ml-auto">
            <Nav items={navItems} />
          </div>
        </header>


        {/* Hero Content */}
        <main className="flex-1 flex items-center">
          <div className="w-full max-w-6xl">
            <div className="space-y-6 mb-44">
              <p className="text-xl md:text-2xl font-['Source_Sans_Pro'] text-white">Hi, I'm</p>
              <h1 className="font-['Lora'] text-6xl md:text-8xl leading-tight md:leading-[1.1]">
                Xenia.
              </h1>
              <div className='pt-10'>
                <p className="text-lg md:text-2xl leading-relaxed max-w-5xl font-['Inter']">
                  I design clean, user-centered interfaces that make digital experiences feel simple,
                </p>
                <p className="text-lg md:text-2xl leading-relaxed max-w-5xl font-['Inter']">
                  structured, and approachable. My work focuses on clarity, real-life usability, and
                </p>
                <p className="text-lg md:text-2xl leading-relaxed max-w-5xl font-['Inter']">
                  just enough personality to feel human.
                </p>
              </div>
            </div>
          </div>
        </main>

        
        {/* Call to action */}
        <footer className="flex justify-center">
          <a 
            href="#projects" 
            className="text-lg font-medium hover:opacity-80 inline-flex flex-col items-center transition-opacity font-['Inter'] text-white"
          >
            <span>See My Projects</span>
            <img
              src={new URL('../assets/caret-double-down.svg', import.meta.url).href}
              alt=""
              aria-hidden="true"
              className="mt-4 h-6 w-6 animate-bounce"
            />
          </a>
        </footer>
      </div>
    </SectionV2>
  );
}
