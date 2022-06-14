import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { getMsgMissionSusBySlug } from "../../services/WhoWeAreFront";
import { baseurl } from "../../utils/request";

function SustainabilityTab() {

  const [sustainability, setSustainability] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    (async () => {
      const response = await getMsgMissionSusBySlug({ slug: params?.slug });
      console.log("sustainability data", response);
      setSustainability(response?.data?.data);
    })();
  }, [params?.slug]);

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
            src={
              sustainability?.cover_img
                ? `${baseurl}/images/${sustainability?.cover_img}`
                : "https://www.expatica.com/app/uploads/sites/2/2015/07/education-in-spain-1920x1080.jpg"
            }
            alt=""
            style={{ height: "120px" }}
          />
        </Col>
        <Col md={12}>
          <h5 style={{ color: "#3190C3" }}>
          {sustainability?.name}
          </h5>
          <p>
          {sustainability?.description}
          </p>
        </Col>
        <Col md={12}>
          <h5 className="mt-3" style={{ color: "#3190C3" }}>
          {sustainability?.sub_heading}
          </h5>
          <p>
          {sustainability?.description_2}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SustainabilityTab;
