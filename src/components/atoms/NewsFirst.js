import React, { useState, useEffect } from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import { Link } from "react-router-dom";
import { getAllNews } from "../../services/WhoWeAreFront";
import { imageUrl } from "../../services/WhoWeAreFront";

// const obj = {
//   heading:
//     "Partnership Aggrement between the Launda Provicial Swimming Association and Multitel",
//   description:
//     "The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis. The service offer is available in across covered by the Optical Fiber instruction, and installation requests are subject to confirmation or feasiblity analysis.",
//   pic: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
// };

function NF() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllNews();
      console.log(response);
      setNews(response?.data);
    })();
  }, []);

  return (
    <>
      {news &&
        news.map((items) => {
          return (
            <Container>
              <h4 className="mt-5" style={{ color: "#1D3557" }}>
                {items?.title}
              </h4>
              <p className="mt-3">{items?.description}</p>
              <Row>
                <Col lg={6}>
                  {items.news_images &&
                    items.news_images.map((image, id) => (
                      <img
                        variant="top"
                        src={imageUrl(image.image)}
                        style={{ width: "100%" }}
                      />
                    ))}
                </Col>
              </Row>
            </Container>
          );
        })}
    </>
  );
}

function NewsFirst({ data, backlink = "/news" }) {
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
