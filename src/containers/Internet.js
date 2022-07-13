import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { Col, Container, Row, Nav, Breadcrumb, Tab } from "react-bootstrap";
import PrivateNetwork from "../components/atoms/PrivateNetwork";
import NetPrime from "../components/atoms/NetPrime";
import NetPro from "../components/atoms/NetPro";
import NetSet from "../components/atoms/NetSet";
import WebServices from "../components/atoms/WebServices";
const InternetUser = () => {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Internet" />
        <Container>
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Telecommunication</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                Internet
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={{ backgroundColor: "#f6f6f6" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="news">
              <Row>
                <Col
                  md={3}
                  className="sidenav mb-3"
                  style={{ backgroundColor: "#E2E2E2" }}
                >
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="privatenetwork">
                      <i class="fa-solid fa-id-badge"></i>
                        &nbsp;&nbsp; Private Networks
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="netprime">
                        <i class="fa-solid fa-indent"></i>
                        &nbsp;&nbsp; Net Prime
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="netpro">
                      <i class="fa-solid fa-headphones"></i>&nbsp;&nbsp; Net
                        Pro
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="netset">
                      <i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp; Net Set
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="webservices">
                      <i class="fa-solid fa-sd-card"></i>&nbsp;&nbsp; Web
                        Services
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="privatenetwork">
                        {<PrivateNetwork />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="netprime">
                      {< NetPrime/>}
                    </Tab.Pane>
                    <Tab.Pane eventKey="netpro">
                      {<NetPro />}
                    </Tab.Pane>
                    <Tab.Pane eventKey="netset">
                      {<NetSet /> }
                    </Tab.Pane>
                    <Tab.Pane eventKey="webservices">
                      {<WebServices /> }
                    </Tab.Pane>
                 
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </LandingPage>
    </>
  );
};

export default InternetUser;
