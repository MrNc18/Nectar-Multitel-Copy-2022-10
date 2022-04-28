import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ServicesSection({tagline,heading}) {
  return (
    <section id="deserve">
        <Container>
          <Row>            
            <Col md={12} className="text-center">
              <p className='mb-2'>{tagline}</p>
              <h6 className="mb-3">{heading}</h6>
              <div className="d-flex text-center" style={{justifyContent: "center", position:"relative"}}>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/secure.png" style={{width:"40px"}}
                  />
                  </div>
                  <span>Secure Internet</span>
                </div>
                <span className="plus">+</span>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/console.png" style={{width:"40px"}} />
                  </div>
                  <span>Streaming Services</span>
                </div>
                <span className="plus">+</span>
                <div className="net_service">
                  <div class="net_img">
                    <img src="/assets/images/transmission.png" style={{width:"40px"}} />
                  </div>
                  <span>High Data Transmission</span>
                </div>
              </div>
            </Col>           
          </Row>
        </Container>
      </section>
  )
}

export default ServicesSection
