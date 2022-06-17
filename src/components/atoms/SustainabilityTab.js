import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function SustainabilityTab() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2 className="mt-5" style={{ color: "#1D3557" }}>
            Sustainability
          </h2>
        </Col>
        <Col md={4}>
          <img
            src="https://image.shutterstock.com/image-photo/teacher-asking-her-students-question-260nw-309239105.jpg"
            alt=""
            style={{ height: "120px" }}
          />
        </Col>
        <Col md={12}>
          <h5 style={{ color: "#3190C3" }}>
            Sustainability
          </h5>
          <p>
            Learn What we have done to ensure the continuous evolution of
            Multitel's sustainability insertion.
          </p>
        </Col>
        <Col md={12}>
          <h5 className="mt-3" style={{ color: "#3190C3" }}>
            Participate in complaints or offensive practices
          </h5>
          <p>
            We have email available to request services, suggestion, complaints
            and any offenses of Multitel's employees or damages caused by the
            company. <br /> Help us get better, Contact us!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SustainabilityTab;
