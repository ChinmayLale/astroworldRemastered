import { useState } from 'react'
import NavBar from './Components/NavBar'
import DashBoard from './Components/DashBoard'
import Content from './Components/Content'
import AboutMe from './Components/AboutMe'
import { Route ,Routes } from 'react-router-dom'
import Skills from './Components/Skills'

function App() {
  

  return (
    <>
      
      <NavBar/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/" element={<AboutMe/>}/>
      </Routes>
      {/* <DashBoard/>
      <AboutMe/>
      <Skills/> */}
    </>
  )
}

export default App
