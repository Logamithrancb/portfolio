import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I'm a B.Tech student specializing in Artificial Intelligence and Data Science passionate about building AI-powered solutions and full-stack web applications.</p>
            </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=""/>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Support</div>
        </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                © 2025 All rights reserved. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>ontact with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer