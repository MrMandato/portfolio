import React from "react";
import "./SocialItem.css";

interface SocialItemProps {
  iconNames: string[];
  link: string[];
}

const SocialItem: React.FC<SocialItemProps> = ({ iconNames, link }) => {
  return (
    <>
      {iconNames.map((iconName, index) => (
        <div className="media-container" key={index}>
          <a href={link[index]} target="_blank" rel="noopener noreferrer">
            <span className={`fa-brands fa-${iconName}`} />
          </a>
        </div>
      ))}
    </>
  );
};

export default SocialItem;
