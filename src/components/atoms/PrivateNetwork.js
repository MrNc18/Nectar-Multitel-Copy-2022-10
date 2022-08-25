import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

 function PrivateNetwork() {

  const [Internet, setInternet] = useState({});

  const handleAllInternet = async () => {
    const data = { slug: "internet" };
    try {
      const resp = await getTelecommunicationBySlug (data);
      console.log(resp);
      setInternet(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllInternet();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-3 mb-4" style={{color:"#1D3557"}}>{Internet?.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: Internet?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PrivateNetwork;
