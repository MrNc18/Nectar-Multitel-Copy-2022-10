import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getTelecommunicationBySlug } from "../services/TelecommunicationFront";

const Cpes = () => {
  
  const [CPEs, setCPEs] = useState({});

  const handleAllCPEs = async () => {
    const data = { slug: "cpe" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setCPEs(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllCPEs();
  }, []);

  
  
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="CPEs" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="telecommunication">Start</Breadcrumb.Item>

                <Breadcrumb.Item href="telecommunication">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  CPEs
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          {/* <Cpes data={obj} /> */}
         <div className="container">
         <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
            {CPEs?.name}
          </h4>
          <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html: CPEs?.description }} />
         </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Cpes;
