import { useState } from "react";
//Images
import images from "../../assets/images";
// Styles
import "./NavBar.css";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "slide-in-top";

  return (
    <header
      id="home"
      className="container"
      ref={targetRef as React.RefObject<HTMLDivElement>}
    >
      <a href="#" className="isologo-container">
        <img
          src={images.Isologo}
          alt="Isologo"
          className={`${isIntersecting ? `${animation}` : "opacity-min"}`}
        />
      </a>
      <button
        className={`menu-toggle ${
          isIntersecting ? `${animation}` : "opacity-min"
        }`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav
        className={`navbar-container ${
          isIntersecting ? `${animation}` : "opacity-min"
        } ${isMenuOpen ? "navbar-open" : ""}`}
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
