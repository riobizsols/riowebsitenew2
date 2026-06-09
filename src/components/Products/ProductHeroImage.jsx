import LazyImage from '../LazyImage';

/** LCP hero image for product pages — eager load, responsive, sized to prevent CLS. */
export default function ProductHeroImage({
  src,
  srcSet,
  sizes,
  alt,
  className = 'hero-dashboard-image',
  width,
  height,
}) {
  return (
    <LazyImage
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority
    />
  );
}

export function ProductHelmetPreload({ href }) {
  if (!href) return null;
  return <link rel="preload" as="image" href={href} fetchPriority="high" />;
}
