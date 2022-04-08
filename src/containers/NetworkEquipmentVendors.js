import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import Vendors from '../components/atoms/Vendors';
function NetworkEquipmentVendors() {
  return (
    <LandingPage>
      <ServiceBanner title="Vendors of Network Equipment" />
      <Vendors />
    </LandingPage>
  )
}

export default NetworkEquipmentVendors