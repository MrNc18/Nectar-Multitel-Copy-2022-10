import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getTelecommunicationMenusBySlug } from "../services/TelecommunicationFront";
import { showAlert } from "../utils/showAlert";

const VSAT = () => {
  const [vsat, setVsat] = useState({});

  const handleAllMessage = async () => {
    const data = { slug: "vsat" };
    try {
      const resp = await getTelecommunicationMenusBySlug(data);
      console.log(resp);
      setVsat(resp && resp.data.data);
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
        <ServiceBanner title="VSAT" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  VSAT
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

      
          <div className="container">
            <div>
              <h2 style={{ color: "#1D3557" }}>{vsat.name}</h2>
            </div>

            <div>
              <p className="pt-2">{vsat.description}</p>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default VSAT;
