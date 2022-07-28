import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function NetSat() {
  const [NetSat, setNetSat] = useState({});

  const handleAllNetSat = async () => {
    const data = { slug: "net-set" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setNetSat(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllNetSat();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {NetSat?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: NetSat?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetSat;
