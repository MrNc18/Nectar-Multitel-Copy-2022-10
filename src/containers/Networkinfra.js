import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Networkinfra = () => {
  function Networkinfrasturcture({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#3190C3" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h6 style={{ color: "#3190C3" }}>{data.heading2}</h6>
        </div>
        <div>
          <li>{data.list}</li>
          <li>{data.list1}</li>
          <li>{data.list2}</li>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Network Infrastructure",
    description: "dfdfjdjh dbfdf h",
    heading2: "Services",
    list: "structures cabling",
    list1: "sdjkshdjsh",
    list2: "nddjjd",
  };

  return (
    <>
      <LandingPage>
        <ServiceBanner title="Network Infrastructure" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 c0l-4">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active>
                  Network Infrastructure{" "}
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
                alt="image here"
                srcset=""
              />
              </div>

              <div className=" pt-5  col-md-8 ">
                <Networkinfrasturcture data={obj} />
              </div>
            </div>
           
        </div>
      </LandingPage>
    </>
  );
};

export default Networkinfra;
