import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { getSustainabilityByCategory } from "../../services/WhoWeAreFront";
import { baseurl } from "../../utils/request";
import { showAlert } from "../../utils/showAlert";

function SustainabilityTab() {

  const [sustainability, setSustainability] = useState([]);

  const handleAllSustainability = async () => {
    const data = { slug: "key-indicatores-3" };
    try {
      const resp = await getSustainabilityByCategory(data);
      console.log(resp);
      setSustainability(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllSustainability();
  }, []);

  return (
    
    <Container>
      {sustainability &&
      sustainability?.sustainabilities?.map((item) => (
      <Row>
        <Col md={8}>
          <h2 className="mt-5" style={{ color: "#1D3557" }}>
          {item.title}
          </h2>
        </Col>
        <Col md={4}>
          <img
            src={
              item?.cover_img
                ? `${baseurl}/images/${sustainability?.cover_img}`
                : "https://www.expatica.com/app/uploads/sites/2/2015/07/education-in-spain-1920x1080.jpg"
            }
            alt=""
            style={{ height: "120px" }}
          />
        </Col>
        <Col md={12}>
          <h5 style={{ color: "#3190C3" }}>
          {item?.sort_description}
          </h5>
          <p>
          {item?.description}
          </p>
        </Col>
        <Col md={12}>
          <h5 className="mt-3" style={{ color: "#3190C3" }}>
          {item?.sort_description}
          </h5>
          <p>
          {item?.description}
          </p>
        </Col>
      </Row>
      ))}
    </Container>
  );
}

export default SustainabilityTab;
