import React, { useEffect, useState }  from 'react'
import LandingPage from '../LandingPage'
import ServiceBanner from './ServiceBanner'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from './DropDown';
import { showAlert } from '../../utils/showAlert';
import { getDigitotalBySlug } from '../../services/DigitotalFront';
import { imageUrl } from '../../services/category';
const CustomizedService = () => {
  
    const [ customizedservice, setCustomizedservice] = useState({});
  
    const handleAllCustomizedservice = async () => {
      const data = { slug: "customized-solutions" };
      try {
        const resp = await getDigitotalBySlug(data);
        console.log(resp);
        setCustomizedservice(resp && resp.data.data);
      } catch (error) {
        showAlert("Something went wrong", "error");
      }
    };
  
    useEffect(() => {
      handleAllCustomizedservice();
    }, []);

  
  return (
 <>
  <LandingPage woproducts>
      <ServiceBanner title="Customized Solutions"  regnPage/>
      <div className="container  mb-5">
      <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="/digitotal">Start</Breadcrumb.Item>
                <Breadcrumb.Item href="/digitotal">Digital</Breadcrumb.Item>
                <Breadcrumb.Item href="/omg"> Other Services</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                Customized Solution
                </Breadcrumb.Item>
               <DropDown />
              </Breadcrumb>
  
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-md-4">
            <div>
              <img
                  className="img-fluid"
                  height={250}
                  width={350}
                  src={imageUrl(customizedservice?.image)}
                  alt=""
                />
              </div>
            
            </div>
            <div className=" pt-5 col-md-8">
             
              <h4 className="mt-3 mb-4" style={{ color: "#1D3557" }}>
                  {customizedservice?.name}
                </h4>
                <div
                  className="mb-5 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: customizedservice?.description,
                  }}
                ></div>
            </div>
          </div>
      </div>
  </LandingPage>
 
 
 </>
  )
}

export default CustomizedService