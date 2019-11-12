// Dependencies
import React from 'react'

// Styles
import './styles.css'

const Projects = ({ children }) => (
    <section className="projects">
        <div className="projects__header">
            <h3>Projects</h3>
            <nav className="projects_navbar">
                <ol>
                    <item>Fron End</item>
                    <item>Back End</item>
                    <item>Mecánica</item>
                    <item>Tubería</item>                   
                </ol>
            </nav>
        </div>
        {children}
    </section>
)

export default Projects
