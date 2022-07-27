import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getWho_teli_digiBySlug } from "../services/DigitotalFront";
import { imageUrl } from "../services/category";
const Digitotal = () => {
  const [digital, setDigital] = useState({});

  const handleAlldigital = async () => {
    const data = { slug: "digitotal" };
    try {
      const resp = await getWho_teli_digiBySlug(data);
      console.log(resp);
      setDigital(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAlldigital();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <section className="digitotal">
          <h1 className="white-color text-center" style={{marginRight:"80px"}}>Digitotal</h1>
        </section>
     
        <div className="container mb-5 ">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>

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
                <div>
                  <img
                    className="img-fluid"
                    height={250}
                    width={350}
                    src={imageUrl(digital?.image)}
                    alt=""
                  />
                </div>
              </div>

              <div className=" pt-5  col-md-8 ">
                <h2 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {" "}
                  {digital?.title}
                </h2>
                <h6 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {digital?.sub_description}
                </h6>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: digital?.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default Digitotal;
