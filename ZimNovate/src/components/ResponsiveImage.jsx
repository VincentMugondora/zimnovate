import React from 'react';

/**
 * ResponsiveImage Component
 * Generates srcset for Unsplash images with multiple resolutions
 * Uses Unsplash's dynamic image sizing for responsive delivery
 */
const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  baseWidth = 800,
  ...props
}) => {
  // Generate srcset for Unsplash images
  const generateSrcSet = (url, baseW) => {
    if (!url.includes('unsplash.com')) {
      return null;
    }

    // Remove existing width parameter
    const baseUrl = url.replace(/&w=\d+/, '').replace(/\?w=\d+/, '?');
    const separator = baseUrl.includes('?') ? '&' : '?';

    const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
    const srcSet = widths
      .filter(w => w <= baseW * 1.5) // Don't generate sizes much larger than needed
      .map(w => {
        const urlWithWidth = `${baseUrl}${separator}w=${w}&fit=crop&auto=format&fm=webp`;
        return `${urlWithWidth} ${w}w`;
      })
      .join(', ');

    return srcSet;
  };

  // Generate fallback src (without srcset for older browsers)
  const generateFallbackSrc = (url, w) => {
    if (!url.includes('unsplash.com')) {
      return url;
    }
    const baseUrl = url.replace(/&w=\d+/, '').replace(/\?w=\d+/, '?');
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}w=${w}&fit=crop&auto=format&fm=webp`;
  };

  const srcSet = generateSrcSet(src, baseWidth);
  const fallbackSrc = generateFallbackSrc(src, baseWidth);

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      decoding="async"
      {...props}
    />
  );
};

export default ResponsiveImage;
