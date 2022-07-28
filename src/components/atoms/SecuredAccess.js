import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function SecuredAccess() {
  const [securedAccess, setSecuredAccess] = useState({});

  const handleAllSecuredAccess = async () => {
    const data = { slug: "secured-access" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setSecuredAccess(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllSecuredAccess();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {securedAccess?.name}
            </h4>
            <div className = "Securedtable" dangerouslySetInnerHTML={{ __html: securedAccess?.description }} />
            {/* <p>{SecuredAccess?.description}</p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SecuredAccess;
