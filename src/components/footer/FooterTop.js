import React from 'react'
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function FooterTop() {
  return (
    <Container fluid id="awards_sponsors">
        <Row>
          <Col md={6} className="awards pt-5 pb-5">
            <Row>
              <Col md={3}>

              </Col>
              <Col md={9}>
                <h2 className="mb-4">Awards and Distinctions</h2>
                <div className="award_img">
                  <img src="/assets/images/award.png" className="mr-5" />
                  <img src="/assets/images/award.png" className="mr-5" />
                  <img src="/assets/images/award.png" className="mr-5" />
                  <img src="/assets/images/award.png" className="mr-5" />
                </div>
              </Col>
                
             
            </Row>

          </Col>  
          <Col md={6} className="sponsors pt-5 pb-5">
              <Col md={9}>
                <h2 className="mb-5">Sponsorships</h2>
                <div className="sponsor_img">
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                </div>
              </Col>
              <Col md={3}>
                
              </Col>
            
          </Col> 
        </Row>  
      </Container>
  )
}

export default FooterTop
