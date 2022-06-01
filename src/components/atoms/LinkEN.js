import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const obj = {
    heading: "Link EN",
    description:
      "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  };

  function Len({ data }) {
    return (
      <div>
        <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
          {data.heading}
        </h4>
        <p>{data.description}</p>
      </div>
    );
  }

function LinkEN() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <Len data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LinkEN