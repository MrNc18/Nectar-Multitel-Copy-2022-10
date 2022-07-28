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

  
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="  Video Conference" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="telecommunication">Start</Breadcrumb.Item>

                <Breadcrumb.Item href="telecommunication">Telecommunications</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Video Conference
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          {/* <Videoconference data={obj} /> */}
       <div className="container">
       <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
            {VideoConference?.name}
          </h4>
          <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html: VideoConference?.description }} />
       </div>
        </div>
      </LandingPage>
    </>
  );
};

export default VideoConference;
