import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import LandingPage from "../components/LandingPage";

function Home() {
  return (
    <LandingPage>
      <section id="deserve">
        <Container>
          <Row>
            
            <Col md={12} className="text-center">
              <p>Private. Secure. Super Fast</p>
              <h2 className="mb-4">The Internet you Deserve</h2>
              <div className="d-flex text-center" style={{justifyContent: "center"}}>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/secure.png" />
                  </div>
                  <span>Secure Internet</span>
                </div>
                <span className="plus">+</span>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/console.png" />
                  </div>
                  <span>Streaming Services</span>
                </div>
                <span className="plus">+</span>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/transmission.png" />
                  </div>
                  <span>High Data Transmission</span>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
      <section id="img_cards" className="mt-5 mb-5">
        <Container>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="/assets/images/fiber.png" />
                <Card.Body className="text-center">
                  <Card.Title>Fiber Infrastructure</Card.Title>
                  <Card.Text className="cardtext">
                    Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">See Plans</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="/assets/images/ip.png" />
                <Card.Body className="text-center">
                  <Card.Title>IP Transit Provider</Card.Title>
                  <Card.Text className="cardtext">
                    Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">See Plans</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="/assets/images/cloud.png" />
                <Card.Body className="text-center">
                  <Card.Title>Cloud Connection</Card.Title>
                  <Card.Text className="cardtext">
                    Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">See Plans</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="/assets/images/ethernet.png" />
                <Card.Body className="text-center">
                  <Card.Title>Ethernet Transport</Card.Title>
                  <Card.Text className="cardtext">
                    Consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                  <Button variant="primary">See Plans</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>          
        </Container>
      </section>

      <section id="triimage">
        <Row>
          <Col md={4} className="tri1">
            <div className="padding_div">
              <h2 className="white-text text-center">Fast Internet Speeds</h2>
            </div>
          </Col>
          <Col md={4} className="tri2">
            <div className="padding_div">
              <h2 className="white-text text-center">Channel Lineups</h2>
            </div>
          </Col>
          <Col md={4} className="tri3">
            <div className="padding_div">
              <h2 className="white-text text-center">Our Ultimate TV Experience</h2>
            </div>
          </Col>
        </Row>
      </section>
      <section id="internet_service" className="pos-relative">
        <Row>
          <Col md={5}>
            <h2 className="mb-4 mt-5">
              Internet Service Designed with your Business in Mind.
            </h2>
          </Col>
          <Col md={7} className="right_bg">
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={7}>
                  <ul className="icontext">
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                    <li>
                      <h3 className="white-text">Heading goes here</h3>
                      <p className="white-text">
                        Consectetur adipisicing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Container>
          </Col>
          <img src="/assets/images/image_grp.png" className="image_grp" />
        </Row>
      </section>
    </LandingPage>
  );
}

export default Home;
