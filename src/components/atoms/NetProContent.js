import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const obj = {
  heading: "Net Pro",

  description:
    "Business Internet service, asymmetric, with low contention, good performance and with a very competitive price/quality ratio.",

  list: "Characteristics: ",
  list1: "Asymmetric 1:2",
  list2: " low containment",
  list3: "Speeds from 2Mb to 6Mb",
  list4: "SLA Silver",
};

function NetPro({ data }) {
  return (
    <div>
      <div>
        <h4 className="mt-5 mb-5" style={{ color: "#1D3557" }}>
          {data.heading}
        </h4>
      </div>
      <div className="pt-4">
        <p>{data.description}</p>

        <p>{data.list}</p>
        <li>{data.list1}</li>
        <li>{data.list2}</li>
        <li>{data.list3}</li>
        <li>{data.list4}</li>
      </div>
    </div>
  );
}

function NetProContent() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <NetPro data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetProContent;
