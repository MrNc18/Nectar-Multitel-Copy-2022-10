import React from 'react'
import LandingPage from '../components/LandingPage'
import MarketplaceBanner from '../components/MarketplaceBanner'
import vqr from "../assets/vqr.png"
import ProductsList from '../components/ProductsList'


const  Marketplace = () => {
  return (
    <>
    <LandingPage>
   <MarketplaceBanner
   img={vqr}
   title="Introducing Router"
   subtext="IPV6 support.Transmitt Beamforming Technology"
   subtext1="MU MIMO technology for enhanced Wifi Performance"
   Amount="$20"
   buttonText="View Details"
   />
   <ProductsList/>

   </LandingPage>
   </>

  )
}

export default Marketplace