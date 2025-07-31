import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
   const [menu, setMenu] = useState("home");
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   }

  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className="nav-logo"/>
        
        <div className={`nav-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link 
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => {
                    setMenu('home');
                    setIsOpen(false);
                }}
            >
                <li className={`nav-home ${menu === 'home' ? 'active' : ''}`}>Home</li>
            </Link>

            <Link 
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => {
                    setMenu('about');
                    setIsOpen(false);
                }}
            >
                <li className={`nav-aboutme ${menu === 'about' ? 'active' : ''}`}>About me</li>
            </Link>

            {/* Portfolio Link to LinkedIn */}
            <a 
                href="https://www.linkedin.com/in/logamithran-balasubramaniam-6160b4283/" // 🔁 Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                    setMenu('portfolio');
                    setIsOpen(false);
                }}
            >
                <li className={`nav-portfolio ${menu === 'portfolio' ? 'active' : ''}`}>Portfolio</li>
            </a>

            <Link 
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => {
                    setMenu('contact');
                    setIsOpen(false);
                }}
            >
                <li className={`nav-contact ${menu === 'contact' ? 'active' : ''}`}>Contact</li>
            </Link>
        </ul>
        
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
