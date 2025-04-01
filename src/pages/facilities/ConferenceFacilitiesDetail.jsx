import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ConferenceFacilitiesDetail = () => {
  const images = [
    "https://ak-d.tripcdn.com/images/220h0u000000jfaopEDFF_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
    "https://ak-d.tripcdn.com/images/230n0u000000jfbjw1076_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
    "https://ak-d.tripcdn.com/images/240h0u000000jfbrpE6DE_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F",
  ];

  return (
    <section className="conference-detail bg-gray-100 py-12 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Conference Facilities
          </h1>
          <p className="text-gray-600 text-lg">
            Experience a perfect blend of professionalism and comfort in our
            state-of-the-art conference facilities.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Conference Facility ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Conference Facilities?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our conference rooms are equipped with modern amenities, ensuring
            your meetings, workshops, and conferences are conducted seamlessly.
            From high-speed internet and multimedia equipment to comfortable
            seating arrangements, our facilities cater to all your needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re planning a business meeting, a team-building event,
            or a presentation, our spacious and air-conditioned rooms with a
            capacity of over 60 participants provide the perfect environment.
            Additionally, we offer catering services, so your guests can enjoy
            refreshing meals and beverages during breaks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceFacilitiesDetail;
