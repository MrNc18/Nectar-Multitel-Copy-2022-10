import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CircleSlider } from "react-circle-slider";

function InternetQualityTest() {
  return (
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={3} className="mt-3">
          <h4>45.36</h4>
          <p>Mbps</p>
          <h5 style={{ color: "#0076B5" }}>DOWNLOAD</h5>
        </Col>
        <Col md={3}>
          <CircleSlider
            value={""}
            size={150}
            shadow={false}
            knobColor="#098DD4"
            showTooltip={true}
            progressColor="#353535"
            knobRadius={15}
            progressWidth={15}
            circleWidth={15}
            label="Mbps"
          />
          <Button variant="primary" className="mt-3" style={{ width: "166px" }}>
            Stop Test
          </Button>{" "}
        </Col>
        <Col md={3} className="mt-3">
          <h4>25.36</h4>
          <p>Mbps</p>
          <h5 style={{ color: "#0076B5" }}>UPLOAD</h5>
        </Col>
        <Col md={2}>
          <b>
            <p>Connected By</p>
          </b>
          <div className="icon-flex">
            <div className="icon-wrapper1">
              <i class="fa-brands fa-bluetooth-b fa-2x"></i>
            </div>
            <div className="icon-wrapper">
              <i class="fa-solid fa-wifi fa-2x"></i>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InternetQualityTest;
