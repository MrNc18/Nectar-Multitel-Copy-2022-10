import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../components/atoms/ServiceCard";
import LandingPage from "../components/LandingPage";
import ServicesSection from "../components/ServicesSection";

const servicesData = [
  {
    id: 1,
    title: "Phone",
    src: "/assets/images/phone.png",
  },
  {
    id: 2,
    title: "Broadband",
    src: "/assets/images/triimage2.jpg",
  },
  {
    id: 3,
    title: "Fiber",
    src: "/assets/images/tv_zoom.png",
  },
  {
    id: 4,
    title: "Television",
    src: "/assets/images/triimage3.jpg",
  },
];

function Home() {
  return (
    <LandingPage>
      <ServicesSection tagline="Check Out Our" heading="Latest Services" />
      <section id="img_cards" className="mt-5 mb-5">
        <Container>
          <Row>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                title={service.title}
                home
              />
            ))}
          </Row>
        </Container>
      </section>

      <section id="internet_service" className="pos-relative">
        <Row>
          <Col md={4} lg={5}>
            <h2 className="mb-4 mt-5">Our Landline Telephony Services</h2>
          </Col>
          <Col md={8} lg={7} className="right_bg_home">
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={8} lg={7}>
                  <div className="telephony_right">
                    <h3 className="white-text">Heading goes here</h3>
                    <p className="white-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi lacus dolor, scelerisque eu nisl quis, faucibus
                      auctor arcu. Mauris consequat varius dui, nec elementum
                      metus. Curabitur posuere leo et ex finibus. Mauris sed
                      orci in urna feugiat condimentum vel id turpis. Quisque
                      dui diam, varius at finibus at, iaculis mattis enim. Etiam
                      commodo vehicula urna, dapibus gravida lorem tristique a.
                      Aliquam erat volutpat. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae;
                      Praesent finibus venenatis risus tempor lacinia. Aliquam
                      faucibus diam lectus, ac sagittis odio cursus nec.
                    </p>
                    <p className="white-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi lacus dolor, scelerisque eu nisl quis, faucibus
                      auctor arcu. Mauris consequat varius dui, nec elementum
                      metus. Curabitur posuere leo et ex finibus. Mauris sed
                      orci in urna feugiat condimentum vel id turpis. Quisque
                      dui diam, varius at finibus at, iaculis mattis enim. Etiam
                      commodo vehicula urna, dapibus gravida lorem tristique a.
                    </p>
                  </div>
                </Col>
                <Col md={1} lg={2}></Col>
              </Row>
            </Container>
          </Col>
          <img
            src="/assets/images/phone_recive.png"
            className="image_grp_home"
          />
          <img
            src="/assets/images/dot-middle.png"
            className="dot-middle"
          />
        </Row>
      </section>

      <section id="tv_services">
          <Container>
              <Row>
                <Col md={5}>
                    <h2 className="mb-4">TV Services</h2>
                    <h3>Unlimited movies, TV shows and more.</h3>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    <p className="fw-500">Movie Pack Plans Starting @</p>
                    <div className="plan_buttons mt-4">
                        <Button variant="primary">
                            $50/month
                        </Button>
                        <Button variant="primary">
                            $150/6month
                        </Button>
                    </div>
                </Col>
                <Col md={7}>
                    <img className="tv_img" src="/assets/images/tv.png" />
                </Col>
              </Row>
          </Container>
      </section>
    </LandingPage>
  );
}

export default Home;
