import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Mission = ({ heading1, description1,  heading2,description2,heading3,description3,heading4,description4, }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h2 style={{ color : '#1D3557s'}} className="pt-4 m-1">{heading1}</h2>
            <p >{description1}</p>
            <h5 style={{ color:'#3190C3' }}>{heading2}</h5>
            <p >{description2}</p>
            <h5 style={{ color:'#3190C3' }}>{heading3}</h5>
            <p>{description3}</p>
            <h5 style={{ color:'#3190C3' }}>{heading4}</h5>
            <p>{description4}</p>
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mission;
