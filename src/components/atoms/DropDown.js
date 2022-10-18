import React from "react";
import { NavDropdown } from "react-bootstrap";
import {   useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ml-auto  dpdn ">
     
       <NavDropdown  
          title=" Select Services"
          id="basic-nav-dropdown "
          style={{width:"200px", }}
          // onClick={() => navigate("/home")}
        >  
        <div    className="dpdn1" >
          <NavDropdown.Item 
            onClick={() =>
              navigate("/omg", {
                state: {
                  title: "omg",
                  slug: "omg",
                },
              })
            }
          >
            OMG
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              navigate("/oml", {
                state: { title: "oml", slug: "oml" },
              })
            }
          >
           OML
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              navigate("/CustomizedService", {
                state: {
                  title: "CustomizedService",
                  slug: "CustomizedService",
                },
              })
            }
          >
            Customized Solution
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              navigate("/OutSourcing", {
                state: { title: "OutSourcing", slug: "OutSourcing" },
              })
            }
          >
            OutSourcing
          </NavDropdown.Item>
          </div>
        </NavDropdown>
       </div>
     
    </>
  );
};

export default DropDown;
