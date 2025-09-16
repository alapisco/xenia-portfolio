import React, { useState, useEffect } from "react";
import caretLeft from "../../assets/caret-left 1.svg";
import caretRight from "../../assets/caret-right 1.svg";

export default function SimpleCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Only enable modal on mobile/tablet (screens smaller than 1024px) or touch devices
  const handleImageClick = () => {
    if (window.innerWidth < 1024 || 'ontouchstart' in window) {
      openModal();
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="w-full h-full flex flex-col md:pt-3 md:pr-3 md:pb-4 max-w-full">
        {/* Image */}
        <div className="relative flex-1 overflow-hidden rounded-xl min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              onClick={handleImageClick}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                i === index 
                  ? "opacity-100 cursor-pointer hover:opacity-90 lg:cursor-default lg:hover:opacity-100" 
                  : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-12 sm:gap-24 mt-4 justify-center">
          <button
            onClick={prev}
            aria-label="Previous"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <img src={caretLeft} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <img src={caretRight} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]">
            {/* Close button - positioned above the image */}
            <button
              onClick={closeModal}
              className="self-end mb-2 text-white text-3xl hover:opacity-70 transition-opacity bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>
            
            {/* Modal Image Container */}
            <div className="relative">
              {/* Modal Image */}
              <img
                src={images[index]?.src}
                alt={images[index]?.alt || `Slide ${index + 1}`}
                className="max-w-[90vw] max-h-[75vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Modal Navigation - Below the image */}
            {images.length > 1 && (
              <div className="flex gap-12 mt-6 justify-center">
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="p-3 hover:opacity-70 transition-opacity bg-black bg-opacity-50 rounded-full"
                  aria-label="Previous image"
                >
                  <img src={caretLeft} alt="" className="w-8 h-8 filter invert" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="p-3 hover:opacity-70 transition-opacity bg-black bg-opacity-50 rounded-full"
                  aria-label="Next image"
                >
                  <img src={caretRight} alt="" className="w-8 h-8 filter invert" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
