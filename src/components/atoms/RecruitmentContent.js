import React, { useState, useEffect } from "react";
import RecruitmentForm from "./RecruitmentForm";
import { getAllRecruitment } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";

function RecruitmentContent() {
  const [recruitment, setRecruitment] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllRecruitment();
      console.log(resp);
      setRecruitment(resp && resp.data);
      console.log("catreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  function Recruitcontent({ data }) {
    return (
      <>
        <div className="container">
          <div>
            {recruitment &&
              recruitment.map((item) => (
                <>
                  <h2 className="pt-4" style={{ color: "#1D3557" }}>
                    {item.recruitment_heading}
                  </h2>
                  <p>{item.description_heading}</p>
                </>
              ))}
          </div>
          <RecruitmentForm />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="">
            <Recruitcontent />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruitmentContent;
