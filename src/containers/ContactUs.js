import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ContactUsForm from "../components/atoms/ContactUsForm";


const ContactUs = () => {
  function Contact({ data }) {
    return (
      <>
        <div className="mt-5">
          <div className="p-5">
            <div>
              <h5 style={{ color: "#1D3557" }}>{data.heading1}</h5>
            </div>
            <div className="mt-5">
              <h4 style={{ color: "#1D3557" }}>{data.heading2}</h4>
            </div>
            <div className="mt-3">
              <p style={{ fontSize: "10px" }}>{data.description}</p>
            </div>
            <div className="social_links">
              <a href="#" className="mr-3">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-3">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-3">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: "OUR CONTACT",
    heading2: "Get In Touch With Us",
    description:
      "Consectetuer consequuntur ne, no virtute atomorum usu. Eu quo nemorecausae tacimates, eos viderer persequeris an. Cu molestie consulatu qui Aldus PageMaker including versions of Lorem Ipsum.",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Contact Us" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  Contact Us
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div className="row"  >
            <div className="col-md-5  "  >
              <Contact data={obj}  />
            </div>
            <div className="col-md-6 box_shadow m-3"    >
              <ContactUsForm />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default ContactUs;
