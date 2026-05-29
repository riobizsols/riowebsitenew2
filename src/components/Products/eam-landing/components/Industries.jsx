import { ASSETS } from "../assets";
import { industries } from "../data";
import IndustryCard from "./IndustryCard";

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
            <IndustryCard
              key={title}
              title={title}
              imageUrl={ASSETS[imageKey]}
              items={items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
