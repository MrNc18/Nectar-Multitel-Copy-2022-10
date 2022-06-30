import React from 'react';
import { Container, Row } from "react-bootstrap";
import HighlightCard from './HighlightCard';

function Highlights() {
  return (
    <>
      <Container>
        <h4
          style={{ color: "#1D3557", marginTop: "30px", marginBottom: "20px" }}
        >
          Highlight
        </h4>
        <Row>
          <HighlightCard />
        </Row>
      </Container>
    </>
  )
}

export default Highlights