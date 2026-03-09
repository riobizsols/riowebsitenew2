import React, { useState } from 'react';
import './FAQAccordion.css';
import { FiChevronDown } from 'react-icons/fi';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <FiChevronDown className="faq-icon" />
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
