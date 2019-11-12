// Dependencies
import React from "react";

// Styles
import "./styles.css";

// Images
import facebook from "./facebook.svg";
import github from "./github.svg";
import instagram from "./instagram.svg";

const Footer = () => (
  <footer className="footer">
    <form>
      <h3>Contáctame</h3>
      <input type="textarea" placeholder="Déjame un mensaje" />
      <input type="tel" placeholder="Teléfono" />
      <input type="email" placeholder="Correo Electrónico" />
      <input type="text" placeholder="Nombre" />
    </form>

    <div className="footer__social">
      <h3>redes sociales</h3>
      <a className="social-link" href="https://www.facebook.com/danilo.valenzuela.7" target="blank">
        <img src={facebook} alt="Facebook" />
      </a>
      <a className="social-link" href="https://github.com/cdvalenzuelas" target="blank">
        <img src={github} alt="GitHub" />
      </a>
      <a className="social-link" href="https://www.instagram.com/cdvalenzuelas/" target="blank">
        <img src={instagram} alt="Instagram" />
      </a>
    </div>

    <div className="footer__contact">
      <h3>Contacto</h3>
      <a href="https://github.com/cdvalenzuelas">Correo</a>
      <a href="https://github.com/cdvalenzuelas">WhatsApp</a>
      <a href="https://github.com/cdvalenzuelas">Dirección</a>
    </div>
  </footer>
);

export default Footer;
