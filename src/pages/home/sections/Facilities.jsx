import React from "react";
import { Link } from "react-router-dom";

const Facilities = () => {
  const facilities = [
    {
      title: "Conference Facilities",
      description:
        "Enjoy our air-conditioned and well-decorated conference rooms with a capacity of over 60 participants.",
      buttonText: "See the Services & Facilities",
      image:
        "https://ak-d.tripcdn.com/images/220h0u000000jfaopEDFF_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
      link: "/conference-facilities",
    },
    {
      title: "Bars & Restaurants",
      description:
        "Have a good meal in a stylish restaurant, offering a la carte menus with a variety of continental and Ghanaian cuisines.",
      buttonText: "See our Bars & Restaurants",
      image:
        "https://ak-d.tripcdn.com/images/0226s12000ac10l93067E_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
      link: "/bar-restaurants",
    },
    {
      title: "Entertainment & Events",
      description:
        "We specialize in arranging business events. Let us help you dive into your work without a care.",
      buttonText: "Upcoming Events",
      image:
        "https://z-p3-scontent.facc9-1.fna.fbcdn.net/v/t39.30808-6/468509871_1152422166887232_8682565145506772730_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=bfhlqIwuf08Q7kNvgFgMRAR&_nc_zt=23&_nc_ht=z-p3-scontent.facc9-1.fna&_nc_gid=ATPCHe5OiiUWt072O74H0YR&oh=00_AYCPYnh5O0LqHeeh74DisHRBeyW-aW_PNnhFouQ39wv5FA&oe=67514B07",
      link: "/entertainment-events",
    },
  ];

  return (
    <section className="facilities bg-gray-300 py-12 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-6 py-8 text-white group-hover:bg-opacity-75 transition duration-500">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-white">
                {facility.title}
              </h3>
              <p className="text-sm lg:text-base mt-4">
                {facility.description}
              </p>
              <Link
                to={facility.link}
                className="mt-6 bg-transparent border border-[#8537E9] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-black transition duration-300"
              >
                {facility.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
