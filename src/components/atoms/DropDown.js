import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const DropDown = () => {
  const navigate = useNavigate();
  return (
    <>
 <div className="ml-auto  ">
<NavDropdown  
                title=" Select Services"
                id="basic-nav-dropdown "
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item  
                  onClick={() =>
                    navigate("/omg", {
                      state: {
                        title: "Informatics and Accessories",
                        slug: "Informatics & Accessories",
                      },
                    })
                  }
                >
         OMG
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/SpecialService", {
                      state: { title: "SpecialService", slug: "SpecialService" },
                    })
                  }
                >
                     Special Services
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
              
                 
               
              </NavDropdown>
              </div>
     
   </>
  );
};

export default DropDown;
