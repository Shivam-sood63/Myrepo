import React from 'react'
// import {Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import About from './Pages/About'
// import Banner from './Components/Banner'
// import Education from './Components/Education'
// import MySkills from './Components/MySkills'
// import MyProjects from './Components/MyProjects'
// import Footer from './Components/Footer'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Education from './Components/Education'
import Footer from './Components/Footer'



const App = () => {
  return (
    <>
       
    <Routes>
    
      <Route path='/' element={<About/>} />
      
    </Routes>
   
    </>
  
  )
}

export default App
