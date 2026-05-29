import { useEffect, useRef, useState } from "react";

export default function IndustryCard({ title, imageUrl, items }) {
  const ref = useRef(null);
  const [bgUrl, setBgUrl] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const apply = () => setBgUrl(imageUrl);

    if (!("IntersectionObserver" in window)) {
      apply();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          apply();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [imageUrl]);

  return (
    <article className="v2-industry-card" ref={ref}>
      <div
        className="v2-industry-image"
        style={bgUrl ? { backgroundImage: `url("${bgUrl}")` } : undefined}
        role="img"
        aria-label={title}
      />
      <div className="v2-industry-body">
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
