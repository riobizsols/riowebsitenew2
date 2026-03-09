import React, { useState } from "react";
import '../../css/Accordion.css'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            <h3>{item.label}</h3>
            <span>{activeIndex === index ?  <FaArrowCircleDown style={{fontSize:28, color:'black'}}/>: <FaArrowCircleRight style={{fontSize:28}}/>}</span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {activeIndex === index && <div>{item.content}</div>}
            <a href={item.link} className="more-info-link">
                  For More Info &gt;
                </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

