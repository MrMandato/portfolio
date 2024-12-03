// Assets
import images from "../../assets/images";
// Styles
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <header id="home" className="container">
        <a href="#" className="logo-container first-reveal-bot">
          <img src={images.Isologo} alt="Isologo" />
        </a>
        <nav className="navbar-container first-reveal-bot">
          <a href="#home">
            <button className="btn"> Inicio</button>
          </a>
          <a href="#about">
            <button className="btn"> Sobre Mí</button>
          </a>
          <a href="#projects">
            <button className="btn"> Proyectos</button>
          </a>
          <a href="#testimonials">
            <button className="btn"> Testimonios</button>
          </a>
          <a href="#contact">
            <button className="btn"> Contacto</button>
          </a>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
