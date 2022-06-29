import React, { useState } from "react";

const Gallery = ({ title, content, desc }) => {
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
          <h6>{title}</h6>
          <p>{desc}</p>
          {content}
        </div>
      )}
    </div>
  );
};

export default Gallery;
