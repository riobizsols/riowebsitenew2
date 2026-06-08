import { painPoints } from "../data";

export default function PainPoints() {
  return (
    <section className="v2-problem-strip" id="problems">
      <div className="v2-container">
        <h2>Where maintenance visibility usually breaks down</h2>
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
