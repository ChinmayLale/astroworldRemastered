import { useState } from 'react'
import NavBar from './Components/NavBar'
import DashBoard from './Components/DashBoard'
import Content from './Components/Content'
import AboutMe from './Components/AboutMe'
import { Route ,Routes } from 'react-router-dom'
import Skills from './Components/Skills'
import HomePage from './Components/HomePage'
import Services from './Components/Services'

function App() {
  

  return (
    <>
      
      <NavBar/>
      {/* <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/" element={<Skills/>}/>
      </Routes> */}
      <DashBoard/>
      <AboutMe/>
      <Skills/>
      <Services/>
      {/* <HomePage/> */}
    </>
  )
}

export default App
