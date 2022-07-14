import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";

const CustomizedSolutions = () => {
  function CustomizedSolution({ data }) {
    return (
      <>
      <div >
        <div >
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Customized Solutions",
    description:
      "Turnkey or turnkey solutions may include study or analysis, project design, specifications, implementation coordination and training.In a turnkey solution, the teams on the ground, suppliers and other partners are coordinated by a specific team from Multitel, and the follow-up with the Customer is carried out through meetings to discuss the  situation and the provision of periodic reports from the evolution of the project, until its conclusion and acceptance by the Client."
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Customized Solutions"/>
        <section id=""></section>

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item >Start</Breadcrumb.Item>

                <Breadcrumb.Item >Digital</Breadcrumb.Item>
                <Breadcrumb.Item > Other Sercives</Breadcrumb.Item>
                <Breadcrumb.Item >Special Services </Breadcrumb.Item>

                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >
                  Customized Solutions
                </Breadcrumb.Item>
              </Breadcrumb>

              <NavDropdown title="Select Service" id="basic-nav-dropdown">
                <NavDropdown.Item>OMG</NavDropdown.Item>

                <NavDropdown.Item>Special Services</NavDropdown.Item>
                <NavDropdown.Item   style={{ color: "#0C7CB8" }} >  Customized Solutions</NavDropdown.Item>


                <NavDropdown.Item>Outsourcing</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
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
              < CustomizedSolution data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default CustomizedSolutions;
