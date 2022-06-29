import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getWho_teli_digi_bySlug } from "../services/WhoWeAreFront";
import { showAlert } from "../utils/showAlert";
import { data } from "jquery";

const WhoWeAre = () => {
  const [whoWeAre, setWhoWeAre] = useState({});

  const handleAllMessage = async () => {
    const data = { slug: "who-we-are" };
    try {
      const resp = await getWho_teli_digi_bySlug(data);
      console.log(resp);
      setWhoWeAre(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllMessage();
  }, []);

  return (
    <>
      <LandingPage>
        <ServiceBanner title="Who We Are" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Who We Are
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <h2 style={{ color: "#1D3557" }} className="pt-3">
                {whoWeAre?.title}
              </h2>
              <p className="pt-3">{whoWeAre?.description}</p>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default WhoWeAre;
