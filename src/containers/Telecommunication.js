import React from "react";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { data } from "jquery";

const Telecommunication = () => {
  function Telecom({ data }) {
    return (
      <>
        <div>
          <div>
            <h2 style={{ textAlign: "center", color: "#1D3557" }}>
              {data.heading}
            </h2>
          </div>
          <div style={{ textAlign: "center", color: "#1E86BE" }}>
            <p className="mt-5">{data.description1}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>{data.description2}</p>
          </div>
        </div>
      </>
    );
  }
  const obj = {
    heading: "Telecommunication",
    description1:
      "Multitel focuses its activity on the corporate market, a sector in which it has deep knowledge and experience.  ",
    description2:
      "Multitel focuses its activity on the corporate market, a sector in which it has deep knowledge and experience.As your company's business grows, it is increasingly necessary to find innovative and/or customized solutions that allow ecient and secure communication between the various business units of your organization and also of your suppliers and partners.Multitel's multiservice network guarantees greater eectiveness in your company's internal communications by interconnecting the various facilities in a private data, voice and Interne communication network in a QoS and security environment, combined with an ecient service structure capable of clarifying in your queries and meet your needs.",
  };

  return (
    <>
      <LandingPage>
        <div className="row">
          <div id="imgbnr">
            <div id="head_bannner">
              <h1>Telecommunication</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-6 col-4 bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                  <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                    Telecommunication
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <Telecom data={obj} />
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Telecommunication;
