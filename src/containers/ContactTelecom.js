import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
 
import Vendors from "../components/atoms/Vendors";

function ContactTelecom() {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Telecom" />
        <Vendors />
      </LandingPage>
    </>
  );
}
export default ContactTelecom;
