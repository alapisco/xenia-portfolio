import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="absolute right-28 top-10 hidden gap-20 text-brand-text/90 md:flex">
        <a
          href="#home"
          className="text-[18px] font-normal leading-7 hover:opacity-80"
        >
          Home
        </a>
        <a
          href="#projects"
          className="text-[18px] font-normal leading-7 hover:opacity-80"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-[18px] font-normal leading-7 hover:opacity-80"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-[18px] font-normal leading-7 hover:opacity-80"
        >
          Contact
        </a>
      </nav>

      {/* Hamburger Button */}
      <div className="absolute right-10 top-10 z-50 md:hidden">
        <button onClick={toggleMenu} className="text-brand-text/90">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg md:hidden">
          <nav className="mt-24 flex flex-col items-center gap-10">
            <a
              href="#home"
              className="text-2xl font-normal text-brand-text hover:opacity-80"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-2xl font-normal text-brand-text hover:opacity-80"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-2xl font-normal text-brand-text hover:opacity-80"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-2xl font-normal text-brand-text hover:opacity-80"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
