import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { Breadcrumb } from "react-bootstrap";
import data from "../Data";

const Cpes = () => {
  function Cpes({ data }) {
    return (
      <>
        <div className="container">
          <div>
            <h2 className="pt-4">{data.heading}</h2>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading: "CPEs",
    description:
      "As a complement to Multitel's offerce of services,we provide CPE's (Router,Switches and other equipment)on a sale or rental basis  and we are responsible for their installation and configuration.we can extend the scope of our intervention. as an OMG-Operation, Maintenance and Management service, adpated to the Client's needs.Thus companies and organizations that do not  do not have a qualified technical team or specific know-how to carry out these activities can focus exclusively on their business.",
  };

  return (
    <LandingPage woproducts>
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
  );
};

export default Cpes;
