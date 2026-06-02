import { faqs } from "../data";

export default function FaqList({ variant = "sidebar" }) {
  return (
    <div className={`v2-faq-panel v2-faq-panel--${variant}`}>
      {variant === "sidebar" && <h2 className="v2-faq-panel-title">FAQs</h2>}
      <div className="v2-faq-list">
        {faqs.map(({ q, a }) => (
          <details className="v2-faq-item" key={q}>
            <summary>
              {q}
              <span className="v2-faq-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
