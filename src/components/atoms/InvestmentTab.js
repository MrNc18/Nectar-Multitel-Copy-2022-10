import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomAccordion from "./customAccordion";
import { accordionData } from "./accordionData";
import { showAlert } from "../../utils/showAlert";
import { getSustainabilityByCategory } from "../../services/WhoWeAreFront";

function InvestmentTab() {
  const [sustainability, setSustainability] = useState([]);

  const handleAllSustainability = async () => {
    const data = { slug: "social-and-cultural-investment" };
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
    <>
      <Container>
        <Row>
          {sustainability &&
            sustainability?.sustainabilities?.map((item) => (
              <Col md={12}>
                <div className="accordion">
                  <>
                    <CustomAccordion
                      title={item?.title}
                      shortdesc={item?.sort_description}
                      content={item?.description}
                    />
                  </>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default InvestmentTab;
