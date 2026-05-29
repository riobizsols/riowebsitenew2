import { features } from "../data";

export default function Features() {
  return (
    <section className="v2-features" id="features">
      <div className="v2-container">
        <p className="v2-section-kicker v2-section-kicker--spaced">
          Everything your maintenance team needs in one CMMS
        </p>
        <div className="v2-feature-grid">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <article className="v2-feature-card" key={title}>
              <div className="v2-feature-card-body">
                <div className="v2-feature-icon" aria-hidden="true">
                  <Icon size={18} />
                </div>
                <div>
                  <h3>
                    <span className="v2-feature-num">{index + 1}.</span> {title}
                  </h3>
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
