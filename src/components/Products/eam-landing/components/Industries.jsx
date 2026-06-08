import { industries } from "../data";

export default function Industries() {
  return (
    <section className="v2-industries" id="industries">
      <div className="v2-container">
        <p className="v2-section-kicker v2-section-kicker--spaced">
          Trusted by maintenance teams across industries
        </p>
        <div className="v2-industry-grid">
          {industries.map(({ title, icon: Icon, items }) => (
            <article className="v2-industry-card" key={title}>
              <div className="v2-industry-icon-wrap" aria-hidden="true">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
