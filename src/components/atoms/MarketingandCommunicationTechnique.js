import { data } from "jquery";
import React from "react";

import RecruitmentForm from "./RecruitmentForm";

function MarketingandCommunicationTechnique() {
  function MarketingTechnique({ data }) {
    return (
      <>
        <div className="container pt-5" style={{ backgroundColor: "#F6F6F6" }}>
          <div>
            <h2 style={{ color: "#1D3557" }}>{data.heading}</h2>
          </div>
          <div>
            <p>{data.description1}</p>
          </div>
          <div>
            <p style={{ fontWeight: "600" }}> {data.description2}</p>
          </div>
          <div>
            <p>{data.list1}</p>
            <p>{data.list2}</p>
            <p>{data.list3}</p>
            <p>{data.list4}</p>
            <p>{data.list5}</p>
          </div>

          <div>
            <p style={{ fontWeight: "600" }}>{data.description3}</p>
          </div>
          <div>
            <p>{data.list6}</p>
            <p>{data.list7}</p>
            <p>{data.list8}</p>
          </div>
          <div>
            <p>{data.description4}</p>
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
    list3:
      " - Mastery of the Adobe software package (Photoshop, Indesigns, Illustrator and Premier)",
    list4: "- Basics of Branding and Digital Marketing.",
    list5: "- Portfolio presentation. ",
    description3: "Description of Functions",
    list6: "- Conceptualize visual elements based on business requirements",
    list7: " - Create images and layouts manually or through design software",
    list8: "- Create and test graphics for different media",
    description4:
      "Interested parties must send their CV and the reference of the vacancy in which they are applying to the email candidacy@multitel.co.ao until October 20, 2021",
  };

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
