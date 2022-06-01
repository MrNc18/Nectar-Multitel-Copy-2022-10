import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import Message from "../components/atoms/Message";

const MessageFromManag = () => {
  function MessageFrom({ data }) {
    return (
      <div>
        <h2 style={{ color: "#1D3557" }} className="pt-5">
          {data.heading}
        </h2>

        <p className="pt-5">{data.description}</p>
      </div>
    );
  }

  const obj = {
    heading: "Message from Management",
    description:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  };
  return (
    <>
      <LandingPage>
        <ServiceBanner title=" Message from  Management" />
        <div className="container">
          <div className="row">
            <div className="col-12  col-6 col-4   ">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
                <Breadcrumb.Item active>
                 
                  Message from Management
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="row">
            <div className="col-12  col-6 col-4  ">
              <MessageFrom data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MessageFromManag;
