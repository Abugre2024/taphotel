import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const slides = [
    {
      image: "./src/assets/images/outer.jpg",
      text: "Amazing Services, Location & Facilities",
    },
    {
      image: "./src/assets/images/outer.jpg",
      text: "Amazing Services, Location & Facilities",
    },
    {
      image: "./src/assets/images/outer.jpg",
      text: "Amazing Services, Location & Facilities",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 mt-48">
          LUXURY RESORT
        </h2>
        <h1 className="text-lg lg:text-2xl amazing-text mb-8">
          Amazing Services, Location & Facilities
        </h1>

        {/* Book Your Stay Button */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-6 md:mt-0 ml-5">
          <button className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-md group">
            <span className="relative z-10">Book Your Stay</span>

            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-white opacity-60 blur-md transition-transform transform -translate-x-full group-hover:translate-x-full duration-1000 pointer-events-none"></div>
          </button>
        </div>

        {/* Date & Room Selection */}
        <div className="date flex flex-wrap justify-center items-center gap-4 mt-60">
          <div className="flex flex-col items-start">
            <label
              htmlFor="arrival-date"
              className="text-sm text-gray-200 mb-1"
            >
              Arrival Date
            </label>
            <input
              type="date"
              id="arrival-date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div className="flex flex-col items-start">
            <label
              htmlFor="departure-date"
              className="text-sm text-gray-200 mb-1"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departure-date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="rooms" className="text-sm text-gray-200 mb-1">
              Rooms
            </label>
            <select
              id="rooms"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
              defaultValue=""
              onChange={(e) => console.log(`Rooms selected: ${e.target.value}`)}
            >
              <option value="" disabled>
                Select Rooms
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all">
            View Available Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
