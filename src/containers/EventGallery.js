import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { accordionImgData } from "../components/atoms/accordionImgData";
import Gallery from "../components/atoms/Gallery";

function EventGallery() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="accordion">
              {accordionImgData.map(({ title, content, desc }) => (
                <Gallery title={title} content={content} desc={desc} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EventGallery;
