import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getMsgMissionSusBySlug } from "../services/WhoWeAreFront";
import { showAlert } from "../utils/showAlert";

const MessageFromManag = () => {
  const [messageFromManager, setMessageFromManager] = useState({});

  const handleAllMessage = async () => {
    const data = { slug: "management-message" };
    try {
      const resp = await getMsgMissionSusBySlug(data);
      console.log(resp);
      setMessageFromManager(resp && resp.data.data);
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
      <LandingPage woproducts>
        <ServiceBanner title=" Message from  Management" regnPage />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Message from Management
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="row">
            <div className="col-12  col-6 col-4  ">
              <div>
                <h2 style={{ color: "#1D3557" }} className="pt-5">
                  {messageFromManager?.name}
                </h2>

                <p className="pt-5">{messageFromManager?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MessageFromManag;
