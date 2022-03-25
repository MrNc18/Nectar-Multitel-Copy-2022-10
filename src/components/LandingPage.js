import React from 'react'
import Footer from './Footer'
import Header from './Header'


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
