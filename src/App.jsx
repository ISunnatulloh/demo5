import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import TextTitle from './Components/Text_title/TextTitle'
import Why from './Components/Why/Why'
import Our from './Components/Our/Our'
import Award from './Components/Award/Award'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <TextTitle/>
      <Services/>
      <Why/>
      <Our/>
      <Award/>
      <Footer/>
    </div>
  )
}
