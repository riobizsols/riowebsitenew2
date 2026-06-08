import { painPoints } from "../data";

export default function PainPoints() {
  return (
    <section className="v2-problem-strip" id="why-switch">
      <div className="v2-container">
        <p className="v2-section-kicker">Why maintenance teams switch to this CMMS</p>
        <h2 className="v2-section-title v2-section-title--tight">
          Move from Excel to a Smarter Maintenance System
        </h2>
        <div className="v2-problem-grid">
          {painPoints.map(({ icon: Icon, text, desc }) => (
            <article className="v2-problem-card" key={text}>
              <div className="v2-problem-icon" aria-hidden="true">
                <Icon size={20} />
              </div>
              <p className="v2-problem-title">{text}</p>
              {desc && <p className="v2-problem-desc">{desc}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
