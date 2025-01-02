// Images
import images from "../../assets/images";
// Style
import "./Profile.css";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

const Profile = () => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animations = ["slide-in-right", "fade-in-bottom"];

  return (
    <>
      <section
        className="profile-container"
        ref={targetRef as React.RefObject<HTMLDivElement>}
      >
        <div className="background-container"></div>
        <div
          className={`text-container ${
            isIntersecting ? `${animations[0]}` : "opacity-min"
          }`}
        >
          <h1>Orlando López</h1>
          <h2>Junior en Front-End</h2>
          <h3>Ingeniero en Informática en Formación</h3>
        </div>
        <picture className="profile-image-container">
          <img
            src={images.User}
            alt="Profile"
            className={`${isIntersecting ? `${animations[1]}` : "opacity-min"}`}
          />
        </picture>
      </section>
    </>
  );
};

export default Profile;
