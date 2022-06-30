import React, { useState, useEffect } from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import ImgAccordion from "../components/atoms/ImgAccordion";
import { accordionImgData } from "../components/atoms/accordionImgData";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { getAllMultitelPride } from "../services/WhoWeAreFront";
import { showAlert } from "../utils/showAlert";
import { imageUrl } from "../services/category";

function MultitelPride() {
  const [multitelPride, setmMltitelPride] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllMultitelPride();
      console.log(resp);
      setmMltitelPride(resp && resp.data);
      console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  return (
    <>
      <LandingPage>
        <ServiceBanner title="Sustainability" />
        <Container>
          <Row>
            <Col md={12}>
              <div className="bredcrumb">
                <Breadcrumb style={{ marginTop: "10px" }}>
                  <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                    Multitel Pride
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="accordion">
                {multitelPride &&
                  multitelPride?.map((item) => (
                    <Col md={12}>
                      <div className="accordion">
                        <>
                          {/* {console.log(item, "items")} */}
                          <ImgAccordion
                            title={item?.title}
                            desc={item?.description}
                            content={
                              item?.image &&
                              item?.image.map((img) => (
                                <>
                                  <img
                                    src={imageUrl(img)}
                                    style={{ height:"80px", marginBottom:"10px", display:"inline-block" }}
                                  />
                                  <h6>{item?.description}</h6>
                                  <p>{item?.sort_description}</p>
                                </>
                              ))
                            }
                          />
                        </>
                      </div>
                    </Col>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </LandingPage>
    </>
  );
}

export default MultitelPride;
