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
      <LandingPage woproducts>
        <ServiceBanner title="Internet" regnPage />
        <Container className="mb-5">
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="/internet">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="telecommunication">Telecommunication</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                Internet
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={{ backgroundColor: "#f6f6f6" }} className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="privatenetwork">
              <Row>
                <Col
                  md={3}
                  className="sidenav mb-3"
                  style={{ backgroundColor: "#E2E2E2" }}
                >
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="privatenetwork">
                      <i class="fa-solid fa-user-large"></i>
                        &nbsp;&nbsp; Internet
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="netprime">
                      <i class="fa-solid fa-box"></i>
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
                      <i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp; Net Sat
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
