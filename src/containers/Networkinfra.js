import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getDigitotalBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";
const Networkinfra = () => {
  const [networkinfra, setNetworkinfra] = useState({});

  const handleAllnetworkinfra = async () => {
    const data = { slug: "network-infrastructure" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setNetworkinfra(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllnetworkinfra();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Network Infrastructure" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 c-ol-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>

                <Breadcrumb.Item href="/digitotal">Digitotal</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Network Infrastructure
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
                    src={imageUrl(networkinfra?.image)}
                    alt=""
                  />
                </div>
              </div>

              <div className=" pt-5  col-lg-8 ">
                <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {networkinfra?.name}
                </h4>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: networkinfra?.description,
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

export default Networkinfra;




