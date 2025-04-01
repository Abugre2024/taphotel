import React, { useState, useRef, useEffect } from "react";
import pic from "../assets/images/TAP Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-white shadow-md px-6 py-4 md:flex md:items-center md:justify-between"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={pic} alt="Logo" className="w-16 h-16" />
          </Link>
          <button
            className="text-gray-600 text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        <div
          className={`mt-4 md:mt-0 md:flex md:items-center md:justify-between ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex gap-2 items-center">
            {/* <Link to="/" className=" text-gray-800 hover:text-purple-600 ">
            Home
          </Link> */}

            <Link
              to="/rooms"
              className="inline-block text-gray-800 hover:text-purple-600 transition-colors"
            >
              Reservation
            </Link>

            <Link
              to="/about"
              className="inline-block text-gray-800 hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contactus"
              className="inline-block text-gray-800 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/news"
              className="inline-block text-gray-800 hover:text-purple-600 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-6 md:mt-0 ml-5">
            <button className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-md group">
              <span className="relative z-10">Book Your Stay</span>

              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-white opacity-60 blur-md transition-transform transform -translate-x-full group-hover:translate-x-full duration-1000 pointer-events-none"></div>
            </button>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 transition-colors mt-4 md:mt-0"
            >
              Add Your Review
            </a>
          </div>
        </div>
      </nav>
      <div style={{ height: navbarHeight, backgroundColor: "#fff" }} />
    </>
  );
};

export default Navbar;
