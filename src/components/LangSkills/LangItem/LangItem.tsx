// Styles
import "./LangItem.css";
// Hooks
import { useIntersection } from "../../../hooks/useIntersection";
// Animations
import "../../../animations/animations.css";

interface LangItemProps {
  langIcon: string;
  langColor: string;
}

const LangItem: React.FC<LangItemProps> = ({ langIcon, langColor }) => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "bounce-in";

  return (
    <>
      <span
        ref={targetRef as React.RefObject<HTMLSpanElement>}
        className={`fa-brands fa-${langIcon} icon ${
          isIntersecting ? `${animation} delay-800` : "opacity-0"
        }`}
        style={{ color: `#${langColor}` }}
      />
    </>
  );
};

export default LangItem;
