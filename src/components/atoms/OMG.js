import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from "./DropDown";
import { showAlert } from "../../utils/showAlert";
import { getDigitotalBySlug } from "../../services/DigitotalFront";
import { imageUrl } from "../../services/category";
const OMG = () => {
  const [omg, setOmg] = useState({});

  const handleAllOmg = async () => {
    const data = { slug: "omg" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setOmg(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllOmg();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="OMG"  regnPage />
        <div className="container  mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="/digitotal">Digital</Breadcrumb.Item>
                <Breadcrumb.Item href="/otherservice"> Other Services</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  OMG
                </Breadcrumb.Item>
                <DropDown />
              </Breadcrumb>
            </div>
          </div>
          <div>
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5  col-12 col-md-4"
              >
                <div>
                  <img
                    className="img-fluid"
                    height={250}
                    width={350}
                    src={imageUrl(omg?.image)}
                    alt=""
                  />
                </div>
              </div>
              <div className=" pt-5 col-md-8">
                <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {omg?.name}
                </h4>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: omg?.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OMG;
