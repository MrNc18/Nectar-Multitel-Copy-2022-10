import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import VendorsTable from '../components/atoms/VendorsTable';

function NetworkEquipmentVendors() {
  return (
    <LandingPage>
      <ServiceBanner title="Vendors of Network Equipment" />
      <VendorsTable />
    </LandingPage>
  )
}

export default NetworkEquipmentVendors