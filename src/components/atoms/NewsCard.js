import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

function NewsCard() {
  return (
    <>
      <Container>
        <h4
          style={{ color: "#1D3557", marginTop: "30px", marginBottom: "20px" }}
        >
          News
        </h4>
        <Row>
          <Col lg={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              />
              <Card.Body className="text-center">
                <Card.Title>4th April 2022</Card.Title>
                <Card.Text>Partnership Aggrement</Card.Text>
                <hr />
                <Button
                  variant="primary"
                  size="sm"
                  style={{
                    backgroundColor: "#0076B5",
                    border:"2px solid #0076B5",
                  }}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              />
              <Card.Body className="text-center">
                <Card.Title>4 January 2022</Card.Title>
                <Card.Text>Welcome to new year 2022!</Card.Text>
                <hr />
                <Button
                  variant="primary"
                  size="sm"
                  style={{
                    backgroundColor: "#0076B5",
                    border:"2px solid #0076B5"
                  }}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewsCard;
