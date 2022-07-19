import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Networkinfra = () => {
  function Networkinfrastructure({ data }) {
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
              <li>{data.tag4}</li>
              <li>{data.tag5}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Network Infrastructure",
    description:
      "In view of the challenges and complexity in the implementation and maintenance of companies' network infrastructure, Multitel's Network Infrastructure service adapts perfectly to their needs, with solutions ranging from basic installations of network points to complex projects. of IT infrastructure.",
    heading2: "Services",
    tag1: "structures cabling",
    tag2: "Rack Reorganization",
    tag3: "Identification and Certification of network points",
    tag4: "Installation and maintenance of fiber optic networks",
    tag5: "WIFI networks (Access Points and Repeaters)",
  };

  return (
    <>
      <LandingPage  woproducts>
        <ServiceBanner title="Network Infrastructure" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 c-ol-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Network Infrastructure
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-lg-4">
              <img
                className="img-fluid"
                height={250}
                width={350}
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                alt="image here"
                srcset=""
              />
            </div>

            <div className=" pt-5  col-md-8 ">
              <Networkinfrastructure data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Networkinfra;
