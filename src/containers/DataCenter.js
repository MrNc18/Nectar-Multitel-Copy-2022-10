import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const DataCenter = () => {
  function Datacenter({ data }) {
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
            </ul>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Data Center And Cloud ",
    description:
      "Housing (PaaS), Hosting services and the entire set of Cloud-based solutions (IaaS and SaaS), such as Email, Backup and Storage, have a robust and modern security level based on the checkpoint solution. Weoer all the support you need in the migration and implementation process, which includes choosing the best solution based on your needs",
    heading2: "Benefits",
    tag1: "High Availability",
    tag2: "Scalability (scalable features)",
    tag3: "Support in setting the environment and migration",
    tag4: "Lower implementation and maintenance cost",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Data Center And Cloud" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Data Center And Cloud
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5  col-12 col-lg-4"
              >
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
              <div className=" pt-5 col-lg-8">
                <Datacenter data={obj} />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default DataCenter;
