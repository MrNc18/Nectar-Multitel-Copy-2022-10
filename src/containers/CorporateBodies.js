import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCorporate } from "../services/WhoWeAreFront";
const CorporateBodies = () => {
  const [GetCorporate, setGetCorporate] = useState({});
 const params = useParams();
  console.log(params);
  useEffect(() => {
    (async () => {
      const response = await getCorporate({ slug: params?.slug });
      console.log("CorporateBySlug", response);
      setGetCorporate(response?.data);
    })();
  }, [params?.slug]);
  console.log("All corp cat", GetCorporate);

 
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Corporate Bodies And  Corporate Composition" regnPage />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Corporate Bodies And Corporate Composition
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="row">
            <div className="col-12  col-6 col-4  ">
              <h2 style={{ color: "#1D3557" }} className="pt-4">
                Corporate Bodies And Corporate Composition
              </h2>
              {/* <CorporateBody data={obj} /> */}
              <div>
                {GetCorporate.length &&
                  GetCorporate.map((persons) => {
                    return (
                      <>
                        <div>
                          <div>
                            <h5 style={{ color: "#3190C3" }} className="pt-5">
                              {persons?.corporate_category?.name}
                            </h5>
                          </div>
                          <div className="row  pt-4">
                            <div className="col-12  col-md-4">
                              <h6 style={{ fontSize: "13px" }}>
                                {" "}
                                {persons?.Name}
                              </h6>
                            </div>
                            <div className="col-12  col-md-4  ">
                              <h6 style={{ fontSize: "13px" }}>
                                {" "}
                                {persons?.description}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      
    </LandingPage>
    </>
  );
};

export default CorporateBodies;