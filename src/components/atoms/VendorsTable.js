import React from "react";
import { Table, Card, Col, Row, Container } from "react-bootstrap";

function VendorsTable() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Table responsive="md" className="mt-5 mb-4">
            <thead style={{backgroundColor:"#0076B5", color:"white"}}>
              <tr>
                <th>S.No</th>
                <th>Vendor Name</th>
                <th>Vendor Phone</th>
                <th>Vendor Email</th>
                <th>Vendor Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mark</td>
                <td>245-568-5698</td>
                <td>mark@gmail.com</td>
                <td>1st Block 1st Cross, Rammurthy nagar</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default VendorsTable;
