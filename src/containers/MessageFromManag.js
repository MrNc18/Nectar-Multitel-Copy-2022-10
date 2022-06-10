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

        <div><p className="pt-5">{data.description1}</p></div>
        <div><p  >{data.description2}</p></div>
        <div><p  >{data.description3}</p></div>
        <div><p  >{data.description4}</p></div>
        <div><p  >{data.description5}</p></div>
      </div>
    );
  }

  const obj = {
    heading: "Message from Management",
    description1:
      "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
    description2:"Today more than yesterday we are committed to looking more holistically at the market with a focus on customer needs, and we embrace with great responsibility the trust placed in us.",
    description3:"The results delivered in the last two decades have always been a consequence of the actions of our teams, which will always be reflected in our priority of investing in the valorization and development of our human capital, with a view to responding to the real needs and highest expectations of our customers providing them with unique experiences.",
  description4:"At Multitel, customer focus and continuous improvement at an individual and collective level are without a doubt a huge and fun challenge, and we have been working with this spirit over time. ",
  description5:"We have a strong and united young team, dedicated to building trusting relationships with all stakeholders in the telecommunications and information technology sector.",
    };
  return (
    <>
      <LandingPage>
        <ServiceBanner title=" Message from  Management" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
                <Breadcrumb.Item active style={{color:"#0C7CB8"}}>
                 
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
