import React from "react";
import { Container, Row } from "react-bootstrap";
import BulletineCard from "./BulletineCard";


function Bulletine() {

  return (
    <>
      <Container>
        <h4
          style={{ color: "#1D3557", marginTop: "30px", marginBottom: "20px" }}
        >
          Bulletine
        </h4>
        <Row>
          <BulletineCard />
        </Row>
      </Container>
    </>
  );
}

export default Bulletine;
