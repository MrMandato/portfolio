import React from "react";
// Styles
import "./SocialMedia.css";
// Items
import SocialItem from "./SocialItem/SocialItem";
import SocialButton from "./SocialButton/SocialButton";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

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

  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "fade-in-bottom";

  return (
    <>
      <aside
        className="social-media-container"
        ref={targetRef as React.RefObject<HTMLDivElement>}
      >
        <h2>Mis Redes Sociales</h2>
        <div
          className={`my-social-media ${
            isIntersecting ? animation : "opacity-0"
          }`}
        >
          <SocialItem iconNames={icons} link={links} />
        </div>
        <SocialButton />
      </aside>
    </>
  );
};

export default SocialMedia;
