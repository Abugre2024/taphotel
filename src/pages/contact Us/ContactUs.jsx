
const ContactUs = () => {
  return (
    <div>
      <section className="contact-us bg-gray-100 py-12 px-6 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-12 mt-20">
          <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
            Get in Touch
          </h3>
          <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mt-4">
            We’re here to help! Feel free to reach out for inquiries, bookings,
            or feedback.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="contact-info">
            {/* Map */}
            <div className="map mb-8 lg:mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1184745005853!2d-0.8468448258777138!3d10.802237158718983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43c65a3dca6ef%3A0xd50d3ff27f6b9aa!2sTap%20Hotel!5e0!3m2!1sen!2sgh!4v1733001999605!5m2!1sen!2sgh"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Contact Details
              </h3>
              <p className="mb-4">
                <strong>Address:</strong> PLOT 93 Bolga Soe, (Bolgatanga bongo
                road), Bolgatanga, Ghana
              </p>
              <p className="mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@taphotelghana.com"
                  className="text-purple-800 hover:underline"
                >
                  info@taphotelghana.com
                </a>
              </p>
              <p className="mb-4">
                <strong>Phone:</strong>{" "}
                <a
                  href="+23350
              153 0248"
                  className="text-purple-800 hover:underline"
                >
                  +23350 153 0248
                </a>
              </p>

              {/* Social Links */}
              <div className="social-links flex gap-4 mt-6">
                <a
                  href="#"
                  className="text-gray-800 hover:text-purple-800 transition-all"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-purple-800 transition-all"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-purple-800 transition-all"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-purple-800 transition-all"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
