import { ASSETS } from "../assets";
import { industries } from "../data";

export default function Industries() {
  return (
    <section className="v2-industries" id="industries">
      <div className="v2-container">
        <h2>Built for asset-heavy teams</h2>
        <p className="v2-section-sub">
          RIO EAM adapts to your industry-specific asset and maintenance needs.
        </p>
        <div className="v2-industry-grid">
          {industries.map(({ title, imageKey, items }) => (
            <article className="v2-industry-card" key={title}>
              <div
                className="v2-industry-image"
                style={{ backgroundImage: `url("${ASSETS[imageKey]}")` }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
