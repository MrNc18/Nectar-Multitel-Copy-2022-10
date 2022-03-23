import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { backIcon } from '../../svg/backIcon'

function ServiceBanner({title}) {
  return (
    <section id="inner_banner">
        <Container>
            {backIcon}
            <Row>
                <Col xs={12}>
                    <div className=''>
                
                <h1 className='white-color text-center'>{title}</h1>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ServiceBanner
