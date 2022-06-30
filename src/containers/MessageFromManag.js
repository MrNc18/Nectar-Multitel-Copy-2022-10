import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from "react-router-dom";
import { getMsgMissionSusBySlug } from "../services/WhoWeAreFront";

import Message from "../components/atoms/Message";

const MessageFromManag = () => {
  const [messageFromManager, setMessageFromManager] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    (async () => {
      const response = await getMsgMissionSusBySlug({ slug: params?.slug });
      console.log("messageFromManager data", response);
      setMessageFromManager(response?.data?.data);
    })();
  }, [params?.slug]);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title=" Message from  Management" />
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
