import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceBanner from '../components/atoms/ServiceBanner'
import LandingPage from '../components/LandingPage'

const cpes = [
  {
    id: 1,
    image: '/assets/images/cpe1.png',
    subtitle: 'Some Heading Here',
    title: 'CPE Name Goes Here',
  },
  {
    id: 2,
    image: '/assets/images/cpe2.png',
    subtitle: 'Some Heading Here',
    title: 'CPE Name Goes Here',
  },
  {
    id: 3,
    image: '/assets/images/cpe3.png',
    subtitle: 'Some Heading Here',
    title: 'CPE Name Goes Here',
  },
  {
    id: 4,
    image: '/assets/images/cpe4.png',
    subtitle: 'Some Heading Here',
    title: 'CPE Name Goes Here',
  },
]

function CPE() {
  return (
    <LandingPage>
      <ServiceBanner title="Customer Premises Equipment (CPE)" />
      <section id="deserve" className='mt-5'>
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <p className="mb-2">Unlimited Speed</p>
              <h2 className="mb-3">With Our Latest CPE's</h2>
            </Col>
          </Row>
          <Row>
            
            {cpes.map(cpe => (
              <Col key={cpe.id} md={6}>
                <div className='cpe_card text-center mb-5'>
                  <img className='cpe_img' src={cpe.image} />
                  <p className='black-color mb-2'>{cpe.subtitle}</p>
                  <h4 className='deep_blue_heading'>{cpe.title}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </LandingPage>
  )
}

export default CPE
