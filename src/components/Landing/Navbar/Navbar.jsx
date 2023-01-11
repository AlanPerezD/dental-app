import React from 'react'

import images from '../../../constants/images'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.Tooth} />
        <p>Dentalist.</p>
      </div>

      <div className='app__navbar-links'>
        <ul className='app__navbar-list'>
          <li className='app__navbar-link'><a href='#About'>About Us</a></li>
          <li className='app__navbar-link'><a href='#About'>New Patient</a></li>
          <li className='app__navbar-link'><a href='#About'>Our Services</a></li>
          <li className='app__navbar-link'><a href='#About'>Contact Us</a></li>
        </ul>
      </div>

      <div className='app__navbar-button'>
        <button>Book appointment</button>
      </div>
    </div>
  )
}

export default Navbar