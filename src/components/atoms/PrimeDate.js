import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const obj = {
  heading: "Prime Date",
  subheading: "Optical Fiber",
  description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
};

function PDate({ data }) {
  return (
    <div>
      <h4 className="mb-3" style={{ color: "#0478B6" }}>
        {data.subheading}
      </h4>
      <p>{data.description}</p>
    </div>
  );
}

function PrimeDate() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {obj.heading}
            </h4>
            <PDate data={obj} />
            <PDate data={obj} />
            <PDate data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrimeDate;
