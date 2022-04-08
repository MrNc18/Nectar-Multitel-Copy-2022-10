import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import VendorsTable from './VendorsTable';

function Vendors() {
    const theadData = ["Name", "Email", "Date"];

  const tbodyData = [
    {
      id: "1",
      items: ["John", "john@email.com", "01/01/2021"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
  ];
  return (
    <Container>
        <Row>
            <Col md={12}>
            {tbodyData.map((service) => (
              <VendorsTable
                key={service.id}
                items={service.items}
              />
            ))}
            </Col>
        </Row>
    </Container>
  )
}

export default Vendors