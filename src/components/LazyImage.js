import React, { useState, useEffect, useRef } from 'react';

/**
 * Optimized image with optional LCP priority, responsive srcSet, and WebP.
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
  style = {},
  priority = false,
  decoding = 'async',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return undefined;

    const img = imgRef.current;
    if (!img) return undefined;

    if ('loading' in img) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && img.dataset.src) {
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcSet = img.dataset.srcset;
          observer.unobserve(img);
        }
      },
      { rootMargin: '80px' }
    );

    observer.observe(img);
    return () => observer.unobserve(img);
  }, [priority]);

  const imgStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    ...style,
  };

  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const commonImgProps = {
    ref: imgRef,
    alt,
    className: `${className} ${isLoaded ? 'loaded' : 'loading'}`.trim(),
    width,
    height,
    loading,
    decoding,
    style: imgStyle,
    sizes,
    onLoad: handleImageLoad,
    ...(fetchPriority ? { fetchPriority } : {}),
  };

  if (webp) {
    return (
      <picture style={{ display: 'block', width: '100%', height: 'auto' }}>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={srcSet || src} />
        <img {...commonImgProps} src={src} srcSet={srcSet} />
      </picture>
    );
  }

  return <img {...commonImgProps} src={src} srcSet={srcSet} />;
};

export default LazyImage;
