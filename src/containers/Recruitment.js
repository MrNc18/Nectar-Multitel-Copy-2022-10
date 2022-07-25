import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Nav,
  Breadcrumb,
  Tab,
  Accordion,
} from "react-bootstrap";
import Commercial from "../components/atoms/Commercial";
import GraphicDesigner from "../components/atoms/GraphicDesigner";

import RecruitmentContent from "../components/atoms/RecruitmentContent";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import MarketingandCommunicationTechnique from "../components/atoms/MarketingandCommunicationTechnique";
import { getAllRec } from "../services/Phase_2/WhoWeR";
import { showAlert } from "../utils/showAlert";
import { getAllApprovedCms } from "../services/category";
import ApplyJobModal from "../components/ApplyJobModal";

function Recruitment() {
  const [recruitment, setRecruitment] = useState([]);
  const [iniText, setIniText] = useState("Loading..");
  const [showApplyModal, setShowApplyModal] = useState()

  const handleAllRec = async () => {
    try {
      const resp = await getAllRec();
      setRecruitment(resp && resp.data);
      !resp?.data?.length && setIniText("No open positions available now.");
      console.log("catreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRec();
  }, []);

  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Recruitment" regnPage />
        <Container className="mb-5">
          <div className="bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Who We Are</Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: "#0076B5" }}>
                Recruitment
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div  className="container">
            <div id="accordion" className="accordion">
              <div className="card mb-0">
                {recruitment?.length ? recruitment?.map((item) => (
                  <div key={item?.id} className="accordion_box">
                    <div
                      className="card-header collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href={`#collapse${item?.id}`}
                    >
                      <a className="card-title">{item?.recruitment_category?.name}</a>
                    </div>
                    <div
                      id={`collapse${item?.id}`}
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <GraphicDesigner role={item} />
                      </div>
                    </div>
                  </div>
                )) : (
                  <p>{iniText}</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <div className="form-group">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setShowApplyModal(true)}
              >
                Apply for job
              </button>
            </div>
          </div>
        </Container>
      </LandingPage>
      {showApplyModal && (
        <ApplyJobModal
          show={showApplyModal}
          handleClose={() => setShowApplyModal(false)}
          recruitment={recruitment}
        />
      )}
    </>
  );
}

export default Recruitment;
