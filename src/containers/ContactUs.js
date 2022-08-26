import React, { lazy, Suspense } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import ServiceBanner from "../components/atoms/ServiceBanner";
// import LandingPage from "../components/LandingPage";
// import ContactUsForm from "../components/atoms/ContactUsForm";

const LandingPage = lazy(() => import("../components/LandingPage"));
const ServiceBanner = lazy(() => import("../components/atoms/ServiceBanner"));
const ContactUsForm = lazy(() => import("../components/atoms/ContactUsForm"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage woproducts>
          <ServiceBanner title="Contact Us" regnPage />
          <div className="container mb-5">
            <div className="row">
              <div className="col-12 col-6 col-4 bredcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item href="/contactus">Start</Breadcrumb.Item>

                  <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                    Contact Us
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-md-6 box_shadow m-3 pt-3 pb-3 d-flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.664396954609!2d13.233088814745276!3d-8.817564492642868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24c581fa32d%3A0x6e1103f213e53e47!2sMultitel!5e0!3m2!1sen!2sao!4v1661423173257!5m2!1sen!2sao"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-5 ">
                <Contact data={obj} />
              </div>
            </div>
            <div className="col-md-6 box_shadow m-3">
              <ContactUsForm />
            </div>
          </div>
        </LandingPage>
      </Suspense>
    </>
  );
};

export default ContactUs;
