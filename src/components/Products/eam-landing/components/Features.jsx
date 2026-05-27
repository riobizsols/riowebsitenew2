import { features } from "../data";

export default function Features() {
  return (
    <section className="v2-features" id="features">
      <div className="v2-container">
        <h2>Everything teams expect from a CMMS</h2>
        <p className="v2-section-sub">
          From preventive maintenance to breakdown resolution — manage every
          maintenance workflow in one connected system.
        </p>
        <div className="v2-feature-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <article className="v2-feature-card" key={title}>
              <div className="v2-feature-card-body">
                <div className="v2-feature-icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
