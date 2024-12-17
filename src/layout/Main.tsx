import React from "react";
// Components
import AboutMe from "../components/AboutMe/AboutMe";
import LangSkills from "../components/LangSkills/LangSkills";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import SkillsOverview from "../components/SkillsOverview/SkillsOverview";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel";
import ContactDetails from "../components/ContactDetails/ContactDetails";

const Main = () => {
  return (
    <>
      <AboutMe />
      <LangSkills />
      <SkillsOverview />
      <ProjectGallery />
      <TestimonialCarousel />
      <ContactDetails />
    </>
  );
};

export default Main;
