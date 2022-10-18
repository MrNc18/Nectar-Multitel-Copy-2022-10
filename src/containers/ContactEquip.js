import React, { lazy, Suspense } from "react";
// import LandingPage from "../components/LandingPage";
// import ServiceBanner from "../components/atoms/ServiceBanner";
// import Vendors from '../components/atoms/Vendors';

const LandingPage = lazy(() => import("../components/LandingPage"));
const ServiceBanner = lazy(() => import("../components/atoms/ServiceBanner"));
const Vendors = lazy(() => import("../components/atoms/Vendors"));

function ContactEquip() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage>
          <ServiceBanner title="Networking Equipments" />
          <Vendors />
        </LandingPage>
      </Suspense>
    </>
  );
}

export default ContactEquip;
