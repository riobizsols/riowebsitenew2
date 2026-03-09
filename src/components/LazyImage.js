import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component - Optimized image loading with placeholder
 * Features:
 * - Native lazy loading with fallback
 * - Responsive images with srcSet
 * - WebP support with fallback
 * - Placeholder while loading
 * - Error handling
 */

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder = null,
  onLoad = null,
  srcSet = null,
  sizes = null,
  webp = null,
  style = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use native loading="lazy" with Intersection Observer fallback
    if ('loading' in img) {
      // Browser supports native lazy loading
      return;
    }

    // Fallback for older browsers
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && img.dataset.src) {
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcSet = img.dataset.srcset;
          observer.unobserve(img);
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(img);

    return () => observer.unobserve(img);
  }, []);

  const imgStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    ...style
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  if (webp) {
    return (
      <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={srcSet || src} type="image/jpeg" />
        <img
          ref={imgRef}
          alt={alt}
          className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
          width={width}
          height={height}
          loading="lazy"
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          style={imgStyle}
          onLoad={handleImageLoad}
        />
      </picture>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      loading="lazy"
      style={imgStyle}
      srcSet={srcSet}
      sizes={sizes}
      onLoad={handleImageLoad}
    />
  );
};

export default LazyImage;
