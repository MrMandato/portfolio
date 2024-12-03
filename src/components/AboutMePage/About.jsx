// Styles
import "./styles/About.css";
// Components
import Languages from "../AboutMePage/Languages";
// Animation
import "../../assets/animation.css";

const About = () => {
  return (
    <>
      <section id="about" className="about-container">
        <div className="welcome-container slide-in-bottom-view">
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
        <Languages />
      </section>
    </>
  );
};

export default About;
