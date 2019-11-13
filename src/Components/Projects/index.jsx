// Dependencies
import React from "react"

// Styles
import "./styles.css"

const Projects = ({ children }) => (
	<section className="projects">
		<header className="projects__header">
			<h3>Projects</h3>
			<nav className="projects__navbar">
				<ul>
					<li>
						<button type="button" className="button--main">Fron End</button>
					</li>
					<li>
						<button type="button" className="button--main">Back End</button>
					</li>
					<li>
						<button type="button" className="button--main">Mecánica</button>
					</li>
					<li>
						<button type="button" className="button--main">Tubería</button>
					</li>
				</ul>
			</nav>
		</header>
		<div className="project__container">
			{children}
		</div>		
	</section>
);

export default Projects;
