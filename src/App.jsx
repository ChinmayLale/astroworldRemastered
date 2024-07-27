import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar'
import DashBoard from './Components/DashBoard'
import Content from './Components/ContactMe'
import AboutMe from './Components/AboutMe'
import { Route, Routes } from 'react-router-dom'
import Skills from './Components/Skills'
import HomePage from './Components/HomePage'
import Services from './Components/Services'
import ChatBot from './Components/ChatBot'
import ChatApp from './Components/ChatApp';
import Projects from './Components/Projects';
import WorkExperience from './Components/WorkExperience';
import Achievement from './Components/Achievement';
import ContactMe from './Components/ContactMe';


function App() {






  return (
    <>

      <NavBar />
      <DashBoard />
      <AboutMe />
      <Skills />
      <Services />
      <WorkExperience/>
      <Projects/>
      <Achievement/>
      <ContactMe/>

      
      <ChatBot />
     



      {/* <ChatApp/> */}
      {/* <HomePage/> */}
    </>
  )
}

export default App
