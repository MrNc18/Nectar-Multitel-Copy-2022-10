import React from "react";
import { Button, Col, Container, Row, Card, Nav } from "react-bootstrap";

function Profile() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header style={{ display: "inline-block" }}>
              <div style={{ display: "inline-block" }}>
                <img
                  src="/assets/images/cloud.png"
                  alt=""
                  style={{ height: "30%", width: "20%", borderRadius: "50%" }}
                />{" "}
                <h6 style={{ display: "inline-block" }}>Robert Plaska</h6>
              </div>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#0076B5",
                  color: "white",
                }}
              >
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="#second" style={{ color: "white" }}>
                      Edit Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#third" style={{ color: "white" }}>
                      My Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#four" style={{ color: "white" }}>
                      Help Desk
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#five" style={{ color: "white" }}>
                      Internet Quality Graph
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#six" style={{ color: "white" }}>
                      Invoices
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Card.Header>
            <Card.Body>
              <Col md={8} style={{ display: "inline-block" }}>
              <Card.Title >Hi Robert, welcome to Your Account</Card.Title>
              </Col>
              <Col md={4} style={{ display: "inline-block", justifyContent:"end" }}>
              <Button size="md" style={{backgroundColor:"#0076B5", background:"#0076B5"}}>
              <i class="fa-solid fa-download"></i> Download Multitel Mobile App
              </Button>
              </Col>
              <Col md={12}>
              <Card.Text>Account Overview</Card.Text>
              
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
