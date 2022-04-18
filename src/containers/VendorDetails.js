import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row } from "react-bootstrap";
import Vendors from "../components/atoms/Vendors";
import { useLocation } from "react-router-dom";

function VendorDetails() {
  const {state} = useLocation()
  const {title} = state

  return (
    <>
    <LandingPage>
      <ServiceBanner title={`Vendor details of ${title}`} regnPage />
      <Vendors />
    
    </LandingPage>
    </>
  );
}

export default VendorDetails;
