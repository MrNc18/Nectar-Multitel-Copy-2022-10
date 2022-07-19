import React from "react";
import { Col, Container, Row, Nav, Breadcrumb, Tab } from "react-bootstrap";
import InvestmentTab from "../components/atoms/InvestmentTab";
import ServiceBanner from "../components/atoms/ServiceBanner";
import SustainabilityTab from "../components/atoms/SustainabilityTab";
import LandingPage from "../components/LandingPage";

function Sustainability() {
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Sustainability" regnPage  />
        <Container className="mb-5">

          <Row>
            <Col md={12}>
              <div className="bredcrumb">
                <Breadcrumb
                  style={{ backgroundColor: "#F6F6F6" }}
                >
                  <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0076B5" }}>Sustainability</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            </Row>
          <div style={{backgroundColor:"#f6f6f6"}}>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="sustainability"
          >
            <Row>
              <Col md={3} className="sidenav mb-3" style={{ backgroundColor: "#E2E2E2"}} >
                <Nav
                  variant="pills"
                  className="flex-column"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="sustainability">
                      <i class="fa-solid fa-industry"></i>
                      &nbsp;&nbsp;Sustainability
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="investment">
                      <i class="fa-brands fa-facebook-square"></i>
                      &nbsp;&nbsp;Social and Cultural <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Investment
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="indicator">
                      <i class="fa-solid fa-key"></i>&nbsp;&nbsp;Key Indicators
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="sustainability">
                    <SustainabilityTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="investment">
                    <InvestmentTab />
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="indicator">
                    <SustainabilityTab />
                  </Tab.Pane> */}
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

export default Sustainability;
