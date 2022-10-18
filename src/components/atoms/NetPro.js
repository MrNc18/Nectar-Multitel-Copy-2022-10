import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";
import { imageUrl } from "../../services/category";

function NetPro() {
  const [NetPro, setNetPro] = useState({});

  const handleAllNetPro = async () => {
    const data = { slug: "net-pro" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setNetPro(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllNetPro();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {NetPro?.name}
            </h4>
            <img src={imageUrl(NetPro?.image)} alt="" height={40} />
            <div dangerouslySetInnerHTML={{ __html: NetPro?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetPro;
