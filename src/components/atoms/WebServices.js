import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function WebServices() {
  const [WebServices, setWebServices] = useState({});

  const handleAllWebServices = async () => {
    const data = { slug: "web-services" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setWebServices(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllWebServices();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {WebServices?.name}
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: WebServices?.description }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WebServices;
