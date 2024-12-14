import React from 'react'
import FabricHeader from './FabricHeader/FabricHeader'
import Navbar from '../../../Components/Navbar/Navbar'
import FabricSection from './FabricSection/FabricSection'
import Footer from '../../../Components/Footer/Footer'

export default function FabricPage() {
  return (
    <div>
        <Navbar/>
        <FabricHeader/>
        <FabricSection/>
        <Footer/>
    </div>
  )
}
