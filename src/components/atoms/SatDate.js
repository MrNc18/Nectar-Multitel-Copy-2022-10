import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { showAlert } from "../../utils/showAlert";
import { getTelecommunicationBySlug } from "../../services/TelecommunicationFront";


function SatDate() {
  const [SatDate, setSatDate] = useState({});

  const handleAllSatDate = async () => {
    const data = { slug: "sat-date" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setSatDate(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllSatDate();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mt-5 mb-4" style={{ color: "#1D3557" }}>
              {SatDate?.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: SatDate?.description }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SatDate;
