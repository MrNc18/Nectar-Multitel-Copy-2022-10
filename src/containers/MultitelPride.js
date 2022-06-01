import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import ImgAccordion from "../components/atoms/ImgAccordion";
import { accordionImgData } from "../components/atoms/accordionImgData";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";

function MultitelPride() {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Sustainability" />
        <Container>
          <Row>
            <Col md={12}>
              <div className="bredcrumb">
                <Breadcrumb
                  style={{ marginTop: "10px" }}
                >
                  <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                    Multitel Pride
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="accordion">
                {accordionImgData.map(({ title, content }) => (
                  <ImgAccordion title={title} content={content} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </LandingPage>
    </>
  );
}

export default MultitelPride;
