import React from "react";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Digitotal = () => {
  function Digital({ data }) {
    return (
      <>
        <div>
          <div className="pt-5">
            <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
          </div>
          <div className="pt-2">
            <h6 style={{ color: "#1D3557" }}>{data.description1}</h6>
          </div>
          <div className="pt-2">
            <p style={{ fontSize: "13px" }}>{data.description2}</p>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "DIGITAL",
    description1:
      "Multitel focuses its activity on the corporate market, a sector in which it has deep knowledge and experience.",
    description2:
      "Your company's digital transformation starts here with MULTITEL DIGITOTAL SOLUTION. Multitel has been oering complete telecommunications services for over 20 years, and now with MULTITEL DIGITOTAL SOLUTION, we present solutions that perfectly fit your company's needs in terms of technology and information systems, making it more ecient and competitive in an increasingly more demanding and selective.",
  };

  return (
    <>
      <LandingPage>
        <div className="row">
          <div id="imgbnr">
            <div id="head_bannner">
              <h1>Digitotal</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Digitotal
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5    col-12 col-md-4"
              >
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
                <Digital data={obj} />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Digitotal;
