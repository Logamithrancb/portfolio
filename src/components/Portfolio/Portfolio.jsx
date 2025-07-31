import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "AI Chat Assistant",
            description: "An intelligent chatbot built with Python and TensorFlow",
            image: "project1.jpg",
            tags: ["Python", "TensorFlow", "NLP"],
            github: "https://github.com/yourusername/project1",
            demo: "https://demo-link.com"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Personal portfolio built with React and modern CSS",
            image: "project2.jpg",
            tags: ["React", "CSS", "JavaScript"],
            github: "https://github.com/yourusername/project2",
            demo: "https://demo-link.com"
        },
        // Add more projects here
    ];

    return (
        <section className="portfolio">
            <div className="portfolio-title">
                <h1>My Projects</h1>
            </div>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <div className="portfolio-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="portfolio-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="portfolio-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio