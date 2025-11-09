import React from 'react'
import About from './Pages/About'
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
      <Route path='/Skills' element={<Skills/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>} />
      
    </Routes>
   
    </>
  
  )
}

export default App
