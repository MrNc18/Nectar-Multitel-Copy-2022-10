import React from "react";
import { Col, Container, Row, Nav, Breadcrumb, Tab } from "react-bootstrap";
import Bulletine from "../components/atoms/Bulletine";
import Highlights from "../components/atoms/Highlights";
import NewsCard from "../components/atoms/NewsCard";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import EventGallery from "./EventGallery";

function News() {
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="News" regnPage />
        <Container>
          <Row>
            <Col md={12}>
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                News
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          </Col>
          </Row>
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
                      <Nav.Link eventKey="news">
                        <i class="fa-solid fa-newspaper"></i>
                        &nbsp;&nbsp; News
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="bulletine">
                        <i class="fa-solid fa-indent"></i>
                        &nbsp;&nbsp; Bulletines
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="highlight">
                        <i class="fa-solid fa-lightbulb"></i>&nbsp;&nbsp;
                        Highlights
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eventgallery">
                        <i class="fa-solid fa-palette"></i>&nbsp;&nbsp; Event
                        Gallery
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="news">
                      <NewsCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey="bulletine">
                      <Bulletine />
                    </Tab.Pane>
                    <Tab.Pane eventKey="highlight">
                      <Highlights />
                    </Tab.Pane>
                    <Tab.Pane eventKey="eventgallery">
                      <EventGallery />
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

export default News;
