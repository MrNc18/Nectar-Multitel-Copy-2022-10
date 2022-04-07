import React from 'react';
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row ,Table } from "react-bootstrap";
import Vendors from '../components/atoms/Vendors';

 function ContactPromotion() {
  return (
    <>
    <LandingPage>
    <ServiceBanner title="Promotions" />
    <Vendors />
   {/* <div className="container">
   <Table responsive="md" className="mt-5 mb-4">
            <thead style={{backgroundColor:"#0076B5", color:"white"}}>
              <tr>
                <th>S.No</th>
                <th>Vendor Name</th>
                <th>Vendor Phone</th>
                <th>Vendor Email</th>
                <th>Vendor Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
            </tbody>
          </Table>

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
      </section> */}
    </LandingPage>
    
    
    </>
  )
}
export default ContactPromotion;
