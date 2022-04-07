import React from "react";
import { Button, Col, Container, Row, Card, CardGroup } from "react-bootstrap";
// import CardDeck from 'react-bootstrap/CardDeck'

function ProfileLandingPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ marginTop: "-35px" }}>
            <Card.Body>
              <Col md={8} style={{ display: "inline-block" }}>
                <Card.Title>Hi Robert, welcome to Your Account</Card.Title>
              </Col>
              <Col
                md={4}
                style={{ display: "inline-block", justifyContent: "end" }}
              >
                <Button
                  size="md"
                  style={{ backgroundColor: "#0076B5", background: "#0076B5" }}
                >
                  <i className="fa-solid fa-download mr-1"></i> Download Multitel Mobile
                  App
                </Button>
              </Col>
              <Col md={12}>
                <Card.Text>Account Overview</Card.Text>
                <CardGroup>
                  <Card className="shadow p-2 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding:"10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize:"14px"
                          }}
                        >
                          Bills & Payments
                        </Card.Text>
                        <Card.Link href="#" style={{fontSize:"14px"}}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      
                      <Card.Text>No Bills are pending</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="shadow p-3 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding:"10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize:"14px"
                          }}
                        >
                          Balance & Recharge
                        </Card.Text>
                        <Card.Link href="#" style={{fontSize:"14px"}}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <Card.Text>
                        <p style={{ color: "#0076B5" }}>
                          $20.00 Balance in your
                        </p>
                        <h5>Mobile</h5>
                      </Card.Text>
                      <Button
                        style={{
                          backgroundColor: "#0076B5",
                          background: "#0076B5",
                        }}
                      >
                        Process To Pay
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                  <Card className="shadow p-3 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding:"10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize:"14px"
                          }}
                        >
                          Robert Plaska
                        </Card.Text>
                        <Card.Link href="#" style={{fontSize:"14px"}}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <Card.Text>
                        <p>
                          <i className="fa-solid fa-mobile-screen-button"></i>{" "}
                          85426-57894
                        </p>
                        <p style={{ color: "#0076B5" }}>
                          $20.00 Balance in your
                        </p>
                        <h5>Mobile</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="shadow p-3 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding:"10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize:"14px"
                          }}
                        >
                          Broadband
                        </Card.Text>
                        <Card.Link href="#" style={{fontSize:"14px"}}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <p>
                        <i className="fa-solid fa-globe mr-1"></i> 85426-57894
                      </p>
                      <Card.Text>
                        <p style={{ color: "#0076B5" }}>Available For</p>
                        <h5>25 Days</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileLandingPage;
