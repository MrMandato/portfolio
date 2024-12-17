import React from "react";
// Styles
import "./CustomButton.css";

interface CustomButtomProps {
  buttonLink: string;
  buttonText: string;
  buttonIcon: string;
}

const CustomButton: React.FC<CustomButtomProps> = ({
  buttonLink,
  buttonText,
  buttonIcon,
}) => {
  return (
    <>
      <button className="custom-button">
        <a href={buttonLink}> {buttonText} </a>
        <i className={`fa-solid fa-${buttonIcon}`}></i>
      </button>
    </>
  );
};

export default CustomButton;
