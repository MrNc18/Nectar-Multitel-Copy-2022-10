import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const obj = {
  heading: "Net Prime",

  description:
    "High-performance, symmetrical, contention-free, enterprise Internet service to meet customers with the most demanding requirements.",

  list: "Characteristics: ",
  list1: "Symmetrical",
  list2: "no containment",
  list3: " Public IP",
  list4: "Speeds from 2Mb",
  list5: " Gold SLA",
};

function NetPrime({ data }) {
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
        <li>{data.list5}</li>
      </div>
    </div>
  );
}

function NetPrimeContent() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <NetPrime data={obj} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetPrimeContent;
