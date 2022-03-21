import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Slider2 from "./slider2"
import Cards from "./cards"

function LandingPage({children}) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default LandingPage
