import React,{ useState, useEffect } from 'react'
import LandingPage from '../LandingPage'
import ServiceBanner from './ServiceBanner'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from './DropDown';
import { showAlert } from '../../utils/showAlert';
import { getDigitotalBySlug } from '../../services/DigitotalFront';
import { imageUrl } from '../../services/category';




 
const OutSourcing = () => {
  const [  outsourcing, setOutSourcing] = useState({});
  
  const handleAllOutSourcing = async () => {
    const data = { slug: "outsourcing" };
    try {
      const resp = await getDigitotalBySlug(data);
      console.log(resp);
      setOutSourcing(resp && resp.data.data);
      // console.log("newsreq", resp);
    } catch (error) {
      showAlert("Something went wrong", "error");
    }
  };

  useEffect(() => {
    handleAllOutSourcing ();
  }, []);

    // function Specialservice({data}){
    //     return(
    //         <>
            
    //      <div className="pt-5">
    //      <div>
    //             <h2 style={{color:"#1D3557"}}>
    //                 {data.heading1}
    //             </h2>
    //         </div>
    //         <div>
    //             <p className="pt-2">
    //                 {data.description}
    //             </p>
    //         </div>
    //         <div className="dotcol">
    //             <ul>
    //                 <li>{data.tag1}</li>
    //                 <li>{data.tag2}</li>
    //                 <li>{data.tag3}</li>
    //                 <li>{data.tag4}</li>
    //             </ul>
    //         </div>
           
       
    //      </div>
    //         </>
    //     )
    // }  

    // const obj ={
    //     heading1:" OutSourcing",
    //     description:"  Multitel develops and implements Special Projects in the areas of Telecom and Si/Ti, which may include the study or analysis, elaboration and management of the project, specifications, coordination of        implementation and training, in order to meet the specific needs of Customers, taking into account taking into account your current reality and the prospects for the evolution of your business.",
    //    tag1:"Cost reduction ",
    //    tag2:"Specialized support",
    //    tag3:"Improve management",
    //    tag4:"Increased e",
    // }
    return (
      <>
        <LandingPage woproducts>
          <ServiceBanner title=  " OutSourcing" regnPage />
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-6 c-ol-4 bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Start</Breadcrumb.Item>
  
                  <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  OutSourcing
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
  
            <div className="container">
              <div className="row">
                <div
                  style={{ display: "flex" }}
                  className="pt-5  col-12 col-lg-4"
                >
                  <img 
                   className="img-fluid"
                   height={250}
                   width={350} 
                  
                  src={imageUrl( outsourcing.image)} alt=""  />
                  {/* <img
                    className="img-fluid"
                    height={250}
                    width={350}
                    style={{ borderRadius: "10px" }}
                    src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                    alt="image here"
                    srcset=""
                  /> */}
                </div>
  
                <div className=" pt-5  col-lg-8 ">
                  {/* {/ <Networkinfrastructure data={obj} /> /} */}
                  <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
              { outsourcing.name}
            </h4>
            <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html:   outsourcing.description }} />
                </div>
              </div>
            </div>
          </div>
        </LandingPage>
      </>
    );
  };
  
  export default  OutSourcing;
  
  