import React from "react";
// Styles
import "./SocialMedia.css";
// Items
import SocialItem from "./SocialItem/SocialItem";
import SocialButton from "./SocialButton/SocialButton";

const SocialMedia: React.FC = () => {
  const icons: string[] = [
    "whatsapp",
    "instagram",
    "github",
    "linkedin",
    "telegram",
  ];

  const links: string[] = [
    "https://wa.me/+584242860846",
    "https://www.instagram.com",
    "https://github.com/MrMandato",
    "https://www.linkedin.com/in/orlando-l%C3%B3pez-69b588337/",
    "https://www.telegram.com",
  ];

  return (
    <>
      <aside className="social-media-container">
        <h2 className="scroll-anim">Mis Redes Sociales</h2>
        <div className="my-social-media slide-in-bottom-view">
          <SocialItem iconNames={icons} link={links} />
        </div>
        <SocialButton />
      </aside>
    </>
  );
};

export default SocialMedia;
