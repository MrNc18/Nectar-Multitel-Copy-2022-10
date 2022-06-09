import { data } from "jquery";
import React from "react";
 
import RecruitmentForm from "./RecruitmentForm";

function Commercial() {
  function Commerce({ data }) {
    return (
      <>
        <div className="container pt-5"  style={{ backgroundColor: "#F6F6F6" }}>
          <div>
            <h2 style={{ color:"#1D3557" }} >{data.heading}</h2>
          </div>
          <div>
            <p>{data.description1}</p>
          </div>
          <div >
           <p> {data.description2}</p>
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
         <div >
         <RecruitmentForm   />
         </div>
        </div>
      </>
    );
  }

  const obj = {
    heading: "Our Team",
    description1: "Multitel is the competent, attentive and available partner that assumes with your company a commitment of total transparency and objectivity.",
    description2:" By choosing Multitel, you are not only enjoying a quality service, you are also receiving the support of a team of professionals with extensive experience in the market, who will be abl to advise you on the definition that best suits your needs, support you with post -sales and guarantee low response times to installation and intervention requests.",
    
    description3:"Multitel has been preparing its organizational structure and providing itself with the necessary competitive conditions to guarantee an  ",
    description4:"We have a technical team made up of professionals that include analysts, engineers and consultants with higher education in Web/IT and Telecommunications, in addition to specific training in the technologies, platforms and equipment that make up our infrastructures and complementary specializations, in addition to know-how, vast experience and support  capacity provided by our partners."
  
  };

  return (
    <>
    
        
        <div className="container">
          <div className="row">
          
          </div>

         <div>
         <Commerce data={obj} />
         </div>
        </div>
       
    </>
  );
}

export default Commercial;
