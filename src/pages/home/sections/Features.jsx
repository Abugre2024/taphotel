import React from "react";
import pic from "../sections/images/pool.jpg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features bg-gray-100 py-12 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 mt-20">
        {/* Text Section */}
        <div className="relax-text text-center lg:text-left">
          <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
            Luxury Resort
          </h3>
          <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold my-4">
            Relax in Our Hotel
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
            Praesent fermentum ligula in dui imperdiet, vel tempus nulla
            ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
            sapien, a dignissim tortor laoreet quis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
          <div className="flex flex-col items-center lg:items-start gap-4 mt-4">
            <Link
              to="/rooms"
              className="relative inline-block px-6 py-3 text-lg font-medium !text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-md group"
            >
              <span className="relative z-10">View Rooms</span>

              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-white opacity-60 blur-md transition-transform transform -translate-x-full group-hover:translate-x-full duration-1000 pointer-events-none"></div>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="image w-full lg:w-1/2">
          <img
            src={pic}
            alt="Luxury Pool"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
