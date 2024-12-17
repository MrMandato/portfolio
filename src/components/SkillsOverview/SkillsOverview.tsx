import React from "react";
// Styles
import SkillsItem from "./SkillsItem/SkillsItem";
import "./SkillsOverview.css";

interface Skill {
  icon: string;
  title: string;
  description: string;
  languagesTitle: string;
  languages: string[];
  tools: string[];
}

const SkillsOverview: React.FC = () => {
  const data: Skill[] = [
    {
      icon: "code",
      title: "Desarrollador Front-End",
      description:
        "Especializado en crear interfaces de usuario atractivas y funcionales.",
      languagesTitle: "Lenguajes que Domino:",
      languages: ["HTML", "CSS", "JavaScript", "Python"],
      tools: ["VsCode", "React", "TypeScript", "Git", "GitHub", "TailwindCss"],
    },
    {
      icon: "mobile",
      title: "Desarrollador Móvil",
      description:
        "Especializado en crear aplicaciones elegantes y eficientes, diseñando experiencias de usuario fluidas y responsivas en iOS y Android.",
      languagesTitle: "Lenguajes que Domino:",
      languages: ["JavaScript", "Flutter", "React-Native"],
      tools: ["VsCode", "Expo", "Firebase", "GoogleAuth", "Android Studio"],
    },
    {
      icon: "paintbrush",
      title: "Diseñador Web/Móvil",
      description:
        "Especializado en crear interfaces visuales atractivas y experiencias de usuario intuitivas para aplicaciones en diferentes dispositivos.",
      languagesTitle: "Disfruto Diseñando:",
      languages: ["UX", "UI", "Webs", "Apps"],
      tools: ["Figma", "Miro", "ChatGPT", "ReCraft", "Unsplash"],
    },
  ];

  return (
    <div className="skills-overview-container">
      {data.map((item, index) => (
        <SkillsItem
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          languagesTitle={item.languagesTitle}
          languages={item.languages}
          tools={item.tools}
        />
      ))}
    </div>
  );
};

export default SkillsOverview;
