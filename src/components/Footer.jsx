import pic from "../assets/images/TAP Logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Copyright */}
        <div className="text-center md:text-left">
          <img
            src={pic}
            alt="Hotel Logo"
            className="mx-auto md:mx-0 w-24 h-24 rounded-full"
          />
          <p id="copyright" className="mt-4 text-sm text-gray-400">
            Copyright &copy; TAP Hotel. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <nav className="mb-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-gray-400 text-sm">
            Praesent fermentum ligula in dui imperdiet, vel tempus nulla
            ultricies. Phasellus at commodo ligula.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-white">Address:</span> PLOT 93
              Bolga Soe, (Bolgatanga Bongo road), Bolgatanga, Ghana
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span> +23350
              153 0248
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              info@taphotelghana.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
