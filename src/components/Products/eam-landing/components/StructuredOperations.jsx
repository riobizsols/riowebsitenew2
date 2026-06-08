import { structuredOperations } from "../data";

export default function StructuredOperations() {
  return (
    <section className="v2-structured" id="operations">
      <div className="v2-container">
        <p className="v2-section-kicker v2-section-kicker--spaced">
          Built for structured maintenance operations
        </p>
        <div className="v2-structured-grid">
          {structuredOperations.map(({ icon: Icon, title, desc }) => (
            <article className="v2-structured-card" key={title}>
              <div className="v2-structured-icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
