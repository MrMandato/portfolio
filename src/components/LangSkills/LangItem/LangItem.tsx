import "./LangItem.css";
import React from "react";

interface LangItemProps {
  langIcon: string;
  langColor: string;
}

const LangItem: React.FC<LangItemProps> = ({ langIcon, langColor }) => {
  return (
    <>
      <span
        className={`fa-brands fa-${langIcon} icon`}
        style={{ color: `#${langColor}` }}
      />
    </>
  );
};

export default LangItem;
