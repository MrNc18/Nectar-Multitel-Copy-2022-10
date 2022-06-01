import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Mission from "../components/atoms/Mission";

const MissionAndValue = () => {

  function MissionandVission({ data }) {
    return (
     <>
      <div>
        <h2 style={{ color: "#1D3557"  }} className="pt-5">{data.heading1}</h2>

        <p  className="pt-5">{data.description1}</p>
      </div>
      
      <div>
        <h5 style={{ color:'#3190C3' }}  className="pt-4">{data.heading2}</h5>

        {/* <p  className="pt-4">{data.description2}</p> */}
        <li>
        {data.list}
        </li>
        <li>
        {data.list1}
        </li>
        <li>
        {data.list2}
        </li>
        <li>
        {data.list3}
        </li>
        <li>
        {data.list4}
        </li>
      </div>
      <div>
      <div>
        <h5 style={{ color:'#3190C3' }}  className="pt-4">{data.heading3}</h5>

        <p  className="pt-4">{data.description3}</p>
      </div>
      </div>
      <div>
        <h5 style={{ color:'#3190C3' }}  className="pt-4">{data.heading4}</h5>

        <p  className="pt-4">{data.description4}</p>
      </div>
      
 
     </>
    );
  }


  const obj = {
    heading1: "Mission And Value",
    description1:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
   heading2:"Multitel values",
   list:"Innovation  ",
   list1: "hghh",
   list2:"bxhs",
   list3:"bdhshd",
   list4:"jhjhu",
   
   heading3:"Our Vision",
   description3:"Lorem ipsum dolor sit amet consectetur adipisicing Incidunt voluptates tur adipisicing elit. Incidunt voluptates dolor libero quis eligen",
   heading4:"Our Team",
   description4:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt voluptate consectetur adipisicing elit. Incidunt voluptates dolor ",
  }


  return (
    <>
      <LandingPage>
        <ServiceBanner title="Mission And Value" />
        <div className="container">
          <div className="row"  >
          <div className="col-12 col-6 col-4">
          <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

              <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
              <Breadcrumb.Item active> Mission And Value</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          </div>
          <div className="row">
          <div className="col-12  col-6 col-4  ">
            <MissionandVission  data={obj}  />
          </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MissionAndValue;
