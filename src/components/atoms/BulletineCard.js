import React from 'react';
import { Button, Card, Col } from "react-bootstrap";

function BulletineCard({ title, src, content }) {
  return (
    <>
    <Col md={6} lg={3} className="mb-4">
      <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text >
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default BulletineCard