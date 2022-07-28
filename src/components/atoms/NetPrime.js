import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";
import { imageUrl } from "../../services/category";

function NetPrime() {
  const [NetPrime, setNetPrime] = useState({});

  const handleAllNetPrime = async () => {
    const data = { slug: "net-prime" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setNetPrime(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllNetPrime();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {NetPrime?.name}
            </h4>
            <img src={imageUrl(NetPrime?.image)} alt="" height={40} />
            <div dangerouslySetInnerHTML={{ __html: NetPrime?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetPrime;
