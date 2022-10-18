import React, { useEffect, useState, lazy, Suspense } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import TopBanner from "../components/atoms/TopBanner";
// import LandingPage from "../components/LandingPage";
// import Services from "../components/Services";
// import ServicesSection from "../components/ServicesSection";
import { getAllApprovedCms } from "../services/category";
import { getProductsByService } from "../services/intservices";
import { baseurl } from "../utils/request";
const TopBanner = lazy(() => import("../components/atoms/TopBanner"));
const LandingPage = lazy(() => import("../components/LandingPage"));
const Services = lazy(() => import("../components/Services"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));

function Home() {
  const [bannerContent, setBannerContent] = useState({});
  const [iniText, setIniText] = useState("Loading...");
  const [phoneDetails, setPhoneDetails] = useState({});
  const [tvDetails, setTvDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getAllApprovedCms({ page_slug: "home" });
      console.log(response);
      response?.data?.data[0]
        ? setBannerContent(response?.data?.data[0])
        : setIniText("");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getProductsByService({
        slug: "landline-telephony",
      });
      console.log(response, "res");
      setPhoneDetails(response?.data?.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getProductsByService({
        slug: "tv-services",
      });
      console.log(response, "restv");
      setTvDetails(response?.data?.data);
    })();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage>
        {bannerContent?.id ? (
          <section className="banner-home mb-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-New">
                    <div className="banner-New-inner">
                      <TopBanner
                        topText={bannerContent?.title}
                        btnText={bannerContent?.button}
                        // page="home"
                        heading={bannerContent?.subtitle}
                        subheading={bannerContent?.description}
                        link={bannerContent?.link}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <p className="text-center">{iniText}</p>
        )}

        <ServicesSection tagline="Check Out Our" heading="Latest Services" />
        <Services />
        <section id="internet_service" className="pos-relative">
          {phoneDetails?.id && (
            <Row>
              <Col md={4} lg={5}>
                <h2 className="mb-4 mt-5">Our Landline Telephony Services</h2>
              </Col>
              <Col md={8} lg={7} className="right_bg_home">
                <Container>
                  <Row>
                    <Col md={3}></Col>
                    <Col md={8} lg={7}>
                      <div className="telephony_right">
                        <h3 className="white-text">{phoneDetails?.name}</h3>
                        <p className="white-text">
                          {phoneDetails?.description}
                        </p>
                        <div className="plan_buttons mt-4">
                          <Button
                            onClick={() =>
                              navigate(
                                "/categories/internet-services/landline-telephony"
                              )
                            }
                            variant="primary primary_bg my-3"
                          >
                            See Plans
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col md={1} lg={2}></Col>
                  </Row>
                </Container>
              </Col>
              <img
                // src="/assets/images/phone_recive.png"
                src={`${baseurl}/images/${phoneDetails?.image}`}
                className="image_grp_home"
              />
              <img src="/assets/images/dot-middle.png" className="dot-middle" />
            </Row>
          )}
        </section>

        <section id="tv_services" className="mt-5 mb-5">
          {tvDetails?.id && (
            <Container>
              <Row>
                <Col md={5}>
                  <h2 className="mb-4">{tvDetails?.name}</h2>

                  <p>{tvDetails?.description}</p>
                  <p className="fw-500">
                    There are vaious types of Movie Pack Plans.
                  </p>
                  <div className="plan_buttons mt-4">
                    <Button
                      variant="primary primary_bg"
                      onClick={() =>
                        navigate("/categories/internet-services/tv-services")
                      }
                    >
                      See Plans
                    </Button>
                  </div>
                </Col>
                <Col md={7}>
                  <img
                    className="tv_img"
                    src={`${baseurl}/images/${tvDetails?.image}`}
                  />
                </Col>
              </Row>
            </Container>
          )}
        </section>
      </LandingPage>
    </Suspense>
  );
}

export default Home;
