import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ImgAccordion = ({ title, desc, content , sortdesc}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <h5 style={{ color: "#1D3557"}}>{title}</h5>
        </div>
        <div>
          <h5>{isActive ? "-" : "+"}</h5>
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
           {/* <h6>{title}</h6> */}
          <h6>{ sortdesc}</h6>
          <p>{desc}</p>
          {content}
        </div>
      )}
    </div>
  );
};

export default ImgAccordion;
