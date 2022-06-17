import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const obj = {
  heading: "Sat Date",
  description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  subheading: "Sat_Backup Date",
  subheading_description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
};

function SdToP({ data }) {
  return (
    <div>
      <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
        {data.heading}
      </h4>
      <p>{data.description}</p>
    </div>
  );
}
function SdButton({ data }) {
  return (
    <div>
      <h5 className="mt-5 mb-3" style={{ color: "#0478B6" }}>
        {data.subheading}
      </h5>
      <p>{data.subheading_description}</p>
    </div>
  );
}

function SatDate() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <SdToP data={obj} />
            <SdButton data={obj} />
            <SdButton data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SatDate