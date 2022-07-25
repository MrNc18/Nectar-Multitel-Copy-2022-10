import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getWho_teli_digiBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";

const Digitotal = () => {
  const [digitotal, setDigitotal] = useState({});

  const handleAllOmg = async () => {
    const data = { slug: "digitotal" };
    try {
      const resp = await  getWho_teli_digiBySlug(data);
      console.log(resp);
      setDigitotal(resp && resp.data.data);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllOmg();
  }, []);
  
  


  // function Digital({ data }) {
  //   return (
  //     <>
  //       <div>
  //         <div className="pt-5">
  //           <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
  //         </div>
  //         <div className="pt-2">
  //           <h6 style={{ color: "#1D3557" }}>{data.description1}</h6>
  //         </div>
  //         <div className="pt-2">
  //           <p style={{ fontSize: "13px" }}>{data.description2}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // const obj = {
  //   heading1: "DIGITAL",
  //   description1:
  //     "Multitel focuses its activity on the corporate market, a sector in which it has deep knowledge and experience.",
  //   description2:
  //     "Your company's digital transformation starts here with MULTITEL DIGITOTAL SOLUTION. Multitel has been oering complete telecommunications services for over 20 years, and now with MULTITEL DIGITOTAL SOLUTION, we present solutions that perfectly fit your company's needs in terms of technology and information systems, making it more ecient and competitive in an increasingly more demanding and selective.",
  // };

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
          <div>
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5  col-12 col-md-4"
              >
                <div>
                  <img
                    className="img-fluid"
                    height={250}
                    width={350}
                    src={imageUrl(digitotal.image)}
                    alt=""
                  />
                </div>
              </div>
              <div className=" pt-5 col-md-8">
                <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {digitotal?.title}
                </h4>
                <div className="pt-2">
             <h6 style={{ color: "#1D3557" }}>{digitotal.sub_description}</h6>
          </div>

                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html:digitotal.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};


          

export default Digitotal;