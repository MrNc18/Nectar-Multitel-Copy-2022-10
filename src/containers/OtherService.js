import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from "../components/atoms/DropDown";

const OtherService = () => {


    function Otherservice({data}){
        return(
            <>
            
         <div className="mt-5">
         <div>
                <h2>
                    {data.heading1}
                </h2>
            </div>
            <div>
                <p className="pt-2">
                    {data.description}
                </p>
            </div>
            <div>
                <h6>
                    {data.heading2}
                </h6>
            </div>
            <div  className="dotcol">
                <ul>
                    <li>{data.tag1}</li>
                    <li>{data.tag2}</li>
                    <li>{data.tag3}</li>
                    <li>{data.tag4}</li>
                </ul>
            </div>
         </div>
            </>
        )
    }  

    const obj ={
        heading1:"  Other Services",
        description:"   Supported by experienced professionals and qualified partners, Multitel can help you in the design, development, operation and management of the most appropriate solution for your business",
        heading2:"In this context, it also offer the following service",
        tag1:"OMG - Operation, Maintenance and Management",
        tag2:"Special Projects",
        tag3:"Consultancy ",
        tag4:"outsourcing",
    
    }

  return (
    <>
      <LandingPage>
        <ServiceBanner title="Other Services" />
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Digital</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Other Services
                </Breadcrumb.Item>
              <DropDown />
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
              <Otherservice data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default OtherService;
