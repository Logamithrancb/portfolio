import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-right">
                <div className="about-para">
                    <p>
                        As a B.Tech student specializing in AI and Data Science, I blend creativity with technical expertise. 
                        My passion lies in developing innovative AI solutions and crafting seamless web applications. 
                        With a strong foundation in both AI frameworks and full-stack development, 
                        I'm constantly pushing boundaries and embracing new technologies.
                        My goal is to create meaningful solutions that bridge the gap between AI and user-centric applications.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p>
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "55%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Sql</p>
                        <hr style={{width: "45%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React</p>
                        <hr style={{width: "65%"}}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About