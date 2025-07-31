import React from 'react'
import Navbar from './components/Navbar/Navbar'

import About from './components/About/About'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Navbar/Hero/Hero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer/>    </div>
  )
}

export default App