import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function P2PLink() {

  const [P2PLink, setP2PLink] = useState({});

  const handleAllP2PLink = async () => {
    const data = { slug: "p2p-link" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setP2PLink(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllP2PLink();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {P2PLink?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: P2PLink?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default P2PLink