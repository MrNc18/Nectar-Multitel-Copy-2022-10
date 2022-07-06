import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavDropdown } from "react-bootstrap";

const OMG = () => {
  function Omgs({ data }) {
    return (
      <>
       <div className="row pt-5">
          <div>
            <h2  style={{ color: "#1D3557" }}>
              {data.heading1}
            </h2>
          </div> 
          <div>
            <p>{data.description1}</p>
          </div>
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
            <div>
              <h2 style={{ color: "#1D3557" }}>{data.heading2}</h2>
            </div>
            <div>
              <p>{data.description2}</p>
            </div>
            <div>
              <h6 style={{ color: "#1D3557" }}>{data.heading3}</h6>
            </div>
            <div className="dropdown1">
              <ul>
                <li>{data.tag}</li>
                <li>{data.tag1}</li>
                <li>{data.tag2}</li>
                <li>{data.tag3}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-5">
        <div className=" pt-5 col-md-8">
            <div>
              <h2 style={{ color: "#1D3557" }}>{data.heading4}</h2>
            </div>
            <div>
              <p>{data.description4}</p>
            </div>
            <div>
              <h6 style={{ color: "#1D3557" }}>{data.heading5}</h6>
            </div>
            <div className="dropdown1">
              <ul>
                <li>{data.tag6}</li>
                <li>{data.tag7}</li>
                <li>{data.tag8}</li>
                <li>{data.tag9}</li>
              </ul>
            </div>
          </div>
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
          </div>
          
        

    
        
      </>
    );

  }

  const obj = {
    heading1: "OMG",
    description1:
      "This service comprises a set of Operation, Maintenance and Management activities to be carried out by Multitel in terminal equipment (CPE's), in post-sales or post-installation conditions, after the initial startup.",
    heading2: "OMG - Operation Maintenance and Management",
    description2:
      "The most comprehensive OMG service and can include a set of Operation, Maintenance and Management activities, to be developed by Multitel in terminal equipment (CPE's) in post-sale or post-installation condition, after the initial startup.",
    heading3: "Benefits",
    tag: "Multitel specialists are responsible for the technical aspects associated with Operation, Maintenance and Management ;",
    tag1: " Adequate and timely response;",
    tag2: " Service quality; ",
    tag3: "Proactive supervision of the installed telecommunications solution (Option)",
    heading4:"OML - Light Operation and Maintenance",
    description4:"The Light Operation and Maintenance service, commercially known as OML, refers to the set of maintenance activities provided by Multitel in terminal equipment (CPE's) in post-sale or post-installation condition.After the initial start-up, the Operation/Management and Supervision of the equipment will be the responsibility of the Customer.",
    heading5:"Benefits",
    tag6:"Multitel is responsible for the technical aspects of CPE's Maintenance;",
    tag7:"Adequate and timely response; ",
    tag8:"Service quality;",
    tag9:"The Customer has absolute control over the CPE's."
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="OMG" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item> Other Sercives</Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  style={{ color: "#0C7CB8", fontWeight: "600" }}
                >
                  OMG
                </Breadcrumb.Item>
              </Breadcrumb>

              <NavDropdown title="Select Service" id="basic-nav-dropdown">
                <NavDropdown.Item style={{ color: "#0C7CB8" }}>
                  OMG
                </NavDropdown.Item>
                <NavDropdown.Item>Special Services</NavDropdown.Item>
                <NavDropdown.Item>Outsourcing</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>
          </div>

          <Omgs data={obj} />
        </div>
      </LandingPage>
    </>
  );
};

export default OMG;
