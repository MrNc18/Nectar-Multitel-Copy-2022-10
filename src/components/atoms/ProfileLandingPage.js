import React from 'react';
import { Button, Col, Container, Row, Card, Nav, CardGroup } from "react-bootstrap";

function ProfileLandingPage() {
  return (
    <Card>
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
  )
}

export default ProfileLandingPage