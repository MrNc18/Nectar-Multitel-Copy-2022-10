import React, { useState, useEffect, lazy, Suspense } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import vqr from "../assets/vqr.png";
// import LandingPage from "../components/LandingPage";
// import MarketplaceBanner from "../components/MarketplaceBanner";
// import ProductsList from "../components/ProductsList";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../services/category";
import { baseurl } from "../utils/request";
const LandingPage = lazy(() => import("../components/LandingPage"));
const MarketplaceBanner = lazy(() => import("../components/MarketplaceBanner"));
const ProductsList = lazy(() => import("../components/ProductsList"));

const Marketplace = () => {
  const navigate = useNavigate();
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllCategories();
      console.log(response);
      setCatList(response?.data);
    })();
  }, []);

  return (
    <>
      <LandingPage>
        <MarketplaceBanner
          img={vqr}
          title="Introducing Router"
          subtext1="-IPV6 support.Transmit Beamforming Technology"
          subtext="-MU MIMO technology for enhanced Wifi Performance"
          Amount="$29.00"
          buttonText="View Details"
        />
        <ProductsList />
        <section id="key_board" className="mb-4">
          <Container>
            <Row>
              <Col md={2}></Col>
              <Col md={8} style={{ color: "white", textAlign: "center" }}>
                <b>
                  <h4>Promotions</h4>
                </b>
                <h1>Unlimited Broadband Deals</h1>
                <p>From $20.00 per month</p>
              </Col>
            </Row>
            <Col md={2}></Col>
          </Container>
        </section>
        <div id="deserve" style={{ marginTop: "30px", textAlign: "center" }}>
          <p className="mb-2">Lets Browse By</p>
          <h2 className="mb-3">Categories</h2>
          {/* <center><h4>categories</h4></center> */}
          <section className="row" style={{ justifyContent: "center" }}>
            {catList.length &&
              catList.map((cat) => {
                return (
                  <Row key={cat?.id}>
                    <Col md={1}></Col>
                    <Col md={2}>
                      <Card
                        border="light"
                        style={{ width: "10rem", marginBottom: "25px" }}
                      >
                        <a
                          className="nav-link"
                          onClick={() =>
                            navigate(`/categories/${cat?.slug}`, {
                              state: { name: cat?.name },
                            })
                          }
                          style={{cursor: "pointer"}}
                        >
                          <Card.Img
                            variant="top"
                            src={
                              cat?.image
                                ? `${baseurl}/images/${cat?.image}`
                                : "/assets/images/network.png"
                            }
                            style={{
                              border: "25px solid white",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </a>
                        <Card.Body style={{ textAlign: "center" }}>
                          <Card.Title style={{ fontSize: "small" }}>
                            {cat?.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                );
              })}
          </section>
        </div>
      </LandingPage>
    </>
  );
};

export default Marketplace;
