// Images
import images from "../../assets/images";
// Style
import "./Profile.css";
// Animations
import "../../assets/animation.css";

const Profile = () => {
  return (
    <>
      <section className="profile-container">
        <div className="background-container"></div>
        <div className="text-container slide-in-right">
          <h1>Orlando López</h1>
          <h2>Junior en Front-End</h2>
          <h3>Ingeniero en Informática en Formación</h3>
        </div>
        <picture className="profile-image-container slide-in-bottom">
          <img src={images.User} alt="Profile" />
        </picture>
      </section>
    </>
  );
};

export default Profile;
