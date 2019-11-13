// Dependencies
import React from "react";

// Styles
import './styles.css'

const Project = ({ src, author }) => (
  <article className="project">
    <img className="project__image" src={src} alt="imgeApi" />
		<div className="project__description">
    	<h3>{author}</h3>		
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum iusto
				exercitationem dolorem aliquid non, reiciendis fuga distinctio. Eos minus
				recusandae ipsa facilis assumenda adipisci laboriosam nesciunt veniam
				veritatis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Eaque ratione nobis fuga accusamus quos corporis facere omnis
				architecto delectus deleniti enim dicta id unde in vero perspiciatis hic,
				soluta voluptate?
			</p>
			<button className="button--main">
				<a href="#">Ver Projecto</a>
			</button>   
		</div>
  </article>
);

export default Project;
