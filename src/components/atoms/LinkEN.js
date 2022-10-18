import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function LinkEN() {
  const [LinkEN, setLinkEN] = useState({});

  const handleAllLinkEN = async () => {
    const data = { slug: "link-en" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setLinkEN(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllLinkEN();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {LinkEN?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: LinkEN?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LinkEN;
