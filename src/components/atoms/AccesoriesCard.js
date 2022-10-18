import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import AccesoriesProductCard from "./AccesoriesProductCard";
import SearchFilter from "./SearchFilter";

function AccesoriesCard() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <SearchFilter />
          </Col>
          <Col lg={8} md={6}>
            <AccesoriesProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AccesoriesCard;
