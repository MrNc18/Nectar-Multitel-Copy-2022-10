import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Mission from "../components/atoms/Mission";

const MissionAndValue = () => {
  function MissionandVission({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }} className="pt-5">
            {data.heading1}
          </h2>

          <p className="pt-5">{data.description1}</p>
        </div>

        <div>
          <h5 style={{ color: "#3190C3" }} className="pt-4">
            {data.heading2}
          </h5>

          {/* <p  className="pt-4">{data.description2}</p> */}
          <div className="dotcol">
         <ul>
         <li>{data.list}</li>
            <li>{data.list1}</li>
            <li>{data.list2}</li>
            <li>{data.list3}</li>
            <li>{data.list4}</li>
         </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 style={{ color: "#3190C3" }} className="pt-4">
              {data.heading3}
            </h5>

            <p className="pt-4">{data.description3}</p>
          </div>
        </div>
        <div>
          <h5 style={{ color: "#3190C3" }} className="pt-4">
            {data.heading4}
          </h5>

          <p className="pt-4">{data.description4}</p>
          <p>{data.description5}</p>
          <p>{data.description6}</p>
          <p>{data.description7}</p>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Mission And Value",
    description1:
      "Multitel's mission is to contribute to digital inclusion and the development of ICTs in the market through innovative solutions and valuable experiences.",
    heading2: "Multitel values",
    list: "Innovation  ",
    list1: "Rigor",
    list2: "Proximity to customers  ",
    list3: "Innovation",
    list4: " Excellence ",
    list5: "Social Responsibilit ",

    heading3: "Our Vision",
    description3:
      "To be recognized as a provider of integrated services of excellence in Telecommunications, Technologies and information systems through relationships of trust with customers and partner ",
    heading4: "Our Team",
    description4:
      "Multitel is the competent, attentive and available partner that assumes with your company a commitment of total transparency and objectivity ",
    description5:
      "By choosing Multitel, you are not only enjoying a quality service, you are also receiving the support of a team of professionals with extensive experience in the market, who will be able to adviseyou on the definition that best suits your needs, support you with post -sales and guarantee low response times to installation and intervention requests.",
    description6:
      "Multitel has an organizational structure that has the necessary competitive conditions to guarantee an oer of solutions, products and services suited to market requirements, and with aconstant concern for the convergent increase in service quality levels",
    description7:
      "We have a technical team made up of professionals with training and proven experience in the market, which includes analysts, engineers and consultants with higher degrees in Web/IT andTelecommunications, in addition to specific training in the technologies, platforms and equipment that make up our infrastructures. and complementary specializations, in addition to the know-how, vast experience and support capacity provided by our partners.",
  };

  return (
    <>
      <LandingPage>
        <ServiceBanner title="Mission And Value" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Who We Are</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  {" "}
                  Mission And Value
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div className="col-12  col-6 col-4  ">
              <MissionandVission data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MissionAndValue;
