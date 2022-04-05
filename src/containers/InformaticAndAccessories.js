import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import AccesoriesCard from '../components/atoms/AccesoriesCard';

function InformaticAndAccessories() {
  return (
    <LandingPage>
      <ServiceBanner title="Informatic and Accesories" />
      <AccesoriesCard />
    </LandingPage>
  )
}

export default InformaticAndAccessories