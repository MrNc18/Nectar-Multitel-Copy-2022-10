import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { showAlert } from "../utils/showAlert";
import { imageUrl } from "../services/category";
const Software = () => {
  const [software, setSoftware] = useState({});

  const handleAllSoftware = async () => {
    const data = { slug: "software" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setSoftware(resp && resp.data.data);
    } catch (error) {
      showAlert("something went wrong");
    }
  };
  useEffect(() => {
    handleAllSoftware();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Software" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="/digital">Start</Breadcrumb.Item>

                <Breadcrumb.Item href="/digital">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Software
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5  col-12 col-lg-4"
              >
                <div>
                  <img
                    className="img-fluid"
                    height={250}
                    width={350}
                    src={imageUrl(software?.image)}
                    alt=""
                  />
                </div>
              </div>
              <div className=" pt-5 col-lg-8">
                <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {software?.name}
                </h4>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{ __html: software?.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Software;
