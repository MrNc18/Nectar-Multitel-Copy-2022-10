import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from "../components/atoms/DropDown";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { showAlert } from "../utils/showAlert";
import { imageUrl } from "../services/category";

const OtherService = () => {
  const [otherservice, setOtherservice] = useState({});

  const handleAllOtherservice = async () => {
    const data = { slug: "other-services-1" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setOtherservice(resp && resp.data.data);
    } catch (error) {
      showAlert("something went wrong");
    }
  };
  useEffect(() => {
    handleAllOtherservice();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Other Services" regnPage />
        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Digital</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Other Services
                </Breadcrumb.Item>
                <DropDown />
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
                    src={imageUrl(otherservice?.image)}
                    alt=""
                  />
                </div>
              </div>
              <div className=" pt-5 col-lg-8">
                <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {otherservice?.name}
                </h4>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: otherservice?.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OtherService;
