import React from "react";
import "./cards.css"
import blue1 from "../assets/blue1.png"
import blue2 from "../assets/blue2.png"
import blue3 from "../assets/blue3.png"


const cards = () => {
  return (
      <div className="flex-container" style={{marginTop:"-50px",justifyContent:"center"}}>
    <div className="col-12 col-md-6 col-sm-6 col-lg-3 mb-2">
      <div
        className="flex-item-start"
      >
        <div className="row">
        <div className="col-6 col-md-8 col-sm-6 text-left">
            <img src={blue1} style={{width:"35px"}}/>
            </div>
          <div className="col-6 col-md-6 col-sm-6 text-left">
            <h6 className="pl-4 pt-4">Better Coverage</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-md-9 col-sm-9 text-left">
            <small className="pl-4 pt-0 pb-3 d-block">
              {" "}
              hdvwehcbwehcwc wuicwiechwbcw
            </small>
          </div>
        </div>
      </div>
    </div>
     <div className="col-12 col-md-6 col-sm-6 col-lg-3 mb-2">
     <div
       className="flex-item-middle"
     >
       <div className="row">
       <div className="col-6 col-md-8 col-sm-6 text-left">
            <img src={blue2} style={{width:"40px"}}/>
            </div>
         <div className="col-6 col-md-6 col-sm-6 text-left">
           <h6 className="pl-4 pt-4">1 Gbps Data Rate</h6>
         </div>
       </div>
       <div className="row">
         <div className="col-9 col-md-9 col-sm-9 text-left">
           <small className="pl-4 pt-0 pb-3 d-block">
             {" "}
             hdvwehcbwehcwc wuicwiechwbcw
           </small>
         </div>
       </div>
     </div>
   </div>
    <div className="col-12 col-md-6 col-sm-6 col-lg-3 mb-2">
    <div
      className="flex-item-end"
     
    >
      <div className="row">
      <div className="col-6 col-md-8 col-sm-6 text-left">
            <img src={blue3} style={{width:"28px"}}/>
            </div>
        <div className="col-6 col-md-6 col-sm-6 text-left">
          <h6 className="pl-4 pt-4">More Data Rate</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-9 col-md-9 col-sm-9 text-left">
          <small className="pl-4 pt-0 pb-3 d-block">
            {" "}
            hdvwehcbwehcwc wuicwiechwbcw
          </small>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};
export default cards;
