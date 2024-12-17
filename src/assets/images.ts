// images.ts
import Isologo from "../assets/images/MyLogoSinFondo.png";
import Logo from "../assets/images/MyLogo.png";
import User from "../assets/images/user.png";
import Background from "../assets/images/Background.jpg";
import Proyecto from "../assets/images/Proyecto.jpg";

interface Images {
  Isologo: string;
  Logo: string;
  User: string;
  Background: string;
  Proyecto: string;
}

const images: Images = {
  Isologo,
  Logo,
  User,
  Background,
  Proyecto,
};

export default images;
