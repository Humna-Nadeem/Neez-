import React from 'react'
import Navbar1 from './navbar1/Navbar1'
import Navbar2 from './navbar2/Navbar2'
import Slider2 from './slider2/Slider2'
import Maincards from './maincards/Maincards'
import MainSection from './mainsection/Mainsection'
import Footer from './footer/Footer'

export default function Firstsection() {
  return (
    <div>
        <Navbar2/>
        <Navbar1/>
        <Maincards/>
        <Slider2/>
        <MainSection/>
      <Footer/>
    </div>
  )
}
