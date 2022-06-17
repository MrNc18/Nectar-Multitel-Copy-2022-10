import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {SusMenu} from "./SusMenu";
import {SusMenuMan} from "./SusMenuMan"
const  Sustainabilty = () => {



  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
        <div class="row d-flex align-items-center justify-content-between">
          <div class="col-lg-12 col-md-12 text-left">
            <h2 className="mt-4 mb-4">Sustainability</h2>
            <Tabs defaultActiveKey="first" size="Large">
            <Tab eventKey="first" title="Categories">
                <div className="Categories">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
                   <SusMenu/>
                  </div> 
                </div>
              </Tab>
              <Tab eventKey="second" title="Managment">
                <div className="Management">
                  <div
                    className="DataTable"
                    style={{ justifyContent: "center" }}
                  >
                  <SusMenuMan/>
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

export default Sustainabilty;
