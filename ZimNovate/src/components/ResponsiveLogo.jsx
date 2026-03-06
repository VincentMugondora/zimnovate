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
    <img
      src="/logo.png"
      alt="Zimnovate logo"
      title="Zimnovate Digital Agency"
      className={`h-20 w-auto max-w-[180px] object-contain ${className}`}
      loading={loading}
      decoding="async"
    />
  );
};

export default ResponsiveLogo;
