import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function LanToLan() {
  const [LanToLan, setLanToLan] = useState({});

  const handleAllLanToLan = async () => {
    const data = { slug: "lan-to-lan" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setLanToLan(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllLanToLan();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {LanToLan?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: LanToLan?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LanToLan;
