// Components
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const images = ["User", "User"];

  const names = ["John Doe", "Orlando Lopez"];

  const feedbacks = [
    "Muy grata experiencia a la hora de desarrollar la pagina web",
    "Me encanto trabajar con el, es muy profesional",
  ];

  return (
    <>
      <TestimonialItem
        testimonials={images}
        person={names}
        feedback={feedbacks}
      />
    </>
  );
};

export default Testimonials;
