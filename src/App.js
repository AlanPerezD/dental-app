import React from 'react'
import { Blog, DentalistPage, Features, Footer, Map, Navbar, Services, Testimonial } from './components/Landing/index'


const App = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <DentalistPage />
      <Features />
      <Testimonial />
      <Blog />
      <Map />
      <Footer />
    </div>
  )
}

export default App