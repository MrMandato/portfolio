import React from "react";
// Styles
import "./SocialButton.css";
// Common
import CustomButton from "../../../common/CustomButton/CustomButton";
// Hooks
import { useIntersection } from "../../../hooks/useIntersection";
// Animations
import "../../../animations/animations.css";

const SocialButton: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "fade-in-right";

  return (
    <div
      className={`social-button-container ${
        isIntersecting ? animation : "opacity-min"
      }`}
      ref={targetRef as React.RefObject<HTMLDivElement>}
    >
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
