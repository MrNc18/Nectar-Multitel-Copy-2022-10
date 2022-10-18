import React, { useState, useEffect, lazy, Suspense } from "react";
// import ServiceBanner from "../components/atoms/ServiceBanner";
// import LandingPage from "../components/LandingPage";
import { showAlert } from "../utils/showAlert";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ServiceBanner = lazy(() => import("../components/atoms/ServiceBanner"));
const LandingPage = lazy(() => import("../components/LandingPage"));

const ConsultingTraining = () => {
  const [consultingtraining, setConsultingtraining] = useState({});

  const handleAllconsultingtraining = async () => {
    const data = { slug: "consulting-and-training-on-job" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setConsultingtraining(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllconsultingtraining();
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage woproducts>
          <ServiceBanner title="Consulting and Training On Job" regnPage />
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-6 col-4 bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>

                  <Breadcrumb.Item href="/digitotal">Digitotal</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                    {" "}
                    On-Job Consulting and Training
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
                      src={imageUrl(consultingtraining?.image)}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" pt-5 col-lg-8">
                  <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                    {consultingtraining?.name}
                  </h4>
                  <div
                    className="mb-5 mt-3"
                    dangerouslySetInnerHTML={{
                      __html: consultingtraining?.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </LandingPage>
      </Suspense>
    </>
  );
};

export default ConsultingTraining;
