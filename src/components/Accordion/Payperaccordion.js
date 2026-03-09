import React, { useState } from "react";
import '../../css/payperaccordion.css';
import { FaCaretRight, FaCaretUp } from "react-icons/fa6";


const Payperaccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion1">
      {items.map((item, index) => (
        <div key={index} className="accordion-item1">
          <div
            className="accordion-header1"
            onClick={() => handleAccordionClick(index)}
          >
            {/* Custom icon before the label */}
            <span>
              {activeIndex === index ? (
                < FaCaretUp style={{fontSize:28, color:'black'}}/>
              ) : (
                <FaCaretRight style={{fontSize:28}} />
              )}
            </span>
            <h3 style={{ color: activeIndex === index ? 'black' : '#1B75BB' }}>{item.label}</h3>
          </div>
          <div
            className={`accordion-content1 ${activeIndex === index ? "active" : ""}`}
          >
            {activeIndex === index && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payperaccordion;
