import React from "react";
import RecruitmentForm from "./RecruitmentForm";
 

const GraphicDesigner = () => {
  function Graphicdesign({ data }) {
    return (
      <>
        <div className="container " style={{  backgroundColor: "#F6F6F6" }}>
          <div>
            <h2 style={{ color:"#1D3557" }} className="pt-4">{data.heading1}</h2>
          </div>
          <div>
            <h6  className="pt-2">
              {data.heading2}
            </h6>
          </div>
          <div>
            <h6  className="pt-4">
              {data.heading3}
            </h6>
          </div>
          <div >
            <p  className="pt-2">
              {data.description1}
            </p>
          </div>
          <div>
            <p >
              {data.description2
              }
            </p>
          </div>
          <div>
            <p>
              {data.description3}
            </p>
          </div>
          <div>
            <p>
              {data.description4}
            </p>
          </div>
          <div>
            <p>
              {data.description5}
            </p>
          </div>
          <div>
            <h6  className="pt-4">
              {data.heading4}
            </h6>
          </div>
          <div><p>{data.description6}</p></div>
          <div><p>{data.description7}</p></div>
          <div><p>{data.description8}</p></div>
          <div><p>{data.description9}</p></div>
          <div>
            <RecruitmentForm />
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "Graphic Designer",
    heading2 :"Graphic Designer - Ref . MTL_01DG.2021",
    heading3:"Requirements - Graphic Designer",
    description1:"- Over 18 years of age",
    description2:"- Creative, Committed and Dynamic",
    description3:"- Mastery of the Adobe software package (Photoshop, Indesigns, Illustrator and Premier)",
    description4:"- Basics of Branding and Digital Marketing.",
    description5:"- Portfolio presentation",
    heading4:"Description of Functions",
    description6:"- Conceptualize visual elements based on business requirement    ",
    description7:"- Create images and layouts manually or through design software",
    description8:"- Create and test graphics for  ",
    description9:"Interested parties must send their CV and the reference of the vacancy in which they are applying to the email candidacy@multitel.co.ao until October 20, 2021.",

  };
  return (
    <>
      
       
        <div className="container">
          <div className="row">
           
          </div>
          <Graphicdesign data={obj} />
        </div>
    
    </>
  );
};

export default GraphicDesigner;
