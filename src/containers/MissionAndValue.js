import React, { useState, useEffect } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams } from "react-router-dom";
import { getMsgMissionSusBySlug } from "../services/WhoWeAreFront";

const MissionAndValue = () => {
  const [missionValues, setMissionValues] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    (async () => {
      const response = await getMsgMissionSusBySlug({ slug: params?.slug });
      console.log("missionValues data", response);
      setMissionValues(response?.data?.data);
    })();
  }, [params?.slug]);

  // function MissionandVission({ data }) {
  //   return (
  //     <>
  //       <div>
  //         <h2 style={{ color: "#1D3557" }} className="pt-5">
  //           {data.heading1}
  //         </h2>

  //         <p className="pt-5">{data.description1}</p>
  //       </div>

  //       <div>
  //         <h5 style={{ color: "#3190C3" }} className="pt-4">
  //           {data.heading2}
  //         </h5>
  //         <li>{data.list}</li>
  //         <li>{data.list1}</li>
  //         <li>{data.list2}</li>
  //         <li>{data.list3}</li>
  //         <li>{data.list4}</li>
  //       </div>
  //       <div>
  //         <div>
  //           <h5 style={{ color: "#3190C3" }} className="pt-4">
  //             {data.heading3}
  //           </h5>

  //           <p className="pt-4">{data.description3}</p>
  //         </div>
  //       </div>
  //       <div>
  //         <h5 style={{ color: "#3190C3" }} className="pt-4">
  //           {data.heading4}
  //         </h5>

  //         <p className="pt-4">{data.description4}</p>
  //       </div>
  //     </>
  //   );
  // }

  // const obj = {
  //   heading1: "Mission And Value",
  //   description1:
  //     "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
  //   heading2: "Multitel values",
  //   list: "Innovation  ",
  //   list1: "hghh",
  //   list2: "bxhs",
  //   list3: "bdhshd",
  //   list4: "jhjhu",

  //   heading3: "Our Vision",
  //   description3:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing Incidunt voluptates tur adipisicing elit. Incidunt voluptates dolor libero quis eligen",
  //   heading4: "Our Team",
  //   description4:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt voluptate consectetur adipisicing elit. Incidunt voluptates dolor ",
  // };

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
                <h2 style={{ color: "#1D3557" }} className="pt-5">
                  {missionValues?.name}
                </h2>

                <p className="pt-5">{missionValues?.description}</p>
              </div>

              <div>
                <h5 style={{ color: "#3190C3" }} className="pt-4">
                  {missionValues?.sub_heading}
                </h5>
                <li>{missionValues?.description_2}</li>
              </div>
              <div>
                <div>
                  <h5 style={{ color: "#3190C3" }} className="pt-4">
                    {missionValues?.sub_heading2}
                  </h5>

                  <p className="pt-4">{missionValues?.description_2}</p>
                </div>
              </div>
              <div>
                <h5 style={{ color: "#3190C3" }} className="pt-4">
                  {missionValues?.sub_heading2}
                </h5>

                <p className="pt-4">{missionValues?.description_3}</p>
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default MissionAndValue;
