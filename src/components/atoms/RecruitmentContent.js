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
                <div className="row">
                  <div style={{ display: "flex" }} className="col-md-4 mb-5">
                    <img
                      className="img-fluid"
                      height={250}
                      width={300}
                      style={{ borderRadius: "10px" }}
                      src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                      alt="image here"
                      srcset=""
                    />
                  </div>
                  <div className="col-md-8 mb-5">
                    <RecruitmentForm />
                  </div>
                </div>
              </>
            ))}
        </div>
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
