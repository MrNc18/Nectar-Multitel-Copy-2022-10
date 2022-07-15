import React, { useState, useEffect } from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { showAlert } from "../utils/showAlert";
import { getTelecommunicationBySlug } from "../services/TelecommunicationFront";

const VideoConference = () => {
  const [VideoConference, setVideoConference] = useState({});

  const handleAllVideoConference = async () => {
    const data = { slug: "video-conference" };
    try {
      const resp = await getTelecommunicationBySlug(data);
      console.log(resp);
      setVideoConference(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllVideoConference();
  }, []);

  // function Videoconference({ data }) {
  //   return (
  //     <>
  //       <div className="container">
  //         <div>
  //           <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
  //         </div>

  //         <div>
  //           <h5 style={{ color: "#278BC0" }} className="pt-4">
  //             {data.heading2}
  //           </h5>
  //         </div>
  //         <div>
  //           <p className="pt-2">{data.description1}</p>
  //           <p>{data.description2}</p>
  //         </div>
  //         <div>
  //           <h5 style={{ color: "#278BC0" }} className="pt-4">
  //             {data.heading3}
  //           </h5>
  //         </div>
  //         <div>
  //           <p className="pt-2">{data.description3}</p>
  //           <p>{data.description4}</p>
  //         </div>
  //         <div className="dotcol pl-2">
  //           <ul>
  //             <li> {data.tag1}</li>
  //             <li> {data.tag2}</li>
  //             <li> {data.tag3}</li>
  //             <li> {data.tag4}</li>
  //             <li> {data.tag5}</li>
  //           </ul>
  //         </div>
  //         <div style={{ color: "#278BC0" }} className="pt-4">
  //           <h2>{data.heading4}</h2>
  //         </div>
  //         <div className="dotcol pl-2">
  //           <ul>
  //             <li> {data.tag6}</li>
  //             <li> {data.tag7}</li>
  //             <li> {data.tag8}</li>
  //             <li> {data.tag9}</li>
  //             <li> {data.tag10}</li>
  //             <li> {data.tag11}</li>
  //             <li> {data.tag12}</li>
  //             <li> {data.tag13}</li>
  //           </ul>
  //         </div>
  //         <div style={{ color: "#278BC0" }} className="pt-4">
  //           <h2>{data.heading5}</h2>
  //         </div>
  //         <div className="pt-2">
  //           <p>{data.description5}</p>
  //         </div>
  //         <div>
  //           <p>{data.description6}</p>
  //         </div>
  //         <div>
  //           <p>{data.description7}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // const obj = {
  //   heading1: " Video Conference",
  //   heading2: " Video Conference",
  //   description1:
  //     "The Multitel Videoconference service allows the creation og a proximity envirinment for people from anywhere in the world,increasing corporate collaboration and making communicationmore efficient ",
  //   description2:
  //     "Your companay will be able to  hold  meeting remotely ,In reall time and at any time  og the day.In a world where anticipating market events is essential,travel time and limites budget  often condition physical presence.",
  //   heading3: "Video Conferencing Solution:",
  //   description3:
  //     "Video Conferencing - Video Conferencing  service via internet access",
  //   description4:
  //     "Multitel rent one or two  huawui-branded video confrencing terminals",
  //   tag1: "allows point to point connection",
  //   tag2: "it can be integrated into a point-multipoint  system",
  //   tag3: "Skype is not supported",
  //   tag4: "The system only image and voice",
  //   tag5: "STANDARD and  PROTOCOL",
  //   heading4: "Requirement (Client):",
  //   tag6: " Room with minimum technical conditions for holding the conference, namely with regard to sound and light conditions (outdoor light blocking conditions)",
  //   tag7: " Compatibility with the remote system with which communication is intended.",
  //   tag8: "Stabilized and rescued energy ",
  //   tag9: "Protective earth",
  //   tag10:
  //     "Internet access, with a minimum of 2 Mbps of stable, dedicated and symmetrical bandwidth",
  //   tag11: "RJ-45 / Fast Ethernet (FE) interface",
  //   tag12: " Fixed Public IP ",
  //   tag13: " Monitor, television screen, or projection system with HDMI ports",
  //   heading5: "Price:",
  //   description5: "Contact us by Email",
  //   description6: "Customer with multitel with have 15 % discount",

  //   description7: "Date and Time subject",
  // };

  return (
    <>
      <LandingPage>
        <ServiceBanner title="  Video Conference" regnPage />
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Video Conference
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          {/* <Videoconference data={obj} /> */}
          <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
            {VideoConference?.name}
          </h4>
          <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html: VideoConference?.description }} />
        </div>
      </LandingPage>
    </>
  );
};

export default VideoConference;
