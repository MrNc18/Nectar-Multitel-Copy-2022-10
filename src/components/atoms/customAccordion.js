import React, { useState } from "react";

const CustomAccordion = ({ title, shortdesc, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <h6>{title}</h6>
        </div>
        <div>
          <h5>{isActive ? "-" : "+"}</h5>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <h6>{shortdesc}</h6>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
