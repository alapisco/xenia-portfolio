
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav({ items = [], className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`relative flex items-center justify-end ${className}`}>
      {/* Desktop Menu (>= md) - spread across the full nav container width */}
      <ul className="hidden md:flex w-full justify-between items-center">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="text-[18px] leading-7 font-normal text-white hover:text-white hover:opacity-80 transition-all duration-200 font-['Inter']"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger ( < md ) - aligned to the right on mobile */}
      <button
        className="md:hidden text-white ml-auto"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg flex flex-col items-center pt-28">
          <button
            className="absolute top-6 right-8 text-white"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          <ul className="flex flex-col items-center gap-10">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-2xl font-normal text-white hover:opacity-80 transition-opacity font-['Inter']"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
