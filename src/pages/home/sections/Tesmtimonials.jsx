import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsData = [
  {
    id: 1,
    name: "John Mensah",
    role: "Traveler",
    feedback:
      "Staying at this hotel was an incredible experience. The staff was friendly, the rooms were spotless, and the amenities exceeded my expectations. I highly recommend it!",
    image:
      "https://thumbs.dreamstime.com/z/young-black-man-ready-to-travel-airport-terminal-waiting-flight-handsome-257483698.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Abubakar",
    role: "Businesswoman",
    feedback:
      "The perfect place to unwind after a long day of meetings. I loved the luxury and attention to detail. Will definitely return for another stay.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/035/034/370/small_2x/ai-generated-portrait-of-confident-black-woman-with-crossed-arms-on-her-chest-looking-at-camera-smiling-african-american-businesswoman-isolated-on-transparent-background-png.png", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Michael Nartey",
    role: "Vacationer",
    feedback:
      "A paradise on Earth! The views, the food, and the service were outstanding. Truly an unforgettable getaway.",
    image:
      "https://thumbs.dreamstime.com/b/topless-african-black-man-beach-healthy-fit-muscular-american-jumping-joy-sunset-vacation-concept-55574347.jpg", // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials bg-gray-100 py-12 px-6 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
          What Our Guests Say
        </h3>
        <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold">
          Testimonials
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-4">
          Hear from our satisfied guests about their unforgettable experiences.
        </p>
      </div>

      {/* Swiper Testimonials */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="swiper-container"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="p-8 bg-white shadow-lg rounded-lg"
          >
            <div className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-purple-800 italic mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
