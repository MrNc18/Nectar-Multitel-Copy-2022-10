import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row } from "react-bootstrap";

function IpTelephony() {
  return (
    <LandingPage>
      <ServiceBanner title="IP Telephony" />
      <div className="container">
        <div className="row">
          <div className="col-md-2" style={{borderRadius:"50%"}} >
          <i class="fa-solid fa-phone fa-2x bg-primary text-white m-4 " ></i>
          <div >LAN</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       
          </div>
          </div>
          <i class="fa-solid fa-arrow-right"></i>
          <div className="col-md-3">
          <i class="fa-solid fa-cloud fa-2x m-4 bg-primary text-white " ></i>
          <div >Private Network</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       
          </div>
          </div>
          <i class="fa-solid fa-arrow-right"></i>
          <div className="col-md-3">
          <i class="fa-brands fa-internet-explorer fa-2x m-4 bg-primary text-white"></i>
          <div >Internat</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       
          </div>
          </div>
          <i class="fa-solid fa-arrow-right"></i>
          <div className="col-md-3">
          <i class="fa-solid fa-mobile-button fa-2x m-4 bg-primary text-white"></i>
          <div >PSTN</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       
          </div>
          </div>
        </div>
      </div>

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
          <img src="/assets/images/dot-middle.png" className="dot-middle" />
        </Row>
      </section>
    </LandingPage>
  );
}

export default IpTelephony;
