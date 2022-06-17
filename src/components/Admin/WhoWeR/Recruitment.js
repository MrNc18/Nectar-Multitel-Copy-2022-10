import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {RecruitmentCat} from "./RecruitmentCat";
import {RecruitmentData} from "./RecruitmentData";
 
const  Recruitment = () => {

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-12 col-md-12 text-left">
            <h2 className="mt-4 mb-4">Recruitment</h2>
            <Tabs defaultActiveKey="first" size="Large">
            <Tab eventKey="first" title="Recruitment">
                <div className="Recruitment">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
               <RecruitmentCat/>
                  </div> 
                </div>
              </Tab>
              <Tab eventKey="second" title="Recruitment Details">
                <div className="RecruitmentDetails">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
                  <RecruitmentData/>
                  </div> 
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
