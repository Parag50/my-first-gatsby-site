import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : "closed"}`}>
      <div className="accordionHeader" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isOpen ? "open" : "closed"}`}>+</span>
      </div>
      {isOpen && (
        <div className="accordionContent">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
