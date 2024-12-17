import React from "react";
import "./ContactButton.css";

interface ContactButtonProps {
  buttons: string[];
  text: string[];
}

const ContactButton: React.FC<ContactButtonProps> = ({ buttons, text }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button key={index} className="contact-btn">
          <a href={button}>{text[index]}</a>
        </button>
      ))}
    </>
  );
};

export default ContactButton;
