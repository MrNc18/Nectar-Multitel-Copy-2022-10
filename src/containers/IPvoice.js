import React from 'react'
import ServiceBanner from '../components/atoms/ServiceBanner'
import LandingPage from '../components/LandingPage'
import Breadcrumb from "react-bootstrap/Breadcrumb";

const IPvoice = () => {

  function Ipvoice ({data}){
        return(
            <>
    <div className="pt-4">
    <div>
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
        </div>
        <div className='dotcol'>
         <ul>
       
          <li>{data.tag1}</li>
          <li>{data.tag2}</li>
          <li>{data.tag3}</li>
          <li>{data.tag4}</li>
         </ul>
        </div>
    </div>
            </>
        )
    }


    const obj ={
        heading1:"IP voice",
        description:"Our voice solutions are based on VoIP technology (IP/SIP Telephone Lines and SIP Trunks) and help to optimize and flexibilize the communication of companies, being able to be integrated to the existingsolution or to replace it (modernize) it completely. We also support the supply, installation and  configuration of IP voice equipment such as: Telephone exchanges, IP Phones and GSM Gateways",
        heading2:"Benefits",
        tag1: "Cost reduction",
        tag2: "Flexibility",
        tag3: "Better quality and management of communications",
        tag4:"Free calls on the same network.",

    }
  return (
   <>
   <LandingPage  woproducts>

       <ServiceBanner title="IP voice" />

       <div className="container">
       <div className="row">
      <div className="col-12 col-6 col-4 bredcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

              <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
              <Breadcrumb.Item active style={{color:"#0C7CB8"}}>IP voice</Breadcrumb.Item>
            </Breadcrumb>
          </div>
      </div>
      <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-lg-4">
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
              <Ipvoice data={obj} />
            </div>
          </div>
       </div>
   </LandingPage>
   </>
  )
}

export default IPvoice