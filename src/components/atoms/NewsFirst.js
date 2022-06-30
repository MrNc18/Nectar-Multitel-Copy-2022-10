import React, { useState, useEffect } from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import { Link } from "react-router-dom";
import { getNewsBySlug } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/WhoWeAreFront";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { showAlert } from "../../utils/showAlert";


function NF() {
  const [newsFirst, setNewsFirst] = useState({});

  const params = useParams();
  console.log(params?.name);


  useEffect(() => {
    (async () => {
      const response = await getNewsBySlug({ slug: params?.name });
      console.log("Product data", response?.data?.data);
      setNewsFirst(response?.data?.data);
    })();
  }, [params?.name]);


  return (
    <>
            <Container>
              <h4 className="mt-5" style={{ color: "#1D3557" }}>
                {newsFirst?.title}
              </h4>
              <p className="mt-3">{newsFirst?.description}</p>
              <Row>
                  {newsFirst.image &&
                    newsFirst?.image?.map((img) => (
                      <img
                        variant="top"
                        src={imageUrl(img)}
                        style={{ width: "100%" }}
                      />
                    ))}
              </Row>
            </Container>
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
