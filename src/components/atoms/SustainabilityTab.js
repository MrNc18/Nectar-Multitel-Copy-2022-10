import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { getMsgMissionSusBySlug } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";
import { imageUrl } from "../../services/category";

function SustainabilityTab() {
  const [sustainability, setSustainability] = useState({});

  const handleAllSustainability = async () => {
    const data = { slug: "sustainability-1" };
    try {
      const resp = await getMsgMissionSusBySlug(data);
      console.log(resp);
      setSustainability(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllSustainability();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2 className="mt-5" style={{ color: "#1D3557" }}>
            {sustainability?.name}
          </h2>
        </Col>
        <Col md={4}>
          <img
            src={imageUrl(sustainability?.image)}
            alt=""
            style={{ height: "120px" }}
          />
        </Col>
        <Col md={12}>
          <h5 style={{ color: "#3190C3" }}>{sustainability?.name}</h5>
          <p>{sustainability?.description}</p>
        </Col>
        <Col md={12}>
          <h5 className="mt-3" style={{ color: "#3190C3" }}>
            {sustainability?.sub_heading}
          </h5>
          <p>{sustainability?.description_2}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SustainabilityTab;
