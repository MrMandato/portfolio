import React from "react";
// Styles
import "./ContactDetails.css";
// Images
import images from "../../assets/images";
// Items
import ContactItem from "./ContactItem/ContactItem";
import ContactButton from "./ContactButton/ContactButton";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

const ContactDetails: React.FC = () => {
  const field: string[] = ["Mi Correo Electronico", "Mi Numero de Telefono"];
  const answer: string[] = ["1707orlandoalex@gmail.com", "+58 424-286-0846"];

  const buttonLinks: string[] = ["#", "mailto:1707orlandoalex@gmail.com"];
  const buttonTexts: string[] = ["Descargar CV", "Enviar un Correo"];

  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animations = ["fade-in-top", "slide-in-left"];

  return (
    <section
      id="contact"
      className="contact-details-container"
      ref={targetRef as React.RefObject<HTMLDivElement>}
    >
      <h2 className={isIntersecting ? animations[0] : "opacity-min"}>
        Contactame para hacer realidad tus ideas
      </h2>
      <div
        className={`personal-information ${
          isIntersecting ? animations[1] : "opacity-min"
        }`}
      >
        <picture className="logo-container">
          <img src={images.Logo} alt="Logo" />
        </picture>
        <div className="contact-information-container">
          <ContactItem inputs={answer} field={field} />
        </div>
        <div className="button-container">
          <ContactButton buttons={buttonLinks} text={buttonTexts} />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
