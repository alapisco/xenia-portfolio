import React, { useState, useEffect } from "react";
import SimpleCarousel from './SimpleCarousel';

// Function to dynamically import all images from a directory
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Function to load images from directory
const loadImagesFromDirectory = async (directory) => {
  try {
    // Create a dynamic import for the directory
    const modules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,webp}');
    const imagePromises = [];
    
    Object.keys(modules).forEach(path => {
      if (path.includes(directory)) {
        imagePromises.push(
          modules[path]().then(module => ({
            src: module.default,
            alt: path.split('/').pop().split('.')[0], // Use filename as alt
            path: path
          }))
        );
      }
    });
    
    const images = await Promise.all(imagePromises);
    // Sort alphabetically by filename
    return images.sort((a, b) => a.path.localeCompare(b.path));
  } catch (error) {
    console.error('Error loading images from directory:', error);
    return [];
  }
};


export default function ProjectShowcase({
  name,
  heading, // string - for backward compatibility
  headings, // array of strings - new multiple headings feature
  description, // string or ReactNode (allows <strong>…</strong>)
  ctaLabel = "View Case Study",
  ctaHref,
  onCtaClick,
  className = "",
  children, // for placing custom content (like carousel) in right column
  images, // array of { src, alt } for carousel (backward compatibility)
  imageDirectory, // string - directory path to load images from (e.g., "assets/vale")
}) {
  const [loadedImages, setLoadedImages] = useState(images || []);

  useEffect(() => {
    if (imageDirectory && !images) {
      loadImagesFromDirectory(imageDirectory).then(setLoadedImages);
    }
  }, [imageDirectory, images]);

  return (
    <section
      className={`w-full rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden ${className}`}
      role="region"
      aria-label={`${name} project showcase`}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-[300px] md:min-h-[461px]">
        {/* Left column - 2/5 width */}
        <div id="project-info" className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6 md:col-span-2">
          {/* Main Header - Project Name */}
          <h2 
            className="font-['Inter'] text-[22px] font-semibold leading-[33px]"
            style={{ color: '#333' }}
          >
            {name}
          </h2>

          {/* Secondary Headers - Support for multiple heading lines */}
          {headings && headings.length > 0 ? (
            <div className="space-y-0">
              {headings.map((headingText, index) => (
                <h3 
                  key={index}
                  className="font-['Inter'] text-[22px] font-semibold leading-[33px]"
                  style={{ color: '#333' }}
                >
                  {headingText}
                </h3>
              ))}
            </div>
          ) : heading && (
            <h3 
              className="font-['Inter'] text-[22px] font-semibold leading-[33px]"
              style={{ color: '#333' }}
            >
              {heading}
            </h3>
          )}

          {/* Detailed Description Paragraph */}
          {description && (
            <p 
              className="font-['Inter'] text-lg  leading-[27px] pt-8"
              style={{ color: '#333' }}
            >
              {description}
            </p>
          )}

          {/* CTA Button */}
          <div className="pt-8 md:pt-40 pb-4 md:pb-10">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-flex items-center px-6 py-3 rounded-lg font-['Inter'] text-lg font-semibold leading-[27px] transition-opacity hover:opacity-80"
                style={{ 
                  backgroundColor: '#E8BFD8',
                  color: '#5A4E69'
                }}
              >
                {ctaLabel}
              </a>
            ) : (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center px-6 py-3 rounded-lg font-['Inter'] text-lg font-semibold leading-[27px] transition-opacity hover:opacity-80"
                style={{ 
                  backgroundColor: '#E8BFD8',
                  color: '#5A4E69'
                }}
              >
                {ctaLabel}
              </button>
            )}
          </div>
        </div>

        {/* Right column - 3/5 width */}
        <div className="md:col-span-3 flex items-center justify-center md:p-0 min-h-[250px] md:min-h-auto">
          <SimpleCarousel images={loadedImages} />
        </div>
      </div>
    </section>
  );
}
