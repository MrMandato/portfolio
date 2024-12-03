// Styles
import "./styles/Languages.css";
// Components
import LanguageItem from "./LanguageItem";

const Languages = () => {
  const ProgrammingLanguages = ["html5", "css3-alt", "js", "react"];

  const ProgrammingLanguagesColors = ["e34c26", "1E7A7A", "F0DB4F", "61DBFB"];

  return (
    <>
      <div className="languages-container">
        <h2>Lenguajes, Librerías y Frameworks que uso</h2>
        <div className="item-container scroll-anim-izq">
          {ProgrammingLanguages.map((language, index) => (
            <LanguageItem
              key={index}
              iconName={language}
              color={ProgrammingLanguagesColors[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
