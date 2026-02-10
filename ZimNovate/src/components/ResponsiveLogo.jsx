import React from 'react';

/**
 * ResponsiveLogo Component
 * 
 * Serves different logo sizes based on screen size to optimize performance:
 * - Mobile: 120x53 (smaller file)
 * - Tablet: 150x66
 * - Desktop: 180x80
 * 
 * This reduces the initial load by ~6.6 KiB on mobile devices
 */
const ResponsiveLogo = ({ className = '', loading = 'eager' }) => {
  return (
    <picture>
      {/* Mobile - smallest size */}
      <source 
        media="(max-width: 640px)" 
        srcSet="/logo-mobile.png" 
        width="120" 
        height="53"
      />
      {/* Tablet - medium size */}
      <source 
        media="(max-width: 1024px)" 
        srcSet="/logo-tablet.png" 
        width="150" 
        height="66"
      />
      {/* Desktop - full size */}
      <img
        src="/logo.png"
        alt="Zimnovate"
        width="180"
        height="80"
        className={`h-20 w-auto max-w-[180px] object-contain ${className}`}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
};

export default ResponsiveLogo;
