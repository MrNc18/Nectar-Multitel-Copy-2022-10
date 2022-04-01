import React,{useState,useEffect} from "react";
import LandingPage from "../components/LandingPage";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import MarketplaceBanner from "../components/MarketplaceBanner";
import vqr from "../assets/vqr.png";
import ProductsList from "../components/ProductsList";
import data from "../Data";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from ".././services/category";

const Marketplace = () => {
  const Navigate = useNavigate();
  const [categoryList,setcategoryList]=useState('')

  // const handleAllCategories = async () => {
  //   try {
  //     const resp = await getAllCategories();
  //     setcategoryList(resp && resp.data);
  //     console.log(resp, "respp");
  //   } catch (error) {
  //     console.log("error", error);
  //     alert("something went Wrong");
  //   }
  // };
  // useEffect(() => {
  //   handleAllCategories();
  // }, []);

  return (
    <>
      <LandingPage>
        <MarketplaceBanner
          img={vqr}
          title="Introducing Router"
          subtext="IPV6 support.Transmitt Beamforming Technology"
          subtext1="MU MIMO technology for enhanced Wifi Performance"
          Amount="$20"
          buttonText="view Details"
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
            {data &&
              data.categories.map((categories) => {
                return (
                  <Row key={categories._id}>
                    <Col md={1}></Col>
                    <Col md={2}>
                      <Card
                        border="light"
                        style={{ width: "10rem", marginBottom: "25px" }}
                      >
                        <a className="nav-link" href={`/${categories.link}`}>
                          {console.log("huchcohwbc", categories.link)}
                          <Card.Img
                            variant="top"
                            src={categories.image}
                            style={{
                              border: "25px solid white",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        </a>
                        <Card.Body style={{ textAlign: "center" }}>
                          <Card.Title style={{ fontSize: "small" }}>
                            {categories.title}
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
