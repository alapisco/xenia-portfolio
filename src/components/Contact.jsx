import SectionV2 from './layout/SectionV2';
import SectionHeader from './ui/SectionHeader';

export default function Contact() {
  return (
    <div>
      <SectionV2 id="contact" width="full" stack="huge" roundTop horizontalPadding="xxlarge" verticalPadding="medium">
        <SectionHeader title="Contact"/>    
        
        {/* Contact Elements */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 pb-48 pt-10">
          {/* Email */}
          <div className="flex-1 flex justify-center">
            <a 
              href="mailto:xenia.ux@gmail.com"
              className="flex items-center gap-3 text-white font-['Inter'] text-lg font-normal leading-[27px] hover:text-white hover:opacity-80 transition-all duration-200"
            >
              <img
                src={new URL('../assets/at 1.svg', import.meta.url).href}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 flex-shrink-0"
              />
              <span>xenia.ux@gmail.com</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex-1 flex justify-center">
            <a 
              href="https://linkedin.com/in/kseniia-semochkina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white font-['Inter'] text-lg font-normal leading-[27px] hover:text-white hover:opacity-80 transition-all duration-200"
            >
              <img
                src={new URL('../assets/linkedin-logo 1.svg', import.meta.url).href}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 flex-shrink-0"
              />
              <span>Kseniia Semochkina</span>
            </a>
          </div>

          {/* Behance */}
          <div className="flex-1 flex justify-center">
            <a 
              href="https://behance.net/xenia-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white font-['Inter'] text-lg font-normal leading-[27px] hover:text-white hover:opacity-80 transition-all duration-200"
            >
              <img
                src={new URL('../assets/behance-logo 1.svg', import.meta.url).href}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 flex-shrink-0"
              />
              <span>xenia-ux</span>
            </a>
          </div>

          {/* Dribbble */}
          <div className="flex-1 flex justify-center">
            <a 
              href="https://dribbble.com/xenia-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white font-['Inter'] text-lg font-normal leading-[27px] hover:text-white hover:opacity-80 transition-all duration-200"
            >
              <img
                src={new URL('../assets/dribbble-logo 1.svg', import.meta.url).href}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 flex-shrink-0"
              />
              <span>xenia-ux</span>
            </a>
          </div>
        </div>
      </SectionV2>
    </div>
  );
}
