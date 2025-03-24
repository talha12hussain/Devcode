import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import AboutUsSection from './AboutUsSection'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <AboutUsSection/>
      <Contact/>

    </div>
  )
}

export default Home
