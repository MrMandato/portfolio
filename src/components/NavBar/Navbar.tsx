import { useState } from "react";
//Images
import images from "../../assets/images";
// Styles
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="home" className="container">
      <a href="#" className="isologo-container slide-in-top">
        <img src={images.Isologo} alt="Isologo" />
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav
        className={`navbar-container slide-in-top ${
          isMenuOpen ? "navbar-open" : ""
        }`}
      >
        <a href="#home" onClick={() => setIsMenuOpen(false)}>
          <button className="btn">Inicio</button>
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          <button className="btn">Sobre Mí</button>
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          <button className="btn">Proyectos</button>
        </a>
        <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
          <button className="btn">Testimonios</button>
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          <button className="btn">Contacto</button>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
