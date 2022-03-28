import React from "react";
import { Button, Col, Container, Row, Card, Nav, CardGroup } from "react-bootstrap";

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
              <CardGroup>
              <Card>
                <Card.Body style={{textAlign:"center"}}>
                  <Card.Text style={{ display: "inline-block", marginRight:"30px", fontWeight:"bold"}}>Bills & Payments</Card.Text>
                  <Card.Link href="#" ><u>View</u></Card.Link>
                  <Card.Text>
                    No Bills are pending
                </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{textAlign:"center"}}>
                  <Card.Text style={{ display: "inline-block", marginRight:"5px", fontWeight:"bold"}}>Balanace & Recharge</Card.Text>
                  <Card.Link href="#" ><u>View</u></Card.Link>
                  <Card.Text>
                    <p style={{color:"#0076B5"}}>$20.00 Balance in your</p>
                    <h5>Mobile</h5>
                </Card.Text>
                <Button style={{backgroundColor:"#0076B5", background:"#0076B5"}}>Process To Pay</Button>{' '}
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{textAlign:"center"}}>
                  <Card.Text style={{ display: "inline-block", marginRight:"30px", fontWeight:"bold"}}>Robert Plaska</Card.Text>
                  <Card.Link href="#" ><u>View</u></Card.Link>
                  <Card.Text>
                  <p><i class="fa-solid fa-mobile-screen-button"></i> 85426-57894</p>
                  <p style={{color:"#0076B5"}}>$20.00 Balance in your</p>
                    <h5>Mobile</h5>
                </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{textAlign:"center"}}>
                  <Card.Text style={{ display: "inline-block", marginRight:"30px", fontWeight:"bold"}}>Broadband</Card.Text>
                  <Card.Link href="#" ><u>View</u></Card.Link>
                  <p><i class="fa-solid fa-globe"></i> 85426-57894</p>
                  <Card.Text>
                  <p style={{color:"#0076B5"}}>Available For</p>
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

export default Profile;
