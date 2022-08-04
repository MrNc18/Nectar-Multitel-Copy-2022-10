import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MultitelHomeCat } from "./MultitelHomeCat";
import { MultitelHomeServices } from "./MultitelHomeServices";
 
const MultitelHome = () => {

  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-12 col-md-12 text-left">
            <h2 className="mt-4 mb-4">Multitel Home</h2>
            <Tabs defaultActiveKey="first" size="Large">
            <Tab eventKey="first" title="Categories">
                <div className="Recruitment">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
                    <MultitelHomeCat />
                  </div> 
                </div>
              </Tab>
              <Tab eventKey="second" title="Services">
                <div className="RecruitmentDetails">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
                  <MultitelHomeServices />
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

export default MultitelHome;
