import React, { useState } from "react";
// import '../../sub_pages/Staffing/payperaccordionexec.css';
import '../../../css/payperaccordionexec.css'
import { FaCaretRight, FaCaretUp } from "react-icons/fa6";

const Payperaccordionexec = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState(Array(items.length).fill(false));

  const handleAccordionClick = (index) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index]; 
    setOpenIndexes(newOpenIndexes); 
  };

  return (
    <div className="accordion1">
      {items.map((item, index) => (
        <div key={index} className="accordion-item1">
          <div
            className="accordion-header1"
            onClick={() => handleAccordionClick(index)}
          >
            <span>
              {openIndexes[index] ? (
                <FaCaretUp style={{ fontSize: 28, color: 'black' }} />
              ) : (
                <FaCaretRight style={{ fontSize: 28 }} />
              )}
            </span>
            <h3 style={{ color: openIndexes[index] ? 'black' : '#1B75BB' }}>{item.label}</h3>
          </div>
          <div className={`accordion-content1 ${openIndexes[index] ? "active" : ""}`}>
            {openIndexes[index] && <div>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payperaccordionexec;
