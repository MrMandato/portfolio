import React from "react";
import "./SkillsItem.css";

interface SkillsItemProps {
  icon: string;
  title: string;
  description: string;
  languagesTitle: string;
  languages: string[];
  tools: string[];
}

const SkillsItem: React.FC<SkillsItemProps> = ({
  icon,
  title,
  description,
  languagesTitle,
  languages,
  tools,
}) => {
  return (
    <div className="card slide-in-bottom-view">
      <div className="card-icon">
        <i className={`fa-solid fa-${icon}`}></i>
      </div>
      <div className="card-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-body">
        <h3>{languagesTitle}</h3>
        <div className="tags">
          {languages.map((language, index) => (
            <span key={index} className="tag">
              {language}
            </span>
          ))}
        </div>
        <h3>Herramientas que uso:</h3>
        <div className="tags">
          {tools.map((tool, index) => (
            <span key={index} className="tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
