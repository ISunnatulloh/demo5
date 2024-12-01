import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Page/Home'
import About from './Components/Page/AboutPage/About'
import Contact from './Components/Page/ContactPage/Contact'


export default function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
    </div>
  )
}
