import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Education from '../Components/Education'
import MySkills from '../Components/MySkills'
import Footer from '../Components/Footer'
import MyProjects from '../Components/MyProjects'

const About = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Education />
        <MySkills />
        <MyProjects />
        <Footer />
    </div>
  )
}

export default About
