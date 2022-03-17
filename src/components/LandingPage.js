import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Slider from "./slider"
import Cards from "./cards"

function LandingPage({children}) {
  return (
    <>
    <Header />
    <Slider/>
    <Cards/>
    {children}
    <Footer />
    </>
  )
}

export default LandingPage
