import React from "react";
// Styles
import "./ContactItem.css";

interface ContactItemProps {
  inputs: string[];
  field: string[];
}

const ContactItem: React.FC<ContactItemProps> = ({ inputs, field }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <div key={index} className="input">
          <h3>{field[index]}</h3>
          <h2>{input}</h2>
        </div>
      ))}
    </>
  );
};

export default ContactItem;
