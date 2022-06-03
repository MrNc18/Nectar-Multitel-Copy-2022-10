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
      "AS a complement to Multitel's offerce of services,we provide CPE's (Router,Switches and other equipment)",
    description2: "WE Can extend the scope of our intervention",
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
