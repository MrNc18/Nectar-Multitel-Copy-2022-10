import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Otherservices = () => {
  const navigate = useNavigate();

  function Otherservice({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
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
    heading1: "Other Services",
    description:
      "Supported by experienced professionals and qualified partners, Multitel can help you in the design, development, operation and management of the most appropriate solution for your business",
    heading2: "In this context, it also offers the following services",
    tag: "OMG - Operation, Maintenance and Management",
    tag1: " Special Projects",
    tag2: " Consultancy",
    tag3: "outsourcing",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Other Services" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >
                  Other Services
                </Breadcrumb.Item>
              </Breadcrumb>

              <NavDropdown title="Select Service" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() =>
                    navigate("/omg", {
                      state: {
                        title: "OMG",
                        slug: "OMG",
                      },
                    })
                  }
                >
                
                
                OMG</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/specialservices", {
                      state: {
                        title: "Special Services",
                        slug: "Special Services",
                      },
                    })
                  }
                >
                  Special Services
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() =>
                    navigate("/customizedsolutions", {
                      state: {
                        title: "Customized Solutions",
                        slug: "Customized Solutions",
                      },
                    })
                  }
                >

                Customized Solutions</NavDropdown.Item>
                <NavDropdown.Item onClick={() =>
                    navigate("/outsourcing", {
                      state: {
                        title: "/OutSourcing",
                        slug: "/OutSourcing",
                      },
                    })
                  }
                >

                Outsourcing</NavDropdown.Item>
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
              <Otherservice data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Otherservices;
