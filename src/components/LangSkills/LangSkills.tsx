// Styles
import "./LangSkills.css";
// Items
import LangItem from "./LangItem/LangItem";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

const LangSkills = () => {
  const ProgrammingLanguages: string[] = ["html5", "css3-alt", "js", "react"];

  const ProgrammingLanguagesColors: string[] = [
    "e34c26",
    "1E7A7A",
    "F0DB4F",
    "61DBFB",
  ];

  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "slide-in-right";

  return (
    <>
      <div
        className="lang-skills-container"
        ref={targetRef as React.RefObject<HTMLDivElement>}
      >
        <h2>Lenguajes, Librerías y Frameworks que uso</h2>
        <div
          className={`item-container ${
            isIntersecting ? animation : "opacity-0"
          }`}
        >
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
