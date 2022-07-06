import React from "react";
import { Col, Container, Row, Nav, Breadcrumb, Tab } from "react-bootstrap";
//import InvestmentTab from "../components/atoms/InvestmentTab";
import ServiceBanner from "../components/atoms/ServiceBanner";
//import SustainabilityTab from "../components/atoms/SustainabilityTab";
import LandingPage from "../components/LandingPage";
import PrivateNetworkContent from "../components/atoms/PrivateNetworkContent";
import NetPrimeContent from "../components/atoms/NetPrimeContent";
import NetProContent from "../components/atoms/NetProContent";
import NetSatContent from "../components/atoms/NetSatContent";
import WebServicesContent from "../components/atoms/WebServiceContent";

function Internet() {
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Internet" />
        <Container>
          <Row>
          <Col md={12}>
            <div className="bredcrumb">
              <Breadcrumb >
                <Breadcrumb.Item >Start</Breadcrumb.Item>
                <Breadcrumb.Item >Telecommunications </Breadcrumb.Item>
                <Breadcrumb.Item > Internet</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                  Net Prime
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
          </Row>
          <div style={{ backgroundColor: "#f6f6f6" }}>
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="sustainability"
            >
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
                        &nbsp;&nbsp;Private Networks
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="netprime">
                        <i class="fa-solid fa-box"></i>
                        &nbsp;&nbsp;Net Prime
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="netpro">
                        <i class="fa-solid fa-headphones"></i>
                        &nbsp;&nbsp;Net Pro
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="netsat">
                        <i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;Net
                        Sat
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Webservices">
                        <i class="fa-solid fa-calendar"></i>&nbsp;&nbsp;Web
                        Services
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="privatenetwork">
                      <PrivateNetworkContent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="netprime">
                      <NetPrimeContent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="netpro">
                      <NetProContent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="netsat">
                      <NetSatContent />
                    </Tab.Pane>

                    <Tab.Pane eventKey="Webservices">
                      <WebServicesContent />
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
}

export default Internet;
