import React from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import { Link } from "react-router-dom";

const obj = {
  heading:
    "Partnership Aggrement between the Launda Provicial Swimming Association and Multitel",
  description:
    "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis. The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
  pic: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
};

function NF({ data, backlink = "/news" }) {
  return (
    <>
      <Container>
        <h4 className="mt-5" style={{ color: "#1D3557" }}>
          {data.heading}
        </h4>
        <p className="mt-3">{data.description}</p>
        <Row>
          <Col lg={6}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
          <Col lg={6}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <p className="mt-3">{data.description}</p>
        <Row>
          <Col lg={6}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
          <Col lg={6}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <p className="mt-3">{data.description}</p>
        <Row>
          <Col lg={4}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
          <Col lg={4}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
          <Col lg={4}>
            <img src={data.pic} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div className="text-center mt-5 mb-5">
          <Link to={backlink}>
            <Button
              variant="primary"
              size="sm"
              style={{
                backgroundColor: "#0076B5",
                border: "2px solid #0076B5",
              }}
            >
              Return
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

function NewsFirst() {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="News" />

        <Container>
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                Partnership Aggrement between the Launda Provicial Swimming
                Association and Multitel
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row style={{ backgroundColor: "#F6F6F6" }}>
            <Col md={12}>
              <NF data={obj} />
            </Col>
          </Row>
        </Container>
      </LandingPage>
    </>
  );
}

export default NewsFirst;
