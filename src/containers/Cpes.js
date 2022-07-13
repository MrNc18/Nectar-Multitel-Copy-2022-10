import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getTelecommunicationMenusBySlug } from "../services/TelecommunicationFront";
import { data } from "jquery";
import { showAlert } from "../utils/showAlert";

const Cpes = () => {
  const [cpe, setCpe] = useState({});

  const handleAllMessage = async () => {
    const data = { slug: "cpes-1" };
    try {
      const resp = await getTelecommunicationMenusBySlug(data);
      console.log(resp);
      setCpe(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllMessage();
  }, []);

 
  return (
    <>
      <LandingPage>
        <ServiceBanner title="CPEs" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  CPEs
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="container">
          <div>
            <h2 style={{ color: "#1D3557" }} className="pt-4">
              {cpe.name}
            </h2>
          </div>
          <div>
            <p className="pt-2">{cpe.description}</p>
          </div>
          </div>
        
        </div>
      </LandingPage>
    </>
  );
};

export default Cpes;
