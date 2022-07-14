import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const OutSourcing = () => {
  const navigate = useNavigate();

  function OutSource({ data }) {
    return (
      <>
      <div className="mt-4">
        <div>
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        </div>
        
        <div className="dropdown1">
          <ul>
            <li>{data.tag}</li>
            <li>{data.tag1}</li>
            <li>{data.tag2}</li>
            <li>{data.tag3}</li>
          </ul>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "OutSourcing",
    description:
   " This service offering covering  areas of Telecom and IT/Si by Multitel is a cost-effictive  way for small and medium-sized companies to overcome the lack of specialized internal resources. Multitel's Outsourcing plans are simple, scalable and provide greater peace of mind for Customers with:",
    
    tag: "Cost reduction",
    tag1: "Specialized support",
   tag2: "  Improve management",
    tag3: "Increased  efficiency and agility",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="OutSourcing" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item >Start</Breadcrumb.Item>

                <Breadcrumb.Item>Digital</Breadcrumb.Item>
               
                <Breadcrumb.Item >   Other Services</Breadcrumb.Item>

                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >Outsourcing
                 
                </Breadcrumb.Item>
              </Breadcrumb>

              <NavDropdown title="Select Service" id="basic-nav-dropdown">
                <NavDropdown.Item>OMG</NavDropdown.Item>
                <NavDropdown.Item>
                
                  Special Services
                </NavDropdown.Item>
                
                <NavDropdown.Item    style={{ color: "#0C7CB8",  }}>Outsourcing</NavDropdown.Item>
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
              < OutSource data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OutSourcing;
