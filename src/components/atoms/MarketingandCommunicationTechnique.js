import React, { useState, useEffect } from "react";
import RecruitmentForm from "./RecruitmentForm";
import { getAllRecruitment } from "../../services/WhoWeAreFront";
import { showAlert } from "../../utils/showAlert";


function MarketingandCommunicationTechnique() {

  const [marketing, setMarketing] = useState([]);

  const handleAllRequirement = async () => {
    try {
      const resp = await getAllRecruitment();
      console.log(resp);
      setMarketing(resp && resp.data);
      console.log("catreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllRequirement();
  }, []);


  function MarketingTechnique({ data }) {
    return (
      <>
        <div className="container pt-5" style={{ backgroundColor: "#F6F6F6" }}>
        <div>
            {marketing &&
              marketing.map((item) => (
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

  const obj = {
    heading: "Marketing and Communication Technique",
    description1: "Graphic Designer - Ref . MTL_01DG.2021",
    description2: "Requirements - Graphic Designer",
    list1: "- Over 18 years of age",
    list2: " - Creative, Committed and Dynamic",
    list3: " - Mastery of the Adobe software package (Photoshop, Indesigns, Illustrator and Premier)",
    list4: "- Basics of Branding and Digital Marketing.",
    list5: "- Portfolio presentation. ",
    description3:
      "Description of Functions",
      list6: "- Conceptualize visual elements based on business requirements",
      list7: " - Create images and layouts manually or through design software",
      list8: "- Create and test graphics for different media",
    description4:"Interested parties must send their CV and the reference of the vacancy in which they are applying to the email candidacy@multitel.co.ao until October 20, 2021"
     

  }

  return (
    <>
      <div className="container">
        <div className="row"></div>

        <div>
          <MarketingTechnique data={obj} />
        </div>
      </div>
    </>
  );
}

export default MarketingandCommunicationTechnique;
