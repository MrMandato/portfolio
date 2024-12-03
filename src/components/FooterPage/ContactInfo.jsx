// Styles
import "./styles/ContactInfo.css";
// Images
import images from "../../assets/images";
// Components
import BoxItem from "./BoxItem";
import ContactButton from "./ContactButton";

const ContactInfo = () => {
  const field1 = ["Mi Correo Electronico", "Mi Numero de Telefono"];
  const field2 = ["1707orlandoalex@gmail.com", "+58 424-286-0846"];

  const buttonLinks = ["#", "mailto:1707orlandoalex@gmail.com"];
  const buttonTexts = ["Descargar CV", "Enviar un Correo"];

  return (
    <>
      <footer id="contact" className="footer-container">
        <h2 className="slide-in-right-view">
          Contactame para hacer realidad tus ideas
        </h2>
        <div className="personal-information zoom-in">
          <picture className="images-container">
            <img src={images.Logo} />
          </picture>
          <div className="info-container">
            <BoxItem boxes={field2} field={field1} />
          </div>
          <div className="button-container">
            <ContactButton buttons={buttonLinks} text={buttonTexts} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactInfo;
