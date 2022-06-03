import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const VSAT = () => {
  function Vsat({ data }) {
    return (
      <>
       <div className="container">
       <div >
          <h2>{data.heading1}</h2>
        </div>
        <div>{data.description}</div>
        <div>
          <h6 className="pt-4">{data.heading2}</h6>
        </div>
        <div className="pl-3 dotcol">
            <ul>
            <li>{data.tag1}</li>
          <li>{data.tag2}</li>
          <li>{data.tag3}</li>
          <li>{data.tag4}</li>
          <li>{data.tag5}</li>
            </ul>
       
        </div>
        <div>
          <h6 className="pt-4">{data.heading3}</h6>
        </div>
        <div  className="pl-3 dotcol">
           <ul>
           <li>{data.stag1}</li>
            <li>{data.stag2}</li>
           </ul>
        </div>
       </div>
      </>
    );
  }

  const obj = {
    heading1: "VSAT",
    description:
      "scsdhsjhgcjgghg jhjhfhdwhuihrhxchjwehjdhh heijhiriuh cjhihewuidhweui",
    heading2: "Platform Features:",
    tag1: "chsgsgdf",
    tag2: "chsgsgdf",
    tag3: "chsgsgdf",
    tag4: "chsgsgdf",
    tag5: "chsgsgdf",
    heading3: "Service",
    stag1: "chsgsgdf",
    stag2: "chsgsgdf",
  };

  return (
    <>
      <LandingPage>
        <ServiceBanner title="VSAT" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  VSAT
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <Vsat data={obj} />
        </div>
      </LandingPage>
    </>
  );
};

export default VSAT;
