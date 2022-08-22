import React, { useEffect, useState, lazy, Suspense } from "react";
// import ServiceBanner from "../components/atoms/ServiceBanner";
// import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";

const ServiceBanner = lazy(() => import("../components/atoms/ServiceBanner"));
const LandingPage = lazy(() => import("../components/LandingPage"));

const AutomationElectric = () => {
  const [automationelectric, setAutomationelectric] = useState({});

  const handleAllAutomationelectric = async () => {
    const data = { slug: "automation-and-electronic-security" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setAutomationelectric(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllAutomationelectric();
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage woproducts>
          <ServiceBanner title="Automation and Electronic Security" regnPage />
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-6 col-4 bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>

                  <Breadcrumb.Item href="/digitotal">Digitotal</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                    Automation and Electronic Security
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
                      src={imageUrl(automationelectric?.image)}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" pt-5 col-lg-8">
                  <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                    {automationelectric?.name}
                  </h4>
                  <div
                    className="mb-5 mt-3"
                    dangerouslySetInnerHTML={{
                      __html: automationelectric?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </LandingPage>
      </Suspense>
    </>
  );
};

export default AutomationElectric;
