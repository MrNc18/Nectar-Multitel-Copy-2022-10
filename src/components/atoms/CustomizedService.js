import React from 'react'
import LandingPage from '../LandingPage'
import ServiceBanner from './ServiceBanner'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from './DropDown';

const CustomizedService = () => {

    function Customizedservice({data}){
        return(
            <>
            
         <div className=" pt-4">
         <div>
                <h2 style={{color:"#1D3557"}}>
                    {data.heading1}
                </h2>
            </div>
            <div>
                <p className="pt-2">
                    {data.description1}
                </p>
            </div>
            <div >
                <p className="pt-2">
                    {data.description2}
                </p>
            </div>
           
       
         </div>
            </>
        )
    }  



    
    const obj ={
        heading1:"  Customized Solution",
        description1:"Turnkey or turnkey solutions may include study or analysis, project design, specifications, implementation  coordination and training.",
       description2:"In a turnkey solution, the teams on the ground, suppliers and other partners are coordinated by a specificteam from Multitel, and the follow-up with the Customer is carried out through meetings to discuss the situation and the provision of periodic reports from the evolution of the project, until its conclusion and acceptance by the Client"
    }
  return (
 <>
  <LandingPage>
      <ServiceBanner title="Customized Solutions" />
      <div className="container">
      <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Digital</Breadcrumb.Item>
                <Breadcrumb.Item href="#"> Other Services</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                Customized Solution
                </Breadcrumb.Item>
               <DropDown />
              </Breadcrumb>
  
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-md-4">
              <img
                className="img-fluid"
                height={250}
                width={350}
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                alt=""
                srcset=""
              />
            </div>
            <div className=" pt-5 col-md-8">
              <Customizedservice data={obj} />
            </div>
          </div>
      </div>
  </LandingPage>
 
 
 </>
  )
}

export default CustomizedService