// Styles
import "./LangSkills.css";
// Items
import LangItem from "./LangItem/LangItem";

const LangSkills = () => {
  const ProgrammingLanguages: string[] = ["html5", "css3-alt", "js", "react"];

  const ProgrammingLanguagesColors: string[] = [
    "e34c26",
    "1E7A7A",
    "F0DB4F",
    "61DBFB",
  ];

  return (
    <>
      <div className="lang-skills-container">
        <h2>Lenguajes, Librerías y Frameworks que uso</h2>
        <div className="item-container slide-in-left-view">
          {ProgrammingLanguages.map((language, index) => (
            <LangItem
              key={index}
              langIcon={language}
              langColor={ProgrammingLanguagesColors[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LangSkills;
