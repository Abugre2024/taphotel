import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const galleryImages = [
  {
    id: 1,
    src: "https://taphotelghana.com/wp-content/uploads/2017/06/IMG_3236-1110x570.jpeg", // Replace with actual image URL
    alt: "Luxury Room View",
  },
  {
    id: 2,
    src: "https://ak-d.tripcdn.com/images/02208120008t26ww25E90_R_600_400_R5.webp", // Replace with actual image URL
    alt: "Exterior",
  },
  {
    id: 3,
    src: "https://ak-d.tripcdn.com/images/0221a12000a1gwpx93A3B_R_600_400_R5.webp", // Replace with actual image URL
    alt: "pool",
  },
  {
    id: 4,
    src: "https://ak-d.tripcdn.com/images/220j0u000000jd8mi8DF5_R_600_400_R5.webp", // Replace with actual image URL
    alt: "Elegant Dining Hall",
  },
];

const Gallery = () => {
  return (
    <section className="gallery bg-gray-100 py-12 px-6 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
          Luxury Resort
        </h3>
        <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-4">
          Discover the beauty and luxury of our resort with these stunning
          visuals.
        </p>
      </div>

      {/* Swiper Gallery */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="swiper-container"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id} className="rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
