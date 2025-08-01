import React from 'react'
import './Hero.css'
import profile from '../../../assets/profile.png'

const Hero = () => {  // Changed component name to PascalCase
  return (
    <section id='home' className='hero'>
      <div className="hero-content">
        <img src={profile} alt="Profile" />
        <h1>
          <span>I'm Logamithran, </span> 
          AI Student
        </h1>
        <p>
          I'm a B.Tech student specializing in Artificial Intelligence and Data Science.
          Passionate about building AI-powered solutions and full-stack web applications.
        </p>
        <div className="hero-action">
          <button className="hero-connect"><a
    href="https://www.linkedin.com/in/logamithran-balasubramaniam-6160b4283/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Connect With Me
  </a></button>
          <button className="hero-resume"><a 
  href="/Logamithrancbres1.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>My resume</a></button>
        </div>
      </div>
    </section>
  )
}

export default Hero  // Changed export name to match component