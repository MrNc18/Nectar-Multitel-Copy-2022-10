import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BroadbandCard from "../components/atoms/BroadbandCard";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
import { tvIcon } from "../svg/tv";

function InternetServices() {
  return (
    <LandingPage>
      <ServiceBanner title="Internet Services" />
      <Services />

      <section id="deserve">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2">Private. Secure. Super Fast</p>
              <h2 className="mb-3">Our Broadband Services</h2>
              <div className="broadband_services my-5">
                <Row>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      imgdiv={<div className="round_icon">{tvIcon}</div>}
                      head1="Single Deal"
                      head2="Broadband Only"
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      imgdiv={
                        <div className="broad2">
                          <img src="/assets/images/broad2.png" />
                        </div>
                      }
                      head1="Half Package"
                      head2="Broadband & Phones"
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      imgdiv={
                        <div className="broad3">
                          <img src="/assets/images/broad3.png" />
                        </div>
                      }
                      head1="Full Package"
                      head2="TV , Broadband & Phones"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LandingPage>
  );
}

export default InternetServices;
