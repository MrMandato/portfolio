// Styles
import "./AboutMe.css";
// Hooks
import { useIntersection } from "../../hooks/useIntersection";
// Animations
import "../../animations/animations.css";

const AboutMe = () => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animations = ["fade-in-left", "type-writer"];

  return (
    <>
      <section
        id="about"
        className="about-container"
        ref={targetRef as React.RefObject<HTMLDivElement>}
      >
        <div
          className={`welcome-container ${
            isIntersecting ? animations[0] : "opacity-min"
          }`}
        >
          <h2>Bienvenid@</h2>
          <p>
            Soy Orlando López, Tengo 18 años y estoy estudiando ingeniería
            informática. Me apasiona la programación y el diseño de páginas web
            y aplicaciones móviles. Disfruto especialmente crear interfaces
            intuitivas y visualmente atractivas, siempre buscando aprender y
            mejorar con las últimas tendencias tecnológicas. Además de mis
            estudios, me involucro en proyectos personales y colaborativos para
            aplicar mis habilidades en situaciones reales. Mi sueño es algún día
            contribuir significativamente a la industria tecnológica,
            desarrollando aplicaciones innovadoras que mejoren la vida de las
            personas.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
