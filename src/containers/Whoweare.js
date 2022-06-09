import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { Breadcrumb } from "react-bootstrap";
import data from "../Data";

const Whoweare = () => {
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
    heading: "Who we are",
    description:
      " MULTITEL Serviços de Telecomunicações, Lda, is an Angolan company, present in the market since 1999, is licensed by a concession contract to provide the public data communication servicegranted by INACOM and its main partners are PT Ventures (40%), Angola Telecom (30%) and BCI - Banco de Comércio e Indústria (20%). It aims to offer  business solutions to the satisfaction of business customers in terms of the needs of telecommunications services (data communication and Internet) and web services, which  complements with consulting services, Maintenance, Operation, Management and also with the offer of customized solution adapted to the specificity of each Client It is a company whose philosophy is based on a deep relationship with each client, in order to understand their real needs and support them in the search for solutions that best suit the evolution of their business or activities  It is strongly committed to the implementation of solutions that contribute to the success of its Customers, intending to become the reference company for the design, design, supply and management of business telecommunications solutions in Angola. It has a qualified technical team with extensive experience, organized in a flexible structure and with a fast and efficient response capability In terms of evolution and technological capacity, Multitel is also supported by the knowledge, experience of its technological partners, who support when necessary, in business strategy,evolution and technological support: with local support (frequent availability of on-site specialists, for knowledge transfer and on-the-job training) and remote  Multitel currently has a team of more than 100 employees and complements its potential resource needs by using local partners for installation and maintenance services.",
  };

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Who we are" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-6 col-4 bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

              <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                Who we are
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <Cpes data={obj} />
      </div>
    </LandingPage>
  );
};

export default Whoweare;
