import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "./customAccordion";
import { accordionData } from "./accordionData";

function InvestmentTab() {
  
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <CustomAccordion title={title} content={content} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InvestmentTab;
