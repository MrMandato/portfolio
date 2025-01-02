import React from "react";
// Lib
import { Swiper, SwiperSlide } from "swiper/react";
// Lib Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Lib Modules
import { Navigation, Autoplay } from "swiper/modules";
// Styles
import "./TestimonialItem.css";
// Images
import images from "../../../assets/images";
// Hooks
import { useIntersection } from "../../../hooks/useIntersection";
// Animations
import "../../../animations/animations.css";

interface TestimonialItemProps {
  testimonials: string[];
  person: string[];
  feedback: string[];
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  testimonials,
  person,
  feedback,
}) => {
  const { targetRef, isIntersecting } = useIntersection({ threshold: 0.5 });

  const animation = "fade-in-left";

  return (
    <aside
      id="testimonials"
      ref={targetRef as React.RefObject<HTMLDivElement>}
      className={`testimonials-container ${
        isIntersecting ? animation : "opacity-min"
      }`}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="mySwiper slide-in-bottom-view"
      >
        {testimonials.map((avatar, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <img src={images[avatar]} alt={`Avatar ${index}`} />
              <h3>{person[index]}</h3>
              <p>{feedback[index]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
};

export default TestimonialItem;
