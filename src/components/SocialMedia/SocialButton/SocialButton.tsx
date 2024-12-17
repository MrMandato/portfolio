import React from "react";
// Styles
import "./SocialButton.css";
// Common
import CustomButton from "../../../common/CustomButton/CustomButton";

const SocialButton: React.FC = () => {
  return (
    <div className="social-button-container slide-in-left-view">
      <p>Empieza tu Proyecto Conmigo Ahora</p>
      <CustomButton
        buttonLink="mailto:1707orlandoalex@gmail.com"
        buttonText="Vamos Alla!!!"
        buttonIcon={""}
      />
    </div>
  );
};

export default SocialButton;
