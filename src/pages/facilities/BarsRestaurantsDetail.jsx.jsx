import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const BarsRestaurantsDetail = () => {
  return (
    <>
      <section className="bg-gray-100 py-12 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-500 uppercase tracking-wide">
              Bars & Restaurants
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Experience the perfect blend of style, comfort, and delicious
              cuisine in our bars and restaurants.
            </p>
          </div>

          {/* Image and Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <img
              src="https://ak-d.tripcdn.com/images/0226s12000ac10l93067E_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F"
              alt="Bars and Restaurants"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                A Culinary Journey Awaits You
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Enjoy a wide range of dishes, including continental and Ghanaian
                cuisines, prepared by our expert chefs. Our restaurants provide
                a warm and inviting atmosphere, while our bars offer an array of
                drinks to complement your dining experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Whether you're in the mood for a casual meal or a fine dining
                experience, our facilities cater to all your culinary desires.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
              Features & Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="https://ak-d.tripcdn.com/images/200l0s000000jtvnnF2CC_W_1024_768_R5.jpg"
                  alt="Elegant Ambiance"
                  className="rounded-md mb-4 mx-auto w-32 h-32 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Elegant Ambiance
                </h4>
                <p className="text-gray-600 text-sm">
                  Immerse yourself in a stylish and sophisticated setting.
                </p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="https://ak-d.tripcdn.com/images/200l0k000000j4uwjF2D5_W_1024_768_R5.jpg"
                  alt="Diverse Menus"
                  className="rounded-md mb-4 mx-auto w-32 h-32 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Diverse Menus
                </h4>
                <p className="text-gray-600 text-sm">
                  Choose from a variety of continental and local dishes.
                </p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src="https://ak-d.tripcdn.com/images/200g0s000000jj2msF2D5_W_1024_768_R5.jpg"
                  alt="Refreshing Drinks"
                  className="rounded-md mb-4 mx-auto w-32 h-32 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Refreshing Drinks
                </h4>
                <p className="text-gray-600 text-sm">
                  Savor cocktails, wines, and other beverages at our bar.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">
              Ready to Visit Us?
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              Reserve your table or explore more about our bars and restaurants.
            </p>
            <div className="flex justify-center items-center h-full">
              <Link
                to="/contactus"
                className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-md group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-white opacity-60 blur-md transition-transform transform -translate-x-full group-hover:translate-x-full duration-1000 pointer-events-none"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BarsRestaurantsDetail;
