import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative flex w-full justify-end md:w-1/2 md:ml-auto lg:w-2/5 xl:w-1/3 md:justify-between ${className}`}>
      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:justify-between md:w-full">
        <a href="#home" className="text-[18px] font-normal leading-7 text-brand-text/90 hover:opacity-80">Home</a>
        <a href="#about" className="text-[18px] font-normal leading-7 text-brand-text/90 hover:opacity-80">About</a>
        <a href="#projects" className="text-[18px] font-normal leading-7 text-brand-text/90 hover:opacity-80">Projects</a>
        <a href="#contact" className="text-[18px] font-normal leading-7 text-brand-text/90 hover:opacity-80">Contact</a>
      </div>

      {/* Hamburger Button */}
      {!isOpen && (
        <button
          className="md:hidden text-brand-text/90"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg">
          <button
            className="absolute top-8 right-8 text-brand-text/90"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="mt-24 flex flex-col items-center gap-10">
            <a href="#home" className="text-2xl font-normal text-brand-text hover:opacity-80" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-2xl font-normal text-brand-text hover:opacity-80" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="text-2xl font-normal text-brand-text hover:opacity-80" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-2xl font-normal text-brand-text hover:opacity-80" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </nav>
  );
}
