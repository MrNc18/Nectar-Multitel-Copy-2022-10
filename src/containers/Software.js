import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Software = () => {
  function Software({ data }) {
    return (
      <>
        <div className="pt-4">
          <div>
            <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
          <div>
            <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
          </div>
          <div className="dotcol">
            <ul>
              <li>{data.tag1}</li>
              <li>{data.tag2}</li>
              <li>{data.tag3}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Software",
    description:
      "In view of the high competitiveness and dynamism of the market, companies need to be equipped withinformation systems that allow them to better respond to market needs (ERPs, CRMs and others). Inaddition to the dierent pre-conceived business management systems, Multitel also oers customized software development that guarantee the simplification and automation of specific processes, whether internal or external.",
    heading2: "Custom software goals",
    tag1: "Reduction of production costs and errors",
    tag2: "Systems adapted to the company's realit",
    tag3: "Flexible and user-friendly systems",
  };
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Software" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Software
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-md-4">
              <img
                className="img-fluid"
                height={250}
                width={350}
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                alt=""
                srcset=""
              />
            </div>
            <div className=" pt-5 col-md-8">
              <Software data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Software;
