import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Message({heading, description}) {
  return (
    <>
    <Container>
        <Row>
            <Col md={12}>
            <h2   style={{ color : '#1D3557'}}className="p-2" >
             {heading}
            </h2>
            <p>
             {description}
            </p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Message