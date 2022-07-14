import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Digital = () => {
  const navigate = useNavigate();

  function Digitals({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
        </div>
        <div>
          <p>{data.discreption}</p>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Digital",
    heading2:
      "Multitel focuses its activity on the corporate market, a sector in which it has deep knowledge and experience.",
    discreption:
      " Your company's digital transformation starts here with MULTITEL DIGITOTAL SOLUTION. Multitel has been offering complete telecommunications services for over 20 years, and now with MULTITEL DIGITOTA SOLUTION, we present solutions that perfectly fit your company's needs in terms of technology and information systems, making it more efficient and competitive in an increasingly more demanding and selective.",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Digitotal" />
       <section id="inner_banner"></section>
        <div className="container">
     
           
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >
                  Digital
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
              <Digitals data={obj} />
            </div>
          </div>
          </div>
      
      </LandingPage>
    </>
  );
};

export default Digital;
