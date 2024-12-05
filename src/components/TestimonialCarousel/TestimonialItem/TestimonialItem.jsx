// Lib
import { Swiper, SwiperSlide } from "swiper/react";
// Lib Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Lib Modules
import { Navigation, Autoplay } from "swiper/modules";
// Styles
import "./TestimonialItem.css";
// Images
import images from "../../../assets/images";
// PropTypes
import PropTypes from "prop-types";

const TestimonialItem = ({ testimonials, person, feedback }) => {
  return (
    <>
      <aside id="testimonials" className="testimonials-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="mySwiper slide-in-bottom-view"
        >
          {testimonials.map((avatar, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <div className="testimonial-slide">
                    <img src={images[avatar]} />
                    <h3> {person[index]} </h3>
                    <p> {feedback[index]} </p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </aside>
    </>
  );
};

TestimonialItem.propTypes = {
  testimonials: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default TestimonialItem;
