import React, { useState, useEffect } from "react";
import RecruitmentForm from "./RecruitmentForm";
import { getAllRecruitment } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";

const GraphicDesigner = () => {
  const [graphicDesgn, setGraphicDesgn] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllRecruitment();
      console.log(resp);
      setGraphicDesgn(resp && resp.data);
      console.log("catreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  function Graphicdesign() {
    return (
      <>
        <div className="container " style={{ backgroundColor: "#F6F6F6" }}>
          <div>
            {graphicDesgn &&
              graphicDesgn.map((item) => (
                <>
                  <h2 className="pt-4" style={{ color: "#1D3557" }}>
                    {item.recruitment_heading}
                  </h2>
                  <h6 className="pt-2">{item.description_heading}</h6>
                  <h6 className="pt-4">{item.description}</h6>
                  <p className="pt-2">{item.sub_description}</p>
                </>
              ))}
          </div>
          <div>
            <RecruitmentForm />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row"></div>
        <Graphicdesign />
      </div>
    </>
  );
};

export default GraphicDesigner;
