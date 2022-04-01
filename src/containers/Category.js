import React from 'react'
import { useParams } from "react-router-dom";
import CPE from './CPE';
import InternetServices from './InternetServices';
import NetworkEquipments from './NetworkEquipments';
import OtherProducts from './OtherProducts';
import Promotions from './Promotions';

function Category() {
    const params = useParams()
    console.log(params?.slug)

    const renderDetails = () => {
      switch(params?.slug) {
        case "cpe":
          return <CPE />
        case "network-equipments":
          return <NetworkEquipments />
        case "internet-services":
          return <InternetServices /> 
        case "promotions":
          return <Promotions />
        case "other-productsservices-1":
          return <OtherProducts />
        default:
          return <OtherProducts />
      }
    }

  return (
    <>
      {renderDetails()}
    </>
  )
}

export default Category
