// Components
import React from "react";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

const TestimonialCarousel = () => {
  const testimonialImages = ["User", "User", "User"];

  const testimonialNames = [
    "Orlando López",
    "Johnnielys Cisneros",
    "Deyanira Rodulfo",
  ];
  const testimonialReview = [
    "Muy grata experiencia a la hora de desarrollar la pagina web",
    "Me encanto trabajar con el, es muy profesional",
    "Es el mejor en lo que hace, siempre te da actualizaciones de lo que esta haciendo",
  ];

  return (
    <>
      <TestimonialItem
        testimonials={testimonialImages}
        person={testimonialNames}
        feedback={testimonialReview}
      />
    </>
  );
};

export default TestimonialCarousel;
