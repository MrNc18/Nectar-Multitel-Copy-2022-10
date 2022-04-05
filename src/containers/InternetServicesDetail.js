import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BroadbandCard from "../components/atoms/BroadbandCard";
import BroadbandCardDetail from "../components/atoms/BroadbandCardDetail";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { getProductsByService } from "../services/intservices";

function InternetServicesDetail() {
  const navigate = useNavigate();
  const [initial, setInitial] = useState("Loading...");
  const [productsList, setProductsList] = useState([]);

  const params = useParams()
  console.log(params?.tag)

  useEffect(() => {
    (async () => {
      const response = await getProductsByService({slug: params?.tag})
      console.log(response);
      const products = response?.data?.data?.service_products;
      products ? setProductsList(products) : setInitial("No service products found");
      // !response?.data?.length && setInitial("No service products found");
    })();
  }, []);

  return (
    <LandingPage>
      <ServiceBanner title="Broadband Packages" backlink="/categories/internet-services" />
      <section id="deserve" className="mt-5">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2">The Best in The Segment</p>
              <h2 className="mb-3">Our Broadband Packages</h2>
              <div className="broadband_services my-5">
                <Row>
                {productsList.length ? (
                  productsList.map((product) => (
                    <BroadbandCardDetail product={product} key={product.id} />
                  ))
                ) : (
                  <p>{initial}</p>
                )}
                  {/* <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={<div className="round_icon">{tvIcon}</div>}
                      head1="$30.00/mo"
                      head2="Broadband Only"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              200 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              260 mb/ps Download Speed
                            </p>
                          </div>
                        </>
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={
                        <div className="broad2">
                          <img src="/assets/images/broad2.png" />
                        </div>
                      }
                      head1="$60.00/mo"
                      head2="Broadband & Phones"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              500 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              420 mb/ps Download Speed
                            </p>
                          </div>
                        </>
                      }
                    />
                  </Col>
                  <Col md={6} lg={4}>
                    <BroadbandCard
                      detail
                      imgdiv={
                        <div className="broad3">
                          <img src="/assets/images/broad3.png" />
                        </div>
                      }
                      head1="$100.00/mo"
                      head2="TV , Broadband & Phones"
                      content={
                        <>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Full House TV</span><br />
                              1000 Amazing Channels Full HD
                            </p>
                          </div>
                          <div className="package_det">
                            <p className="black-color my-4" style={{ fontSize: "14px" }}>
                              <span style={{fontWeight:500}}>Fiber Broadband</span><br />
                              1000 mb/ps Download Speed
                            </p>
                          </div>
                        </>
                      }
                    />
                  </Col> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </LandingPage>
  );
}

export default InternetServicesDetail;
