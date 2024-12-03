// Assets
import images from "../../assets/images";
// Style
import "./Styles/Hero.css";
// Animations
import "../../assets/animation.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="background-container"></div>
        <div className="text-container slide-in-right">
          <h1>Orlando López</h1>
          <h2>Junior en Front-End</h2>
          <h3>Ingeniero en Informática en Formación</h3>
        </div>
        <picture className="profile-container slide-in-bottom">
          <img src={images.User} alt="Profile" />
        </picture>
      </section>
    </>
  );
};

export default Hero;
