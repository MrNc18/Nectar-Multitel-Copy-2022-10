import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { data } from "jquery";

const Cpes = () => {
  function Cpes({ data }) {
    return (
      <>
        <div className="container ">
          <div>
            <h2 style={{ color: "#1D3557" }} className="pt-4">
              {data.heading1}
            </h2>
          </div>
          <div>
            <p className="pt-4">{data.description1}</p>
          </div>
          <div>
            <p>{data.description2}</p>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "CPEs",
    description1:
      "As a complement to Multitel's oer of services, we provide CPE's (Routers, Switches and other equipment) on a sale or rental basis and we are responsible for their installation and configuration.",
    description2:
      "We can extend the scope of our intervention, as an OMG - Operation, Maintenance and Management service , adapted to the Client's needs. Thus, companies or organizations that do not have aqualified technical team or specific know-how to carry out these activities can focus exclusively on their business.",
  };
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
          <Cpes data={obj} />
        </div>
      </LandingPage>
    </>
  );
};

export default Cpes;
