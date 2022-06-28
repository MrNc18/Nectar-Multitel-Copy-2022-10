import React, { useState, useEffect } from "react";
import RecruitmentForm from "./RecruitmentForm";
import { getRecruitmentByCategory } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";

function Commercial() {
  const [commercial, setCommercial] = useState([]);

  const handleAllRequirement = async () => {
    const data = {slug: "marketing"}
    try {
      const resp = await getRecruitmentByCategory(data);
      console.log(resp.data.data);
      setCommercial(resp && resp.data.data);
      // console.log("catreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);

  function Commerce() {
    return (
      <>
        <div className="container" style={{ backgroundColor: "#F6F6F6" }}>
          <div>
            {console.log(commercial, "resp")}
            {commercial &&
              commercial.recruitments.map((item) => (
                <>
                  <h2 className="pt-4" style={{ color: "#1D3557" }}>
                    {item.recruitment_heading}
                  </h2>
                  <p>{item.description_heading}</p>
                  <p>{item.description}</p>
                  <p>{item.sub_description}</p>
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

        <div>
          <Commerce />
        </div>
      </div>
    </>
  );
}

export default Commercial;
