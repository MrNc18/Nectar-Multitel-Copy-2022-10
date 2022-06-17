import React from 'react';
import { Container, Row } from "react-bootstrap";
import BulletineCard from "./BulletineCard";
import BulletineData from "./BulletineData";

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
          {BulletineData.map(({ title, src, content }) => (
            <BulletineCard title={title} src={src} content={content} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Highlights