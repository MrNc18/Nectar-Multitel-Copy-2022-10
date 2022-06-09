import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { data } from "jquery";

const WhoWeAre = () => {
  function Whoweare({ data }) {
    return (
      <>
        <div className="container  pt-4">
          <div>
            <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
          </div>
          <div className=" pt-4">
            <p>{data.description1}</p>
          </div>
          <div>
              <p>
                  {data.description2}
              </p>
          </div>
          <div>
              <p>
                  {data.description3}
              </p>
          </div>
          <div>
              <p>
                  {data.description4}
              </p>
          </div>
          <div>
              <p>
                  {data.description5}
              </p>
          </div>
          <div>
              <p>
                  {data.description6}
              </p>
          </div>
          <div>
              <p>
                  {data.description7}
              </p>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Who We Are",
    description1:
      "MULTITEL Serviços de Telecomunicações, Lda, is an Angolan company, present in the market since 1999, is licensed by a concession contract to provide the public data communication service granted by INACOM and its main partners are PT Ventures (40%). Angola Telecom (30%) and BCI - Banco de Comércio e Indústria (20%).",
      description2:"It aims to offer business solutions to the satisfaction of business customers in terms of the needs of telecommunications services (data communication and Internet) and web services, which complements with consulting services, Maintenance, Operation, Management and also with the offer of customized solutions adapted to the specificity of each Client.",
    description3:"It is a company whose philosophy is based on a deep relationship with each client, in order to understand their real needs and support them in the search for solutions that best suit the evolution of their business or activities",
   description4:"It is strongly committed to the implementation of solutions that contribute to the success of its Customers, intending to become the reference company for the design, design, supply and management of business telecommunications solutions in Angola.",
   description5:"It has a qualified technical team with extensive experience, organized in a flexible structure and with a fast and efficient response capability,",
   description6:"In terms of evolution and technological capacity. Multitel is also supported by the knowledge, experience of its technological partners, who support when necessary, in business strategy. evolution and technological support: with local support (frequent availability of on-site specialists, for knowledge transfer and on-the-job training) and remote.",
   description7:"Multitel currently has a team of more than 100 employees and complements its potential resource needs by using local partners for installation and maintenance services.",



};
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Who We Are" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Who We Are
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <Whoweare data={obj} />
        </div>
      </LandingPage>
    </>
  );
};

export default WhoWeAre;
