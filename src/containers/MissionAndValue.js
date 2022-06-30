import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { getMsgMissionSusBySlug } from "../services/WhoWeAreFront";
import { showAlert } from "../utils/showAlert";

const MissionAndValue = () => {
  const [missionValues, setMissionValues] = useState({});
 
  const handleAllMessage = async () => {
    const data = { slug: "sustainability" };
    try {
      const resp = await getMsgMissionSusBySlug(data);
      console.log(resp);
      setMissionValues(resp && resp.data.data);
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
              <div>
                <h2 style={{ color: "#1D3557" }} className="pt-3">
                  {missionValues?.name}
                </h2>

                <p className="pt-3">{missionValues?.description}</p>
              </div>

              <div>
                <h5 style={{ color: "#3190C3" }} className="pt-3">
                  {missionValues?.sub_heading}
                </h5>
                {missionValues && missionValues?.message_tags?.map((item) => (
                  <li>{item?.name}</li>
                ))}
              </div>
              <div>
                <div>
                  <h5 style={{ color: "#3190C3" }} className="pt-3">
                    {missionValues?.sub_heading_2}
                  </h5>

                  <p className="pt-3">{missionValues?.description_2}</p>
                </div>
              </div>
              <div>
                <h5 style={{ color: "#3190C3" }} className="pt-3">
                  {missionValues?.sub_heading_3}
                </h5>

                <p className="pt-3">{missionValues?.description_3}</p>
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MissionAndValue;
