import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const obj = {
  heading: "Lan-To-Lan",
  description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  subheading: "No backbone pass",
  subheading_description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
};

function L2LToP({ data }) {
  return (
    <div>
      <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
        {data.heading}
      </h4>
      <p>{data.description}</p>
    </div>
  );
}
function L2LButton({ data }) {
  return (
    <div>
      <h5 className="mt-5 mb-3" style={{ color: "#0478B6" }}>
        {data.subheading}
      </h5>
      <p>{data.subheading_description}</p>
    </div>
  );
}

function LanToLan() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <L2LToP data={obj} />
            <L2LButton data={obj} />
            <L2LButton data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LanToLan;
