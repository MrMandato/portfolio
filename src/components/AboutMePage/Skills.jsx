// Styles
import "./styles/Skills.css";

// Components
import Tool from "./Tool";

const Skills = () => {
  const toolData1 = ["HTML", "CSS", "JavaScript", "Python"];

  const toolData2 = [
    "VsCode",
    "React",
    "TypeScript",
    "Git",
    "GitHub",
    "TailwindCss",
  ];

  const toolData3 = ["JavaScript", "Flutter", "React-Native"];

  const toolData4 = [
    "VsCode",
    "Expo",
    "Firebase",
    "GoogleAuth",
    "Android Studio",
  ];

  const toolData5 = ["UX", "UI", "Webs", "Apps"];

  const toolData6 = ["Figma", "Miro", "ChatGPT", "ReCraft", "Unsplash"];

  return (
    <>
      <div className="tools-container scroll-anim-izq">
        <Tool
          icon="code"
          profession="Desarrollador Front-End"
          description="Especializado en crear interfaces de usuario atractivas y funcionales."
          subtitle="Lenguajes que domino:"
          tools={toolData1}
          subtitle2="Herramientas que uso:"
          tools2={toolData2}
        />
        <hr className="sep" />
        <Tool
          icon="mobile"
          profession="Desarrollador Movil"
          description="especializado en crear aplicaciones elegantes y eficientes, diseñando experiencias de usuario fluidas y responsivas en iOS y Android."
          subtitle="Lenguajes que domino:"
          tools={toolData3}
          subtitle2="Herramientas que uso:"
          tools2={toolData4}
        />
        <hr className="sep" />
        <Tool
          icon="paintbrush"
          profession="Diseñador Web/Movil"
          description="especializado en crear interfaces visuales atractivas y experiencias de usuario intuitivas para aplicaciones en diferentes dispositivos."
          subtitle="Disfruto Diseñando:"
          tools={toolData5}
          subtitle2="Herramientas que uso:"
          tools2={toolData6}
        />
      </div>
    </>
  );
};

export default Skills;
