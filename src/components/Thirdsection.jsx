import React from 'react'
import Navbar1 from './navbar1/Navbar1'
import Navbar2 from './navbar2/Navbar2'
import Menkap from './menkap/Menkep'
import Men from './men/Men'
import Footer from './footer/Footer'

export default function Thirdsection() {
  return (
    <div>
        <Navbar2/>
        <Navbar1/>
        <Men/>
        <Menkap/>
        <Footer/>
    </div>
  )
}
