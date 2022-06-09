import React from "react";
import LandingPage from "../LandingPage";
import ServiceBanner from "./ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from "./DropDown";

const OMG = () => {
  function Omg({ data }) {
    return (
      <>
     <div className="container">
     <div className="mt-5 pt-5">
          <div>
            <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
          </div>
          <div>
            <p className="pt-2">{data.description1}</p>
          </div>
        </div>

        <div className="row pt-5 ">
        <div style={{ display: "flex" }} className=" col-12 col-md-4">
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
            <div className="col-12 col-md-8">
               <h2>
               {data.heading2}
               </h2>
            </div>
        </div>
     </div>
      </>
    );
  }

  const obj = {
    heading1: "    OMG",
    description1:
      " This service comprises a set of Operation, Maintenance and Management activities to be carried out by Multitel in terminal equipment (CPE's), in   post-sales or post-installation conditions, after the initial startup.",
    heading2:"OMG - Operation Maintenance and Management"
     
    };
  return (
    <>
      <LandingPage>
        <ServiceBanner title="OMG" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Digital</Breadcrumb.Item>
                <Breadcrumb.Item href="#"> Other Services</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  OMG
                </Breadcrumb.Item>
                <DropDown />
              </Breadcrumb>
            </div>
          </div>
          <div>
            <Omg data={obj} />
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OMG;
