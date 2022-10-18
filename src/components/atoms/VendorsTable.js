import React from 'react';
import { Container, Col, Row, Table } from "react-bootstrap";

function VendorsTable() {
  
  return (
    <Container>
      <Row>
        <Col md={12}>
        <Table responsive="md" className="mt-5 mb-4">
            <thead>
              <tr>
                {"thead"}
              </tr>
            </thead>
            <tbody>
              <tr>
                {"tdata"}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default VendorsTable