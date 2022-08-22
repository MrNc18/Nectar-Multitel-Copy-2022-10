import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";

function PrimeDate() {

  const [primeDate, setPrimeDate] = useState({});

  const handleAllPrivateNetworkContent = async () => {
    const data = { slug: "prime-date-heading" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setPrimeDate(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllPrivateNetworkContent();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
          <h4 className="mt-3 mb-4" style={{color:"#1D3557"}}>{primeDate?.name}</h4>
            <div dangerouslySetInnerHTML={{ __html: primeDate?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrimeDate;
