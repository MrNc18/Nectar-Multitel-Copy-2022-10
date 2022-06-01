import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const obj = {
    heading: "P2P Link",
    description:
      "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  };

  function P2P({ data }) {
    return (
      <div>
        <h4 className="mt-5 mb-3" style={{ color: "#1D3557" }}>
          {data.heading}
        </h4>
        <p>{data.description}</p>
      </div>
    );
  }

function P2PLink() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <P2P data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default P2PLink