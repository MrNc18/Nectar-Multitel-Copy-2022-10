import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = ({ title, content, desc }) => {
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
        <div className="accordion-content1">
          <p style={{ color: "#1D3557"}}>{desc}</p>
          <Container>
            <Row>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
              <div className="imgcontent">
                <img src={content} alt="" style={{ width: "100%" }} />
                <h6 style={{ textAlign: "center" }}>Hey</h6>
                <p style={{ textAlign: "center" }}>Akash</p>
              </div>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Gallery;
