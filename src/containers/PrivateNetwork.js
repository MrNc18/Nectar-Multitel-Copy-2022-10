import React from "react";
import { Col, Container, Row, Nav, Breadcrumb, Tab } from "react-bootstrap";
import LanToLan from "../components/atoms/LanToLan";
import LinkEN from "../components/atoms/LinkEN";
import P2PLink from "../components/atoms/P2PLink";
import PrimeDate from "../components/atoms/PrimeDate";
import PrivateNetworkContent from "../components/atoms/PrivateNetworkContent";
import SatDate from "../components/atoms/SatDate";
import SecuredAccess from "../components/atoms/SecuredAccess";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";

function PrivateNetwork() {
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Private Networks" regnPage />
        <Container className="mb-5">
          <Row>
            <Col md={12}>
              <div className="bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="/privatenetwork">Start</Breadcrumb.Item>
                  <Breadcrumb.Item href="telecommunication">Telecommunication</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                    Private Networks
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <div style={{ backgroundColor: "#f6f6f6" }}  className="container">
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="privatenetwork"
            >
              <Row>
                <Col
                  md={3}
                  className="sidenav mb-3"
                  style={{ backgroundColor: "#E2E2E2" }}
                >
                  <Nav variant="pills" className="flex-column pointer">
                    <Nav.Item>
                      <Nav.Link eventKey="privatenetwork">
                        <i class="fa-solid fa-user-large"></i>
                        &nbsp;&nbsp;Private Networks
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="primedate">
                        <i class="fa-solid fa-box"></i>
                        &nbsp;&nbsp; Prime Date
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="securedaccess">
                        <i class="fa-solid fa-headphones"></i>&nbsp;&nbsp;
                        Secured Access
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="satdate">
                        <i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp; Sat
                        Date
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="lantolan">
                        <i class="fa-solid fa-sd-card"></i>&nbsp;&nbsp;
                        Lan-To-Lan
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="p2plink">
                        <i class="fa-solid fa-lock"></i>&nbsp;&nbsp; P2P link
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="linken">
                        <i class="fa-solid fa-lock"></i>&nbsp;&nbsp; Link EN
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="privatenetwork">
                      <PrivateNetworkContent />
                    </Tab.Pane>
                    <Tab.Pane eventKey="primedate">
                      <PrimeDate />
                    </Tab.Pane>
                    <Tab.Pane eventKey="securedaccess">
                      <SecuredAccess />
                    </Tab.Pane>
                    <Tab.Pane eventKey="satdate">
                      <SatDate />
                    </Tab.Pane>
                    <Tab.Pane eventKey="lantolan">
                      <LanToLan />
                    </Tab.Pane>
                    <Tab.Pane eventKey="p2plink">
                      <P2PLink />
                    </Tab.Pane>
                    <Tab.Pane eventKey="linken">
                      <LinkEN />
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

export default PrivateNetwork;
