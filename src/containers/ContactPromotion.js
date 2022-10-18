import React, { lazy, Suspense } from "react";
// import LandingPage from "../components/LandingPage";
// import ServiceBanner from "../components/atoms/ServiceBanner";
// import Vendors from '../components/atoms/Vendors';

const LandingPage = lazy(() => import("../components/LandingPage"));
const ServiceBanner = lazy(() => import("../components/atoms/ServiceBanner"));
const Vendors = lazy(() => import("../components/atoms/Vendors"));

function ContactPromotion() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage>
          <ServiceBanner title="Promotions" />
          <Vendors />
        </LandingPage>
      </Suspense>
    </>
  );
}
export default ContactPromotion;
