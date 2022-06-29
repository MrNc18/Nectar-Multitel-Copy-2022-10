import React, { useState, useEffect } from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import { Link } from "react-router-dom";
import { getNewsByCategory } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";


function NF() {
  const [newsFirst, setNewsFirst] = useState([]);

  const handleAllRequirement = async () => {
    const data = { slug: "bulle" };
    try {
      const resp = await getNewsByCategory(data);
      console.log(resp);
      setNewsFirst(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  return (
    <>
      {newsFirst &&
          newsFirst?.news?.map((item) => (
            <Container>
              <h4 className="mt-5" style={{ color: "#1D3557" }}>
                {item?.title}
              </h4>
              <p className="mt-3">{item?.description}</p>
              <Row>
                <Col lg={6}>
                  {item.image &&
                    item?.image?.map((img) => (
                      <img
                        variant="top"
                        src={imageUrl(img)}
                        style={{ width: "100%" }}
                      />
                    ))}
                </Col>
              </Row>
            </Container>
          ))}
    </>
  );
}

function NewsFirst({ backlink = "/news" }) {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="News" />

        <Container>
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                Partnership Aggrement between the Launda Provicial Swimming
                Association and Multitel
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row style={{ backgroundColor: "#F6F6F6" }}>
            <Col md={12}>
              <NF />
              <div className="text-center mt-5 mb-5">
                <Link to={backlink}>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{
                      backgroundColor: "#0076B5",
                      border: "2px solid #0076B5",
                    }}
                  >
                    Return
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </LandingPage>
    </>
  );
}

export default NewsFirst;
