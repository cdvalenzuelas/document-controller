// Dependencies
import React from "react";

//Styles
import "./styles.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__description">
        <h2 className="section-title">danilo valenzuela</h2>
        <h3 className="section-subtitle">
          ingeniero mecánico y desarrollador front end
        </h3>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum iusto
          exercitationem dolorem aliquid non, reiciendis fuga distinctio. Eos
          minus recusandae ipsa facilis assumenda adipisci laboriosam nesciunt
          veniam veritatis voluptas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eaque ratione nobis fuga accusamus quos corporis
          facere omnis architecto delectus deleniti enim dicta id unde in vero
          perspiciatis hic, soluta voluptate?
        </p>
      </div>
      <div className="hero__image" >
      </div>      
    </section>
  );
}

export default Hero;
