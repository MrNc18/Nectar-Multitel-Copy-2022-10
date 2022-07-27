import React, { useEffect, useState } from 'react'
import LandingPage from '../LandingPage'
import ServiceBanner from './ServiceBanner'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import DropDown from './DropDown';
import { showAlert } from '../../utils/showAlert';
import { getDigitotalBySlug } from '../../services/DigitotalFront';
import { imageUrl } from '../../services/category';
const CustomizedService = () => {

  const [customizedservice, setCustomizedservice] = useState({});

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
        <ServiceBanner title="Customized Solutions" regnPage />
        <div className="container  mb-5">
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

                  src={imageUrl(customizedservice.image)} alt="" />
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
                  {customizedservice.name}
                </h4>
                <div className="mb-5 mt-3" dangerouslySetInnerHTML={{ __html: customizedservice.description }} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
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
        </div> */}
        
      </LandingPage>


    </>
  )
}

export default CustomizedService